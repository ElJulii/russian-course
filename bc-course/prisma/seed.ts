import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcryptjs';
import { PrismaClient } from '../src/generated/prisma/client';
import { defaultPassword, fullName } from '../src/users/names';
import { COURSES, createCourse } from './courses';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// Respuestas de muestra, una por ejercicio de cada bloque.
const ANSWERS = {
  ana: {
    alphabet: [
      'restorán, sájar, niet, vot, sok',
      'такси, паспорт, телефон, метро, кофе',
      'Ана Торрес, Богота',
      'В = v (вот), Н = n (нет), Р = r (ресторан), С = s (сок), Х = ks (сахар), У = u (тут)',
      'А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я. No suenan solas Ъ y Ь: Ь suaviza la consonante anterior y Ъ separa la consonante de la vocal.',
    ],
    pronunciation: [
      'malakO, maskvA, jarashO, aknO, spasIba',
      'хлеб [p], друг [k], город [t], нож [zh], глаз [s]: al final de palabra las sonoras se vuelven sordas.',
      'En мать y брать la т es blanda por el signo ь; en мат y брат es dura.',
      'Это Москва… Esto es Moscú. Moscú es una ciudad grande. Aquí está el metro, aquí el parque y aquí el restaurante. Este es mi amigo Iván. Él es estudiante. ¡Hoy está bien!',
      'Это парк? ¿Es un parque? / Он студент? ¿Él es estudiante? / Это ресторан? ¿Es un restaurante? Solo cambia la entonación: sube el tono.',
    ],
    greetings: [
      'a) Доброе утро! / Здравствуйте! b) Пока! До завтра! c) Извините! d) Пожалуйста. / Не за что.',
      '— Привет! Как дела? — Хорошо, спасибо. А у тебя? — Так себе.',
      '— Здравствуйте, Анна! — Здравствуйте, Игорь! Как вы поживаете? — Хорошо, спасибо. А вы? — Нормально. До свидания! — До свидания! До завтра!',
      '— Добрый вечер, Николай Иванович! — Добрый вечер, Ана! Как дела? — Спасибо, хорошо. А у вас? — Тоже хорошо, спасибо. — До свидания! — Всего хорошего!',
      'ты: con amigos y familia (Привет, как дела? / Как тебя зовут?). вы: con mayores y desconocidos (Здравствуйте! / Как вас зовут?).',
    ],
  },
  luis: {
    alphabet: [
      'restoran, sahar, net, vot, sok',
      'такси, паспорт, телефон, метро, кафе',
      'Луис Мендес, Лима',
      'В = v, Н = n, Р = r, С = s, Х = j, У = u',
      '',
    ],
    pronunciation: [
      'malakó, maskvá, jarashó, aknó, spasíba',
      'Suenan sordas: p, k, t, sh, s.',
      'мать y брать son blandas por el ь.',
      'Это Москва. Москва — большой город… Esto es Moscú. Moscú es una ciudad grande.',
      'Это парк? Он студент? Это ресторан? Cambia el tono de la voz.',
    ],
  },
};

async function main() {
  // El seed borra toda la base y crea cuentas con contraseñas adivinables,
  // incluida una de admin: jamás debe correr contra producción.
  if (process.env.NODE_ENV === 'production') {
    throw new Error('El seed es solo para desarrollo (NODE_ENV=production).');
  }
  await prisma.grade.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.assessment.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  // La contraseña de cada cuenta es su nombre y apellido juntos, en
  // minúsculas y sin tildes (solo para desarrollo).
  const user = async (
    email: string,
    firstName: string,
    lastName: string,
    role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN',
  ) =>
    prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        name: fullName(firstName, lastName),
        role,
        emailVerifiedAt: new Date(),
        passwordHash: await bcrypt.hash(
          defaultPassword(firstName, lastName),
          10,
        ),
      },
    });

  const admin = await user('admin@ruso.dev', 'Admin', 'Plataforma', 'ADMIN');
  const olga = await user('olga@ruso.dev', 'Olga', 'Ivanova', 'INSTRUCTOR');
  const dmitri = await user(
    'dmitri@ruso.dev',
    'Dmitri',
    'Sokolov',
    'INSTRUCTOR',
  );
  const ana = await user('ana@ruso.dev', 'Ana', 'Torres', 'STUDENT');
  const luis = await user('luis@ruso.dev', 'Luis', 'Méndez', 'STUDENT');
  const sofia = await user('sofia@ruso.dev', 'Sofía', 'Rojas', 'STUDENT');

  // Los seis cursos de la plataforma, de A1 a C2.
  const courses: Awaited<ReturnType<typeof createCourse>>[] = [];
  for (const { content, ...data } of COURSES) {
    courses.push(await createCourse(prisma, data, content));
  }
  const [a1, a2] = courses;

  // Cada estudiante elige al inscribirse qué profe lo evalúa.
  const enroll = (
    studentId: string,
    courseId: string,
    evaluatorId: string,
    completedLessons: string[] = [],
  ) =>
    prisma.enrollment.create({
      data: {
        studentId,
        courseId,
        evaluatorId,
        progress: {
          create: completedLessons.map((lessonId) => ({ lessonId })),
        },
      },
    });

  const lessonIds = a1.lessons.map((l) => l.id);
  const anaA1 = await enroll(ana.id, a1.id, olga.id, lessonIds);
  await prisma.enrollment.update({
    where: { id: anaA1.id },
    data: { status: 'COMPLETED', completedAt: new Date() },
  });
  const luisA1 = await enroll(luis.id, a1.id, olga.id, lessonIds.slice(0, 2));
  await enroll(sofia.id, a1.id, dmitri.id);
  await enroll(ana.id, a2.id, dmitri.id);

  // Entregas de muestra: unas ya calificadas y otras esperando al profe.
  const submit = (
    assessmentId: string,
    enrollmentId: string,
    answers: string[],
    graded?: { score: number; feedback: string },
  ) =>
    prisma.$transaction([
      prisma.submission.create({
        data: { assessmentId, enrollmentId, answers },
      }),
      ...(graded
        ? [
            prisma.grade.create({
              data: {
                assessmentId,
                enrollmentId,
                ...graded,
                gradedById: olga.id,
              },
            }),
          ]
        : []),
    ]);

  const [alphabet, pronunciation, greetings] = a1.exercises;
  await submit(alphabet.id, anaA1.id, ANSWERS.ana.alphabet, {
    score: 9,
    feedback: 'Отлично! Solo recuerda que Х suena como la jota, no como "ks".',
  });
  await submit(pronunciation.id, anaA1.id, ANSWERS.ana.pronunciation, {
    score: 8.5,
    feedback:
      'Muy bien la reducción de vocales. Repasa el ensordecimiento: нож termina en [sh].',
  });
  await submit(greetings.id, anaA1.id, ANSWERS.ana.greetings);
  await submit(alphabet.id, luisA1.id, ANSWERS.luis.alphabet, {
    score: 6,
    feedback: 'Repasa Ш / Щ y los signos Ъ / Ь; te faltó el último ejercicio.',
  });
  await submit(pronunciation.id, luisA1.id, ANSWERS.luis.pronunciation);

  console.log('Seed listo. La contraseña es nombre y apellido juntos:');
  console.table(
    [admin, olga, dmitri, ana, luis, sofia].map((u) => ({
      email: u.email,
      rol: u.role,
      contraseña: defaultPassword(u.firstName, u.lastName),
    })),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
