import { q, type CourseTests } from './course-content';

// Tests del A2: uno por estación, en el orden de ./a2, y el examen final.
export const A2_TESTS: CourseTests = {
  lessons: [
    // 1. El mapa de los seis casos
    [
      q(
        '¿Qué caso responde a Кому? Чему?',
        'Dativo',
        ['Genitivo', 'Instrumental', 'Acusativo'],
        'El dativo marca al destinatario: Я звоню маме (кому?).',
      ),
      q(
        '¿En qué caso está ручкой en «Я пишу ручкой»?',
        'Instrumental',
        ['Dativo', 'Preposicional', 'Genitivo'],
        'El instrumental indica con qué se hace algo: чем? — ручкой.',
      ),
      q(
        'Completa: «Я читаю ___ книгу.» (интересный)',
        'интересную',
        ['интересная', 'интересной', 'интересный'],
        'Adjetivo femenino en acusativo: -ая → -ую.',
      ),
      q(
        'Completa: «Я знаю ___ студента.» (новый)',
        'нового',
        ['новый', 'новому', 'новую'],
        'Con un masculino animado el adjetivo en acusativo termina en -ого.',
      ),
      q(
        'Completa: «Я смотрю ___ фильм.» (новый)',
        'новый',
        ['нового', 'новую', 'новом'],
        'Con un masculino inanimado el acusativo es igual al nominativo.',
      ),
      q(
        '¿Cómo se dice «hace una semana»?',
        'неделю назад',
        ['через неделю', 'каждую неделю', 'всю неделю'],
        'назад = hace; через неделю es «dentro de una semana».',
      ),
      q(
        'Completa: «Я вижу моего друга ___ субботу.» (cada sábado)',
        'каждую',
        ['каждая', 'каждый', 'каждой'],
        'La frecuencia va en acusativo: каждую субботу.',
      ),
      q(
        '¿Qué significa «Ивана любит Анна»?',
        'Ana quiere a Iván',
        [
          'Iván quiere a Ana',
          'Iván y Ana se quieren',
          'La frase es incorrecta',
        ],
        'Ивана está en acusativo y Анна en nominativo: el caso, no el orden, dice quién hace qué.',
      ),
      q(
        'Completa: «Ты знаешь ___ человека?» (этот)',
        'этого',
        ['этот', 'эту', 'этому'],
        'Demostrativo masculino animado en acusativo: этого.',
      ),
      q(
        '¿En qué caso está в Москве en «Я живу в Москве»?',
        'Preposicional',
        ['Acusativo', 'Dativo', 'Genitivo'],
        'Где? pide preposicional, que siempre va con preposición.',
      ),
    ],
    // 2. El genitivo singular
    [
      q(
        '¿Cuál es el genitivo de книга?',
        'книги',
        ['книгы', 'книгу', 'книге'],
        'Femenino -а → -ы, pero tras г, к, х se escribe и.',
      ),
      q(
        'Completa: «Это машина ___.» (брат)',
        'брата',
        ['брат', 'брату', 'братом'],
        'La posesión («de») se expresa con genitivo: машина брата.',
      ),
      q(
        'Completa: «У меня нет ___.» (время)',
        'времени',
        ['время', 'времю', 'времена'],
        'время es irregular: genitivo времени.',
      ),
      q(
        'Completa: «Я иду ___ работы.»',
        'с',
        ['из', 'от', 'до'],
        'на работу → с работы. Cada preposición de ida tiene su pareja de vuelta.',
      ),
      q(
        'Completa: «Он идёт ___ магазина.»',
        'из',
        ['с', 'от', 'у'],
        'в магазин → из магазина.',
      ),
      q(
        'Completa: «кофе без ___» (сахар)',
        'сахара',
        ['сахар', 'сахару', 'сахаром'],
        'без pide genitivo: без сахара.',
      ),
      q(
        'Completa: «три ___» (сестра)',
        'сестры',
        ['сестра', 'сестёр', 'сестру'],
        'Con 2, 3 y 4 se usa el genitivo singular: три сестры.',
      ),
      q(
        '¿Cómo se dice «el cinco de mayo» al responder a «Когда?»?',
        'пятого мая',
        ['пятое мая', 'в пятом мае', 'пять мая'],
        'La fecha exacta va con día y mes en genitivo.',
      ),
      q(
        'Completa: «дом ___ бабушки» (мой)',
        'моей',
        ['моя', 'мою', 'моего'],
        'Posesivo femenino en genitivo: моей бабушки.',
      ),
      q(
        '¿Cómo se dice «Iván no está en casa»?',
        'Ивана нет дома.',
        ['Иван нет дома.', 'Ивану нет дома.', 'Иван не дом.'],
        'La ausencia se dice con нет + genitivo: Ивана нет.',
      ),
    ],
    // 3. El genitivo plural y las cantidades
    [
      q(
        '¿Cuál es el genitivo plural de студент?',
        'студентов',
        ['студентей', 'студент', 'студенты'],
        'Masculinos en consonante dura → -ов.',
      ),
      q(
        '¿Cuál es el genitivo plural de книга?',
        'книг',
        ['книгов', 'книгей', 'книги'],
        'Los femeninos en -а pierden la vocal: terminación cero.',
      ),
      q(
        '¿Cuál es el genitivo plural de сумка?',
        'сумок',
        ['сумк', 'сумков', 'сумкей'],
        'Si quedan dos consonantes juntas se inserta о / е: сумок.',
      ),
      q(
        '¿Cuál es el genitivo plural de учитель?',
        'учителей',
        ['учителев', 'учителов', 'учитель'],
        'Los masculinos en -ь hacen el genitivo plural en -ей.',
      ),
      q(
        'Completa: «пять ___» (час)',
        'часов',
        ['часа', 'час', 'часы'],
        'Con 5 o más se usa el genitivo plural.',
      ),
      q(
        'Completa: «У меня мало ___.» (друг)',
        'друзей',
        ['другов', 'друзьев', 'друга'],
        'друг es irregular: друзья → друзей.',
      ),
      q(
        'Completa: «Здесь живёт пятьсот тысяч ___.»',
        'человек',
        ['людей', 'человеков', 'люди'],
        'Con números se usa человек; людей se usa con много, мало, etc.',
      ),
      q(
        'Completa: «двадцать одна ___» (минута)',
        'минута',
        ['минуты', 'минут', 'минуту'],
        'Los números terminados en 1 piden nominativo singular.',
      ),
      q(
        '¿Qué significa «Только наличными»?',
        'Solo en efectivo',
        ['Solo con tarjeta', 'Solo con descuento', 'Solo con recibo'],
        'наличные es el efectivo; pagar con tarjeta es платить картой.',
      ),
      q(
        'Completa: «много ___ студентов» (новый)',
        'новых',
        ['новые', 'новым', 'нового'],
        'El adjetivo en genitivo plural termina en -ых / -их.',
      ),
    ],
    // 4. El dativo
    [
      q(
        'Completa: «Я звоню ___ каждый день.» (мама)',
        'маме',
        ['маму', 'мамы', 'мамой'],
        'звонить pide dativo: -а → -е.',
      ),
      q(
        'Completa: «Он подарил цветы ___.» (жена)',
        'жене',
        ['жену', 'жены', 'женой'],
        'El destinatario va en dativo: подарить жене.',
      ),
      q(
        'Completa: «___ нравится этот город.» (yo)',
        'Мне',
        ['Я', 'Меня', 'Мной'],
        'A quien le gusta va en dativo: мне нравится.',
      ),
      q(
        'Completa: «Мне ___ русские фильмы.»',
        'нравятся',
        ['нравится', 'нравлюсь', 'нравился'],
        'Lo que gusta es el sujeto; фильмы es plural: нравятся.',
      ),
      q(
        'Completa: «Мне ___ словарь.»',
        'нужен',
        ['нужна', 'нужно', 'нужны'],
        'словарь es masculino: нужен.',
      ),
      q(
        '¿Cómo se dice «Aquí no se puede fumar»?',
        'Здесь нельзя курить.',
        ['Здесь не можно курить.', 'Здесь нет курить.', 'Здесь не надо курит.'],
        'La prohibición se dice con нельзя + infinitivo.',
      ),
      q(
        '¿Cómo se dice «Tengo frío»?',
        'Мне холодно.',
        ['Я холодно.', 'У меня холодно.', 'Я холодный.'],
        'Las sensaciones van con dativo: мне холодно.',
      ),
      q(
        'Completa: «Я иду ___ врачу.»',
        'к',
        ['в', 'на', 'у'],
        'Hacia una persona se usa к + dativo: к врачу.',
      ),
      q(
        'Completa: «Моему ___ тридцать лет.» (брат)',
        'брату',
        ['брата', 'брате', 'братом'],
        'La edad se dice con dativo: моему брату.',
      ),
      q(
        '¿Cómo se dice «Me gustó la película»?',
        'Мне понравился фильм.',
        [
          'Мне нравился фильм.',
          'Я понравился фильм.',
          'Мне понравилась фильм.',
        ],
        'Una impresión única en pasado va en perfectivo y concuerda con фильм (masculino): понравился.',
      ),
    ],
    // 5. El instrumental
    [
      q(
        'Completa: «Я живу с ___.» (родители)',
        'родителями',
        ['родителей', 'родителям', 'родители'],
        'с + instrumental; en plural termina en -ами / -ями.',
      ),
      q(
        'Completa: «Я пишу ___.» (ручка)',
        'ручкой',
        ['ручку', 'с ручкой', 'ручке'],
        'El instrumento va en instrumental sin preposición.',
      ),
      q(
        'Completa: «Он работает ___.» (врач)',
        'врачом',
        ['врач', 'врача', 'врачу'],
        'La profesión tras работать va en instrumental.',
      ),
      q(
        '¿Cómo se dice «conmigo»?',
        'со мной',
        ['с меня', 'с мне', 'с я'],
        'Instrumental de я: мной; la preposición pasa a со.',
      ),
      q(
        'Completa: «Я хочу стать ___.» (переводчик)',
        'переводчиком',
        ['переводчик', 'переводчика', 'переводчику'],
        'стать pide instrumental: стать переводчиком.',
      ),
      q(
        'Completa: «Кошка сидит ___ стулом.»',
        'под',
        ['на', 'в', 'из'],
        'под + instrumental = debajo de. на y в piden preposicional (на стуле).',
      ),
      q(
        'Completa: «Я занимаюсь ___.» (спорт)',
        'спортом',
        ['спорт', 'спорта', 'спорту'],
        'заниматься pide instrumental.',
      ),
      q(
        '¿Qué significa «Мы с братом»?',
        'Mi hermano y yo',
        [
          'Nosotros y mi hermano (tres o más)',
          'Estamos contra mi hermano',
          'Mi hermano sin mí',
        ],
        'мы с + instrumental es la forma habitual de decir «X y yo».',
      ),
      q(
        '¿Cómo se dice «en invierno»?',
        'зимой',
        ['в зиме', 'на зиму', 'зима'],
        'Las estaciones se dicen con el instrumental, ya como adverbio: зимой, летом.',
      ),
      q(
        'Completa: «Я иду в магазин ___ хлебом.»',
        'за',
        ['с', 'для', 'по'],
        'за + instrumental significa «a buscar»: за хлебом.',
      ),
    ],
    // 6. El preposicional completo y el resumen de los casos
    [
      q(
        'Completa: «Я живу в ___ городе.» (большой)',
        'большом',
        ['большой', 'большого', 'большому'],
        'Adjetivo masculino en preposicional: -ом.',
      ),
      q(
        'Completa: «Мы живём в ___ квартире.» (новый)',
        'новой',
        ['новую', 'новом', 'новая'],
        'Adjetivo femenino en preposicional: -ой.',
      ),
      q(
        '¿Cómo se dice «en enero»?',
        'в январе',
        ['в январь', 'января', 'на январе'],
        'Los meses van con в + preposicional.',
      ),
      q(
        '¿Cómo se dice «el año pasado»?',
        'в прошлом году',
        ['в прошлый год', 'на прошлом годе', 'прошлого года'],
        'Los años van con в … году.',
      ),
      q(
        '¿Cómo se dice «la semana que viene»?',
        'на следующей неделе',
        ['в следующей неделе', 'в следующую неделю', 'следующей недели'],
        'Las semanas van con на + preposicional.',
      ),
      q(
        'Completa: «Я езжу на работу ___.» (en autobús)',
        'на автобусе',
        ['в автобусе', 'на автобус', 'с автобусом'],
        'El transporte se dice con на + preposicional.',
      ),
      q(
        'Completa: «Он звонит ___ маме.» (a su propia mamá)',
        'своей',
        ['его', 'её', 'свою'],
        'Si el dueño es el sujeto se usa свой; aquí en dativo femenino: своей.',
      ),
      q(
        'Completa: «Я играю ___ гитаре.»',
        'на',
        ['в', 'с', 'о'],
        'Los instrumentos van con на + preposicional; los deportes, con в + acusativo.',
      ),
      q(
        '¿Cuál es la pareja correcta de «в школу» para responder a «Откуда?»?',
        'из школы',
        ['с школы', 'от школы', 'в школе'],
        'в → из: в школу / из школы.',
      ),
      q(
        'Completa: «Мы говорим ___ этом.»',
        'об',
        ['о', 'обо', 'в'],
        'Antes de vocal о se convierte en об: об этом.',
      ),
    ],
    // 7. El aspecto verbal
    [
      q(
        'Completa: «Вчера я весь вечер ___ книгу.»',
        'читал',
        ['прочитал', 'прочитаю', 'читаю'],
        '«Весь вечер» indica proceso: imperfectivo.',
      ),
      q(
        'Completa: «Я наконец ___ книгу. Она очень интересная!»',
        'прочитал',
        ['читал', 'читаю', 'буду читать'],
        '«Наконец» señala un resultado: perfectivo.',
      ),
      q(
        '¿Cuál es el perfectivo de покупать?',
        'купить',
        ['покупить', 'скупать', 'покупывать'],
        'La pareja es покупать / купить.',
      ),
      q(
        '¿Cuál es el perfectivo de говорить con el sentido de «decir»?',
        'сказать',
        ['рассказывать', 'говорять', 'сговорить'],
        'говорить / сказать es una pareja de raíces distintas.',
      ),
      q(
        'Completa: «Я написал письмо ___ два часа.»',
        'за',
        ['на', 'в', 'через'],
        'за + tiempo indica cuánto se tardó en terminar; acompaña al perfectivo.',
      ),
      q(
        'Completa: «Раньше я часто ___ детективы.»',
        'читал',
        ['прочитал', 'прочитаю', 'прочитать'],
        'Las acciones repetidas («часто») van en imperfectivo.',
      ),
      q(
        'Completa: «Я начал ___.»',
        'читать',
        ['прочитать', 'прочитал', 'читал'],
        'Después de начать, кончить y продолжать va siempre el infinitivo imperfectivo.',
      ),
      q(
        '¿Por qué el perfectivo no tiene presente?',
        'Porque una acción completa no puede estar ocurriendo ahora',
        [
          'Porque solo se usa en pasado',
          'Porque no se puede conjugar',
          'Porque el presente se forma con быть',
        ],
        'Sus formas «de presente» significan futuro: я прочитаю = leeré.',
      ),
      q(
        '¿Cuál es el pasado masculino de найти?',
        'нашёл',
        ['найдил', 'найл', 'нашла'],
        'найти → нашёл, нашла, нашли.',
      ),
      q(
        'Completa: «Я встал, ___ и пошёл на работу.»',
        'позавтракал',
        ['завтракал', 'завтракаю', 'буду завтракать'],
        'Las acciones sucesivas y completas van en perfectivo.',
      ),
    ],
    // 8. El futuro y los planes
    [
      q(
        'Completa: «Завтра я ___ работать весь день.»',
        'буду',
        ['будет', 'был', 'есть'],
        'Futuro imperfectivo: быть en futuro + infinitivo. Con я: буду.',
      ),
      q(
        '¿Qué frase es correcta?',
        'Завтра я напишу письмо.',
        [
          'Завтра я буду написать письмо.',
          'Завтра я написал письмо.',
          'Завтра я буду напишу письмо.',
        ],
        'Nunca se combina буду con un perfectivo; el futuro perfectivo es simple.',
      ),
      q(
        '¿Cuál es el futuro de купить para я?',
        'куплю',
        ['купю', 'буду купить', 'купу'],
        'En la forma я aparece una л: куплю.',
      ),
      q(
        '¿Cuál es el futuro de сказать para я?',
        'скажу',
        ['сказаю', 'скажю', 'буду сказать'],
        'сказать: я скажу, ты скажешь.',
      ),
      q(
        'Completa: «Если будет хорошая погода, мы ___ в парк.»',
        'пойдём',
        ['пошли', 'шли', 'ходили'],
        'En ruso va futuro en las dos partes de la condición.',
      ),
      q(
        '¿Cómo se dice «Mañana no habrá clase»?',
        'Завтра не будет урока.',
        [
          'Завтра не будет урок.',
          'Завтра нет будет урока.',
          'Завтра не был урока.',
        ],
        'Negación de existencia en futuro: не будет + genitivo.',
      ),
      q(
        '¿Qué significa «Я собираюсь поехать в Россию»?',
        'Pienso ir a Rusia',
        ['Estuve en Rusia', 'Quiero volver de Rusia', 'Suelo ir a Rusia'],
        'собираться + infinitivo expresa un plan.',
      ),
      q(
        'Completa: «Они ___ мне книгу.» (дать, futuro)',
        'дадут',
        ['дают', 'дадят', 'будут дать'],
        'дать: дам, дашь, даст, дадим, дадите, дадут.',
      ),
      q(
        '¿Qué respondes si no puedes aceptar una invitación?',
        'К сожалению, я не могу. Я занят.',
        ['С удовольствием!', 'Договорились!', 'Хорошая идея!'],
        'К сожалению = lamentablemente; занят = ocupado.',
      ),
      q(
        '¿Cuál expresa una acción que se repetirá?',
        'Я буду звонить тебе каждый день.',
        [
          'Я позвоню тебе в пять часов.',
          'Я звонил тебе каждый день.',
          'Я позвонил тебе.',
        ],
        '«Каждый день» es repetición: futuro imperfectivo.',
      ),
    ],
    // 9. Verbos de movimiento y transporte
    [
      q(
        'Completa: «Сейчас я ___ в магазин.» (a pie)',
        'иду',
        ['хожу', 'еду', 'езжу'],
        'Un movimiento en marcha y a pie: идти.',
      ),
      q(
        'Completa: «Каждое лето мы ___ на море.»',
        'ездим',
        ['едем', 'идём', 'поехали'],
        'Costumbre y en transporte: ездить.',
      ),
      q(
        'Completa: «Вчера я ___ в театр.» (fui y volví)',
        'ходил',
        ['шёл', 'иду', 'пойду'],
        'En pasado, ходил significa que fui y volví.',
      ),
      q(
        '¿Qué significa «Он пошёл в магазин»?',
        'Salió hacia la tienda (y aún no ha vuelto)',
        [
          'Suele ir a la tienda',
          'Fue a la tienda y ya volvió',
          'Está dentro de la tienda',
        ],
        'пойти marca el comienzo del viaje.',
      ),
      q(
        '¿Qué prefijo significa «llegar»?',
        'при-',
        ['у-', 'вы-', 'пере-'],
        'при- = llegar (прийти, приехать); у- = irse; вы- = salir; пере- = cruzar.',
      ),
      q(
        '¿Cómo preguntas cómo llegar al centro en transporte?',
        'Как доехать до центра?',
        ['Как дойти до центра?', 'Как уехать из центра?', 'Как войти в центр?'],
        'доехать = llegar en transporte; дойти sería a pie.',
      ),
      q(
        'Completa: «Я ___ на работу на метро.» (habitualmente)',
        'езжу',
        ['еду', 'хожу', 'иду'],
        'ездить: я езжу. Es costumbre y en transporte.',
      ),
      q(
        'Completa: «Она уже ___.» (se fue, a pie)',
        'ушла',
        ['пришла', 'вошла', 'шла'],
        'у- = irse: уйти → ушла.',
      ),
      q(
        '¿Qué significa пересадка?',
        'transbordo',
        ['horario', 'parada', 'equipaje'],
        'пересадка = transbordo. Horario es расписание y parada, остановка.',
      ),
      q(
        '¿Cómo se dice «a pie»?',
        'пешком',
        ['пешка', 'ногой', 'на ноге'],
        'идти пешком = ir a pie.',
      ),
    ],
    // 10. Verbos reflexivos e imperativo
    [
      q(
        'Completa: «Я ___ русским языком.» (заниматься)',
        'занимаюсь',
        ['занимаюся', 'занимаешься', 'занимается'],
        'Tras vocal se escribe -сь: занимаюсь.',
      ),
      q(
        'Completa: «Урок ___ в девять.»',
        'начинается',
        ['начинает', 'начинаются', 'начинаюсь'],
        'Lo que ocurre solo lleva -ся: урок начинается. «Учитель начинает урок».',
      ),
      q(
        '¿Qué verbo se usa para «soy estudiante de la universidad»?',
        'учиться: Я учусь в университете.',
        [
          'учить: Я учу в университете.',
          'изучать: Я изучаю в университете.',
          'заниматься: Я занимаюсь университет.',
        ],
        'учиться + где indica ser estudiante de un lugar.',
      ),
      q(
        '¿Cuál es el imperativo de читать (forma вы)?',
        'Читайте!',
        ['Читаите!', 'Читите!', 'Читаете!'],
        'Si la raíz termina en vocal (чита-ют) se añade -й(те).',
      ),
      q(
        '¿Cuál es el imperativo de сказать (forma вы)?',
        'Скажите!',
        ['Сказайте!', 'Скажете!', 'Сказите!'],
        'сказать: скаж-ут → Скажи(те)!',
      ),
      q(
        '¿Cómo se prohíbe abrir la ventana?',
        'Не открывайте окно!',
        ['Не откройте окно!', 'Нет открыть окно!', 'Не открываете окно!'],
        'La prohibición (не + imperativo) va en imperfectivo.',
      ),
      q(
        '¿Cuál es el imperativo irregular de пить?',
        'Пей!',
        ['Пий!', 'Пи!', 'Пьёй!'],
        'пить → Пей(те)!, como есть → Ешь(те)!',
      ),
      q(
        '¿Cómo propones ir al cine juntos?',
        'Давай пойдём в кино!',
        ['Давай пошли бы в кино!', 'Пусть пойдём в кино!', 'Давай иду в кино!'],
        'Давай(те) + perfectivo en forma мы.',
      ),
      q(
        'Completa: «Я учу ___.»',
        'новые слова',
        ['в университете', 'новыми словами', 'о новых словах'],
        'учить + acusativo = aprender, memorizar.',
      ),
      q(
        '¿Qué significa «Не волнуйтесь!»?',
        '¡No se preocupe!',
        ['¡No se mueva!', '¡No se siente!', '¡No se olvide!'],
        'волноваться = preocuparse.',
      ),
    ],
    // 11. Comparar, opinar y unir frases
    [
      q(
        '¿Cuál es el comparativo de хороший?',
        'лучше',
        ['хорошее', 'более хороше', 'хуже'],
        'Es irregular: хороший → лучше. хуже es el de плохой.',
      ),
      q(
        '¿Cuál es el comparativo de дорогой?',
        'дороже',
        ['дорогее', 'дешевле', 'дорогей'],
        'дорогой → дороже; дешевле es «más barato».',
      ),
      q(
        '¿Qué frase es correcta?',
        'Москва больше Петербурга.',
        [
          'Москва больше Петербург.',
          'Москва больше чем Петербурга.',
          'Москва большее Петербурга.',
        ],
        'Sin чем, el segundo término va en genitivo.',
      ),
      q(
        'Completa: «Брат старше меня ___ три года.»',
        'на',
        ['в', 'за', 'с'],
        'La diferencia se expresa con на + cantidad.',
      ),
      q(
        'Completa: «Байкал — ___ глубокое озеро в мире.»',
        'самое',
        ['самый', 'самая', 'самые'],
        'самый concuerda con el sustantivo: озеро es neutro.',
      ),
      q(
        'Completa: «Шёл дождь, ___ я не пошёл гулять.»',
        'поэтому',
        ['потому что', 'хотя', 'чтобы'],
        'поэтому introduce la consecuencia; потому что, la causa.',
      ),
      q(
        'Completa: «Я хочу, чтобы ты ___.»',
        'пришёл',
        ['придёшь', 'прийти', 'приходишь'],
        'Con чтобы y un sujeto distinto el verbo va en pasado.',
      ),
      q(
        'Completa: «Это книга, ___ я читаю.»',
        'которую',
        ['которая', 'который', 'которой'],
        'который concuerda con книга (fem.) y aquí es objeto directo: acusativo.',
      ),
      q(
        'Completa: «Это город, в ___ я родился.»',
        'котором',
        ['который', 'которого', 'которую'],
        'Tras в (¿dónde?) va el preposicional masculino: в котором.',
      ),
      q(
        '¿Cómo se dice «No sé si vendrá»?',
        'Я не знаю, придёт ли он.',
        [
          'Я не знаю, если он придёт.',
          'Я не знаю, что он придёт ли.',
          'Я не знаю, придёт если он.',
        ],
        'El «si» indirecto se dice con ли tras el verbo, no con если.',
      ),
    ],
    // 12. La vida diaria
    [
      q(
        'Completa: «У меня ___ зубы.»',
        'болят',
        ['болит', 'болею', 'болел'],
        'зубы es plural: болят.',
      ),
      q(
        '¿Cómo se dice «Me siento mal»?',
        'Я чувствую себя плохо.',
        ['Я чувствую плохой.', 'Мне чувствую плохо.', 'Я себя плохой.'],
        'чувствовать себя + adverbio.',
      ),
      q(
        '¿Qué significa «У меня температура»?',
        'Tengo fiebre',
        ['Tengo frío', 'Tengo calor', 'Tengo tos'],
        'En ruso «tener temperatura» es tener fiebre.',
      ),
      q(
        '¿Cómo se dice «Llueve»?',
        'Идёт дождь.',
        ['Дождь едет.', 'Есть дождь.', 'Делает дождь.'],
        'La lluvia y la nieve «van»: идёт дождь, идёт снег.',
      ),
      q(
        '¿Qué significa «Вам очень идёт!»?',
        '¡Le queda muy bien!',
        ['¡Le queda grande!', '¡Vaya rápido!', '¡Le toca a usted!'],
        'идти + dativo se usa para la ropa que sienta bien.',
      ),
      q(
        '¿Cómo se pide una habitación doble por tres noches?',
        'Я хочу забронировать номер на двоих на три ночи.',
        [
          'Я хочу примерить номер на двоих на три ночи.',
          'Я хочу заполнить номер для два на три ночей.',
          'Я хочу платить комната два три ночи.',
        ],
        'забронировать номер = reservar una habitación.',
      ),
      q(
        '¿Qué significa «Вы ошиблись номером»?',
        'Se equivocó de número',
        ['Vuelvo a llamar', 'No está ahora', 'Se oye mal'],
        'ошибиться = equivocarse.',
      ),
      q(
        '¿Cómo empieza una carta formal a un hombre?',
        'Уважаемый Иван Петрович!',
        ['Дорогой Ваня!', 'Привет, Иван!', 'Целую, Иван!'],
        'Уважаемый + nombre y patronímico es el encabezado formal.',
      ),
      q(
        'Completa: «Поздравляю тебя ___ днём рождения!»',
        'с',
        ['на', 'за', 'для'],
        'поздравлять + кого + с чем (instrumental).',
      ),
      q(
        'Completa: «Спасибо ___ помощь!»',
        'за',
        ['на', 'для', 'с'],
        'спасибо за + acusativo.',
      ),
    ],
  ],
  exam: {
    title: 'Examen final A2',
    instructions: `Este examen cubre las doce estaciones del curso. Son 15 preguntas de opción múltiple; vale 100 puntos y se aprueba con 70. Puedes repetirlo las veces que quieras: cuenta tu mejor nota.

TEXTO PARA LAS PREGUNTAS 12 A 15
Привет, Наташа!
Пишу тебе из Петербурга. Я приехал сюда в прошлую пятницу на поезде и буду здесь до конца месяца. Живу у своего друга Андрея, который работает врачом в большой больнице. Его квартира находится недалеко от центра, рядом с красивым парком.
Погода здесь хуже, чем в Москве: каждый день идёт дождь, поэтому мне пришлось купить тёплую куртку. Но город мне очень нравится! Вчера мы с Андреем ходили в Эрмитаж, а завтра поедем в Петергоф, если не будет дождя.
К сожалению, во вторник я заболел: у меня болело горло, и я два дня лежал дома. Сейчас я чувствую себя намного лучше.
Пиши! Обнимаю.
Твой Карлос`,
    questions: [
      q(
        'Completa: «Я вижу ___ старшего брата.» (твой)',
        'твоего',
        ['твой', 'твоему', 'твою'],
        'Masculino animado en acusativo: твоего старшего брата.',
      ),
      q(
        'Completa: «У нас нет ___.» (собака)',
        'собаки',
        ['собаку', 'собака', 'собакы'],
        'нет + genitivo; tras к se escribe и.',
      ),
      q(
        'Completa: «В Москве много ___.» (музей)',
        'музеев',
        ['музеи', 'музей', 'музеей'],
        'много + genitivo plural; los masculinos en -й terminan en -ев.',
      ),
      q(
        'Completa: «Помогите ___, пожалуйста!» (я)',
        'мне',
        ['меня', 'мной', 'я'],
        'помогать / помочь pide dativo.',
      ),
      q(
        'Completa: «Она говорит с ___.» (подруга)',
        'подругой',
        ['подруге', 'подругу', 'подруги'],
        'с + instrumental: -а → -ой.',
      ),
      q(
        'Completa: «Я родился ___ тысяча девятьсот девяносто восьмом году.»',
        'в',
        ['на', 'с', 'о'],
        'Los años van con в … году.',
      ),
      q(
        '¿Cuál expresa una acción terminada con resultado?',
        'Я выучил все слова.',
        [
          'Я учил слова весь день.',
          'Я часто учил слова.',
          'Я буду учить слова.',
        ],
        'выучил es perfectivo: ya me las sé.',
      ),
      q(
        'Completa: «Когда я приеду, я ___ тебе.»',
        'позвоню',
        ['звонил', 'буду позвонить', 'позвонил'],
        'Una acción única en el futuro: futuro perfectivo, sin буду.',
      ),
      q(
        'Completa: «Обычно я ___ домой в шесть.»',
        'прихожу',
        ['приду', 'пришёл', 'иду вчера'],
        'Lo habitual pide el imperfectivo приходить.',
      ),
      q(
        '¿Cuál es la petición correcta, concreta y cortés?',
        'Откройте окно, пожалуйста.',
        [
          'Открывайте бы окно.',
          'Открыть окно вы.',
          'Не откройте окно, пожалуйста.',
        ],
        'Una petición concreta, de una vez, va en imperativo perfectivo.',
      ),
      q(
        'Completa: «Этот телефон намного ___, чем тот.» (дешёвый)',
        'дешевле',
        ['дешёвее', 'более дешевле', 'дешёвый'],
        'Comparativo irregular: дешёвый → дешевле.',
      ),
      q(
        'Según la carta, ¿cómo llegó Carlos a San Petersburgo?',
        'En tren',
        ['En avión', 'En carro', 'En autobús'],
        '«Я приехал сюда… на поезде».',
      ),
      q(
        'Según la carta, ¿a qué se dedica Andréi?',
        'Es médico',
        ['Es ingeniero', 'Es guía del Hermitage', 'Es estudiante'],
        '«Андрея, который работает врачом в большой больнице».',
      ),
      q(
        'Según la carta, ¿por qué compró Carlos una chaqueta?',
        'Porque llueve todos los días',
        [
          'Porque la suya era pequeña',
          'Porque nieva',
          'Porque se la pidió Andréi',
        ],
        '«Каждый день идёт дождь, поэтому мне пришлось купить тёплую куртку».',
      ),
      q(
        'Según la carta, ¿de qué depende que vayan a Peterhof?',
        'De que no llueva',
        [
          'De que Carlos se mejore',
          'De que Andréi no trabaje',
          'De que consigan boletos',
        ],
        '«Завтра поедем в Петергоф, если не будет дождя».',
      ),
    ],
  },
};
