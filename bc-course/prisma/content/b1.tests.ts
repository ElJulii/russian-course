import { q, type CourseTests } from './course-content';

// Tests del B1: uno por estación, en el orden de ./b1, y el examen final.
export const B1_TESTS: CourseTests = {
  lessons: [
    // 1. Los casos en plural
    [
      q(
        'Completa: «Я вижу ___ студентов.» (новый)',
        'новых',
        ['новые', 'новым', 'новыми'],
        'El acusativo animado en plural es igual al genitivo: новых студентов.',
      ),
      q(
        'Completa: «Я вижу ___ дома.» (новый, plural)',
        'новые',
        ['новых', 'новым', 'новыми'],
        'El acusativo inanimado en plural es igual al nominativo.',
      ),
      q(
        '¿Cuál es el instrumental plural de люди?',
        'людьми',
        ['людями', 'людами', 'людей'],
        'Es irregular, como детьми y дочерьми.',
      ),
      q(
        'Completa: «Он в ___ пальто.» (новый)',
        'новом',
        ['новый', 'новым', 'нового'],
        'пальто no se declina; el caso (preposicional) se ve en el adjetivo.',
      ),
      q(
        'Completa: «Благодаря ___ мы закончили вовремя.» (новые технологии)',
        'новым технологиям',
        ['новых технологий', 'новыми технологиями', 'новые технологии'],
        'благодаря pide dativo.',
      ),
      q(
        'Completa: «Город гордится ___.» (новые парки)',
        'новыми парками',
        ['новым паркам', 'новых парков', 'новые парки'],
        'гордиться pide instrumental.',
      ),
      q(
        'Completa: «Жители нуждаются ___ удобных дорогах.»',
        'в',
        ['на', 'о', 'к'],
        'нуждаться в + preposicional.',
      ),
      q(
        '¿Cuál es el genitivo de имя?',
        'имени',
        ['имя', 'имена', 'имён'],
        'Los neutros en -мя hacen имени en genitivo, dativo y preposicional.',
      ),
      q(
        'Completa: «Он не сказал ни ___.» (слово)',
        'слова',
        ['слово', 'слову', 'словом'],
        'Tras ни y la negación enfática va el genitivo.',
      ),
      q(
        'Completa: «Я говорил обо ___ студентах.» (все)',
        'всех',
        ['всем', 'все', 'всеми'],
        'Preposicional plural de все: обо всех.',
      ),
    ],
    // 2. Verbos de movimiento sin prefijo
    [
      q(
        'Completa: «Мать ___ ребёнка на руках.»',
        'несёт',
        ['ведёт', 'везёт', 'идёт'],
        'нести = llevar en brazos o en las manos, a pie.',
      ),
      q(
        'Completa: «Мать ___ ребёнка в коляске.»',
        'везёт',
        ['несёт', 'ведёт', 'едет'],
        'везти = llevar en algo con ruedas o en un vehículo.',
      ),
      q(
        'Completa: «Он ___ машину уже десять лет.» (sabe conducir)',
        'водит',
        ['ведёт', 'возит', 'везёт'],
        'La capacidad pide el multidireccional: водить машину.',
      ),
      q(
        'Completa: «Когда я ___ домой, я встретил Анну.»',
        'шёл',
        ['ходил', 'пошёл', 'хожу'],
        'Una acción de fondo en curso pide el unidireccional.',
      ),
      q(
        'Completa: «В субботу мы ___ на дачу.» (fuimos y volvimos)',
        'ездили',
        ['ехали', 'едем', 'поедем'],
        'Ida y vuelta ya hecha: multidireccional en pasado.',
      ),
      q(
        'Completa: «Я не умею ___.»',
        'плавать',
        ['плыть', 'поплыть', 'плыву'],
        'La capacidad se expresa con el multidireccional: плавать.',
      ),
      q(
        '¿Qué significa «Мне везёт!»?',
        '¡Tengo suerte!',
        ['¡Me llevan!', '¡Me toca conducir!', '¡Voy con prisa!'],
        'везти en sentido figurado: tener suerte. «Ему не повезло» = no tuvo suerte.',
      ),
      q(
        '¿Qué expresa походить en «Мы походили по магазинам»?',
        'Movernos un rato',
        ['Empezar a caminar', 'Llegar a las tiendas', 'Salir de las tiendas'],
        'по- + multidireccional = moverse un rato; по- + unidireccional = empezar a moverse.',
      ),
      q(
        '¿Qué verbo se usa con урок, собрание y переговоры?',
        'вести',
        ['нести', 'везти', 'ходить'],
        'вести урок, вести переговоры, вести себя.',
      ),
      q(
        'Completa: «Птицы ___ над морем.» (sin rumbo)',
        'летают',
        ['летят', 'полетят', 'прилетели'],
        'El movimiento sin dirección pide el multidireccional.',
      ),
    ],
    // 3. Verbos de movimiento con prefijos
    [
      q(
        '¿Cuál es el imperfectivo de прийти?',
        'приходить',
        ['приидти', 'прихаживать', 'придти'],
        'Con prefijo, el multidireccional pasa a ser la pareja imperfectiva.',
      ),
      q(
        'Completa: «Отойдите ___ края платформы.»',
        'от',
        ['из', 'с', 'до'],
        'от- pide от + genitivo.',
      ),
      q(
        'Completa: «___ к окну.» (Acérquese)',
        'Подойдите',
        ['Отойдите', 'Войдите', 'Обойдите'],
        'под- = acercarse: подойти к + dativo.',
      ),
      q(
        '¿Qué significa «К тебе приходил Иван»?',
        'Iván vino y ya se fue',
        ['Iván ha llegado y está aquí', 'Iván va a venir', 'Iván suele venir'],
        'El imperfectivo en pasado puede indicar acción anulada: ida y vuelta.',
      ),
      q(
        'Completa: «Мы ___ свою остановку.» (nos la pasamos)',
        'проехали',
        ['приехали', 'заехали', 'подъехали'],
        'про- = pasar de largo.',
      ),
      q(
        'Completa: «Я ___ к тебе вечером.» (de pasada)',
        'зайду',
        ['уйду', 'выйду', 'дойду'],
        'за- = pasar de camino, por poco tiempo.',
      ),
      q(
        '¿Qué significa «Она вышла замуж»?',
        'Se casó',
        ['Salió de casa', 'Se divorció', 'Se enfadó'],
        'выйти замуж = casarse (la mujer).',
      ),
      q(
        '¿Qué significa «Это время мне подходит»?',
        'Esa hora me viene bien',
        ['Se me acaba el tiempo', 'Ya es mi turno', 'Esa hora me queda lejos'],
        'подходить en sentido figurado: convenir.',
      ),
      q(
        'Completa: «Сестра ___ подарки всей семье.» (trajo, llegó en tren)',
        'привезла',
        ['принесла', 'привела', 'унесла'],
        'привезти = traer en un vehículo.',
      ),
      q(
        'Completa: «После концерта все ___.»',
        'разошлись',
        ['сошлись', 'пришли', 'зашли'],
        'раз-…-ся = dispersarse; с-…-ся = juntarse.',
      ),
    ],
    // 4. El aspecto a fondo
    [
      q(
        'Completa: «Он перестал ___.»',
        'курить',
        ['покурить', 'выкурить', 'закурить'],
        'Tras verbos de comienzo y fin va el infinitivo imperfectivo.',
      ),
      q(
        'Completa: «Я забыл ___ хлеб.»',
        'купить',
        ['покупать', 'покупаю', 'куплю'],
        'Tras забыть, успеть y удаться es habitual el perfectivo.',
      ),
      q(
        '¿Qué significa «Сюда нельзя войти»?',
        'Es imposible entrar',
        ['Está prohibido entrar', 'No hace falta entrar', 'No conviene entrar'],
        'нельзя + perfectivo = imposible; + imperfectivo (входить) = prohibido.',
      ),
      q(
        '¿Cuál es una invitación cortés a un invitado?',
        'Садитесь, пожалуйста!',
        ['Сядьте немедленно!', 'Не сядьте!', 'Сесть!'],
        'La invitación cortés va en imperativo imperfectivo.',
      ),
      q(
        '¿Qué expresa «Смотри не опоздай!»?',
        'Una advertencia',
        ['Una prohibición', 'Una invitación', 'Una orden de empezar'],
        'не + perfectivo advierte de algo involuntario.',
      ),
      q(
        'Completa: «Он ___ доклад за ночь.»',
        'написал',
        ['писал', 'пишет', 'будет писать'],
        'за + tiempo acompaña al perfectivo.',
      ),
      q(
        'Completa: «Он приехал ___ неделю.» (para quedarse una semana)',
        'на',
        ['за', 'в', 'через'],
        'La duración del resultado se expresa con на + acusativo.',
      ),
      q(
        '¿Qué significa «Он сдавал экзамен»?',
        'Se presentó al examen (no se sabe si aprobó)',
        ['Aprobó el examen', 'Suspendió el examen', 'Preparó el examen'],
        'сдавать = presentarse; сдать = aprobar.',
      ),
      q(
        'Completa: «Он ___ там десять лет.» (todo ese periodo)',
        'проработал',
        ['поработал', 'заработал', 'отработает'],
        'про- = durante todo un periodo; exige indicar la duración.',
      ),
      q(
        'Completa: «Не надо ___ ему.»',
        'звонить',
        ['позвонить', 'позвоню', 'позвонил'],
        'Tras не надо, не нужно y не стоит va el imperfectivo.',
      ),
    ],
    // 5. Participios activos
    [
      q(
        '¿Cuál es el participio activo de presente de читать?',
        'читающий',
        ['читавший', 'читаемый', 'читанный'],
        'читаю-т → читающий. читавший es de pasado.',
      ),
      q(
        '¿Cuál es el participio activo de pasado de написать?',
        'написавший',
        ['написанный', 'написающий', 'пишущий'],
        'написал → написавший. написанный es pasivo.',
      ),
      q(
        '¿Cuál equivale a «Студент, который живёт в этой комнате»?',
        'Студент, живущий в этой комнате',
        [
          'Студент, живший в этой комнате',
          'Студент, живя в этой комнате',
          'Студент, житый в этой комнате',
        ],
        'который живёт (presente) → живущий.',
      ),
      q(
        'Completa: «Я знаю студента, ___ в этой комнате.»',
        'живущего',
        ['живущий', 'живущему', 'живущим'],
        'Concuerda con студента: acusativo animado = genitivo.',
      ),
      q(
        '¿Cuál es el participio activo de pasado de идти?',
        'шедший',
        ['идший', 'идущий', 'шёлший'],
        'Es especial: идти → шедший; прийти → пришедший.',
      ),
      q(
        '¿Cuál es el participio de presente femenino de заниматься?',
        'занимающаяся',
        ['занимающаясь', 'занимающася', 'занимавшаясь'],
        'En los participios se escribe siempre -ся, nunca -сь.',
      ),
      q(
        '¿Qué frase está bien puntuada?',
        'Дети, играющие во дворе, очень шумят.',
        [
          'Дети играющие во дворе, очень шумят.',
          'Играющие во дворе, дети очень шумят.',
          'Дети, играющие во дворе очень шумят.',
        ],
        'Después del sustantivo el giro participial va entre comas; antes, sin comas.',
      ),
      q(
        '¿Qué significa бывший?',
        'ex, antiguo',
        ['siguiente', 'futuro', 'verdadero'],
        'бывший = ex; следующий = siguiente; будущий = futuro; настоящий = verdadero.',
      ),
      q(
        'Completa: «Мы говорили с девушкой, ___ из Перу.»',
        'приехавшей',
        ['приехавшая', 'приехавшую', 'приехавший'],
        'Concuerda con девушкой: instrumental femenino.',
      ),
      q(
        '¿De qué verbos se forma el participio activo de presente?',
        'Solo de los imperfectivos',
        [
          'Solo de los perfectivos',
          'De los dos aspectos',
          'Solo de los reflexivos',
        ],
        'El perfectivo no tiene presente, así que tampoco participio de presente.',
      ),
    ],
    // 6. Participios pasivos y forma corta
    [
      q(
        '¿Cuál es el participio pasivo de pasado de написать?',
        'написанный',
        ['написавший', 'написатый', 'пишемый'],
        'Verbos en -ать → -нн-: написанный.',
      ),
      q(
        '¿Cuál es el participio pasivo de pasado de открыть?',
        'открытый',
        ['открыенный', 'открывший', 'открынный'],
        'Verbos en -ыть → -т-: открытый.',
      ),
      q(
        '¿Cuál es el participio pasivo de pasado de купить?',
        'купленный',
        ['купитый', 'купенный', 'купивший'],
        'Verbos en -ить → -енн-, con el cambio de la forma я (куплю): купленный.',
      ),
      q(
        'Completa: «Роман написан ___.» (Толстой)',
        'Толстым',
        ['Толстого', 'Толстому', 'Толстой'],
        'El agente de la pasiva va en instrumental.',
      ),
      q(
        'Completa: «Все билеты ___.»',
        'проданы',
        ['проданные', 'продан', 'проданны'],
        'Como predicado se usa la forma corta, con una sola н y en plural.',
      ),
      q(
        '¿Cuál se escribe con una sola н?',
        'жареная рыба',
        ['жаренная в масле рыба', 'написанное письмо', 'прочитанная книга'],
        'Adjetivo sin prefijo ni palabras dependientes: una н.',
      ),
      q(
        '¿Qué expresa «Мост строится уже два года»?',
        'Un proceso en pasiva',
        ['Una acción terminada', 'Una orden', 'Una posibilidad futura'],
        'El imperfectivo en -ся expresa la pasiva de proceso.',
      ),
      q(
        '¿Qué significa уважаемый?',
        'estimado',
        ['inolvidable', 'necesario', 'favorito'],
        'Participio pasivo de presente de уважать, hoy adjetivo.',
      ),
      q(
        'Completa: «Стол сделан ___ дерева.»',
        'из',
        ['от', 'с', 'на'],
        'De qué está hecho algo: из + genitivo.',
      ),
      q(
        'Completa: «Дом ___ в следующем году.»',
        'будет построен',
        ['был построен', 'строился', 'построил'],
        'Pasiva en futuro: будет + participio corto.',
      ),
    ],
    // 7. Los gerundios
    [
      q(
        '¿Cuál es el gerundio imperfectivo de читать?',
        'читая',
        ['читав', 'читающий', 'читаючи'],
        'чита-ют → читая.',
      ),
      q(
        '¿Cuál es el gerundio perfectivo de прочитать?',
        'прочитав',
        ['прочитая', 'прочитавший', 'прочитано'],
        'прочитал → прочитав.',
      ),
      q(
        '¿Cuál es el gerundio perfectivo de вернуться?',
        'вернувшись',
        ['вернувся', 'вернувши', 'вернуясь'],
        'Los reflexivos perfectivos terminan en -вшись.',
      ),
      q(
        '¿Cuál es el gerundio perfectivo de прийти?',
        'придя',
        ['пришёв', 'прийдя', 'приходя'],
        'Los verbos de movimiento con prefijo forman el gerundio en -я: придя, войдя, уйдя.',
      ),
      q(
        '¿Qué frase es correcta?',
        'Подъезжая к станции, я увидел море.',
        [
          'Подъезжая к станции, у меня слетела шляпа.',
          'Подъезжая к станции, мне стало холодно.',
          'Подъезжая к станции, начался дождь.',
        ],
        'El gerundio y el verbo principal deben tener el mismo sujeto.',
      ),
      q(
        '¿Qué significa «не спеша»?',
        'sin prisa',
        ['sin decir nada', 'sin pensar', 'sin despedirse'],
        'не + gerundio = «sin + infinitivo».',
      ),
      q(
        '¿Qué significa «честно говоря»?',
        'sinceramente',
        ['en resumen', 'a juzgar por', 'por no hablar de'],
        'En resumen es короче говоря; a juzgar por, судя по.',
      ),
      q(
        '¿Qué sentido tiene el gerundio en «Не зная адреса, я не смог найти дом»?',
        'Causa',
        ['Condición', 'Modo', 'Concesión'],
        '«Como no sabía la dirección…»: causa.',
      ),
      q(
        '¿En cuál de estas frases el gerundio NO lleva comas?',
        'Он читал лёжа.',
        [
          'Он улыбаясь вошёл в комнату.',
          'Прочитав письмо она заплакала.',
          'Гуляя по парку я встретил друга.',
        ],
        'лёжа, сидя, стоя y молча funcionan como adverbios fijos y no se separan.',
      ),
      q(
        '¿Cuál es el gerundio de быть?',
        'будучи',
        ['бывая', 'быв', 'будя'],
        'Es irregular: будучи.',
      ),
    ],
    // 8. Condicional y subjuntivo
    [
      q(
        '¿Cómo se forma el condicional?',
        'бы + verbo en pasado',
        ['бы + verbo en futuro', 'бы + infinitivo siempre', 'если + presente'],
        'La partícula бы se combina con el pasado y no distingue tiempo.',
      ),
      q(
        'Completa: «Если бы у меня было время, я ___.»',
        'бы пришёл',
        ['приду', 'бы приду', 'прихожу'],
        'Condición irreal: если бы + pasado, … бы + pasado.',
      ),
      q(
        'Completa: «Я хочу, чтобы ты ___.»',
        'пришёл',
        ['придёшь', 'приходишь', 'прийти'],
        'Tras чтобы con sujeto distinto va el pasado, nunca presente ni futuro.',
      ),
      q(
        'Completa: «Я пришёл, чтобы ___ тебе.» (yo ayudo)',
        'помочь',
        ['помог', 'помогу', 'помогаю'],
        'Con el mismo sujeto, чтобы va con infinitivo.',
      ),
      q(
        '¿Cuál es una petición cortés?',
        'Не могли бы вы помочь мне?',
        ['Вы поможете бы мне?', 'Помочь бы вы мне?', 'Не можете бы вы помочь?'],
        'Не могли бы вы…: бы + pasado suaviza la petición.',
      ),
      q(
        '¿Qué expresa «Ты бы отдохнул»?',
        'Un consejo suave',
        ['Una orden tajante', 'Un hecho pasado', 'Una pregunta'],
        'бы + pasado con ты sirve para aconsejar: «deberías descansar».',
      ),
      q(
        '¿Cuál es la diferencia entre «Он сказал, что придёт» y «Он сказал, чтобы я пришёл»?',
        'La primera informa; la segunda ordena',
        [
          'La primera es pasada; la segunda, futura',
          'No hay diferencia',
          'La primera duda; la segunda afirma',
        ],
        'что introduce información; чтобы, una orden o deseo dirigido a otro.',
      ),
      q(
        '¿Qué significa «Что бы ни случилось»?',
        'Pase lo que pase',
        ['Lo que no pasó', 'Si no pasa nada', 'Como si pasara algo'],
        'Pronombre + бы + ни + pasado: «quienquiera», «donde sea», «pase lo que pase».',
      ),
      q(
        'Completa: «Если бы не ___, мы пошли бы гулять.»',
        'дождь',
        ['дождя', 'дождю', 'дождём'],
        'Если бы не + nominativo = «si no fuera por».',
      ),
      q(
        'Completa: «Он говорит так, ___ всё знает.»',
        'как будто',
        ['чтобы', 'потому что', 'хотя бы'],
        'как будто = como si.',
      ),
    ],
    // 9. La oración compuesta
    [
      q(
        'Completa: «Это врач, у ___ я был вчера.»',
        'которого',
        ['который', 'которому', 'котором'],
        'у pide genitivo; врач es masculino.',
      ),
      q(
        'Completa: «Это коллега, с ___ я работаю.»',
        'которым',
        ['которого', 'котором', 'который'],
        'с pide instrumental.',
      ),
      q(
        '¿Cómo se dice «Es el escritor cuyos libros me gustan»?',
        'Это писатель, книги которого я люблю.',
        [
          'Это писатель, которого книги я люблю.',
          'Это писатель, который книги я люблю.',
          'Это писатель, книги который я люблю.',
        ],
        '«Cuyo» es el genitivo de который, colocado después del sustantivo.',
      ),
      q(
        'Completa: «Я сделал всё, ___ мог.»',
        'что',
        ['который', 'кто', 'чтобы'],
        'Tras всё, то y ничего se usa что.',
      ),
      q(
        'Completa: «Подожди, пока я ___ закончу.»',
        'не',
        ['ни', 'бы', 'уже'],
        'пока не + perfectivo = hasta que.',
      ),
      q(
        'Completa: «___ уйти, выключи свет.»',
        'Перед тем как',
        ['После того как', 'С тех пор как', 'Как только'],
        'перед тем как + infinitivo = antes de.',
      ),
      q(
        '¿Qué conjunción causal NO puede ir al principio de la frase?',
        'потому что',
        ['так как', 'поскольку', 'из-за того что'],
        'потому что nunca abre la oración; так как y поскольку sí pueden.',
      ),
      q(
        'Completa: «Мы опоздали ___ дождя.»',
        'из-за',
        ['благодаря', 'от', 'по'],
        'из-за + genitivo indica una causa negativa.',
      ),
      q(
        'Completa: «___ на дождь, мы пошли гулять.»',
        'Несмотря',
        ['Вопреки', 'Хотя', 'Благодаря'],
        'несмотря на + acusativo. вопреки pide dativo sin preposición.',
      ),
      q(
        'Completa: «___ раньше, тем лучше.»',
        'Чем',
        ['Как', 'Что', 'Если'],
        'чем…, тем… = cuanto más…, más…',
      ),
    ],
    // 10. Estilo indirecto, indefinidos y negativos
    [
      q(
        'Pasa a estilo indirecto: Он сказал: «Я приду завтра».',
        'Он сказал, что придёт завтра.',
        [
          'Он сказал, что пришёл бы завтра.',
          'Он сказал, что приходил завтра.',
          'Он сказал, чтобы придёт завтра.',
        ],
        'El ruso conserva el tiempo de la frase original; solo cambia la persona.',
      ),
      q(
        'Pasa a estilo indirecto: Он спросил: «Ты придёшь?»',
        'Он спросил, приду ли я.',
        [
          'Он спросил, если я приду.',
          'Он спросил, что я приду.',
          'Он спросил, я приду ли.',
        ],
        'En las preguntas de sí o no se usa ли tras la palabra clave, nunca если.',
      ),
      q(
        'Pasa a estilo indirecto: Мать сказала сыну: «Убери комнату».',
        'Мать сказала сыну, чтобы он убрал комнату.',
        [
          'Мать сказала сыну, что он уберёт комнату.',
          'Мать сказала сыну, чтобы он уберёт комнату.',
          'Мать сказала сыну, убрал ли он комнату.',
        ],
        'Las órdenes se pasan con чтобы + pasado.',
      ),
      q(
        'Completa: «___ звонил тебе, но не сказал, кто он.»',
        'Кто-то',
        ['Кто-нибудь', 'Никто', 'Некого'],
        '-то: alguien concreto pero desconocido, en un hecho real.',
      ),
      q(
        'Completa: «Купи ___ к чаю.»',
        'что-нибудь',
        ['что-то', 'ничего', 'нечего'],
        '-нибудь: cualquiera, aún no existe (órdenes, preguntas, futuro).',
      ),
      q(
        '¿Qué frase es correcta?',
        'Я ни с кем не говорил.',
        [
          'Я с никем не говорил.',
          'Я ни с кем говорил.',
          'Я не с никем говорил.',
        ],
        'La preposición se mete en medio (ни с кем) y la doble negación es obligatoria.',
      ),
      q(
        '¿Qué significa «Мне некогда»?',
        'No tengo tiempo',
        ['Nunca voy', 'No tengo adónde ir', 'Alguna vez fui'],
        'некогда + dativo: no hay cuándo.',
      ),
      q(
        '¿Cómo se dice «No tengo nada que hacer»?',
        'Мне нечего делать.',
        ['Я ничего не делаю.', 'Мне ничего делать.', 'Я нечего не делаю.'],
        'не- acentuada + infinitivo, con la persona en dativo y sin otra negación.',
      ),
      q(
        'Completa: «Они помогают друг ___.»',
        'другу',
        ['друга', 'другом', 'друг'],
        'помогать pide dativo: друг другу.',
      ),
      q(
        'Completa: «Я хочу тебе ___ сказать.» (sé qué, pero no lo digo)',
        'кое-что',
        ['что-нибудь', 'ничего', 'нечто-то'],
        'кое-: el hablante lo sabe pero no lo dice.',
      ),
    ],
    // 11. Numerales, fechas y adjetivos cortos
    [
      q(
        'Completa: «около ___ часов» (два)',
        'двух',
        ['два', 'двум', 'двумя'],
        'около pide genitivo: двух часов.',
      ),
      q(
        'Completa: «с ___ друзьями» (три)',
        'тремя',
        ['трёх', 'трём', 'три'],
        'с pide instrumental: тремя.',
      ),
      q(
        '¿Cuál es el genitivo de сорок?',
        'сорока',
        ['сорокого', 'сороки', 'сорокам'],
        '40, 90 y 100 solo tienen dos formas: сорок / сорока.',
      ),
      q(
        '¿Cómo se dice «tres niños» con un colectivo?',
        'трое детей',
        ['три детей', 'трое дети', 'три ребёнок'],
        'Los colectivos van con genitivo plural y se usan con personas y niños.',
      ),
      q(
        '¿Qué hora es «половина третьего»?',
        '2:30',
        ['3:30', '3:15', '2:15'],
        'En la primera media hora se nombra la hora siguiente: la mitad de la tercera.',
      ),
      q(
        '¿Qué hora es «без четверти три»?',
        '2:45',
        ['3:15', '3:45', '2:15'],
        'без + minutos + hora siguiente: las tres menos cuarto.',
      ),
      q(
        '¿Cómo se responde a «Когда?» con una fecha completa?',
        'двадцать третьего марта',
        [
          'двадцать третье марта',
          'в двадцать третьем марте',
          'двадцать три марта',
        ],
        'La fecha va en genitivo. El nominativo (двадцать третье) responde a «Какое число?».',
      ),
      q(
        '¿Cuál es la forma corta masculina de больной?',
        'болен',
        ['больн', 'больной', 'болён'],
        'Se intercala una vocal en el masculino: болен, больна, больны.',
      ),
      q(
        '¿Qué significa «Эти туфли мне малы»?',
        'Estos zapatos me quedan pequeños',
        [
          'Estos zapatos son baratos',
          'Tengo pocos zapatos',
          'Estos zapatos me gustan poco',
        ],
        'La forma corta puede significar «demasiado» para alguien.',
      ),
      q(
        'Completa: «полтора ___» (час)',
        'часа',
        ['час', 'часов', 'часы'],
        'полтора pide genitivo singular.',
      ),
    ],
    // 12. Trabajo, estudios y biografía
    [
      q(
        '¿Qué significa собеседование?',
        'entrevista de trabajo',
        ['currículum', 'viaje de trabajo', 'ascenso'],
        'Currículum es резюме; viaje de trabajo, командировка; ascenso, повышение.',
      ),
      q(
        'Completa: «Я учусь ___ третьем курсе.»',
        'на',
        ['в', 'по', 'у'],
        'El año de carrera va con на: на третьем курсе.',
      ),
      q(
        '¿Cómo se dice que un hombre se casó con Olga?',
        'Он женился на Ольге.',
        [
          'Он вышел замуж за Ольгу.',
          'Он женился с Ольгой.',
          'Он поженился Ольгу.',
        ],
        'El hombre: жениться на + preposicional. La mujer: выйти замуж за + acusativo.',
      ),
      q(
        'En una solicitud (заявление), ¿en qué caso va el destinatario?',
        'Dativo',
        ['Genitivo', 'Nominativo', 'Instrumental'],
        'A quién va dirigida: dativo (Ректору…). De quién: от + genitivo.',
      ),
      q(
        '¿Qué nota rusa equivale a «отлично»?',
        '5',
        ['4', '3', '2'],
        '5 отлично, 4 хорошо, 3 удовлетворительно, 2 неудовлетворительно.',
      ),
      q(
        '¿Cuál es el cierre adecuado de una carta formal?',
        'С уважением, Карлос Гомес',
        ['Целую, Карлос', 'Пока! Твой Карлос', 'Обнимаю, Карлос'],
        'С уважением es la despedida formal.',
      ),
      q(
        'Completa: «Он родился в 1860 году в ___ купца.»',
        'семье',
        ['семью', 'семьи', 'семьёй'],
        'родиться в семье + genitivo: preposicional de семья.',
      ),
      q(
        '¿Qué significa уволиться?',
        'dimitir, dejar el trabajo',
        ['jubilarse', 'ascender', 'colocarse'],
        'уволить = despedir; уволиться = dimitir. Jubilarse es выйти на пенсию.',
      ),
      q(
        'Completa: «Я отвечаю ___ продажи.»',
        'за',
        ['на', 'о', 'с'],
        'отвечать за + acusativo = ser responsable de.',
      ),
      q(
        '¿Qué significa «Владею английским свободно»?',
        'Hablo inglés con fluidez',
        [
          'Tengo clases de inglés gratis',
          'Estudio inglés por libre',
          'El inglés es mi lengua materna',
        ],
        'владеть + instrumental = dominar; свободно = con fluidez.',
      ),
    ],
  ],
  exam: {
    title: 'Examen final B1',
    instructions: `Este examen cubre las doce estaciones del curso y sigue los contenidos del ТРКИ-1. Son 15 preguntas de opción múltiple; vale 100 puntos y se aprueba con 70. Puedes repetirlo las veces que quieras: cuenta tu mejor nota.

TEXTO PARA LAS PREGUNTAS 12 A 15
Марина Соколова родилась в 1990 году в небольшом городе на Волге в семье учителей. Окончив школу с отличием, она поступила на факультет журналистики. Ещё будучи студенткой, Марина начала писать статьи для городской газеты, чтобы заработать на жизнь. Получив диплом, она переехала в Петербург, хотя родители хотели, чтобы она осталась дома. Первые полгода ей было трудно: не имея ни друзей, ни опыта, она долго искала работу и наконец устроилась в небольшое издательство. Сегодня Марина руководит отделом, в котором работают двенадцать человек. Она говорит, что, если бы не переехала тогда, жалела бы об этом всю жизнь.`,
    questions: [
      q(
        'Completa: «Я написал ___ друзьям.» (мои, старые)',
        'моим старым',
        ['моих старых', 'моими старыми', 'мои старые'],
        'Dativo plural: -ым / -им.',
      ),
      q(
        'Completa: «Сейчас он ___ машину, не звони ему.»',
        'ведёт',
        ['водит', 'возит', 'несёт'],
        'Una acción en curso pide el unidireccional: сейчас он ведёт машину.',
      ),
      q(
        'Completa: «Как ___ экзамен?» (¿Cómo fue el examen?)',
        'прошёл',
        ['пришёл', 'ушёл', 'зашёл'],
        'проходить / пройти en sentido figurado: transcurrir.',
      ),
      q(
        '¿Qué significa «Сюда нельзя входить»?',
        'Está prohibido entrar',
        [
          'Es imposible entrar',
          'No hay por dónde entrar',
          'No hace falta entrar',
        ],
        'нельзя + imperfectivo = prohibición.',
      ),
      q(
        '¿Cuál equivale a «Человек, который написал это письмо»?',
        'Человек, написавший это письмо',
        [
          'Человек, написанный это письмо',
          'Человек, пишущий это письмо',
          'Человек, написав это письмо',
        ],
        'который написал (activo, pasado) → написавший.',
      ),
      q(
        'Completa: «Москва была ___ в 1147 году.»',
        'основана',
        ['основанная', 'основавшая', 'основан'],
        'Pasiva con forma corta, en femenino porque Москва lo es.',
      ),
      q(
        'Completa: «___ домой, он сразу лёг спать.»',
        'Вернувшись',
        ['Возвращаясь', 'Вернувшийся', 'Вернулся'],
        'Acción anterior a la principal: gerundio perfectivo.',
      ),
      q(
        'Completa: «Если бы я знал об этом раньше, я ___ тебе.»',
        'бы помог',
        ['помогу', 'помогаю', 'бы помогу'],
        'Condición irreal: бы + pasado en las dos partes.',
      ),
      q(
        'Completa: «Это проблема, о ___ мы говорили.»',
        'которой',
        ['которую', 'которая', 'котором'],
        'о pide preposicional; проблема es femenino.',
      ),
      q(
        '¿Qué frase es correcta?',
        'Он никогда никому ничего не говорит.',
        [
          'Он никогда никому ничего говорит.',
          'Он когда-нибудь никому не говорит ничто.',
          'Он не никогда никому говорит.',
        ],
        'Con los pronombres en ни- la negación не es obligatoria.',
      ),
      q(
        'Completa: «Поезд отправлялся в половине ___.» (a las 11:30)',
        'двенадцатого',
        ['одиннадцатого', 'двенадцать', 'одиннадцати'],
        'Se nombra la hora siguiente en genitivo: половина двенадцатого.',
      ),
      q(
        'Según el texto, ¿por qué escribía Marina para el periódico cuando era estudiante?',
        'Para ganarse la vida',
        [
          'Porque lo exigía la facultad',
          'Para ayudar a sus padres',
          'Porque ya dirigía una sección',
        ],
        '«…чтобы заработать на жизнь».',
      ),
      q(
        'Según el texto, ¿qué querían sus padres?',
        'Que se quedara en casa',
        [
          'Que se mudara a San Petersburgo',
          'Que fuera maestra',
          'Que dejara el periodismo',
        ],
        '«…хотя родители хотели, чтобы она осталась дома».',
      ),
      q(
        'Según el texto, ¿por qué le costó encontrar trabajo?',
        'No tenía amigos ni experiencia',
        [
          'No tenía diploma',
          'No quería trabajar en una editorial',
          'Estuvo enferma medio año',
        ],
        '«Не имея ни друзей, ни опыта, она долго искала работу».',
      ),
      q(
        'Según el texto, ¿a qué se dedica Marina hoy?',
        'Dirige un departamento de doce personas',
        [
          'Es dueña de una editorial',
          'Escribe para el periódico de su ciudad',
          'Da clases de periodismo',
        ],
        '«Марина руководит отделом, в котором работают двенадцать человек».',
      ),
    ],
  },
};
