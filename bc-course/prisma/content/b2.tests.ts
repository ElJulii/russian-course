import { q, type CourseTests } from './course-content';

// Tests del B2: uno por estación, en el orden de ./b2, y el examen final.
export const B2_TESTS: CourseTests = {
  lessons: [
    // 1. Matices del aspecto verbal
    [
      q(
        '¿Qué implica «Кто-то брал мою ручку»?',
        'Alguien la cogió y ya está otra vez en su sitio',
        [
          'Alguien se la llevó y no está',
          'Alguien quiere cogerla',
          'Nadie la ha tocado',
        ],
        'El imperfectivo de брать indica resultado anulado; con взял, el bolígrafo seguiría faltando.',
      ),
      q(
        '¿Por qué se usa el imperfectivo en «Кто строил этот собор?»?',
        'Porque interesa el autor, no el resultado',
        [
          'Porque la catedral no se terminó',
          'Porque la obra se repitió',
          'Porque строить no tiene perfectivo',
        ],
        'Es el significado de hecho en general: se nombra la acción sin atender a su final.',
      ),
      q(
        'Completa: «Он долго ___ меня и наконец ___.»',
        'убеждал / убедил',
        ['убедил / убеждал', 'убеждал / убеждал', 'убедил / убедил'],
        'Par conativo: el imperfectivo es el intento y el perfectivo, el logro.',
      ),
      q(
        '¿Qué presupone la pregunta «Ты купил хлеб?»?',
        'Que la compra estaba prevista o encargada',
        [
          'Que no importa si se compró',
          'Que se compra pan cada día',
          'Que el pan se acabó',
        ],
        'El perfectivo supone una acción esperada; «Ты покупал хлеб?» pregunta sin presuponer.',
      ),
      q(
        '¿Qué significa «Этот чемодан ты не поднимешь»?',
        'No serás capaz de levantar esta maleta',
        [
          'No levantes esta maleta',
          'No vas a tener que levantarla',
          'Todavía no la has levantado',
        ],
        'El perfectivo en presente-futuro expresa capacidad o imposibilidad.',
      ),
      q(
        '¿Cuál de estos verbos es biaspectual?',
        'использовать',
        ['зависеть', 'очутиться', 'крикнуть'],
        'использовать vale para los dos aspectos; зависеть es solo imperfectivo y очутиться, solo perfectivo.',
      ),
      q(
        '¿Qué aporta el sufijo -ну- en крикнуть frente a кричать?',
        'Una sola vez',
        ['Repetición', 'Comienzo de la acción', 'Duración larga'],
        'Los semelfactivos en -нуть nombran una acción única: крикнуть, прыгнуть, стукнуть.',
      ),
      q(
        'Completa: «Я не советую вам ___ эту машину.»',
        'покупать',
        ['купить', 'куплю', 'купив'],
        'Tras не советую, не надо, не стоит y незачем va el imperfectivo.',
      ),
      q(
        'Completa: «Не могу ___ ключи.» (no lo consigo)',
        'найти',
        ['искать', 'находить', 'ищу'],
        'не могу + perfectivo = no lo consigo.',
      ),
      q(
        '¿Qué expresa «Бывало, придёт он к нам, сядет у окна и молчит»?',
        'Una acción repetida en el pasado',
        ['Un plan para el futuro', 'Una orden', 'Una condición irreal'],
        'Con бывало, el perfectivo en forma de futuro narra repeticiones pasadas.',
      ),
    ],
    // 2. Prefijos verbales
    [
      q(
        '¿Qué significa недооценить?',
        'subestimar',
        ['sobrevalorar', 'volver a evaluar', 'terminar de evaluar'],
        'недо- indica insuficiencia; sobrevalorar es переоценить.',
      ),
      q(
        '¿Qué significa передумать?',
        'cambiar de idea',
        ['pensarlo a fondo', 'inventar', 'recapacitar'],
        'пере- = de nuevo. Pensar a fondo es обдумать; inventar, придумать; recapacitar, одуматься.',
      ),
      q(
        '¿Qué significa наесться?',
        'comer hasta hartarse',
        ['terminar de comer', 'comer un poco', 'comer demasiado tarde'],
        'на-…-ся = hasta hartarse.',
      ),
      q(
        '¿Qué significa дозвониться?',
        'lograr comunicar por teléfono',
        ['llamar por error', 'colgar', 'llamar de vuelta'],
        'до-…-ся = insistir hasta conseguirlo.',
      ),
      q(
        '¿Qué significa проговориться?',
        'irse de la lengua',
        ['ponerse de acuerdo', 'cometer un lapsus', 'empezar a hablar'],
        'про-…-ся = por descuido. Ponerse de acuerdo es договориться; lapsus, оговориться.',
      ),
      q(
        '¿Qué significa подписать?',
        'firmar',
        ['describir', 'recetar', 'copiar'],
        'Describir es описать; recetar, выписать o прописать; copiar, списать.',
      ),
      q(
        '¿Qué significa отговорить?',
        'disuadir',
        ['convencer', 'condenar', 'pronunciar'],
        'от- = apartar. Convencer es уговорить; condenar, приговорить; pronunciar, выговорить.',
      ),
      q(
        '¿Cuál es el imperfectivo de записать?',
        'записывать',
        ['записать', 'записовать', 'запишать'],
        'El imperfectivo secundario se forma con -ыва- / -ива-.',
      ),
      q(
        '¿Cuál es el imperfectivo de спросить?',
        'спрашивать',
        ['спросивать', 'спрошать', 'спросать'],
        'Con -ива- la о de la raíz pasa a а: спросить → спрашивать.',
      ),
      q(
        '¿Qué significa зачитаться?',
        'quedarse absorto leyendo',
        ['terminar de leer', 'leer por encima', 'hartarse de leer'],
        'за-…-ся = absorberse en exceso.',
      ),
    ],
    // 3. Verbos de movimiento en sentido figurado
    [
      q(
        'Completa: «Речь ___ о важном решении.»',
        'идёт',
        ['едет', 'ходит', 'ведёт'],
        'речь идёт о + preposicional = se trata de.',
      ),
      q(
        'Completa: «Мы ___ к выводу, что…»',
        'пришли',
        ['вышли', 'ушли', 'вошли'],
        'прийти к выводу = llegar a la conclusión.',
      ),
      q(
        '¿Qué significa «выйти из строя»?',
        'averiarse',
        ['jubilarse', 'perder los nervios', 'pasar de moda'],
        'Jubilarse es выйти на пенсию; perder los nervios, выйти из себя; pasar de moda, выйти из моды.',
      ),
      q(
        'Completa: «Он ___ себя сдержанно.»',
        'вёл',
        ['нёс', 'вёз', 'шёл'],
        'вести себя = comportarse.',
      ),
      q(
        'Completa: «Авария ___ к жертвам.»',
        'привела',
        ['принесла', 'привезла', 'пришла'],
        'привести к + dativo = provocar.',
      ),
      q(
        'Completa: «Он ___ ответственность за проект.»',
        'несёт',
        ['ведёт', 'везёт', 'идёт'],
        'нести ответственность = tener la responsabilidad.',
      ),
      q(
        '¿Qué significa «перенести встречу»?',
        'aplazar la reunión',
        [
          'cancelar la reunión',
          'dirigir la reunión',
          'adelantarse a la reunión',
        ],
        'перенести = trasladar a otra fecha.',
      ),
      q(
        '¿Qué significa «внести вклад»?',
        'contribuir',
        ['causar daño', 'dictar sentencia', 'hacer una visita'],
        'Causar daño es нанести ущерб; dictar sentencia, вынести приговор.',
      ),
      q(
        'Completa: «Мне ___ согласиться.» (no tuve más remedio)',
        'пришлось',
        ['прошло', 'вышло', 'дошло'],
        'приходится / пришлось + dativo + infinitivo = verse obligado.',
      ),
      q(
        '¿Qué significa «До него не доходит»?',
        'No lo capta',
        [
          'No llega a tiempo',
          'No se le puede localizar',
          'No le llegan las cartas',
        ],
        'доходить до + genitivo, en sentido figurado: entender.',
      ),
    ],
    // 4. La rección verbal
    [
      q(
        'Completa: «Он добился ___.» (успех)',
        'успеха',
        ['успех', 'успеху', 'успехом'],
        'добиваться / добиться pide genitivo sin preposición.',
      ),
      q(
        'Completa: «Всё зависит ___ людей.»',
        'от',
        ['из', 'на', 'у'],
        'зависеть от + genitivo.',
      ),
      q(
        'Completa: «Это противоречит ___.» (закон)',
        'закону',
        ['закона', 'законом', 'закон'],
        'противоречить pide dativo.',
      ),
      q(
        'Completa: «Я рассчитываю ___ вас.»',
        'на',
        ['с', 'в', 'о'],
        'рассчитывать на + acusativo = contar con.',
      ),
      q(
        'Completa: «Он владеет ___.» (три языка)',
        'тремя языками',
        ['три языка', 'трёх языков', 'трём языкам'],
        'владеть pide instrumental.',
      ),
      q(
        'Completa: «Я сомневаюсь ___ его словах.»',
        'в',
        ['о', 'на', 'от'],
        'сомневаться в + preposicional.',
      ),
      q(
        '¿Cuál es la diferencia entre «согласиться с чем» y «согласиться на что»?',
        'Estar de acuerdo con algo / aceptar hacer algo',
        [
          'Aceptar hacer algo / estar de acuerdo con algo',
          'No hay diferencia',
          'Negarse a algo / ceder en algo',
        ],
        'с + instrumental = estar de acuerdo; на + acusativo = aceptar una propuesta.',
      ),
      q(
        '¿Qué forma es correcta?',
        'заплатить за проезд',
        ['оплатить за проезд', 'заплатить проезд', 'оплатить на проезд'],
        'оплатить va sin preposición (оплатить проезд); заплатить, con за.',
      ),
      q(
        'Completa: «Он отвечает ___ свои решения.»',
        'за',
        ['на', 'о', 'к'],
        'отвечать за + acusativo = ser responsable de; отвечать на вопрос = responder a.',
      ),
      q(
        'Completa: «Она лишилась ___.» (работа)',
        'работы',
        ['работу', 'работой', 'работе'],
        'лишиться pide genitivo.',
      ),
    ],
    // 5. Participios y gerundios en el texto escrito
    [
      q(
        '¿Cuál equivale a «статья, которую написал мой коллега»?',
        'статья, написанная моим коллегой',
        [
          'статья, написавшая моим коллегой',
          'статья, пишущая мой коллега',
          'статья, написав мой коллега',
        ],
        'Con которую + sujeto + verbo se usa el participio pasivo y el agente va en instrumental.',
      ),
      q(
        '¿Cuál de estas oraciones NO se puede transformar en participio?',
        'дом, в котором я живу',
        [
          'дом, который стоит на углу',
          'дом, который построили в 1900 году',
          'дом, который строят рабочие',
        ],
        'No se puede cuando который va con preposición.',
      ),
      q(
        '¿Qué frase es incorrecta?',
        'Прочитав книгу, она была возвращена в библиотеку.',
        [
          'Прочитав текст, можно ответить на вопросы.',
          'Составляя план, следует учитывать сроки.',
          'Он сидел, закрыв глаза.',
        ],
        'El gerundio no se combina con la pasiva: el sujeto no es quien leyó.',
      ),
      q(
        '¿Qué significa «развивающиеся страны»?',
        'países en desarrollo',
        ['países desarrollados', 'países vecinos', 'países fundadores'],
        'Participio en -ся con valor de proceso.',
      ),
      q(
        '¿Cómo se nominaliza «после того как закончилась война»?',
        'после окончания войны',
        [
          'после окончании войной',
          'после окончить войну',
          'после оконченной война',
        ],
        'El estilo escrito prefiere sustantivo verbal + genitivo.',
      ),
      q(
        '¿Cómo se nominaliza «чтобы решить проблему»?',
        'для решения проблемы',
        [
          'из-за решения проблемы',
          'при решении проблему',
          'для решить проблемы',
        ],
        'для + sustantivo verbal en genitivo expresa finalidad.',
      ),
      q(
        '¿Qué significa «учитывая»?',
        'teniendo en cuenta',
        ['a partir de', 'sin contar', 'a juzgar por'],
        'A partir de es исходя из; sin contar, не считая; a juzgar por, судя по.',
      ),
      q(
        '¿Qué frase está bien puntuada?',
        'Уставшие от долгой дороги, мы сразу легли спать.',
        [
          'Уставшие от долгой дороги мы сразу легли спать.',
          'Уставшие, от долгой дороги мы сразу легли спать.',
          'Уставшие от долгой дороги мы, сразу легли спать.',
        ],
        'Si se refiere a un pronombre personal, el giro participial lleva coma siempre.',
      ),
      q(
        '¿Qué expresa el gerundio en «Цены выросли, вызвав недовольство населения»?',
        'Consecuencia',
        ['Causa', 'Condición', 'Finalidad'],
        '«…lo que provocó descontento».',
      ),
      q(
        '¿Qué significa «подводя итоги»?',
        'resumiendo, en conclusión',
        ['adelantándonos', 'dicho con suavidad', 'volviendo al tema'],
        'Adelantándonos es забегая вперёд; dicho con suavidad, мягко говоря.',
      ),
    ],
    // 6. Pasiva, impersonales y sujeto indeterminado
    [
      q(
        '¿Qué tipo de oración es «Его уволили»?',
        'De sujeto indeterminado',
        ['Impersonal', 'Pasiva con participio', 'Generalizadora'],
        'Verbo en 3.ª persona del plural sin они: hay un agente humano que no interesa.',
      ),
      q(
        '¿Cuál es una oración impersonal de fuerza natural?',
        'Дорогу занесло снегом.',
        [
          'Снег занёс дорогу.',
          'Дорога была занесена.',
          'Дорогу заносят снегом.',
        ],
        'Verbo en neutro, objeto en acusativo y la fuerza en instrumental.',
      ),
      q(
        '¿Cómo se dice «No consigo dormir» de forma involuntaria?',
        'Мне не спится.',
        ['Я не сплюсь.', 'Меня не спит.', 'Мне не спать.'],
        'El reflexivo impersonal con dativo presenta la acción como ajena a la voluntad.',
      ),
      q(
        '¿Qué frase es incorrecta?',
        'Дом построился рабочими.',
        [
          'Дом строится рабочими.',
          'Дом был построен рабочими.',
          'Дом построили за год.',
        ],
        'No se forma pasiva en -ся de un verbo perfectivo con agente.',
      ),
      q(
        '¿Cuál es la diferencia entre «Договор подписан» y «Договор был подписан в мае»?',
        'La primera presenta un resultado vigente; la segunda, un hecho pasado',
        [
          'La primera es futura; la segunda, pasada',
          'La primera es coloquial; la segunda, incorrecta',
          'No hay diferencia',
        ],
        'Sin был el resultado sigue vigente; con был se sitúa el hecho en el pasado.',
      ),
      q(
        'Completa: «Прошло ___ года.»',
        'два',
        ['двое', 'двух', 'двумя'],
        'Con expresiones de tiempo el verbo va siempre en singular neutro: прошло два года.',
      ),
      q(
        '¿Qué tipo de oración es «Век живи — век учись»?',
        'Generalizadora',
        ['De sujeto indeterminado', 'Impersonal', 'Pasiva'],
        'La 2.ª persona del singular vale para cualquiera; es típica de los refranes.',
      ),
      q(
        '¿Qué significa «Мне нездоровится»?',
        'No me encuentro bien',
        ['No me apetece', 'No tengo suerte', 'No me dejan'],
        'Estado físico con dativo, en una oración impersonal.',
      ),
      q(
        'Completa: «Нам не хватает ___.» (время)',
        'времени',
        ['время', 'временем', 'времена'],
        'не хватает pide genitivo.',
      ),
      q(
        '¿Qué construcción destaca el objeto y es propia del registro escrito y oficial?',
        'Мост был построен за год.',
        [
          'Рабочие построили мост за год.',
          'Мост построили за год.',
          'Мост снесло наводнением.',
        ],
        'La pasiva con participio corto pone el foco en el objeto.',
      ),
    ],
    // 7. Sintaxis compleja y conectores
    [
      q(
        '¿Qué conector indica una causa favorable?',
        'благодаря тому что',
        ['из-за того что', 'под предлогом того что', 'несмотря на то что'],
        'благодаря тому что es favorable; из-за того что, desfavorable.',
      ),
      q(
        'Completa: «Он готов на всё, ___ его не уволили.»',
        'лишь бы',
        ['хотя бы', 'как будто', 'так что'],
        'лишь бы = con tal de que.',
      ),
      q(
        'Completa: «___ обещал — сделай.»',
        'Раз',
        ['Хотя', 'Пока', 'Едва'],
        'раз = ya que (condición coloquial).',
      ),
      q(
        'Completa: «Как бы трудно ___ было, не сдавайся.»',
        'ни',
        ['не', 'бы', 'же'],
        'как бы… ни + verbo: concesión («por difícil que sea»).',
      ),
      q(
        '¿Cuál de estas palabras NO es un inciso y por eso NO lleva comas?',
        'вряд ли',
        ['конечно', 'к сожалению', 'по-моему'],
        'вряд ли, ведь, даже, именно y якобы no se separan con comas.',
      ),
      q(
        '¿Qué significa «иными словами»?',
        'dicho de otro modo',
        ['por cierto', 'por lo demás', 'en particular'],
        'Por cierto es кстати; por lo demás, впрочем; en particular, в частности.',
      ),
      q(
        'Completa: «Курс рубля упал, ___ выросли цены.»',
        'вследствие чего',
        ['несмотря на что', 'для чего', 'при том что'],
        'вследствие чего introduce la consecuencia.',
      ),
      q(
        '¿Qué signo sustituye al verbo «ser» entre dos sustantivos?',
        'La raya (—)',
        ['Los dos puntos', 'La coma', 'El punto y coma'],
        'Москва — столица России.',
      ),
      q(
        'Completa: «Не прошло и года, ___ он вернулся.»',
        'как',
        ['что', 'пока', 'чтобы'],
        'не прошло и…, как… = no había pasado ni…, cuando…',
      ),
      q(
        '¿Qué grado de certeza expresa «скорее всего»?',
        'Muy probable',
        ['Dudoso', 'Seguro', 'Información ajena no garantizada'],
        'скорее всего = lo más probable.',
      ),
    ],
    // 8. Modalidad
    [
      q(
        'Completa: «Я ___ отказаться.» (obligado por las circunstancias)',
        'вынужден',
        ['намерен', 'склонен', 'способен'],
        'вынужден = obligado por las circunstancias; намерен = tener la intención.',
      ),
      q(
        '¿Qué significa «Этот фильм стоит посмотреть»?',
        'Vale la pena ver esta película',
        [
          'Esta película cuesta dinero',
          'Hay que ver esta película por obligación',
          'Esta película se puede ver gratis',
        ],
        'стоит + infinitivo = vale la pena.',
      ),
      q(
        '¿Qué significa «Вы не обязаны отвечать»?',
        'No tiene obligación de responder',
        [
          'Tiene prohibido responder',
          'No sabe responder',
          'No debería responder',
        ],
        'не обязан = no hay obligación.',
      ),
      q(
        '¿Cuál es la diferencia entre «Я могу плавать» y «Я умею плавать»?',
        'Puedo (me es posible) / sé (aprendí)',
        [
          'Sé (aprendí) / puedo (me es posible)',
          'Quiero / debo',
          'No hay diferencia',
        ],
        'мочь = posibilidad o permiso; уметь = saber hacer.',
      ),
      q(
        '¿Qué significa «Вряд ли она согласится»?',
        'Difícilmente aceptará',
        ['Seguro que aceptará', 'Quizá ya aceptó', 'Dicen que aceptó'],
        'вряд ли expresa duda.',
      ),
      q(
        '¿Qué aporta якобы en «Он якобы болен»?',
        'Es información ajena, no garantizada',
        ['Certeza total', 'Obligación', 'Deseo'],
        'якобы = supuestamente.',
      ),
      q(
        'Completa: «Мне ___ его убедить.» (lo logré)',
        'удалось',
        ['пришлось', 'следовало', 'хотелось'],
        'удалось + dativo + perfectivo = lograr.',
      ),
      q(
        '¿Qué significa «Тебе его не догнать»?',
        'No vas a poder alcanzarlo',
        [
          'No debes alcanzarlo',
          'No quieres alcanzarlo',
          'No hace falta que lo alcances',
        ],
        'не + infinitivo + dativo expresa imposibilidad.',
      ),
      q(
        '¿Qué significa «Я не прочь отдохнуть»?',
        'No me importaría descansar',
        ['No pienso descansar', 'No puedo descansar', 'No debo descansar'],
        'не прочь = no me importaría.',
      ),
      q(
        '¿Qué expresa «Он должен быть на работе»?',
        'Una suposición: seguramente está en el trabajo',
        ['Un permiso', 'Un deseo', 'Una prohibición'],
        'должен + infinitivo también sirve para suponer.',
      ),
    ],
    // 9. Formación de palabras
    [
      q(
        '¿Qué significa потребитель?',
        'consumidor',
        ['empresario', 'votante', 'investigador'],
        'Empresario es предприниматель; votante, избиратель; investigador, исследователь.',
      ),
      q(
        '¿Qué indica el sufijo -ость en возможность o скорость?',
        'Una cualidad abstracta, derivada de un adjetivo',
        ['Una persona', 'Un diminutivo', 'Un material'],
        'Los sustantivos en -ость son femeninos y abstractos.',
      ),
      q(
        '¿Qué significa деревянный?',
        'de madera',
        ['de aldea', 'antiguo', 'frondoso'],
        'El sufijo -ян- / -ан- indica material: деревянный, стеклянный, кожаный.',
      ),
      q(
        '¿Qué matiz tiene el sufijo en городишко?',
        'Despectivo',
        ['Cariñoso', 'Aumentativo', 'Neutro'],
        '-ишк- es despectivo; -ок (городок) es diminutivo afectivo.',
      ),
      q(
        '¿Qué significa сероватый?',
        'grisáceo, un poco gris',
        ['muy gris', 'gris oscuro', 'sin color'],
        '-оват- = un poco.',
      ),
      q(
        '¿Qué significa незаменимый?',
        'insustituible',
        ['inolvidable', 'insoportable', 'invencible'],
        'не- + -им- = «in…able». Insoportable es невыносимый; invencible, непобедимый.',
      ),
      q(
        '¿Qué significa безработица?',
        'desempleo',
        ['teletrabajo', 'horas extra', 'jubilación'],
        'без- = sin.',
      ),
      q(
        '¿Qué significa СМИ?',
        'medios de comunicación',
        [
          'registro civil',
          'accidente de tráfico',
          'institución de educación superior',
        ],
        'средства массовой информации. Registro civil es ЗАГС; accidente de tráfico, ДТП; universidad, вуз.',
      ),
      q(
        '¿Qué significa ежедневный?',
        'diario',
        ['anual', 'mundial', 'semanal'],
        'еже- = cada: ежедневный, ежегодный.',
      ),
      q(
        '¿Qué uso tiene el diminutivo en «Подождите минуточку»?',
        'Cortesía',
        ['Indica un minuto más corto', 'Ironía', 'Desprecio'],
        'Los diminutivos expresan sobre todo cariño o cortesía, no tamaño.',
      ),
    ],
    // 10. Estilos funcionales
    [
      q(
        '¿A qué estilo pertenece «доводим до вашего сведения»?',
        'Oficial-administrativo',
        ['Coloquial', 'Científico', 'Literario'],
        'Es un cliché del estilo oficial, hecho de fórmulas fijas e impersonales.',
      ),
      q(
        '¿Cuál es el equivalente neutro de «принять решение»?',
        'решить',
        ['решать задачу', 'разрешить', 'решиться'],
        'El estilo oficial usa verbo «vacío» + sustantivo: принять решение = решить.',
      ),
      q(
        '¿Cuál de estas palabras es coloquial?',
        'общага',
        ['общежитие', 'проживать', 'вышеуказанный'],
        'общага es la forma coloquial de общежитие.',
      ),
      q(
        '¿Cuál es el sinónimo elevado de глаза?',
        'очи',
        ['гляделки', 'рожа', 'лик'],
        'очи — глаза — гляделки. лик es el sinónimo elevado de лицо.',
      ),
      q(
        '¿Qué fórmula es propia del estilo científico para definir?',
        'X представляет собой Y.',
        [
          'X — это типа Y.',
          'Доводим до сведения, что X — Y.',
          'Слыхал? X — это Y!',
        ],
        'El estilo científico define con является, представляет собой, называется.',
      ),
      q(
        '¿Cuál es la forma más cortés de pedir algo?',
        'Не будете ли вы так любезны…?',
        ['Дай!', 'Дай, пожалуйста.', 'Ты не мог бы дать…?'],
        'La escala va del imperativo brusco a la fórmula muy formal.',
      ),
      q(
        '¿Qué significa la metáfora periodística «чёрное золото»?',
        'el petróleo',
        ['el carbón', 'el café', 'el mercado negro'],
        'Es una metáfora gastada del estilo periodístico.',
      ),
      q(
        '¿Qué significa «в соответствии с законом»?',
        'conforme a la ley',
        ['a pesar de la ley', 'en lugar de la ley', 'por culpa de la ley'],
        'в соответствии с + instrumental, cliché oficial.',
      ),
      q(
        '¿Cuál es el equivalente oficial de жить?',
        'проживать',
        ['обитать', 'валяться', 'тусоваться'],
        'проживать — жить; приобрести — купить; являться — быть.',
      ),
      q(
        '¿Cómo se disiente con cortesía?',
        'Позвольте с вами не согласиться.',
        ['Ерунда!', 'Да ну!', 'Как бы не так!'],
        'Las otras tres son réplicas coloquiales y bruscas.',
      ),
    ],
    // 11. Partículas, fraseología y lenguaje coloquial
    [
      q(
        '¿Qué expresa же en «Я же тебе говорил!»?',
        'Insistencia en algo que ya era evidente',
        ['Duda', 'Una orden suavizada', 'Una cita de palabras ajenas'],
        '«¡Si te lo dije!»: же insiste o contrasta.',
      ),
      q(
        '¿Qué expresa «Неужели это правда?»?',
        'Incredulidad',
        ['Una pregunta neutra', 'Una orden', 'Indiferencia'],
        'неужели = ¿es posible que…?',
      ),
      q(
        '¿Qué hace la partícula -ка en «Дай-ка посмотреть»?',
        'Suaviza la orden',
        ['La hace más tajante', 'La niega', 'La convierte en pregunta'],
        '-ка vuelve la petición más familiar y suave.',
      ),
      q(
        '¿Qué significa «Я чуть не упал»?',
        'Por poco me caigo',
        ['Me caí un poco', 'No me caí nunca', 'Casi no me caí'],
        'чуть не + verbo = por poco.',
      ),
      q(
        '¿Qué significa «ломать голову»?',
        'devanarse los sesos',
        ['perder la cabeza', 'tomar el pelo', 'olvidarse de algo'],
        'Perder la cabeza es терять голову; tomar el pelo, морочить голову.',
      ),
      q(
        '¿Qué significa «рукой подать»?',
        'está a un paso',
        ['echar una mano', 'rendirse', 'tener buenas manos'],
        'Rendirse es опустить руки; ser mañoso, золотые руки.',
      ),
      q(
        '¿Qué significa «кот наплакал»?',
        'muy poco',
        ['de sobra', 'nunca', 'a cántaros'],
        'De sobra es куры не клюют; nunca, после дождичка в четверг.',
      ),
      q(
        '¿Qué se responde a «Ни пуха ни пера!»?',
        'К чёрту!',
        ['Спасибо!', 'Пожалуйста!', 'На здоровье!'],
        'Es el deseo de suerte antes de un examen; por superstición no se agradece.',
      ),
      q(
        '¿Qué significa «чувствовать себя не в своей тарелке»?',
        'sentirse incómodo, fuera de lugar',
        ['estar a dieta', 'estar muy contento', 'sentirse como pez en el agua'],
        'Lo contrario es как рыба в воде.',
      ),
      q(
        '¿Qué significa el refrán «Семь раз отмерь, один раз отрежь»?',
        'Piénsalo bien antes de actuar',
        [
          'Más vale tarde que nunca',
          'De tal palo, tal astilla',
          'No es oro todo lo que reluce',
        ],
        'Literalmente: mide siete veces y corta una.',
      ),
    ],
    // 12. Sociedad, medios y debate
    [
      q(
        '¿Qué significa заголовок?',
        'titular',
        ['tirada', 'reseña', 'enlace'],
        'Tirada es тираж; reseña, обзор; enlace, ссылка.',
      ),
      q(
        'Completa: «Журналист взял интервью ___ министра.»',
        'у',
        ['с', 'к', 'от'],
        'брать интервью у + genitivo; давать интервью + dativo.',
      ),
      q(
        '¿Qué significa опровергать?',
        'desmentir',
        ['cubrir una noticia', 'emitir', 'remitirse a una fuente'],
        'Cubrir es освещать; remitirse a una fuente, ссылаться на источник.',
      ),
      q(
        'Completa: «Цены выросли ___ десять процентов.» (en cuánto)',
        'на',
        ['до', 'в', 'за'],
        'на + cantidad indica cuánto; до, hasta qué nivel.',
      ),
      q(
        '¿Qué significa «в два раза»?',
        'el doble',
        ['la mitad', 'dos veces por semana', 'en dos partes'],
        'вырасти в два раза = duplicarse.',
      ),
      q(
        '¿A qué parte del ensayo pertenece «Таким образом, …»?',
        'A la conclusión',
        ['A la introducción', 'A la tesis', 'Al contraargumento'],
        'Таким образом, Итак y Подводя итог cierran el texto.',
      ),
      q(
        '¿Cuál introduce un contraargumento?',
        'Противники этой точки зрения утверждают, что…',
        [
          'Во-первых, …',
          'На мой взгляд, …',
          'В наше время всё чаще говорят о…',
        ],
        'Presenta la opinión contraria para refutarla después.',
      ),
      q(
        '¿Cómo se disiente con cortesía en un debate?',
        'Боюсь, я не могу с вами согласиться.',
        [
          'Совершенно верно.',
          'Я разделяю вашу точку зрения.',
          'Вы абсолютно правы.',
        ],
        'Las otras tres expresan acuerdo.',
      ),
      q(
        '¿Qué significa «подавляющее большинство»?',
        'la inmensa mayoría',
        ['una minoría oprimida', 'cerca de la mitad', 'uno de cada tres'],
        'Uno de cada tres es каждый третий; cerca de la mitad, около половины.',
      ),
      q(
        'Completa: «Безработица ___ пять процентов.»',
        'составляет',
        ['состоит', 'составляется', 'стоит'],
        'составлять = ascender a.',
      ),
    ],
  ],
  exam: {
    title: 'Examen final B2',
    instructions: `Este examen cubre las doce estaciones del curso y sigue los contenidos del ТРКИ-2. Son 15 preguntas de opción múltiple; vale 100 puntos y se aprueba con 70. Puedes repetirlo las veces que quieras: cuenta tu mejor nota.

TEXTO PARA LAS PREGUNTAS 12 A 15
В наше время всё чаще говорят о том, что удалённая работа вытесняет офис. На мой взгляд, это утверждение справедливо лишь отчасти. Во-первых, по данным недавнего опроса, каждый третий сотрудник хотел бы работать из дома хотя бы два дня в неделю: на дорогу у него уходит около двух часов. Во-вторых, компаниям удаётся сократить расходы на аренду. Противники этой точки зрения утверждают, что без живого общения коллектив распадается. Действительно, нельзя отрицать, что новичкам трудно войти в курс дела, не видя коллег. Однако дело не в формате, а в том, как организована работа. Таким образом, будущее, скорее всего, за смешанной моделью.`,
    questions: [
      q(
        '¿Qué implica «К вам заходил сосед»?',
        'El vecino pasó y ya se fue',
        [
          'El vecino está esperando dentro',
          'El vecino va a pasar',
          'El vecino nunca viene',
        ],
        'El imperfectivo indica resultado anulado.',
      ),
      q(
        '¿Qué significa договориться?',
        'ponerse de acuerdo',
        ['irse de la lengua', 'disuadir', 'terminar de hablar'],
        'до-…-ся: hablar hasta llegar a un acuerdo.',
      ),
      q(
        'Completa: «Это решение ___ все ожидания.»',
        'превзошло',
        ['перешло', 'обошло', 'прошло'],
        'превзойти все ожидания = superar todas las expectativas.',
      ),
      q(
        'Completa: «Он не злоупотребляет ___.» (власть)',
        'властью',
        ['власти', 'власть', 'о власти'],
        'злоупотреблять pide instrumental.',
      ),
      q(
        '¿Cómo se nominaliza «потому что повысились цены»?',
        'из-за повышения цен',
        ['для повышения цен', 'при повышение цен', 'из-за повысились цены'],
        'из-за + sustantivo verbal en genitivo.',
      ),
      q(
        '¿Cuál presenta el suceso sin responsable?',
        'Крышу сорвало ветром.',
        [
          'Ветер сорвал крышу.',
          'Крыша была сорвана рабочими.',
          'Крышу сорвали.',
        ],
        'La impersonal de fuerza natural no tiene sujeto.',
      ),
      q(
        'Completa: «Он отказался, тем ___ что его никто и не уговаривал.»',
        'более',
        ['менее', 'лучше', 'самым'],
        'тем более что = tanto más cuanto que.',
      ),
      q(
        '¿Qué significa «Мне пришлось продать машину»?',
        'No tuve más remedio que vender el carro',
        [
          'Logré vender el carro',
          'Quise vender el carro',
          'Me prohibieron vender el carro',
        ],
        'пришлось + dativo = verse obligado.',
      ),
      q(
        '¿Qué significa невыносимый?',
        'insoportable',
        ['insustituible', 'inexplicable', 'imprescindible'],
        'не- + -им-: lo que no se puede soportar (выносить).',
      ),
      q(
        '¿A qué estilo pertenece «Слыхал? Трубу прорвало, вода как хлынет!»?',
        'Coloquial',
        ['Oficial', 'Científico', 'Periodístico'],
        'Frases incompletas, partículas y el giro «как хлынет» son del habla coloquial.',
      ),
      q(
        '¿Qué significa «делать из мухи слона»?',
        'exagerar, hacer una montaña de un grano de arena',
        ['matar dos pájaros de un tiro', 'holgazanear', 'meter la pata'],
        'Literalmente: hacer de una mosca un elefante.',
      ),
      q(
        'Según el texto, ¿cuál es la tesis del autor?',
        'Que el teletrabajo sustituya a la oficina es cierto solo en parte',
        [
          'El teletrabajo acabará con la oficina',
          'La oficina es insustituible',
          'El teletrabajo es un fracaso',
        ],
        '«Это утверждение справедливо лишь отчасти».',
      ),
      q(
        'Según el texto, ¿por qué uno de cada tres empleados querría trabajar desde casa?',
        'Porque pierde unas dos horas en desplazarse',
        [
          'Porque así cobra más',
          'Porque no se lleva bien con sus colegas',
          'Porque la empresa ahorra alquiler',
        ],
        '«На дорогу у него уходит около двух часов».',
      ),
      q(
        'Según el texto, ¿qué reconoce el autor a los críticos del teletrabajo?',
        'Que a los nuevos les cuesta ponerse al día sin ver a sus colegas',
        [
          'Que el equipo siempre se deshace',
          'Que el teletrabajo sale más caro',
          'Que nadie quiere volver a la oficina',
        ],
        '«Нельзя отрицать, что новичкам трудно войти в курс дела, не видя коллег».',
      ),
      q(
        'Según el texto, ¿cuál es la conclusión?',
        'Lo más probable es que se imponga un modelo mixto',
        [
          'Hay que prohibir el teletrabajo',
          'La oficina desaparecerá sin duda',
          'No se puede saber nada',
        ],
        '«Будущее, скорее всего, за смешанной моделью».',
      ),
    ],
  },
};
