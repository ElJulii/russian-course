import type { LessonContent } from './course-content';

// Temario A1 (equivalente a ТЭУ): leer y escribir en cirílico, presentarse,
// hablar de la familia, la ciudad, la comida y la rutina en presente y pasado.
export const A1: LessonContent[] = [
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
  },
];
