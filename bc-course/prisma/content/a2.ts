import type { CourseContent } from './course-content';

// Temario A2 (equivalente a ТБУ): los seis casos en singular y plural, el
// aspecto verbal, el futuro, los verbos de movimiento y las situaciones
// cotidianas (compras, salud, viajes, planes).
export const A2: CourseContent = {
  lessons: [
    {
      title: 'El mapa de los seis casos',
      durationMinutes: 50,
      content: `En A1 usaste tres casos casi sin notarlo. Ahora los ordenamos: cada caso responde a unas preguntas y cumple una función.

1. NOMINATIVO (именительный) — Кто? Что? — el sujeto, la forma del diccionario.
Студент читает. Это книга.
2. GENITIVO (родительный) — Кого? Чего? — posesión, ausencia, cantidad, origen.
книга брата (el libro del hermano) · нет времени · из Москвы
3. DATIVO (дательный) — Кому? Чему? — el destinatario, "a quién / para quién".
Я звоню маме. (Llamo a mamá.)
4. ACUSATIVO (винительный) — Кого? Что? — el objeto directo y la dirección.
Я читаю книгу. Я иду в школу.
5. INSTRUMENTAL (творительный) — Кем? Чем? — el instrumento y la compañía.
Я пишу ручкой. (Escribo con bolígrafo.) · чай с лимоном (té con limón)
6. PREPOSICIONAL (предложный) — О ком? О чём? Где? — siempre con preposición.
Я живу в Москве. Мы говорим о работе.

REPASO: ACUSATIVO DE SUSTANTIVOS
· Masculino inanimado y neutro = nominativo: журнал, письмо
· Masculino animado = genitivo: брата, учителя
· Femenino: -а → -у, -я → -ю, -ь no cambia: книгу, неделю, дверь

NUEVO: LOS ADJETIVOS EN ACUSATIVO
· Femenino: -ая → -ую, -яя → -юю. Я читаю интересную книгу. Я купил синюю сумку.
· Masculino inanimado y neutro: no cambian. Я смотрю новый фильм. Я пью холодное молоко.
· Masculino animado: -ого / -его. Я знаю нового студента. Я вижу твоего старшего брата. (se pronuncia [-ova], [-eva])
Posesivos y demostrativos: мою, твою, нашу, вашу, эту (fem.) · моего, твоего, нашего, вашего, этого (masc. animado)
Я люблю мою сестру. · Ты знаешь этого человека? · Я жду эту девушку.

EL TIEMPO CON ACUSATIVO
Cuánto dura: Я работал всю неделю. (toda la semana) · Мы ждали один час.
Cada cuánto: каждый день, каждую неделю, каждую субботу, каждое утро.
Dentro de / hace: через неделю (en una semana) · неделю назад (hace una semana).

EL ORDEN DE PALABRAS ES FLEXIBLE
Gracias a los casos se entiende quién hace qué: "Анна любит Ивана" y "Ивана любит Анна" dicen lo mismo; lo nuevo o lo importante va al final.

TEXTO
Каждую субботу я вижу моего старого друга Сергея. Мы пьём крепкий кофе и смотрим хороший фильм. Неделю назад мы смотрели очень интересную комедию. Сергей любит русскую классическую музыку, а я слушаю современный рок. Через месяц он едет в Испанию и уже изучает испанский язык.`,
      exercises: [
        'Escribe los seis casos con sus preguntas y un ejemplo propio para cada uno (distinto de los de la lección).',
        'Pon en acusativo: Я читаю (новая книга). Он знает (мой старший брат). Мы смотрим (интересный фильм). Она любит (эта музыка). Ты видишь (тот высокий человек)? Я жду (моя младшая сестра).',
        '¿En qué caso está cada palabra en mayúsculas y por qué? Я звоню МАМЕ. / Это машина БРАТА. / Чай с ЛИМОНОМ. / Мы говорим о ФИЛЬМЕ. / Я вижу АННУ.',
        'Traduce al ruso: Cada semana veo a mi hermano. Hace un mes compré un carro nuevo. En una hora tengo clase. Trabajé todo el día.',
        'Escribe 6 frases sobre cosas que haces каждый день, каждую неделю y каждое лето, con adjetivo + sustantivo en acusativo en cada una.',
      ],
    },
    {
      title: 'El genitivo singular',
      durationMinutes: 60,
      content: `CÓMO SE FORMA
· Masculinos y neutros: + -а (duros), -я (blandos): брат → брата · стол → стола · учитель → учителя · музей → музея · окно → окна · море → моря
· Femeninos: -а → -ы, -я → -и, -ь → -и: мама → мамы · неделя → недели · ночь → ночи
· Regla ortográfica: tras г, к, х, ж, ш, щ, ч se escribe и, no ы: книга → книги · девушка → девушки · подруга → подруги
· Irregulares: мать → матери · дочь → дочери · время → времени · имя → имени · отец → отца · день → дня

ADJETIVOS
· Masculino y neutro: -ого / -его: нового дома, хорошего друга, синего моря
· Femenino: -ой / -ей: новой машины, хорошей подруги
Posesivos: моего, твоего, нашего, вашего, этого (masc./neutro) · моей, твоей, нашей, вашей, этой (fem.)

PRONOMBRES PERSONALES
меня · тебя · его · её · нас · вас · их. Tras preposición, los de tercera persona añaden н-: у него, у неё, у них, от него, для неё.

USOS

1. POSESIÓN Y PERTENENCIA ("de")
машина брата · дом моей бабушки · центр города · учитель русского языка · стакан воды (un vaso de agua) · чашка кофе (una taza de café)

2. AUSENCIA: нет / не было / не будет
Здесь нет метро. · У меня нет старшей сестры. · Вчера не было урока. · Завтра не будет дождя. · Ивана нет дома. (Iván no está en casa.)

3. TRAS PREPOSICIONES
у (junto a, en casa de): Я был у врача. Мы живём у бабушки.
из (de, desde dentro): Я из Мексики. Он идёт из магазина.
с (de, desde una superficie o actividad): Я иду с работы, с концерта.
от (de parte de, desde una persona): письмо от друга · недалеко от центра
до (hasta): от дома до работы · до свидания
без (sin): кофе без сахара · без проблем
для (para): подарок для мамы
после (después de): после работы, после урока
около (cerca de): около дома · напротив (frente a): напротив банка
Parejas de ida y vuelta: в школу → из школы · на работу → с работы · к врачу → от врача

4. CANTIDADES
Con 2, 3, 4 (y 22, 33, 44…): genitivo singular → два брата, три сестры, четыре окна, двадцать два рубля.
Con килограмм, литр, бутылка, пакет, кусок: килограмм сыра · бутылка воды · кусок хлеба
много / мало / немного + genitivo: много работы · мало времени · немного молока

5. FECHAS
Какое сегодня число? — Сегодня пятое мая.
Когда? → día y mes en genitivo: пятого мая · первого января · двадцать третьего февраля
Meses en genitivo: января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря

TEXTO
Это квартира моего брата. Она находится недалеко от центра города, напротив большого парка. У брата нет машины, потому что от дома до работы только десять минут. После работы он обычно идёт из офиса в магазин и покупает бутылку воды, килограмм мяса и немного сыра. Вечером у него часто гости: друзья из университета. Сегодня у него нет времени — он готовит подарок для своей жены. День рождения Ольги — двадцатого марта.`,
      exercises: [
        'Pon en genitivo: У меня нет (брат, сестра, время, машина, словарь, новая квартира). Escribe las seis frases completas.',
        'Une con genitivo según el modelo книга + брат → книга брата: машина + мой отец · дом + наша бабушка · центр + город · учитель + русский язык · чашка + горячий чай · подарок для + моя подруга.',
        'Completa con из, с, от, до, без, для, у o после: Я иду ___ работы. Он ___ Испании. Это письмо ___ мамы. Кофе ___ молока, пожалуйста. ___ урока мы идём в кафе. Вчера я был ___ врача. Это подарок ___ тебя. ___ дома ___ метро пять минут.',
        'Escribe con letras y la forma correcta: 2 (сестра), 3 (брат), 4 (окно), 22 (рубль), много (работа), мало (время), килограмм (рыба), бутылка (вода).',
        'Escribe 5 fechas importantes para ti (cumpleaños, fiestas) con frases completas. Modelo: Мой день рождения — пятого мая.',
      ],
    },
    {
      title: 'El genitivo plural y las cantidades',
      durationMinutes: 55,
      content: `El genitivo plural es el más irregular de los casos, pero se usa a diario: después de 5 o más, de много, мало, сколько, несколько y de нет.

CÓMO SE FORMA
1. Masculinos en consonante dura → -ов: стол → столов · студент → студентов · час → часов · город → городов
   En -й → -ев: музей → музеев · трамвай → трамваев. En -ц sin acento → -ев: месяц → месяцев
2. Masculinos en ж, ш, щ, ч o en -ь → -ей: врач → врачей · нож → ножей · учитель → учителей · рубль → рублей · день → дней
3. Femeninos en -а y neutros en -о: pierden la vocal (terminación cero): книга → книг · машина → машин · минута → минут · слово → слов · место → мест
   Si quedan dos consonantes juntas, se inserta о / е: сумка → сумок · девушка → девушек · студентка → студенток · окно → окон · письмо → писем · сестра → сестёр · ручка → ручек
4. Femeninos en -я: неделя → недель · песня → песен. En -ия → -ий: станция → станций · фотография → фотографий
5. Femeninos en -ь y neutros en -е → -ей: ночь → ночей · площадь → площадей · море → морей. Neutros en -ие → -ий: здание → зданий

IRREGULARES QUE HAY QUE SABER
человек → людей (pero con números: пять человек) · ребёнок → детей · друг → друзей · брат → братьев · сын → сыновей · год → лет · деньги → денег · раз (vez) → раз · глаз → глаз · мать → матерей · дочь → дочерей · стул → стульев

ADJETIVOS EN GENITIVO PLURAL: -ых / -их
новых студентов · хороших друзей · моих братьев · этих книг · русских слов

LA REGLA DE LOS NÚMEROS
· 1, 21, 31… → nominativo singular: один час, двадцать одна минута
· 2, 3, 4, 22, 23… → genitivo singular: два часа, три минуты, четыре года
· 5–20, 25–30… y todas las decenas → genitivo plural: пять часов, десять минут, двенадцать лет, сто рублей
Así se entiende год / года / лет y рубль / рубля / рублей.

PALABRAS DE CANTIDAD + GENITIVO PLURAL
Сколько? (¿cuántos?) · много (muchos) · мало (pocos) · несколько (varios) · немного (unos pocos) · большинство (la mayoría)
Сколько у тебя братьев? · В Москве много музеев. · У меня мало друзей. · Я знаю несколько русских песен.
Con lo que no se cuenta se usa el genitivo singular: много воды, мало времени.

DE COMPRAS
Сколько стоит килограмм яблок? — Двести рублей.
Дайте, пожалуйста, пять билетов / десять яиц / шесть бутылок воды.
У вас есть…? — К сожалению, нет. (Lamentablemente, no.)
Вам пакет нужен? — ¿Necesita bolsa?
Можно платить картой? — Да, конечно. / Только наличными. (Solo en efectivo.)
сдача (el cambio) · чек (el recibo) · скидка (descuento) · размер (talla) · примерить (probarse)

EL TIEMPO Y LAS DISTANCIAS
Я изучаю русский язык шесть месяцев. · Он жил в России пять лет. · Сколько километров от Москвы до Петербурга? — Семьсот километров.

TEXTO
В нашем городе много интересных мест: пять театров, десять музеев, несколько больших парков и очень много кафе. Здесь живёт пятьсот тысяч человек. У меня здесь много друзей и несколько хороших знакомых. В субботу мы были на рынке и купили килограмм помидоров, шесть яблок, десять яиц и две бутылки молока. Всё стоило восемьсот пятьдесят рублей.`,
      exercises: [
        'Escribe el genitivo plural: стол, книга, окно, музей, врач, друг, человек, ребёнок, сестра, письмо, станция, рубль, год, минута.',
        'Escribe con letras y la forma correcta del sustantivo: 1 (час), 3 (час), 7 (час), 21 (студент), 24 (студент), 30 (студент), 5 (неделя), 2 (неделя), 100 (рубль).',
        'Completa: В городе много ___ (новый дом). У меня мало ___ (хороший друг). Сколько у вас ___ (ребёнок)? Я знаю несколько ___ (русское слово). В группе нет ___ (иностранный студент).',
        'Traduce al ruso: ¿Cuántos hermanos tienes? Tengo muchos amigos. Deme seis boletos, por favor. Estudio ruso hace ocho meses. ¿Puedo pagar con tarjeta?',
        'Escribe un diálogo de 8 a 10 líneas en un mercado o una tienda: pides varias cosas con cantidades, preguntas precios y pagas.',
      ],
    },
    {
      title: 'El dativo: a quién, gustos y necesidades',
      durationMinutes: 60,
      content: `EL DATIVO responde a Кому? Чему? (¿a quién?, ¿a qué?). Marca al destinatario.

CÓMO SE FORMA
· Masculinos y neutros: + -у (duros), -ю (blandos): брат → брату · друг → другу · учитель → учителю · Игорь → Игорю · окно → окну
· Femeninos: -а / -я → -е: мама → маме · сестра → сестре · Катя → Кате
· Femeninos en -ь y en -ия → -и: дочь → дочери · Мария → Марии
· Plural: -ам / -ям: друзьям · студентам · детям · родителям
Adjetivos: -ому / -ему (masc./neutro), -ой / -ей (fem.), -ым / -им (plural): новому другу · моей старшей сестре · нашим родителям

PRONOMBRES
мне · тебе · ему · ей · нам · вам · им (tras preposición: к нему, к ней, к ним)

USOS

1. EL DESTINATARIO, con verbos de dar y comunicar
давать / дать (dar) · дарить / подарить (regalar) · говорить / сказать (decir) · писать · звонить (llamar por teléfono) · помогать / помочь (ayudar) · показывать / показать (mostrar) · отвечать (responder) · покупать · объяснять (explicar) · советовать (aconsejar)
Я звоню маме каждый день. · Он подарил жене цветы. · Помогите мне, пожалуйста! · Что ты сказал учителю?

2. LA EDAD
Мне двадцать пять лет. · Моему брату тридцать лет. · Сколько лет вашей дочери?

3. НРАВИТЬСЯ: gustar
Мне нравится этот город. — Me gusta esta ciudad. (lo que gusta va en nominativo)
Мне нравятся русские фильмы. — Me gustan las películas rusas. (plural: нравятся)
Тебе нравится Москва? · Ему не нравится эта музыка. · Мне нравится гулять.
En pasado, "me gustó": Мне понравился фильм. · Мне понравилась книга. · Нам понравилось!
любить es más fuerte y habitual (amar, encantar); нравиться es una impresión.

4. НУЖНО, НАДО, МОЖНО, НЕЛЬЗЯ + infinitivo
Мне нужно работать. — Necesito / tengo que trabajar. (надо es igual, más coloquial)
Тебе надо отдыхать. · Вам нужно купить билет.
Можно? — ¿Se puede? · Здесь можно курить? — Нет, здесь нельзя курить. · Можно войти?
En pasado y futuro: Мне нужно было работать. · Мне нужно будет работать.
Necesitar una cosa: нужен (masc.) · нужна (fem.) · нужно (neutro) · нужны (plural)
Мне нужен словарь. · Мне нужна помощь. · Мне нужны деньги.

5. ESTADOS Y SENSACIONES
Мне холодно. (Tengo frío.) · Мне жарко. · Мне скучно. (Me aburro.) · Мне интересно. · Мне плохо. (Me siento mal.) · Мне трудно. · Ему весело. · Мне кажется, что… (Me parece que…)

6. PREPOSICIONES: К y ПО
к (hacia, a casa de una persona): Я иду к врачу. · Мы едем к бабушке. · Приходи ко мне!
по (por, a lo largo de; por un medio): гулять по городу · идти по улице · говорить по телефону · экзамен по русскому языку · по субботам (los sábados)

TEXTO
Скоро день рождения моей мамы, ей будет пятьдесят лет. Мне нужно купить ей подарок, но я не знаю, что ей нравится. Я позвонил сестре, и она посоветовала мне купить цветы и хорошую книгу. Папе я подарю билеты в театр: родителям очень нравится балет. В субботу мы едем к ним. Мне кажется, им понравятся наши подарки!`,
      exercises: [
        'Pon en dativo: Я звоню (мама, брат, друзья). Он помогает (сестра, отец, дети). Я пишу (Иван, Мария, учитель). Escribe las nueve frases.',
        'Transforma con нравиться. Modelo: Я люблю этот фильм. → Мне нравится этот фильм. — Он любит русскую музыку. / Мы любим эти песни. / Анна любит гулять. / Ты любишь этот город? / Мои родители любят театр.',
        'Completa con нужен, нужна, нужно o нужны: Мне ___ новый телефон. Ему ___ помощь. Нам ___ билеты. Тебе ___ отдыхать. Ей ___ время. Вам ___ виза?',
        'Traduce al ruso: Tengo frío. ¿Se puede fumar aquí? No, no se puede. Mañana voy a casa de mi abuela. Tengo que comprar un regalo para mi amigo. Me gustó la película.',
        'Escribe 8 frases: tres cosas que te gustan y una que no (con нравиться), dos cosas que tienes que hacer esta semana y dos regalos que le harías a alguien (кому? что?).',
      ],
    },
    {
      title: 'El instrumental: con quién, con qué, qué quieres ser',
      durationMinutes: 55,
      content: `EL INSTRUMENTAL responde a Кем? Чем? (¿con quién?, ¿con qué?, ¿por medio de qué?).

CÓMO SE FORMA
· Masculinos y neutros: + -ом (duros), -ем (blandos): брат → братом · друг → другом · учитель → учителем · музей → музеем · окно → окном · море → морем
· Tras ж, ш, щ, ч, ц sin acento → -ем: муж → мужем · товарищ → товарищем
· Femeninos: -а → -ой, -я → -ей: мама → мамой · сестра → сестрой · Катя → Катей · семья → семьёй
· Femeninos en -ь → -ью: ночь → ночью · дочь → дочерью
· Plural: -ами / -ями: друзьями · студентами. Irregulares: людьми, детьми
Adjetivos: -ым / -им (masc./neutro), -ой / -ей (fem.), -ыми / -ими (plural): с новым другом · с моей старшей сестрой · с хорошими людьми

PRONOMBRES
мной · тобой · им · ей · нами · вами · ими → со мной, с тобой, с ним, с ней, с нами, с вами, с ними

USOS

1. COMPAÑÍA: С + instrumental
Я живу с родителями. · Она говорит с подругой. · Пойдём со мной! · Мы с братом (mi hermano y yo) · кофе с молоком · бутерброд с сыром · С днём рождения! · С Новым годом! · с удовольствием (con gusto)
Verbos: встречаться с (verse con) · знакомиться / познакомиться с (conocer a) · разговаривать с (conversar con) · здороваться с (saludar a)

2. INSTRUMENTO O MEDIO, sin preposición
Я пишу ручкой. · Мы едим суп ложкой, а мясо — ножом и вилкой. · Можно платить картой?

3. PROFESIÓN Y OCUPACIÓN
работать + instr.: Он работает врачом. · Она работает учительницей.
быть en pasado y futuro, стать (llegar a ser): Мой дедушка был инженером. · Я хочу стать переводчиком. · Кем ты хочешь быть?
заниматься (dedicarse a, practicar): Я занимаюсь спортом, музыкой, русским языком.
интересоваться (interesarse por): Он интересуется историей.

4. MOMENTOS DEL DÍA Y ESTACIONES (ya son adverbios)
утром · днём · вечером · ночью · весной (en primavera) · летом (en verano) · осенью (en otoño) · зимой (en invierno)

5. PREPOSICIONES DE LUGAR
над (encima de, sin tocar) · под (debajo de) · перед (delante de) · за (detrás de) · между (entre) · рядом с (al lado de)
Лампа висит над столом. · Кошка сидит под стулом. · Машина стоит перед домом. · Сад находится за домом. · Аптека между банком и магазином. · Я живу рядом с парком.
за también significa "a buscar": Я иду в магазин за хлебом.

LA CASA
гостиная (sala) · спальня (dormitorio) · кухня · ванная (baño) · коридор · балкон · этаж (piso, planta) · лифт · лестница (escalera)
диван · кресло (sillón) · кровать (cama) · шкаф (armario) · полка (estante) · холодильник (nevera) · плита (estufa) · зеркало (espejo) · ковёр (alfombra) · стена (pared) · пол (suelo) · потолок (techo)
стоять (estar de pie), лежать (estar acostado), висеть (estar colgado): Книга лежит на столе. Шкаф стоит у стены. Картина висит на стене.

TEXTO
Я живу с женой и двумя детьми в новой квартире на пятом этаже. Моя жена работает журналисткой, а я хочу стать программистом и много занимаюсь математикой. В гостиной перед диваном стоит маленький стол, над ним висит красивая лампа. За домом есть парк, там мы гуляем с собакой. По субботам мы встречаемся с друзьями и пьём чай с тортом. Летом мы обычно отдыхаем на море с родителями.`,
      exercises: [
        'Pon en instrumental: Я говорю с (брат, сестра, учитель, друзья, мой новый сосед, ты). Escribe las seis frases.',
        'Responde con frases completas: Кем ты работаешь или кем хочешь стать? Чем ты занимаешься в свободное время? Чем ты интересуешься? С кем ты живёшь? С чем ты пьёшь кофе или чай?',
        'Completa con над, под, перед, за, между o рядом с y la terminación: Лампа ___ стол__. Кошка ___ кроват__. Машина ___ дом__. Парк ___ школ__. Почта ___ банк__ и аптек__.',
        'Traduce al ruso: Vivo con mis padres. Mi abuelo fue médico. Escribo con lápiz. Mi hermano y yo practicamos deporte. ¡Feliz cumpleaños! ¿Con quién hablas?',
        'Describe tu habitación o tu sala en 7 u 8 frases, diciendo dónde está cada mueble (usa стоит, лежит, висит y al menos cuatro preposiciones de lugar).',
      ],
    },
    {
      title: 'El preposicional completo y el resumen de los casos',
      durationMinutes: 55,
      content: `En A1 aprendiste el preposicional de los sustantivos (в Москве, на работе). Faltan los adjetivos, el plural y varios usos.

ADJETIVOS Y POSESIVOS EN PREPOSICIONAL
· Masculino y neutro: -ом / -ем: в новом доме · в большом городе · в синем море · в хорошем ресторане
· Femenino: -ой / -ей: в новой квартире · на этой улице · в хорошей школе
· Plural: -ых / -их, y los sustantivos -ах / -ях: в новых домах · в больших городах · на этих улицах
в каком? в какой? в каких? — В каком городе ты живёшь? — Я живу в маленьком городе.
о моём, о твоём, о нашем, о вашем, об этом · о моей, о твоей, о нашей, об этой
Antes de vocal о se convierte en об: об этом, об Анне. Y обо мне.

USOS NUEVOS

1. MESES, AÑOS, SEMANAS: Когда?
Meses → в + preposicional: в январе · в феврале · в марте · в апреле · в мае · в июне · в июле · в августе · в сентябре · в октябре · в ноябре · в декабре
Años → в … году: в этом году · в прошлом году · в следующем году · в две тысячи двадцать шестом году
Semanas → на … неделе: на этой неделе · на прошлой неделе · на следующей неделе
Recuerda: los días van con в + acusativo (в среду) y la fecha exacta en genitivo (пятого мая).
Я родился в тысяча девятьсот девяносто восьмом году. — Nací en 1998. (родился / родилась)

2. TRANSPORTE: на + preposicional
на автобусе · на метро · на машине · на такси · на поезде (tren) · на самолёте (avión) · на велосипеде (bicicleta) · на трамвае. Pero: пешком (a pie).

3. TOCAR UN INSTRUMENTO: играть на гитаре, на пианино. (Deportes y juegos: играть в футбол, в шахматы, con acusativo.)

4. PENSAR, HABLAR, SOÑAR: думать о, говорить о, рассказывать о (contar sobre), мечтать о (soñar con), спрашивать о (preguntar por), книга / фильм о
О чём этот фильм? — Он о любви. · Расскажи о своей семье. · Я мечтаю о большом доме.

СВОЙ: el posesivo "propio"
Si el dueño es el sujeto de la frase, se usa свой (se declina como мой).
Я люблю свою работу. · Он звонит своей маме. (a su propia mamá) / Он звонит его маме. (a la mamá de otro)

RESUMEN DE LOS SEIS CASOS (singular)
            masc. / neutro          femenino
Nom.   новый стол, новое окно       новая книга
Gen.   нового стола, окна           новой книги
Dat.   новому столу, окну           новой книге
Acus.  новый стол / нового друга    новую книгу
Instr. новым столом, окном          новой книгой
Prep.  о новом столе, окне          о новой книге

RESUMEN DE LOS PRONOMBRES
Nom.   я      ты      он / оно    она    мы     вы     они
Gen.   меня   тебя    его         её     нас    вас    их
Dat.   мне    тебе    ему         ей     нам    вам    им
Acus.  меня   тебя    его         её     нас    вас    их
Instr. мной   тобой   им          ей     нами   вами   ими
Prep.  мне    тебе    нём         ней    нас    вас    них

ГДЕ / КУДА / ОТКУДА
Где? в школе, на работе, у врача, дома, здесь, там
Куда? в школу, на работу, к врачу, домой, сюда, туда
Откуда? из школы, с работы, от врача, из дома, отсюда, оттуда

TEXTO
Я родился в небольшом городе на юге России в тысяча девятьсот девяносто пятом году. В прошлом году я переехал в Москву и теперь живу в старом доме на тихой улице. Я работаю в международной компании и езжу на работу на метро. В свободное время я играю на гитаре и мечтаю о своей музыкальной группе. В августе я был в отпуске на Чёрном море, а в следующем году хочу поехать в Латинскую Америку. Друзья часто спрашивают меня о моих планах.`,
      exercises: [
        'Completa: Я живу в ___ (большой город). Она работает в ___ (новая школа). Мы были в ___ (хороший ресторан). Они говорят о ___ (твой брат). Я думаю о ___ (моя семья). Студенты живут в ___ (новые дома).',
        'Responde con frases completas: В каком году ты родился / родилась? В каком месяце твой день рождения? На чём ты ездишь на работу или на учёбу? О чём ты мечтаешь? Что ты делал(а) на прошлой неделе?',
        'Declina en los seis casos del singular: мой старший брат / эта интересная книга.',
        'Completa con Где, Куда u Откуда y responde con la palabra dada: ___ ты идёшь? (работа) / ___ ты идёшь? (врач) / ___ он приехал? (Испания) / ___ они живут? (маленькая деревня) / ___ вы были вчера? (друзья).',
        'Elige su / свой: Анна любит ___ мужа. / Это Иван. Я знаю ___ сестру. / Я потерял ___ ключи. / Они продают ___ машину. Explica en español la diferencia entre "Он любит свою жену" y "Он любит его жену".',
      ],
    },
    {
      title: 'El aspecto verbal: imperfectivo y perfectivo',
      durationMinutes: 60,
      content: `Casi todos los verbos rusos vienen en parejas: uno IMPERFECTIVO (НСВ) y uno PERFECTIVO (СВ). Significan lo mismo, pero miran la acción de manera distinta. Es la idea más importante del nivel A2.

IMPERFECTIVO: el proceso, la repetición, el hecho en general
· Acción en curso: Вчера я весь вечер читал книгу. (Estuve leyendo toda la tarde.)
· Acción repetida o habitual: Раньше я часто читал детективы. · Каждый день он покупал газету.
· El hecho sin más, sin interesar el resultado: — Ты читал «Анну Каренину»? — Да, читал.
Palabras que lo acompañan: всегда, часто, иногда, обычно, каждый день, долго, весь день, два часа, раньше.

PERFECTIVO: el resultado, una acción completa y única
· Acción terminada, con resultado: Я прочитал книгу. (La terminé, ya está leída.) · Он купил машину.
· Acciones sucesivas: Я встал, позавтракал и пошёл на работу.
· Un momento puntual: Вдруг она сказала… (De repente dijo…)
Palabras que lo acompañan: уже, наконец (por fin), вдруг, сразу (enseguida), за два часа (en dos horas, tiempo que tomó terminar).

COMPARA
Я писал письмо два часа. (proceso; no se sabe si lo terminé) / Я написал письмо за два часа. (terminado)
Что ты делал вчера? — Я учил слова. / Ты выучил слова? — Да, выучил. (ya me las sé)

EL PERFECTIVO NO TIENE PRESENTE
Una acción completa no puede estar "ocurriendo ahora". El presente solo existe en imperfectivo. Las formas del perfectivo que parecen presente significan FUTURO (lección siguiente).

CÓMO SE FORMAN LAS PAREJAS
1. Con prefijo (lo más común):
делать / сделать (hacer) · читать / прочитать (leer) · писать / написать (escribir) · смотреть / посмотреть (mirar) · слушать / послушать · учить / выучить (aprender) · готовить / приготовить (preparar) · есть / съесть (comer) · пить / выпить (beber) · видеть / увидеть (ver) · звонить / позвонить (llamar) · строить / построить (construir) · платить / заплатить (pagar) · думать / подумать · завтракать / позавтракать · обедать / пообедать · ужинать / поужинать · знакомиться / познакомиться
2. Con cambio de sufijo:
покупать / купить (comprar) · решать / решить (resolver, decidir) · изучать / изучить · получать / получить (recibir) · отвечать / ответить (responder) · спрашивать / спросить (preguntar) · рассказывать / рассказать (contar) · показывать / показать (mostrar) · открывать / открыть (abrir) · закрывать / закрыть (cerrar) · забывать / забыть (olvidar) · вставать / встать (levantarse) · давать / дать (dar) · начинать / начать (empezar) · кончать / кончить (terminar) · опаздывать / опоздать (llegar tarde) · приглашать / пригласить (invitar) · помогать / помочь (ayudar) · понимать / понять (entender)
3. Parejas con raíces distintas:
говорить / сказать (hablar, decir) · брать / взять (tomar) · класть / положить (poner) · искать / найти (buscar / encontrar) · ложиться / лечь (acostarse) · садиться / сесть (sentarse)

PASADOS IRREGULARES
сказать → сказал · взять → взял, взяла · дать → дал, дала · понять → понял, поняла · начать → начал, начала · помочь → помог, помогла · найти → нашёл, нашла, нашли · лечь → лёг, легла · сесть → сел · съесть → съел

DESPUÉS DE НАЧАТЬ, КОНЧИТЬ, ПРОДОЛЖАТЬ va siempre el imperfectivo: Я начал читать. · Она кончила работать.

LA NEGACIÓN
Я не читал эту книгу. (nunca la leí, en general) / Я не прочитал книгу. (no llegué a terminarla)

TEXTO
Вчера Антон встал рано, быстро позавтракал и поехал в университет. Весь день он готовился к экзамену: читал тексты, учил новые слова и писал упражнения. Вечером он наконец выучил все слова и написал сочинение. Потом он позвонил другу и спросил: «Ты уже сделал домашнее задание?» Друг ответил: «Нет, я весь день смотрел сериал и ничего не сделал». Антон помог ему, и они закончили работу за два часа.`,
      exercises: [
        'Escribe la pareja perfectiva de: делать, читать, писать, покупать, говорить, смотреть, брать, отвечать, учить, давать, понимать, открывать.',
        'Elige el aspecto correcto y escribe la frase completa: Вчера я весь вечер (читал / прочитал) книгу. Я уже (делал / сделал) домашнее задание. Раньше он часто (покупал / купил) газеты. Она (писала / написала) письмо за час. Мы (обедали / пообедали) и пошли гулять. Каждое лето мы (отдыхали / отдохнули) на море.',
        'Explica en español la diferencia de significado: a) Я читал эту книгу. / Я прочитал эту книгу. b) Он учил слова. / Он выучил слова. c) Она писала письмо два часа. / Она написала письмо за два часа.',
        'En el texto de Antón, copia cinco verbos imperfectivos y cinco perfectivos y explica por qué se usa cada aspecto en dos de ellos.',
        'Escribe un relato de 8 a 10 frases sobre lo que hiciste ayer: usa el perfectivo para las acciones sucesivas y terminadas y el imperfectivo para los procesos y lo habitual.',
      ],
    },
    {
      title: 'El futuro y los planes',
      durationMinutes: 50,
      content: `El ruso tiene dos futuros, uno por cada aspecto.

1. FUTURO IMPERFECTIVO (compuesto): БЫТЬ en futuro + infinitivo imperfectivo
я буду · ты будешь · он будет · мы будем · вы будете · они будут
Завтра я буду работать весь день. · Что ты будешь делать вечером? · Летом мы будем отдыхать на море.
Se usa para procesos, acciones repetidas o cuando solo importa en qué se ocupará el tiempo.
Nunca se combina буду con un perfectivo.

2. FUTURO PERFECTIVO (simple): el verbo perfectivo conjugado como un presente
прочитать: я прочитаю · ты прочитаешь · он прочитает · мы прочитаем · вы прочитаете · они прочитают
сделать: я сделаю · написать: я напишу · купить: я куплю, ты купишь · позвонить: я позвоню · посмотреть: я посмотрю · приготовить: я приготовлю
Se usa para una acción única que se va a completar, con resultado.
Я прочитаю эту книгу завтра. (la terminaré) · Я позвоню тебе вечером. · Мы купим билеты.

FUTUROS PERFECTIVOS IRREGULARES
сказать: я скажу, ты скажешь · дать: я дам, ты дашь, он даст, мы дадим, вы дадите, они дадут · взять: я возьму, ты возьмёшь · помочь: я помогу, ты поможешь · понять: я пойму · начать: я начну · встать: я встану · найти: я найду · смочь (poder): я смогу, ты сможешь · открыть: я открою · забыть: я забуду · пойти: я пойду, ты пойдёшь · поехать: я поеду, ты поедешь

COMPARA
Завтра я буду писать письма. (pasaré el tiempo escribiendo) / Завтра я напишу письмо. (lo dejaré escrito)
Я буду звонить тебе каждый день. / Я позвоню тебе в пять часов.

БЫТЬ EN FUTURO: "estaré", "habrá", "tendré"
Завтра я буду дома. · Завтра будет холодно. · В субботу будет концерт. · У меня будет время. · Завтра не будет урока. (negación + genitivo)

HABLAR DE PLANES
Я собираюсь + infinitivo (pienso / voy a): Я собираюсь поехать в Россию.
Я хочу / я планирую / я мечтаю + infinitivo
Я хотел бы… / Я хотела бы… — Me gustaría… (cortés)
Может быть (quizás) · наверное (probablemente) · обязательно (sin falta) · конечно (claro)
Если + futuro: Если будет хорошая погода, мы пойдём в парк. (En ruso va futuro en las dos partes.)
Когда + futuro: Когда я приеду, я позвоню тебе.

MARCADORES DE FUTURO
завтра · послезавтра (pasado mañana) · скоро (pronto) · через час / через неделю / через год · в следующем году · на следующей неделе · в будущем (en el futuro) · потом

INVITAR Y QUEDAR
Давай пойдём в кино! / Давайте пойдём… — ¡Vamos al cine!
Ты свободен / свободна в субботу? — ¿Estás libre el sábado?
С удовольствием! · Хорошая идея! · К сожалению, я не могу. Я занят / занята. (ocupado, ocupada)
Где и когда мы встретимся? — Давай встретимся в шесть часов у метро.
Договорились! — ¡Hecho!

TEXTO
В следующем году я закончу университет и начну работать. Летом я собираюсь поехать в Россию: сначала я буду жить в Москве и изучать русский язык в университете, а потом поеду в Петербург. Там я обязательно посмотрю Эрмитаж и куплю подарки друзьям. Если у меня будут деньги, я поеду ещё на Байкал. Каждый день я буду говорить только по-русски! Когда я вернусь домой, я расскажу вам о своём путешествии и покажу фотографии.`,
      exercises: [
        'Conjuga en futuro en las seis personas: (буду) работать, написать, купить, дать.',
        'Elige el futuro correcto y escribe la frase: Завтра я весь день (буду читать / прочитаю). Я (буду звонить / позвоню) тебе в семь часов. Летом мы каждый день (будем плавать / поплаваем). Сейчас я (буду делать / сделаю) чай и приду. Он (будет покупать / купит) билеты завтра утром.',
        'Pasa al futuro: Я читаю книгу. (proceso) / Я прочитал книгу. / Сегодня холодно. / У меня есть время. / Вчера не было урока. / Он сказал правду.',
        'Completa las condiciones con tus propias ideas: Если будет хорошая погода, … / Если у меня будет много денег, … / Когда я выучу русский язык, … / Если ты мне позвонишь, …',
        'Escribe un diálogo de 8 líneas en el que invitas a un amigo a salir el fin de semana: propones un plan, él no puede ese día, acuerdan otro día, la hora y el lugar.',
      ],
    },
    {
      title: 'Verbos de movimiento y transporte',
      durationMinutes: 60,
      content: `En ruso "ir" depende de dos cosas: si se va A PIE o EN TRANSPORTE, y si es UN VIAJE CONCRETO en una dirección o un movimiento REPETIDO, de ida y vuelta.

LAS CUATRO FORMAS BÁSICAS
                 una dirección, ahora      repetido, ida y vuelta
a pie            идти                      ходить
en transporte    ехать                     ездить

идти: я иду · ты идёшь · он идёт · мы идём · вы идёте · они идут — pasado: шёл, шла, шли
ходить: я хожу · ты ходишь · он ходит · мы ходим · вы ходите · они ходят — pasado: ходил
ехать: я еду · ты едешь · он едет · мы едем · вы едете · они едут — pasado: ехал
ездить: я езжу · ты ездишь · он ездит · мы ездим · вы ездите · они ездят — pasado: ездил

CUÁNDO USAR CADA UNO
· идти / ехать: un movimiento en marcha hacia un sitio. Сейчас я иду в магазин. · Мы едем в аэропорт.
  También un plan inmediato: Завтра я иду к врачу. · В субботу мы едем на дачу.
· ходить / ездить: costumbre o capacidad. Я хожу на работу пешком. · Каждое лето мы ездим на море. · Ребёнок уже ходит.
· En pasado, ходил / ездил = fui y volví: Вчера я ходил в театр. (= Вчера я был в театре.) · Летом мы ездили в Грецию.

EL COMIENZO DEL VIAJE: ПОЙТИ, ПОЕХАТЬ (perfectivos)
Pasado: пошёл, пошла, пошли · поехал, поехала, поехали — "se fue, salió hacia"
Он пошёл в магазин. (salió y aún no ha vuelto) · После работы мы поехали домой.
Futuro: я пойду, ты пойдёшь… · я поеду, ты поедешь…
Завтра я пойду в библиотеку. · Летом мы поедем в Россию.
Пойдём! / Поехали! — ¡Vamos!

LOS PREFIJOS MÁS ÚTILES (cambian la dirección)
при- (llegar): прийти, приехать → Он пришёл домой в семь. · Когда вы приехали в Москву?
у- (irse): уйти, уехать → Она уже ушла. · Они уехали в Испанию.
в- (entrar): войти → Можно войти? · вы- (salir): выйти → Я вышел из дома в восемь.
до- (llegar hasta): дойти, доехать → Как доехать до центра?
пере- (cruzar): перейти → Перейдите улицу.
Futuro: я приду · я приеду · я уйду · я уеду · я выйду
Imperfectivos para lo habitual: приходить, приезжать, уходить, уезжать, выходить → Обычно я прихожу домой в шесть.

OTROS VERBOS DE MOVIMIENTO
лететь / летать (volar): Завтра я лечу в Мадрид. · бежать / бегать (correr): Я бегаю по утрам. · плыть / плавать (nadar, navegar): Я хорошо плаваю.

EL TRANSPORTE
автобус · троллейбус · трамвай · метро · такси · поезд (tren) · электричка (tren de cercanías) · самолёт · корабль (barco) · машина · велосипед
ехать на автобусе, на метро · лететь на самолёте · идти пешком
остановка (parada) · станция · вокзал · аэропорт · билет (boleto) · билет туда и обратно (ida y vuelta) · расписание (horario) · платформа · пересадка (transbordo) · багаж · рейс (vuelo)
садиться / сесть на автобус (subir) · выходить / выйти из автобуса (bajar) · делать пересадку · опаздывать на поезд (perder el tren)

PREGUNTAR EL CAMINO
Извините, как дойти до музея? (a pie) / Как доехать до вокзала? (en transporte)
Идите прямо, потом поверните налево / направо. — Siga derecho, luego gire a la izquierda / derecha.
Это далеко? — Нет, недалеко, пять минут пешком.
На чём можно доехать? — На автобусе номер пять или на метро.
Вам нужно выйти на следующей остановке. · Вы выходите? (¿Se baja usted?)
Один билет до Петербурга, пожалуйста. · Во сколько отправляется поезд? · Когда прибывает? · С какой платформы?

TEXTO
Обычно я езжу на работу на метро, но сегодня я иду пешком, потому что погода хорошая. Я вышел из дома в восемь часов и пришёл в офис в восемь сорок. В прошлом месяце я ездил в Петербург: туда я ехал на поезде четыре часа, а обратно летел на самолёте. Летом мы с семьёй поедем на Чёрное море. Мой брат уже уехал туда в июне. Когда он приедет, он расскажет нам, как там.`,
      exercises: [
        'Elige идти o ходить, ехать o ездить, en la forma correcta: Сейчас я ___ в магазин. Каждый день я ___ на работу пешком. Смотри, вон ___ наш автобус! Летом мы часто ___ на море. Куда вы ___ завтра вечером? Мой сын уже ___ в школу.',
        'Completa con el pasado de ходить / ездить o пойти / поехать: Вчера мы ___ в театр. (fuimos y volvimos, a pie) / Где Анна? — Она ___ в магазин. / В прошлом году я ___ в Мексику. / После урока студенты ___ домой.',
        'Completa con el prefijo adecuado (при-, у-, в-, вы-, до-) y la forma correcta: Он ___шёл домой поздно. Можно ___йти? Она ___ехала в другой город и больше здесь не живёт. Я ___шел из дома в семь. Как ___ехать до аэропорта?',
        'Escribe cómo llegar desde tu casa hasta tu trabajo, tu universidad o el centro (6 a 8 frases): qué transporte tomas, dónde te bajas, cuánto tardas.',
        'Escribe un diálogo de 8 líneas en una estación: compras un boleto a otra ciudad, preguntas la hora de salida, la plataforma y cuánto dura el viaje.',
      ],
    },
    {
      title: 'Verbos reflexivos e imperativo',
      durationMinutes: 55,
      content: `LOS VERBOS EN -СЯ
Se conjugan como cualquier verbo y al final llevan -ся tras consonante o -сь tras vocal.
заниматься (estudiar, practicar): я занимаюсь · ты занимаешься · он занимается · мы занимаемся · вы занимаетесь · они занимаются
Pasado: занимался · занималась · занимались

QUÉ EXPRESAN
1. Acción sobre uno mismo: мыться (lavarse) · умываться (lavarse la cara) · одеваться (vestirse) · причёсываться (peinarse) · бриться (afeitarse)
   Compara: Мама одевает ребёнка. / Ребёнок одевается.
2. Acción recíproca: встречаться (verse) · знакомиться (conocerse) · здороваться (saludarse) · прощаться (despedirse) · целоваться (besarse) · ссориться (pelearse)
3. Algo que ocurre solo: Урок начинается в девять. · Магазин открывается в десять и закрывается в восемь. · Фильм кончается поздно.
   Compara: Учитель начинает урок. / Урок начинается.
4. Verbos que solo existen con -ся: улыбаться (sonreír) · смеяться (reír) · бояться (temer, + genitivo) · надеяться (esperar, tener esperanza) · нравиться · стараться (esforzarse) · становиться (volverse) · оставаться (quedarse) · ошибаться (equivocarse)
5. Otros muy frecuentes: учиться (estudiar en un lugar) · просыпаться / проснуться (despertarse) · ложиться / лечь (acostarse) · возвращаться / вернуться (regresar) · находиться (estar situado) · называться (llamarse una cosa) · интересоваться · готовиться к (prepararse para) · волноваться (preocuparse) · садиться (sentarse) · родиться (nacer) · жениться (casarse) · случиться (ocurrir)

УЧИТЬ, ИЗУЧАТЬ, УЧИТЬСЯ, ЗАНИМАТЬСЯ
учить + acusativo: aprender, memorizar → Я учу новые слова.
изучать + acusativo: estudiar una materia a fondo → Я изучаю русскую историю.
учиться + где: ser estudiante → Я учусь в университете. · + infinitivo: aprender a → Я учусь плавать.
заниматься + instrumental: dedicar tiempo a → Я занимаюсь русским языком. · sin complemento: estudiar, hacer tareas → Вечером я занимаюсь в библиотеке.

EL IMPERATIVO
Se parte de la forma они sin la terminación.
1. Si queda vocal → -й: читать (чита-ют) → Читай! Читайте! · слушать → Слушай(те)! · работать → Работай(те)! · открыть (откро-ют) → Открой(те)!
2. Si queda consonante y el acento de я cae en la terminación → -и: говорить (говор-ят, говорЮ) → Говори(те)! · писать (пиш-ут, пишУ) → Пиши(те)! · смотреть → Смотри(те)! · идти → Иди(те)! · взять → Возьми(те)! · сказать → Скажи(те)! · купить → Купи(те)!
3. Si queda consonante y el acento va en la raíz → -ь: готовить → Готовь(те)! · встать (встАнут) → Встань(те)! · забыть → Не забудь(те)!
-те se añade para вы (formal o plural).
Irregulares: дать → Дай(те)! · есть → Ешь(те)! · пить → Пей(те)! · быть → Будь(те)! · ехать → Поезжай(те)! · помочь → Помоги(те)!
Reflexivos: Садись! Садитесь! · Не волнуйся! Не волнуйтесь! · Познакомьтесь!

EL ASPECTO EN EL IMPERATIVO
· Petición concreta, una vez → perfectivo: Откройте окно, пожалуйста. · Скажите, пожалуйста… · Дайте мне меню.
· Invitación, consejo general o proceso → imperfectivo: Садитесь, пожалуйста! · Говорите медленнее. · Приходите в гости!
· Prohibición (не + imperativo) → imperfectivo: Не открывайте окно! · Не говори ему! · Не курите здесь.

PROPONER HACER ALGO JUNTOS
Давай(те) + imperfectivo en infinitivo: Давай говорить по-русски!
Давай(те) + perfectivo en forma мы: Давайте познакомимся! · Давай пойдём в кино! · Давай встретимся завтра!
Пусть + él / ella (que…): Пусть он позвонит мне.

FÓRMULAS HECHAS
Будьте добры… (Sea tan amable…) · Будь здоров! / Будьте здоровы! (¡Salud!) · Извините! · Простите! · Подождите минуту! (¡Espere un minuto!) · Проходите! (¡Pase!) · Не беспокойтесь! (¡No se moleste!) · Берегите себя! (¡Cuídese!)

TEXTO
Я просыпаюсь в семь часов, быстро умываюсь, одеваюсь и иду на занятия. Я учусь на первом курсе и занимаюсь русским языком каждый день. Занятия начинаются в девять и кончаются в три. После обеда мы с друзьями встречаемся в библиотеке и готовимся к экзаменам. Наш преподаватель всегда говорит: «Не бойтесь ошибаться! Говорите больше, читайте каждый день и не забывайте повторять слова». Вечером я возвращаюсь домой и ложусь спать в одиннадцать.`,
      exercises: [
        'Conjuga en presente (seis personas) y en pasado (tres formas): учиться, встречаться, возвращаться.',
        'Completa con учить, изучать, учиться o заниматься en la forma correcta: Мой брат ___ в школе. Я ___ русским языком два часа в день. Мы ___ новые слова. Она ___ экономику в университете. Я ___ играть на гитаре.',
        'Forma el imperativo en ты y en вы: читать, говорить, писать, смотреть, взять, дать, сказать, садиться, открыть, не волноваться.',
        'Elige el verbo con -ся o sin -ся y escribe la frase: Урок (начинает / начинается) в девять. Учитель (начинает / начинается) урок. Мама (одевает / одевается) сына. Я быстро (одеваю / одеваюсь). Магазин (закрывает / закрывается) в восемь.',
        'Escribe 8 consejos en imperativo para alguien que empieza a aprender ruso (cuatro afirmativos y cuatro negativos con не).',
      ],
    },
    {
      title: 'Comparar, opinar y unir frases',
      durationMinutes: 55,
      content: `EL COMPARATIVO
Forma simple: raíz + -ее. No cambia de género ni de número.
красивый → красивее · интересный → интереснее · быстрый → быстрее · холодный → холоднее · трудный → труднее · новый → новее · тёплый → теплее · важный → важнее · умный → умнее
Irregulares muy frecuentes:
хороший → лучше · плохой → хуже · большой → больше · маленький → меньше · дорогой → дороже · дешёвый → дешевле · старый → старше (edad) · молодой → моложе / младше · лёгкий → легче · высокий → выше · низкий → ниже · близкий → ближе · далёкий → дальше · короткий → короче · длинный → длиннее · простой → проще · тихий → тише · громкий → громче · частый → чаще · редкий → реже · ранний → раньше · поздний → позже
Forma compuesta: более / менее + adjetivo: более интересный фильм · менее дорогая машина

"QUE" EN LAS COMPARACIONES: dos maneras
1. чем + nominativo: Москва больше, чем Петербург.
2. genitivo sin чем: Москва больше Петербурга. · Брат старше меня. · Она умнее всех.
Para graduar: намного / гораздо (mucho más) · немного / чуть-чуть (un poco más): Этот телефон намного дороже.
на + cantidad: Брат старше меня на три года.
Igualdad: такой же… как: Он такой же высокий, как отец. · так же… как: Она говорит так же хорошо, как ты.

EL SUPERLATIVO: самый + adjetivo (concuerdan los dos)
самый большой город · самая красивая улица · самое интересное место · самые лучшие друзья
Байкал — самое глубокое озеро в мире. · Это один из самых красивых городов России.

LAS CONJUNCIONES: UNIR IDEAS
потому что (porque): Я не пошёл гулять, потому что шёл дождь.
поэтому (por eso): Шёл дождь, поэтому я не пошёл гулять.
что (que): Я знаю, что он дома. · Она сказала, что придёт завтра.
чтобы (para, para que) + infinitivo si el sujeto es el mismo: Я учу русский, чтобы работать в России.
    + pasado si el sujeto es otro: Я хочу, чтобы ты пришёл. (Quiero que vengas.)
когда (cuando): Когда я был маленьким, я жил в деревне.
если (si): Если хочешь, я помогу тебе.
хотя (aunque): Хотя было холодно, мы гуляли.
пока (mientras): Пока ты готовишь, я накрою на стол.
Preguntas indirectas: Я не знаю, где он живёт. · Скажите, сколько это стоит. · Ты знаешь, когда начинается фильм?
"Si" indirecto se dice ли tras el verbo: Я не знаю, придёт ли он. (No sé si vendrá.)

КОТОРЫЙ: "que, el cual"
Concuerda en género y número con el sustantivo al que se refiere, y su caso depende de su papel en la frase.
Это мой друг, который живёт в Москве. (nominativo: él vive)
Это книга, которую я читаю. (acusativo: yo la leo)
Это девушка, с которой я работаю. (instrumental)
Это город, в котором я родился. (preposicional)
Это люди, которые помогли мне.

DAR UNA OPINIÓN
Я думаю, что… · Я считаю, что… (Considero que…) · По-моему… (En mi opinión…) · Мне кажется, что… · Я уверен / уверена, что… (Estoy seguro de que…)
Я согласен / согласна. (Estoy de acuerdo.) · Я не согласен. · Ты прав / права. (Tienes razón.) · Это правда. · Это неправда. · Может быть. · Конечно! · С одной стороны…, с другой стороны… (Por un lado…, por otro…)

TEXTO
По-моему, жить в большом городе интереснее, чем в деревне, хотя в деревне тише и воздух чище. Москва — самый большой город России, поэтому жизнь там дороже, чем в других городах. Мой друг, который переехал туда в прошлом году, говорит, что зарплата в Москве выше, но квартира стоит намного больше. Я хочу поехать к нему, чтобы увидеть всё своими глазами. Если мне понравится, может быть, я тоже перееду. А как вы думаете, где жить лучше?`,
      exercises: [
        'Escribe el comparativo: хороший, плохой, большой, маленький, дорогой, дешёвый, красивый, старый, лёгкий, трудный, быстрый, далёкий.',
        'Compara de las dos maneras (con чем y con genitivo): Москва / Петербург (большой) · зима / осень (холодный) · самолёт / поезд (быстрый) · мой брат / я (старый) · русский язык / английский язык (трудный).',
        'Une las frases con потому что, поэтому, хотя, чтобы o если: У меня нет времени. Я не пойду в кино. / Я учу русский язык. Я хочу жить в России. / Было очень холодно. Мы пошли гулять. / Ты хочешь. Я помогу тебе.',
        'Completa con который en la forma correcta: Это студент, ___ изучает русский язык. Это книга, ___ я купил вчера. Это друзья, с ___ я отдыхал. Это город, в ___ живёт моя сестра. Это девушка, ___ зовут Анна.',
        'Escribe un texto de opinión de 8 a 10 frases: ¿qué es mejor, vivir en una ciudad grande o en un pueblo? Usa al menos tres comparativos, un superlativo y tres conjunciones distintas.',
      ],
    },
    {
      title: 'La vida diaria: salud, clima, viajes y mensajes',
      durationMinutes: 60,
      content: `Esta estación reúne el vocabulario y las frases de las situaciones que pide el nivel A2.

1. LA SALUD
El cuerpo: голова (cabeza) · горло (garganta) · зуб (diente) · глаз, глаза · ухо, уши (oído) · нос · рука (mano, brazo) · нога (pie, pierna) · спина (espalda) · живот (estómago) · сердце (corazón)
У меня болит голова. (singular) · У меня болят зубы. (plural) · У него болело горло. (pasado)
Как вы себя чувствуете? — Я чувствую себя плохо / хорошо / лучше. (La primera в de чувствовать no suena.)
Я заболел / заболела. (Me enfermé.) · У меня температура. (Tengo fiebre.) · У меня насморк и кашель. (mocos y tos) · простуда (resfriado) · грипп (gripe) · аллергия на + acus.
Что с вами? / Что случилось? — ¿Qué le pasa? / ¿Qué pasó?
Вам нужно лежать, пить много воды и принимать это лекарство три раза в день. · рецепт (receta) · таблетки · поликлиника · скорая помощь (ambulancia)
Выздоравливайте! — ¡Que se mejore!

2. EL CLIMA Y LAS ESTACIONES
зима, весна, лето, осень → зимой, весной, летом, осенью
Какая сегодня погода? — Сегодня хорошая / плохая погода.
Сегодня тепло / жарко / прохладно / холодно / солнечно / облачно / ветрено.
Идёт дождь. · Идёт снег. · Дует сильный ветер. · Светит солнце. · туман (niebla) · гроза (tormenta)
Сегодня плюс двадцать. · Зимой здесь минус пятнадцать градусов.
Вчера было холодно и шёл дождь. · Завтра будет солнечно и пойдёт снег.
Какой прогноз на завтра?

3. LA ROPA
одежда · рубашка (camisa) · футболка (camiseta) · свитер · брюки · джинсы · юбка · платье (vestido) · куртка (chaqueta) · пальто (abrigo, no cambia) · шапка (gorro) · шарф (bufanda) · перчатки (guantes) · обувь (calzado) · туфли · ботинки · кроссовки (tenis) · сапоги (botas)
носить (llevar habitualmente): Зимой я ношу тёплую куртку. · надеть (ponerse): Надень шапку! · Он в синем костюме. (lleva puesto…)
Можно примерить? · Какой у вас размер? · Это мне мало / велико. (me queda pequeño / grande) · Вам очень идёт! (¡Le queda muy bien!)

4. EN EL HOTEL Y DE VIAJE
Я хочу забронировать номер на двоих на три ночи. (reservar una habitación doble por tres noches)
У вас есть свободные номера? · Сколько стоит номер в сутки? (por día) · Завтрак включён? (¿incluido?)
Вот мой паспорт. · Заполните анкету, пожалуйста. (Llene el formulario.) · ключ от номера · В номере не работает душ / интернет.
достопримечательности (lugares de interés) · экскурсия · путешествие (viaje) · отпуск (vacaciones del trabajo) · каникулы (vacaciones escolares) · виза · граница (frontera) · таможня (aduana) · чемодан (maleta) · сувениры
Где вы были в отпуске? · Что вам больше всего понравилось?

5. POR TELÉFONO
Алло! / Слушаю. · Здравствуйте, можно Анну? / Позовите, пожалуйста, Анну. · Это Карлос. · Минуточку. · Её сейчас нет. Что-нибудь передать? (¿Le dejo un recado?) · Передайте, пожалуйста, что звонил Карлос. · Я перезвоню позже. (Vuelvo a llamar.) · Вы ошиблись номером. (Número equivocado.) · Плохо слышно. (Se oye mal.)

6. ESCRIBIR UN MENSAJE O UNA CARTA
Informal: Привет, Маша! / Дорогой Иван! / Дорогая Анна! … Как дела? Что нового? … Пиши! Обнимаю. (Un abrazo.) Целую. (Besos.) Пока! Твой Карлос / Твоя Лусия.
Formal: Уважаемый Иван Петрович! / Уважаемая Анна Сергеевна! … Пишу вам, потому что… Заранее спасибо. (Gracias de antemano.) С уважением, Карлос Гомес.
Felicitar: Поздравляю тебя с днём рождения! Желаю тебе счастья, здоровья и успехов! (поздравлять + кого + с чем; желать + кому + чего, en genitivo)
Invitar: Приглашаю тебя на день рождения в субботу в семь часов. Приходи!
Agradecer y disculparse: Спасибо за помощь / за подарок / за письмо. (за + acusativo) · Извини, что долго не писал.

TEXTO: ПИСЬМО
Дорогая Наташа!
Привет из Мексики! Извини, что долго не писала: на прошлой неделе я заболела. У меня была высокая температура и болело горло, поэтому я лежала дома и пила чай с лимоном. Сейчас я чувствую себя намного лучше.
У нас сейчас осень, но погода тёплая: днём плюс двадцать пять и светит солнце. А у вас, наверное, уже холодно и идёт снег?
В декабре у меня будет отпуск, и я собираюсь приехать в Москву. Я уже купила билет и хочу забронировать номер в гостинице недалеко от центра. Какую одежду мне нужно взять? Я боюсь, что моя куртка недостаточно тёплая.
Поздравляю тебя с новой работой! Желаю тебе успехов. Передай привет родителям.
Пиши! Обнимаю.
Твоя Лусия`,
      exercises: [
        'Estás enfermo. Escribe un diálogo de 10 líneas con el médico: explicas qué te duele y desde cuándo, él pregunta, da un diagnóstico y recomendaciones.',
        'Describe el clima de tu ciudad en cada estación del año (8 frases) y qué ropa usas en cada una.',
        'Responde sobre la carta con frases completas: Почему Лусия долго не писала? Что у неё болело? Какая сейчас погода в Мексике? Когда она собирается приехать в Москву? Чего она боится? С чем она поздравляет Наташу?',
        'Escribe un diálogo de 8 líneas en la recepción de un hotel: preguntas si hay habitación, el precio, si incluye desayuno, y avisas de un problema en la habitación.',
        'Responde a la carta de Lucía como si fueras Natasha (10 a 12 frases): agradece, cuenta el clima de Moscú, aconseja qué ropa traer, propón planes y despídete.',
      ],
    },
  ],
  exam: {
    title: 'Examen final A2',
    instructions: `Este examen cubre las doce estaciones del curso. Responde en ruso salvo que el ejercicio pida otra cosa; escribe en cirílico y con frases completas. Puedes corregir tu entrega mientras el profe no la haya calificado. Vale 100 puntos y se aprueba con 70.

TEXTO PARA LOS EJERCICIOS 11 Y 12
Меня зовут Даниэла, я из Колумбии. Два года назад я приехала в Казань, чтобы учиться в университете. Сначала мне было очень трудно: я плохо понимала по-русски и у меня не было друзей. Зимой было намного холоднее, чем в Боготе, и мне пришлось купить тёплую куртку и сапоги. Но потом я познакомилась с Алсу, которая учится со мной в одной группе. Она помогла мне найти квартиру недалеко от университета и показала мне город. Теперь мы каждую неделю ходим в кино или готовим вместе: я научила её готовить арепы, а она меня — печь пироги. Мне очень нравится Казань: это один из самых красивых городов России. В следующем году я закончу учёбу и, наверное, останусь здесь работать переводчиком. Летом ко мне приедут родители, и я обязательно покажу им Кремль и Волгу.`,
    questions: [
      'Los casos. Indica el caso de cada palabra en mayúsculas y por qué se usa: Я подарил СЕСТРЕ книгу. / У меня нет ВРЕМЕНИ. / Он работает ВРАЧОМ. / Мы говорили о ФИЛЬМЕ. / Я жду АВТОБУС. / Это дом моего ДРУГА.',
      'Genitivo. Completa: У меня нет ___ (младшая сестра). Это машина ___ (мой старший брат). Я иду с ___ (работа). В городе много ___ (красивое здание). У него пять ___ (ребёнок). Дайте, пожалуйста, бутылку ___ (минеральная вода).',
      'Dativo. Completa: Я позвонил ___ (моя бабушка). ___ (Мой брат) двадцать лет. ___ (Мы) нужно купить билеты. ___ (Анна) нравится этот город. Завтра я иду к ___ (зубной врач).',
      'Instrumental y preposicional. Completa: Я пью кофе с ___ (молоко). Она хочет стать ___ (хороший врач). Мы живём рядом с ___ (большой парк). Я родился в ___ (маленький город). Они говорят о ___ (новая работа). Он ездит на работу на ___ (автобус).',
      'Números y fechas. Escribe con letras: 3 (месяц), 12 (год), 21 (студент), 5 (минута), 2 (неделя). Luego escribe con letras la fecha de hoy y la de tu nacimiento (día, mes y año).',
      'Aspecto verbal. Elige y escribe la frase completa: Вчера я весь день (писал / написал) отчёт. Наконец я (писал / написал) его! В детстве мы часто (ездили / поехали) к бабушке. Она (готовила / приготовила) ужин и позвала всех к столу. Ты уже (смотрел / посмотрел) этот фильм? — Да, (смотрел / посмотрел), мне понравилось.',
      'Futuro. Completa con el futuro adecuado del verbo dado: Завтра я весь вечер ___ (готовиться) к экзамену. Я ___ (позвонить) тебе, когда ___ (приехать). Если ___ (быть) дождь, мы не ___ (пойти) в парк. В следующем году она ___ (закончить) университет.',
      'Verbos de movimiento. Completa con идти, ходить, ехать, ездить, пойти, поехать, прийти, приехать o уйти en la forma correcta: Каждое утро я ___ на работу пешком. Смотри, вон ___ твой брат! Вчера мы ___ в музей. Летом мы ___ в Испанию. Директора нет, он уже ___. Когда ты ___ домой вчера вечером?',
      'Reflexivos e imperativo. a) Completa: Урок ___ (начинаться) в девять. Мы ___ (встречаться) по субботам. Где ты ___ (учиться)? b) Forma el imperativo formal (вы): сказать, показать, не волноваться, садиться, помочь, не забывать.',
      'Comparar y unir frases. a) Compara usando el comparativo: зима в России / зима в Мексике (холодный); самолёт / поезд (дорогой); моя сестра / я (младший). b) Une con который: Это мой друг. Он живёт в Казани. / Это книга. Я купил её вчера. / Это город. Я родился в этом городе.',
      'Comprensión. Lee el texto de Daniela y responde con frases completas: Зачем Даниэла приехала в Казань? Почему сначала ей было трудно? Кто такая Алсу и как она помогла Даниэле? Что они делают каждую неделю? Кем Даниэла хочет работать? Кто приедет к ней летом?',
      'Comprensión. Di si es verdadero o falso según el texto y corrige lo falso en ruso: a) Даниэла живёт в Казани пять лет. b) В Боготе зимой холоднее, чем в Казани. c) Алсу и Даниэла учатся в одной группе. d) Даниэле не нравится Казань. e) Родители уже приехали к ней.',
      'Situación: en la ciudad. Un turista te pregunta cómo llegar de tu casa al centro o a la estación. Escribe el diálogo (8 a 10 líneas) con indicaciones, transporte y tiempo.',
      'Situación: en el médico o en la tienda de ropa (elige una). Escribe un diálogo de 10 líneas.',
      'Carta. Escribe a un amigo ruso una carta de 12 a 15 frases: salúdalo, cuéntale qué hiciste el mes pasado, cómo es el clima donde vives, qué planes tienes para las vacaciones e invítalo a visitarte. Usa pasado, futuro y al menos dos comparaciones.',
      'Opinión. Escribe 8 a 10 frases sobre el tema «Зачем я изучаю русский язык и что для меня самое трудное». Usa потому что, поэтому, чтобы y хотя.',
    ],
  },
};
