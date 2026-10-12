import type { CourseContent } from './course-content';

// Temario A1 (equivalente a ТЭУ): leer y escribir en cirílico, presentarse,
// hablar de la familia, la ciudad, la comida y la rutina en presente y pasado.
export const A1: CourseContent = {
  lessons: [
    {
      title: 'El alfabeto cirílico (Алфавит)',
      durationMinutes: 50,
      content: `El ruso se escribe con 33 letras. Buena noticia: casi siempre se lee como se escribe. Apréndelas por grupos.

1. AMIGAS: se ven y suenan como en español
А а (a) · К к (k) · М м (m) · О о (o) · Т т (t)
Ya puedes leer: мама (mamá), кот (gato), там (allí), как (cómo), атом.

2. FALSAS AMIGAS: se parecen a letras latinas pero suenan distinto
В в = v · Н н = n · Р р = r (vibrante, como en "pero") · С с = s · У у = u · Х х = j (como en "jamón") · Е е = ye
Lee: нет (no), вот (aquí está), он (él), она (ella), сок (jugo), ресторан, метро, сахар (azúcar).

3. LETRAS NUEVAS CON SONIDOS CONOCIDOS
Б б = b · Г г = g (siempre como en "gato") · Д д = d · З з = z sonora (como un zumbido) · И и = i · Й й = i breve (como la y de "hoy") · Л л = l · П п = p · Ф ф = f · Э э = e · Ю ю = yu · Я я = ya · Ё ё = yo (siempre acentuada)
Lee: да (sí), дом (casa), банк, парк, кафе, лампа, я (yo), мой (mi), это (esto), юбка (falda), ёлка (abeto).

4. SONIDOS NUEVOS
Ж ж = como la j francesa de "bonjour" · Ш ш = sh · Щ щ = sh larga y suave · Ч ч = ch · Ц ц = ts · Ы ы = una i pronunciada con la lengua atrás (entre i y u)
Lee: журнал (revista), школа (escuela), борщ, чай (té), центр, ты (tú), мы (nosotros), сын (hijo).

5. LOS DOS SIGNOS: no suenan solos
Ь (signo blando) suaviza la consonante anterior: мать (madre), день (día), семь (siete).
Ъ (signo duro) separa consonante y vocal: объект, подъезд (portal).

EL ORDEN DEL ALFABETO
А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я

PALABRAS INTERNACIONALES PARA PRACTICAR
такси, паспорт, телефон, кофе, музыка, театр, студент, компьютер, футбол, аэропорт, Москва, Россия, Мексика, Колумбия, Испания.

CONSEJO: escribe a mano cada letra diez veces mientras la dices en voz alta. Leer cirílico con fluidez toma una o dos semanas de práctica diaria.`,
      exercises: [
        'Escribe con letras latinas cómo suenan estas palabras: ресторан, сахар, нет, вот, сок.',
        'Escribe en cirílico estas palabras internacionales: taxi, pasaporte (passport), teléfono, metro, café (la bebida).',
        'Escribe tu nombre y tu ciudad en cirílico.',
        '¿Qué sonido tiene cada letra? В, Н, Р, С, Х, У. Da una palabra rusa de ejemplo para cada una.',
        'Copia el alfabeto completo en orden y marca las letras que no suenan solas. Explica para qué sirve cada una.',
      ],
    },
    {
      title: 'Pronunciación: acento, vocales y consonantes',
      durationMinutes: 45,
      content: `EL ACENTO (ударение)
Cada palabra rusa tiene una sola sílaba fuerte y no se marca al escribir: hay que aprenderla con la palabra. Aquí la marcamos en MAYÚSCULA.
мАма · водА (agua) · спасИбо (gracias) · хорошО (bien)
El acento puede cambiar el significado: зАмок (castillo) / замОк (cerradura).

LA REDUCCIÓN DE VOCALES
Las vocales sin acento se pronuncian más cortas y cambian:
· О sin acento suena casi como "a": молокО (leche) se dice [malakO], МосквА se dice [maskvA], окнО (ventana) se dice [aknO].
· Е y Я sin acento suenan casi como "i": рекА (río) se dice [rikA], язЫк (lengua) se dice [yizYk].
La ortografía no cambia: se escribe молоко aunque se oiga "malakó".

CONSONANTES DURAS Y BLANDAS
Casi toda consonante tiene dos versiones. Es blanda (palatalizada, como añadiendo una "i" muy breve) cuando va seguida de я, е, ё, ю, и o de ь.
мат (dura) / мать (blanda, "madre") · лук (cebolla) / люк (escotilla) · брат (hermano) / брать (tomar)

ENSORDECIMIENTO FINAL
Al final de palabra las consonantes sonoras suenan sordas:
б→п: хлеб (pan) [jlep] · в→ф: Иванов [ivanOf] · г→к: друг (amigo) [druk] · д→т: город (ciudad) [gOrat] · ж→ш: нож (cuchillo) [nosh] · з→с: глаз (ojo) [glas]

COMBINACIONES ÚTILES
· что (qué) se dice [shto]; конечно (claro) se dice [kanYEshna].
· La г en его, сегодня y -ого se dice "v": сегодня (hoy) [sivOdnia].
· жи, ши se escriben con и pero suenan con ы: машина (carro) [mashYna].

LA ENTONACIÓN HACE LA PREGUNTA
El orden de palabras no cambia; sube el tono en la palabra clave.
Это дом. (Es una casa.) / Это дом? (¿Es una casa?)

LECTURA
Это Москва. Москва — большой город. Вот метро, вот парк, а вот ресторан. Это мой друг Иван. Он студент. Сегодня хорошо!`,
      exercises: [
        'Escribe cómo se pronuncian realmente (con letras latinas y la sílaba fuerte en mayúscula): молоко, Москва, хорошо, окно, спасибо.',
        '¿Cómo suena la última consonante de estas palabras y por qué? хлеб, друг, город, нож, глаз.',
        'Explica la diferencia de pronunciación entre мат y мать, y entre брат y брать.',
        'Copia la lectura final de la lección y tradúcela al español.',
        'Convierte en pregunta y traduce: Это парк. / Он студент. / Это ресторан. Explica qué cambia al decirlas.',
      ],
    },
    {
      title: 'Saludos, despedidas y cortesía',
      durationMinutes: 40,
      content: `TÚ Y USTED
ты = tú (amigos, familia, niños) · вы = usted y también "ustedes". Con desconocidos, mayores y en el trabajo usa siempre вы.

SALUDAR
Привет! — ¡Hola! (informal)
Здравствуй! — ¡Hola! (a una persona de ты)
Здравствуйте! — ¡Hola! / Buenos días (formal o a varios). La primera в no se pronuncia: [zdrAstvuytie].
Доброе утро! — Buenos días (por la mañana)
Добрый день! — Buenas tardes (durante el día)
Добрый вечер! — Buenas noches (al llegar, por la tarde-noche)

DESPEDIRSE
До свидания! — Adiós (formal) · Пока! — Chao · До завтра! — Hasta mañana · До встречи! — Nos vemos · Спокойной ночи! — Buenas noches (al irse a dormir) · Всего хорошего! — Que le vaya bien

¿CÓMO ESTÁS?
Как дела? — ¿Cómo estás? / ¿Cómo va todo?
Как вы поживаете? — ¿Cómo está usted?
Отлично! (excelente) · Хорошо (bien) · Нормально (normal) · Так себе (más o menos) · Плохо (mal)
А у тебя? / А у вас? — ¿Y tú? / ¿Y usted?

CORTESÍA
Спасибо. — Gracias. · Большое спасибо! — ¡Muchas gracias!
Пожалуйста. — Por favor / De nada. Se dice [pazhAlusta].
Не за что. — No hay de qué.
Извините! (formal) / Извини! (informal) — Disculpe / Disculpa.
Простите. — Perdone.
Ничего. — No pasa nada.
Да / Нет — Sí / No.
Я не понимаю. — No entiendo.
Повторите, пожалуйста. — Repita, por favor.
Говорите медленнее, пожалуйста. — Hable más despacio, por favor.

DIÁLOGO 1 (informal)
— Привет, Анна!
— Привет, Игорь! Как дела?
— Хорошо, спасибо. А у тебя?
— Нормально. Пока!
— Пока! До завтра!

DIÁLOGO 2 (formal)
— Здравствуйте, Иван Петрович!
— Добрый день, Мария! Как вы поживаете?
— Спасибо, отлично. А вы?
— Тоже хорошо. До свидания!

NOTA CULTURAL: en situaciones formales los rusos se llaman por nombre y patronímico (el nombre del padre + -ович / -овна): Иван Петрович, Анна Сергеевна.`,
      exercises: [
        '¿Qué dices en ruso en cada situación? a) Llegas a clase a las 9 de la mañana y saludas a la profesora. b) Te despides de un amigo hasta mañana. c) Pisas a alguien en el metro. d) Te dan las gracias.',
        'Traduce al ruso: —¡Hola! ¿Cómo estás? —Bien, gracias. ¿Y tú? —Más o menos.',
        'Reescribe el diálogo 1 en registro formal (con вы).',
        'Escribe un diálogo de 6 líneas entre tú y tu vecino mayor, el señor Николай Иванович, por la tarde.',
        'Explica cuándo se usa ты y cuándo вы, con dos ejemplos de cada uno.',
      ],
    },
    {
      title: 'Presentarse: Меня зовут… Кто это? Что это?',
      durationMinutes: 50,
      content: `LOS PRONOMBRES PERSONALES
я (yo) · ты (tú) · он (él) · она (ella) · оно (ello, neutro) · мы (nosotros) · вы (usted, ustedes) · они (ellos, ellas)

EN PRESENTE NO SE DICE "SER"
Я студент. — Soy estudiante. · Она врач. — Ella es médica. · Мы друзья. — Somos amigos.
Entre dos sustantivos se escribe una raya: Москва — столица России (Moscú es la capital de Rusia).
Tampoco hay artículos: дом significa "casa", "la casa" o "una casa".

DECIR EL NOMBRE
Как тебя зовут? / Как вас зовут? — ¿Cómo te llamas? / ¿Cómo se llama usted?
Меня зовут Ана. — Me llamo Ana. (literalmente: "a mí me llaman Ana")
Его зовут Иван. — Él se llama Iván. · Её зовут Мария. — Ella se llama María.
Очень приятно! — ¡Mucho gusto!

КТО ЭТО? ЧТО ЭТО?
Кто это? — ¿Quién es? (personas y animales) → Это Анна. Это мой друг.
Что это? — ¿Qué es? (cosas) → Это книга. Это телефон.
Это no cambia: Это стол. Это лампа. Это студенты.
Это Иван? — Да, это Иван. / Нет, это не Иван, это Олег.
La negación es не delante de lo que se niega: Я не врач.

PROFESIONES
студент / студентка (estudiante) · учитель / учительница (maestro, maestra) · врач (médico) · инженер · программист · журналист / журналистка · менеджер · повар (cocinero) · водитель (conductor) · продавец (vendedor) · пенсионер / пенсионерка (jubilado)
Кто вы по профессии? — ¿Cuál es su profesión? → Я инженер.

DE DÓNDE ERES
Откуда ты? / Откуда вы? — ¿De dónde eres? / ¿De dónde es usted?
Я из Колумбии. · Я из Мексики. · Я из Испании. · Я из Аргентины. · Я из Перу. · Я из Чили. · Он из России.
(Tras из el país cambia de terminación; por ahora memoriza la frase de tu país.)

NACIONALIDADES
русский / русская (ruso, rusa) · испанец / испанка · мексиканец / мексиканка · колумбиец / колумбийка · аргентинец / аргентинка

И, А, НО
и = y · а = y / en cambio (contraste) · но = pero · тоже = también
Я студент, а он врач. — Yo soy estudiante y él, médico. · Я тоже студент.

DIÁLOGO
— Здравствуйте! Меня зовут Олег. А как вас зовут?
— Меня зовут Лусия. Очень приятно!
— Очень приятно. Откуда вы?
— Я из Колумбии. А вы?
— Я из России, из Москвы. Вы студентка?
— Нет, я не студентка. Я журналистка. А кто вы по профессии?
— Я программист.`,
      exercises: [
        'Preséntate por escrito en ruso: saludo, nombre, país, profesión u ocupación (mínimo 4 frases).',
        'Traduce al ruso: Él se llama Dmitri. Es ingeniero. Ella se llama Olga. No es estudiante, es maestra.',
        'Responde con frases completas: Кто это? (tu mejor amigo) / Что это? (tres objetos que tengas cerca).',
        'Completa con и, а o но: Я студент, ___ она врач. / Это Анна ___ Иван. / Он русский, ___ живёт в Мексике.',
        'Escribe las preguntas para estas respuestas: Меня зовут Игорь. / Я из Перу. / Нет, я не врач. / Это мой телефон.',
      ],
    },
    {
      title: 'El género y los posesivos',
      durationMinutes: 50,
      content: `TRES GÉNEROS
Todo sustantivo ruso es masculino, femenino o neutro, y se reconoce por la última letra.
· MASCULINO (он): termina en consonante o en -й → стол (mesa), дом, брат, музей, чай
· FEMENINO (она): termina en -а o -я → мама, книга (libro), машина, семья (familia), неделя (semana)
· NEUTRO (оно): termina en -о o -е → окно, письмо (carta), молоко, море (mar), кафе

LAS PALABRAS EN -Ь pueden ser masculinas o femeninas; se aprenden una a una:
masculinas: день (día), учитель, словарь (diccionario), рубль, гость (invitado)
femeninas: ночь (noche), дочь (hija), мать, дверь (puerta), тетрадь (cuaderno), площадь (plaza)

EXCEPCIONES FRECUENTES
папа (papá), дядя (tío), дедушка (abuelo), мужчина (hombre) terminan en -а / -я pero son masculinos.
кофе es masculino. время (tiempo) e имя (nombre) terminan en -мя y son neutros.

ГДЕ…? → ВОТ ОН / ОНА / ОНО
Где телефон? — Вот он. · Где книга? — Вот она. · Где письмо? — Вот оно. · Где ключи? — Вот они.

LOS POSESIVOS concuerdan con lo poseído, no con el dueño:
            masc.    fem.    neutro    plural
mi          мой      моя     моё      мои
tu          твой     твоя    твоё     твои
nuestro     наш      наша    наше     наши
su (de вы)  ваш      ваша    ваше     ваши
его (de él), её (de ella) e их (de ellos) NO cambian nunca: его дом, его мама, его письмо.

Чей? Чья? Чьё? Чьи? — ¿De quién?
Чей это телефон? — Это мой телефон.
Чья это сумка? — Это её сумка. (bolso)
Чьё это место? — Это ваше место. (sitio)
Чьи это ключи? — Это наши ключи. (llaves)

ЭТОТ, ЭТА, ЭТО, ЭТИ (este, esta, esto, estos)
этот дом · эта книга · это окно · эти книги
Ojo: "Это книга" (Esto es un libro) / "Эта книга моя" (Este libro es mío).

VOCABULARIO: COSAS DE TODOS LOS DÍAS
стол (mesa) · стул (silla) · ручка (bolígrafo) · карандаш (lápiz) · сумка · ключ · телефон · компьютер · книга · тетрадь · словарь · окно · дверь · комната (habitación) · квартира (apartamento) · паспорт · деньги (dinero, siempre plural)`,
      exercises: [
        'Clasifica por género (он, она, оно): стол, книга, окно, день, ночь, папа, кофе, море, семья, музей, время, тетрадь.',
        'Completa con мой, моя, моё o мои: ___ брат, ___ мама, ___ письмо, ___ ключи, ___ словарь, ___ квартира.',
        'Responde con Вот он / она / оно / они: Где паспорт? Где сумка? Где молоко? Где деньги? Где дверь?',
        'Haz la pregunta con Чей / Чья / Чьё / Чьи y respóndela: (телефон, él) / (машина, nosotros) / (место, usted) / (книги, ella).',
        'Traduce al ruso: Este es mi cuarto. Esta mesa es nuestra. ¿Dónde está tu cuaderno? Su (de ella) papá es médico.',
      ],
    },
    {
      title: 'Los números, la edad y los precios',
      durationMinutes: 45,
      content: `DEL 0 AL 10
0 ноль · 1 один · 2 два · 3 три · 4 четыре · 5 пять · 6 шесть · 7 семь · 8 восемь · 9 девять · 10 десять

DEL 11 AL 19: número + -надцать
11 одиннадцать · 12 двенадцать · 13 тринадцать · 14 четырнадцать · 15 пятнадцать · 16 шестнадцать · 17 семнадцать · 18 восемнадцать · 19 девятнадцать

LAS DECENAS
20 двадцать · 30 тридцать · 40 сорок · 50 пятьдесят · 60 шестьдесят · 70 семьдесят · 80 восемьдесят · 90 девяносто · 100 сто
Los compuestos se dicen en orden, sin "y": 21 двадцать один · 35 тридцать пять · 99 девяносто девять.

CENTENAS Y MIL
200 двести · 300 триста · 400 четыреста · 500 пятьсот · 1000 тысяча · 2000 две тысячи

UNO Y DOS TIENEN GÉNERO
один брат · одна сестра · одно окно
два брата, два окна · две сестры

LA EDAD
Сколько тебе лет? / Сколько вам лет? — ¿Cuántos años tienes? / ¿Cuántos años tiene usted?
Мне двадцать лет. — Tengo 20 años. (literalmente: "a mí 20 años")
La palabra "año" cambia según el número:
· terminado en 1 (salvo 11) → год: Мне двадцать один год.
· terminado en 2, 3, 4 (salvo 12–14) → года: Ему тридцать два года.
· todos los demás → лет: Ей восемнадцать лет. Мне сорок лет.
мне (a mí) · тебе (a ti) · ему (a él) · ей (a ella) · нам (a nosotros) · вам (a usted) · им (a ellos)

LOS PRECIOS
Сколько это стоит? — ¿Cuánto cuesta esto?
Сколько стоит кофе? — Кофе стоит сто пятьдесят рублей.
Сколько стоят билеты? — ¿Cuánto cuestan los boletos? (plural: стоят)
La moneda funciona igual que "año": 1 рубль · 2, 3, 4 рубля · 5 o más рублей.
Это дорого. — Es caro. · Это недорого. — No es caro. · Это дёшево. — Es barato.

EL TELÉFONO
Какой у тебя номер телефона? — ¿Cuál es tu número de teléfono?
Мой номер: восемь, девятьсот шестнадцать, пять, пять, пять, ноль, один, два, три.

SUMAR Y RESTAR
Два плюс три — пять. · Десять минус четыре — шесть. · Сколько будет семь плюс восемь? — Пятнадцать.`,
      exercises: [
        'Escribe con letras en ruso: 7, 12, 19, 24, 40, 58, 90, 100, 365, 1000.',
        'Resuelve y escribe todo con letras: 8 + 9 = ? / 30 − 14 = ? / 50 + 50 = ? / 21 − 2 = ?',
        'Completa con год, года o лет: Мне 21 ___. Ему 34 ___. Ей 15 ___. Вам 40 ___. Ему 12 ___. Ей 63 ___.',
        'Responde con frases completas: Сколько тебе лет? Сколько лет твоей маме (o a un amigo)? Какой у тебя номер телефона? (puedes inventarlo)',
        'Escribe un diálogo corto en una tienda: preguntas el precio de un libro y de dos boletos, te responden y dices si es caro o barato.',
      ],
    },
    {
      title: 'El presente de los verbos',
      durationMinutes: 60,
      content: `El infinitivo ruso termina casi siempre en -ть. En presente hay dos conjugaciones.

PRIMERA CONJUGACIÓN (verbos en -ать, -ять, -еть): se quita -ть y se añade
я -ю · ты -ешь · он/она -ет · мы -ем · вы -ете · они -ют
читать (leer): я читаю · ты читаешь · он читает · мы читаем · вы читаете · они читают
Igual: работать (trabajar), знать (saber, conocer), делать (hacer), понимать (entender), слушать (escuchar), играть (jugar, tocar), отдыхать (descansar), думать (pensar), изучать (estudiar una materia), гулять (pasear), завтракать (desayunar), обедать (almorzar), ужинать (cenar).

SEGUNDA CONJUGACIÓN (casi todos los verbos en -ить): se quita -ить y se añade
я -ю (-у) · ты -ишь · он/она -ит · мы -им · вы -ите · они -ят (-ат)
говорить (hablar): я говорю · ты говоришь · он говорит · мы говорим · вы говорите · они говорят
Igual: смотреть (mirar, ver): я смотрю, ты смотришь… они смотрят · учить (aprender): я учу, ты учишь… они учат · курить (fumar) · звонить (llamar por teléfono).
En algunos verbos la forma я cambia la consonante:
любить (amar, gustar): я люблю, ты любишь… · готовить (cocinar): я готовлю, ты готовишь… · сидеть (estar sentado): я сижу, ты сидишь…

VERBOS IRREGULARES IMPRESCINDIBLES
жить (vivir): я живу · ты живёшь · он живёт · мы живём · вы живёте · они живут
писать (escribir): я пишу · ты пишешь · он пишет · мы пишем · вы пишете · они пишут
хотеть (querer): я хочу · ты хочешь · он хочет · мы хотим · вы хотите · они хотят
мочь (poder): я могу · ты можешь · он может · мы можем · вы можете · они могут
есть (comer): я ем · ты ешь · он ест · мы едим · вы едите · они едят
пить (beber): я пью · ты пьёшь · он пьёт · мы пьём · вы пьёте · они пьют

UN SOLO PRESENTE
Я читаю significa "leo" y también "estoy leyendo".

NEGAR Y PREGUNTAR
Я не работаю. — No trabajo. · Ты понимаешь? — ¿Entiendes? · Что ты делаешь? — ¿Qué haces?

HABLAR IDIOMAS
Я говорю по-русски. — Hablo ruso. · по-испански · по-английски
Вы говорите по-русски? — Да, немного. (un poco) / Я плохо говорю по-русски. / Я хорошо понимаю, но плохо говорю.
Я изучаю русский язык. — Estudio la lengua rusa.

DOS VERBOS SEGUIDOS: el segundo va en infinitivo
Я люблю читать. — Me gusta leer. · Я хочу отдыхать. · Я не могу работать.

ADVERBIOS DE FRECUENCIA
всегда (siempre) · часто (a menudo) · иногда (a veces) · редко (rara vez) · никогда не (nunca) · каждый день (cada día) · сейчас (ahora) · утром (por la mañana) · днём (por la tarde) · вечером (por la noche)

TEXTO
Меня зовут Антон. Я живу в Москве и работаю в банке. Утром я завтракаю и читаю новости. Днём я работаю, а вечером отдыхаю: смотрю фильмы или гуляю. Моя жена Лена не работает, она студентка. Она изучает испанский язык и уже хорошо говорит по-испански. Мы любим готовить вместе.`,
      exercises: [
        'Conjuga en las seis personas: работать, смотреть, жить.',
        'Completa con la forma correcta: Я ___ (читать) книгу. Ты ___ (говорить) по-русски? Они ___ (жить) в Мадриде. Мы не ___ (понимать). Вы ___ (хотеть) чай? Она ___ (писать) письмо.',
        'Responde sobre el texto con frases completas: Где работает Антон? Что он делает вечером? Что изучает Лена? Что они любят делать вместе?',
        'Traduce al ruso: Hablo español y un poco de ruso. Mi hermano no trabaja, estudia. ¿Qué haces por la noche? Nos gusta pasear.',
        'Escribe 6 frases sobre lo que haces por la mañana, por la tarde y por la noche, usando al menos tres adverbios de frecuencia.',
      ],
    },
    {
      title: 'El plural y los adjetivos',
      durationMinutes: 50,
      content: `EL PLURAL DE LOS SUSTANTIVOS
· Masculinos en consonante y femeninos en -а → -ы: стол → столы · студент → студенты · машина → машины · комната → комнаты
· Después de г, к, х, ж, ш, щ, ч nunca se escribe ы, sino -и: книга → книги · парк → парки · нож → ножи · девушка → девушки
· Terminados en -й, -ь, -я → -и: музей → музеи · словарь → словари · ночь → ночи · неделя → недели
· Neutros: -о → -а y -е → -я: окно → окна · письмо → письма · море → моря

PLURALES IRREGULARES MUY FRECUENTES
дом → дома · город → города · друг → друзья · брат → братья · сестра → сёстры · стул → стулья · сын → сыновья · мать → матери · дочь → дочери · человек (persona) → люди · ребёнок (niño) → дети · глаз → глаза
Solo existen en plural: деньги (dinero), часы (reloj), очки (gafas), брюки (pantalones).

LOS ADJETIVOS concuerdan en género y número con el sustantivo
            masc.     fem.     neutro    plural
nuevo       новый     новая    новое     новые
grande      большой   большая  большое   большие
bueno       хороший   хорошая  хорошее   хорошие
Какой? Какая? Какое? Какие? — ¿Qué? / ¿Cómo es?
Какой это город? — Это большой город. · Какая это машина? — Это новая машина.

PAREJAS DE OPUESTOS
новый / старый (nuevo / viejo) · большой / маленький (grande / pequeño) · хороший / плохой (bueno / malo) · красивый / некрасивый (bonito / feo) · дорогой / дешёвый (caro / barato) · интересный / скучный (interesante / aburrido) · молодой / старый (joven / viejo) · горячий / холодный (caliente / frío) · трудный / лёгкий (difícil / fácil) · быстрый / медленный (rápido / lento) · добрый / злой (bondadoso / malvado)

LOS COLORES
белый (blanco) · чёрный (negro) · красный (rojo) · синий (azul oscuro) · голубой (azul claro) · зелёный (verde) · жёлтый (amarillo) · серый (gris) · коричневый (marrón)
Какого цвета машина? — Машина красная.

MUY, BASTANTE
очень (muy) · не очень (no muy) · слишком (demasiado)
Это очень интересная книга. · Этот фильм не очень хороший.

TEXTO
Это наша квартира. Она небольшая, но очень красивая. Вот большая комната: здесь новый диван, старый стол и белые стулья. А это маленькая кухня. Окна большие, а двери синие. Наши соседи — хорошие и добрые люди.`,
      exercises: [
        'Escribe el plural: стол, книга, окно, музей, друг, человек, ребёнок, город, сестра, письмо, словарь, дом.',
        'Completa con la forma correcta del adjetivo: ___ (новый) машина, ___ (большой) окно, ___ (хороший) друзья, ___ (красный) стол, ___ (старый) книги, ___ (маленький) кафе.',
        'Escribe lo contrario: Это большой город. / Это старая машина. / Это дешёвые билеты. / Это трудное слово.',
        'Haz la pregunta con Какой / Какая / Какое / Какие para cada frase: Это красивый парк. / Это интересная книга. / Это холодное молоко. / Это новые студенты.',
        'Describe tu casa o tu habitación en 5 o 6 frases, con al menos seis adjetivos y dos colores.',
      ],
    },
    {
      title: '¿Dónde? El caso preposicional y la ciudad',
      durationMinutes: 55,
      content: `LOS CASOS
En ruso el sustantivo cambia de terminación según su función en la frase. Hay seis casos. La forma del diccionario es el NOMINATIVO (el sujeto). El primero que aprendemos es el PREPOSICIONAL, que responde a Где? (¿dónde?).

CÓMO SE FORMA: casi siempre con -е
· consonante + е: город → в городе · парк → в парке · стол → на столе
· -а / -я → -е: Москва → в Москве · школа → в школе · кухня → на кухне
· -о → -е: письмо → в письме · окно → на окне
· femeninos en -ь y palabras en -ия, -ие → -и: площадь → на площади · Россия → в России · Испания → в Испании · Колумбия → в Колумбии · здание (edificio) → в здании
· Palabras extranjeras en -о, -е, -и, -у no cambian: в метро, в кафе, в такси, в Перу, в Чили.
· Algunos masculinos cortos llevan -у acentuada: в лесу (en el bosque), в саду (en el jardín), на мосту (en el puente), в аэропорту, в шкафу (en el armario), на полу (en el piso).

В O НА
в = dentro de: в доме, в школе, в магазине, в банке, в театре, в ресторане, в России
на = sobre una superficie: на столе, на улице (en la calle), на площади
на también con actividades y algunos lugares que hay que memorizar: на работе (en el trabajo), на уроке (en clase), на концерте, на стадионе, на вокзале (en la estación), на почте (en el correo), на рынке (en el mercado), на заводе (en la fábrica), на юге / на севере (en el sur / el norte).
Especial: дома = en casa (sin preposición). Я дома.

VERBOS QUE LO PIDEN
жить: Я живу в Боготе. · работать: Он работает в больнице. · учиться (estudiar en un lugar): я учусь, ты учишься, он учится, мы учимся, вы учитесь, они учатся → Я учусь в университете. · быть / находиться: Музей находится в центре.

HABLAR DE ALGO: О + PREPOSICIONAL
О чём ты думаешь? — Я думаю о работе. · Мы говорим о Москве. · книга о России
Los pronombres: обо мне (sobre mí) · о тебе · о нём · о ней · о нас · о вас · о них

LA CIUDAD
город · улица (calle) · площадь (plaza) · центр · магазин (tienda) · аптека (farmacia) · больница (hospital) · школа · университет · библиотека · банк · почта · музей · театр · кинотеатр · ресторан · кафе · гостиница (hotel) · вокзал · аэропорт · остановка (parada) · станция метро · парк · рынок · церковь (iglesia)

UBICAR
здесь / тут (aquí) · там (allí) · слева (a la izquierda) · справа (a la derecha) · прямо (derecho) · рядом (al lado) · далеко (lejos) · недалеко / близко (cerca) · в центре
Скажите, пожалуйста, где находится аптека? — Аптека находится на улице Пушкина, рядом с банком.

TEXTO
Я живу в Санкт-Петербурге, в центре, на улице Ленина. Мой дом находится рядом с парком. Я работаю в библиотеке, а моя сестра учится в университете. Вечером мы часто гуляем в парке или сидим в кафе на площади и говорим о жизни.`,
      exercises: [
        'Pon en preposicional con в o на: (Москва), (школа), (стол), (Россия), (работа), (метро), (улица), (сад), (площадь), (Колумбия).',
        'Responde con frases completas: Где ты живёшь? Где ты работаешь или учишься? Где живёт твоя семья? Где ты отдыхаешь вечером?',
        'Completa con в o на y la terminación: Книга ___ стол__. Мы ___ урок__. Дети ___ парк__. Она работает ___ почт__. Они живут ___ Испани__.',
        'Traduce al ruso: Vivo en el centro. El hotel está en la plaza. Pensamos en ti. ¿De qué hablan ellos? Hablan del trabajo.',
        'Describe tu ciudad o tu barrio en 6 frases: qué hay y dónde está cada cosa (usa слева, справа, рядом, далеко, в центре).',
      ],
    },
    {
      title: 'El acusativo: comida, gustos y adónde vas',
      durationMinutes: 60,
      content: `EL ACUSATIVO marca el objeto directo: responde a Что? (¿qué?) y Кого? (¿a quién?).

CÓMO SE FORMA
· Masculinos inanimados y neutros: NO cambian. Я читаю журнал. Я пью молоко. Я вижу дом.
· Femeninos: -а → -у, -я → -ю. книга → Я читаю книгу. · вода → Я пью воду. · Мария → Я знаю Марию. · неделя → неделю
· Femeninos en -ь: no cambian. Я открываю дверь. (abro la puerta)
· Masculinos animados (personas y animales): + -а / -я. брат → Я вижу брата. · Иван → Я знаю Ивана. · учитель → Я слушаю учителя.
· Plural inanimado: igual al nominativo. Я читаю книги.

LOS PRONOMBRES EN ACUSATIVO
меня (me) · тебя (te) · его (lo) · её (la) · нас (nos) · вас (lo/la a usted, los a ustedes) · их (los, las)
Я тебя люблю. — Te quiero. · Ты меня понимаешь? · Я его не знаю.

VERBOS FRECUENTES CON ACUSATIVO
читать, писать, знать, любить, смотреть, слушать, понимать, делать, есть, пить, хотеть, готовить, видеть (ver: я вижу, ты видишь), покупать (comprar), ждать (esperar: я жду, ты ждёшь), изучать.

COMIDA Y BEBIDA
хлеб (pan) · сыр (queso) · мясо (carne) · рыба (pescado) · курица (pollo) · суп · салат · рис · картошка (papa) · овощи (verduras) · фрукты · яблоко (manzana) · яйцо (huevo) · масло (mantequilla) · каша (avena, papilla) · пицца · торт · мороженое (helado)
вода · чай · кофе · сок · молоко · пиво (cerveza) · вино
завтрак (desayuno) · обед (almuerzo) · ужин (cena)
Что ты ешь на завтрак? — На завтрак я ем кашу и пью кофе.

LOS GUSTOS
Я люблю рыбу. — Me gusta el pescado. · Я не люблю молоко. · Я очень люблю музыку.
Я люблю + infinitivo: Я люблю готовить.

EN EL CAFÉ
— Здравствуйте! Что вы хотите?
— Дайте, пожалуйста, суп, салат и воду. (Deme, por favor…)
— Что ещё? (¿Algo más?)
— Ещё чай и пиццу, пожалуйста.
— Пожалуйста. Приятного аппетита!
— Спасибо. Счёт, пожалуйста. (La cuenta, por favor.)
Можно меню? — ¿Me da la carta? · Я буду кофе. — Voy a tomar café. · Очень вкусно! — ¡Muy rico!

ADÓNDE VAS: КУДА? + В / НА + ACUSATIVO
Где? pide preposicional (estar); Куда? pide acusativo (ir hacia).
Где ты? — Я в школе. / Куда ты идёшь? — Я иду в школу.
идти (ir a pie, ahora): я иду · ты идёшь · он идёт · мы идём · вы идёте · они идут
ехать (ir en transporte, ahora): я еду · ты едешь · он едет · мы едем · вы едете · они едут
Я иду в магазин. · Мы идём на работу. · Она едет в Москву. · Они едут на море.
Especial: домой = a casa. Я иду домой.
Куда вы идёте? — Мы идём в кино.`,
      exercises: [
        'Pon la palabra entre paréntesis en acusativo: Я читаю (книга). Мы пьём (вода). Он знает (Иван). Ты видишь (сестра)? Я жду (друг). Она покупает (хлеб) и (рыба).',
        'Sustituye el nombre por un pronombre: Я знаю Анну. / Мы слушаем учителя. / Ты видишь студентов? / Он любит Марию и Олега.',
        'Completa con Где o Куда y responde usando la palabra dada: ___ ты идёшь? (магазин) / ___ ты работаешь? (банк) / ___ они едут? (Москва) / ___ живёт Анна? (Москва).',
        'Escribe un diálogo en un café (mínimo 8 líneas): saludas, pides algo de comer y de beber, preguntas el precio y pides la cuenta.',
        'Escribe 6 frases sobre lo que comes y bebes en el desayuno, el almuerzo y la cena, y dos cosas que no te gustan.',
      ],
    },
    {
      title: 'У меня есть… La familia',
      durationMinutes: 50,
      content: `TENER EN RUSO
No se usa un verbo "tener", sino la construcción У + persona + есть + lo que se tiene (en nominativo).
У меня есть брат. — Tengo un hermano. (literalmente: "junto a mí hay un hermano")
у меня · у тебя · у него (él) · у неё (ella) · у нас · у вас · у них
У тебя есть машина? — Да, есть. / Нет.
У Анны есть сестра. · У Ивана есть собака. (Con nombres: -а tras consonante, -ы / -и en lugar de -а / -я. Es el genitivo, que se estudia a fondo en A2.)

CUÁNDO SE OMITE есть
Cuando no importa si se tiene, sino cómo es o cuánto: У меня большая семья. · У неё красивые глаза. · У меня два брата.

NO TENER: У меня нет + genitivo
· Masculinos y neutros: + -а / -я → У меня нет брата. У него нет телефона. У нас нет времени. (irregular: время → времени)
· Femeninos: -а → -ы (o -и tras г, к, х, ж, ш, щ, ч), -я → -и → У меня нет сестры. У неё нет машины. У меня нет книги.
· У меня нет денег. — No tengo dinero.

LA FAMILIA (семья)
мама / мать · папа / отец · родители (padres) · сын (hijo) · дочь (hija) · дети (hijos) · брат · сестра · дедушка (abuelo) · бабушка (abuela) · внук / внучка (nieto, nieta) · дядя (tío) · тётя (tía) · двоюродный брат / двоюродная сестра (primo, prima) · муж (esposo) · жена (esposa) · друг / подруга (amigo, amiga) · парень / девушка (novio, novia)
старший брат (hermano mayor) · младшая сестра (hermana menor)
Он женат. — Él está casado. · Она замужем. — Ella está casada. · Я не женат / не замужем.

MASCOTAS
собака (perro) · кошка (gata) · кот (gato)
У вас есть домашние животные? — Да, у нас есть кот.

DESCRIBIR A ALGUIEN
высокий (alto) · невысокий (bajo) · худой (delgado) · полный (grueso) · симпатичный (simpático, guapo) · умный (inteligente) · весёлый (alegre) · серьёзный · добрый · строгий (estricto)
У него тёмные волосы и карие глаза. — Tiene pelo oscuro y ojos cafés. · светлые волосы (pelo claro) · голубые / зелёные глаза

DOLER Y OTRAS FRASES CON У
У меня болит голова. — Me duele la cabeza. · У меня вопрос. — Tengo una pregunta. · У меня всё хорошо. — Todo me va bien. · Как у тебя дела?

TEXTO: МОЯ СЕМЬЯ
У меня большая семья. Мой папа — инженер, ему пятьдесят два года. Моя мама — учительница, она работает в школе. У меня есть старший брат и младшая сестра. Брата зовут Павел, он женат, и у него есть сын. Сестру зовут Катя, она ещё учится в школе. У нас нет собаки, но есть старый кот. Его зовут Барсик. Мои бабушка и дедушка живут в деревне, у них там большой дом и красивый сад.`,
      exercises: [
        'Traduce al ruso: Tengo una hermana. ¿Tienes carro? Él tiene una familia grande. No tenemos perro. Ella no tiene hermano.',
        'Responde en negativo: У тебя есть машина? У него есть сестра? У вас есть время? У неё есть телефон? У них есть дом?',
        'Responde sobre el texto: Кто папа по профессии? Сколько ему лет? Где работает мама? Как зовут брата? У них есть собака? Где живут бабушка и дедушка?',
        'Completa con у меня, у него, у неё, у нас o у них: Это Иван. ___ есть сын. / Это Анна. ___ нет брата. / Мы студенты. ___ есть урок. / Это мои родители. ___ большой дом.',
        'Escribe un texto de 8 a 10 frases sobre tu familia: quiénes son, cómo se llaman, cuántos años tienen, a qué se dedican, dónde viven y cómo son.',
      ],
    },
    {
      title: 'El tiempo, la rutina y el pasado',
      durationMinutes: 60,
      content: `LOS DÍAS DE LA SEMANA (se escriben con minúscula)
понедельник (lunes) · вторник · среда · четверг · пятница · суббота · воскресенье
Какой сегодня день? — Сегодня вторник.
Когда? → в + acusativo: в понедельник · во вторник · в среду · в четверг · в пятницу · в субботу · в воскресенье
вчера (ayer) · сегодня (hoy) · завтра (mañana) · выходные (fin de semana) · на выходных (el fin de semana)

LA HORA
Который час? / Сколько времени? — ¿Qué hora es?
1:00 Час. · 2:00 Два часа. · 3:00 Три часа. · 4:00 Четыре часа. · 5:00 Пять часов. · 12:00 Двенадцать часов.
(1 час · 2, 3, 4 часа · 5 o más часов)
Con minutos basta leer los números: 7:30 семь тридцать · 9:15 девять пятнадцать.
Во сколько? / Когда? — ¿A qué hora? → в + hora: в семь часов · в два часа · в девять тридцать
утром (por la mañana) · днём (por la tarde) · вечером (por la noche) · ночью (de madrugada)
Урок начинается в девять часов и кончается в одиннадцать. — La clase empieza a las nueve y termina a las once.

LA RUTINA
вставать (levantarse): я встаю, ты встаёшь, он встаёт… · принимать душ (ducharse) · завтракать · идти на работу · обедать · ужинать · смотреть телевизор · ложиться спать (acostarse): я ложусь, ты ложишься… · спать (dormir): я сплю, ты спишь, они спят
Обычно я встаю в семь часов. — Normalmente me levanto a las siete.

EL PASADO
Se forma quitando -ть y añadiendo -л (masc.), -ла (fem.), -ло (neutro), -ли (plural). No cambia por persona, sino por género y número del sujeto.
читать → читал · читала · читало · читали
Я читал (dice un hombre) / Я читала (dice una mujer). · Ты работал? / Ты работала? · Мы смотрели фильм. · Вы говорили (siempre plural con вы).
делать → делал · жить → жил · говорить → говорил · хотеть → хотел · писать → писал · есть → ел, ела, ели · пить → пил
Irregulares: идти → шёл, шла, шли · мочь → мог, могла, могли

EL VERBO "SER / ESTAR" SÍ APARECE EN PASADO: быть → был · была · было · были
Вчера я был дома. (hombre) / Вчера я была дома. (mujer) · Где вы были? — Мы были в театре. · Это было интересно.
Negación: не был, не была (acento en la А: не былА), не было, не были.
"Tener" en pasado: У меня был брат. · У меня была машина. · У меня не было времени.
"Fui a…" se dice con быть + в / на + preposicional: Вчера я был в кино. — Ayer fui al cine.

MARCADORES DE TIEMPO
вчера · позавчера (anteayer) · на прошлой неделе (la semana pasada) · в прошлом году (el año pasado) · раньше (antes) · уже (ya) · ещё не (todavía no) · потом (después) · сначала (primero)

EL CLIMA EN UNA FRASE
Сегодня холодно / тепло / жарко. — Hoy hace frío / templado / calor. · Вчера было холодно. · Идёт дождь / снег. — Llueve / nieva.

TEXTO: МОЙ ДЕНЬ
Обычно я встаю в семь часов, принимаю душ и завтракаю. В восемь тридцать я иду на работу. Я работаю в офисе, в центре. В час я обедаю в кафе. Вечером я ужинаю дома, читаю или смотрю телевизор. Но вчера была суббота, и я не работал. Утром я долго спал, потом гулял в парке. Днём я был в магазине и купил продукты. Вечером мы были в ресторане: ели пиццу, пили вино и много говорили. Было очень весело!`,
      exercises: [
        'Escribe con letras en ruso qué hora es: 1:00, 3:00, 5:00, 8:30, 12:15. Luego di a qué hora te levantas y a qué hora te acuestas.',
        'Pon los verbos en pasado: Вчера я ___ (работать). Анна ___ (читать) книгу. Мы ___ (быть) в театре. Иван не ___ (хотеть) есть. Дети ___ (смотреть) фильм. Она ___ (идти) домой.',
        'Responde sobre el texto: Во сколько он встаёт? Где он обедает? Какой день был вчера? Где он был днём? Что они делали вечером?',
        'Traduce al ruso: El lunes trabajo. Ayer estuve en casa. ¿Dónde estuviste el sábado? No tuve tiempo. La clase empieza a las diez.',
        'Escribe un texto de 10 frases: 5 sobre tu rutina normal (con horas) y 5 sobre lo que hiciste ayer o el fin de semana pasado.',
      ],
    },
  ],
  exam: {
    title: 'Examen final A1',
    instructions: `Este examen cubre las doce estaciones del curso. Responde en ruso salvo que el ejercicio pida otra cosa; escribe en cirílico. Puedes corregir tu entrega mientras el profe no la haya calificado. Vale 100 puntos y se aprueba con 70.

TEXTO PARA LOS EJERCICIOS 9 Y 10
Здравствуйте! Меня зовут Карлос, мне двадцать шесть лет. Я из Мексики, но сейчас живу в Москве. Я программист и работаю в большой компании в центре. У меня есть младшая сестра Лаура, она студентка и живёт в Гвадалахаре. У меня нет машины, поэтому я еду на работу на метро. Утром я пью кофе и читаю новости. Вечером я изучаю русский язык: читаю тексты и смотрю русские фильмы. В субботу я был в музее, а в воскресенье гулял в парке, потому что было тепло. Я люблю Москву: это очень красивый город!`,
    questions: [
      'Lectura y escritura. Escribe en cirílico: restaurante, estudiante, pasaporte, México, gracias, por favor. Luego explica cómo se pronuncia молоко y por qué.',
      'Saludos. Escribe un diálogo formal de 6 líneas en el que dos personas se saludan, se presentan, dicen de dónde son y se despiden.',
      'Género y posesivos. Completa: ___ (мой) мама, ___ (твой) письмо, ___ (наш) дом, ___ (ваш) ключи, ___ (мой) словарь, ___ (твой) тетрадь.',
      'Números. Escribe con letras: 15, 43, 100, 268. Luego completa con год / года / лет: Ему 21 ___. Ей 33 ___. Мне 50 ___.',
      'Verbos en presente. Completa: Я ___ (жить) в Лиме. Ты ___ (говорить) по-русски? Мы ___ (читать) журналы. Они ___ (хотеть) кофе. Она ___ (писать) письмо. Вы ___ (смотреть) телевизор?',
      'Plural y adjetivos. Pasa al plural las frases completas: Это новый студент. / Это большое окно. / Это хороший друг. / Это интересная книга.',
      'Preposicional. Completa con в o на y la terminación correcta: Я живу ___ Колумби__. Книга лежит ___ стол__. Он работает ___ почт__. Мы были ___ концерт__. Она учится ___ университет__.',
      'Acusativo. Completa: Я люблю ___ (музыка). Он ждёт ___ (брат). Мы идём в ___ (школа). Она покупает ___ (рыба) и ___ (хлеб). Ты знаешь ___ (Мария)?',
      'Comprensión. Lee el texto de Carlos y responde con frases completas: Сколько лет Карлосу? Кто он по профессии? Где живёт его сестра? Почему он едет на работу на метро? Что он делал в субботу?',
      'Comprensión. Según el texto, di si es verdadero o falso y corrige lo falso en ruso: a) Карлос из Испании. b) У него есть старший брат. c) Вечером он изучает русский язык. d) В воскресенье было холодно.',
      'Tener y no tener. Traduce: Tengo dos hermanos. Ella no tiene carro. ¿Tienen ustedes hijos? No tenemos tiempo. Él tiene los ojos verdes.',
      'Pasado. Reescribe en pasado: Я читаю книгу. (habla una mujer) / Мы работаем в офисе. / Он дома. / У меня есть собака. / Они идут в кино.',
      'Preguntas. Escribe la pregunta para cada respuesta: Меня зовут Олег. / Мне тридцать лет. / Я иду в магазин. / Это стоит двести рублей. / Сейчас пять часов. / Это моя сумка.',
      'En el café. Escribe un diálogo de 8 líneas entre un mesero y un cliente: pedir comida y bebida, preguntar el precio y pagar.',
      'Redacción. Escribe un texto de 12 a 15 frases titulado «Обо мне»: quién eres, de dónde eres, tu familia, dónde vives, tu trabajo o estudios, tu rutina, lo que te gusta y lo que hiciste el fin de semana pasado.',
    ],
  },
};
