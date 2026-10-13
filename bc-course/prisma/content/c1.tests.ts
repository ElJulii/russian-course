import { q, type CourseTests } from './course-content';

// Tests del C1: uno por estación, en el orden de ./c1, y el examen final.
export const C1_TESTS: CourseTests = {
  lessons: [
    // 1. Precisión léxica
    [
      q(
        'Completa: «Она ___ ребёнка и вышла.»',
        'одела',
        ['надела', 'оделась на', 'надела на'],
        'одеть кого = vestir a alguien; надеть что = ponerse una prenda.',
      ),
      q(
        'Completa: «Организаторы ___ слово всем желающим.»',
        'предоставили',
        ['представили', 'поставили', 'предъявили'],
        'предоставить = conceder; представить = presentar o imaginar.',
      ),
      q(
        '¿Qué combinación es correcta?',
        'играть роль',
        ['играть значение', 'иметь роль', 'делать значение'],
        'Se dice играть роль e иметь значение; no se mezclan.',
      ),
      q(
        '¿Qué significa «эффектный костюм»?',
        'un traje vistoso',
        ['un traje eficaz', 'un traje económico', 'un traje práctico'],
        'эффектный = vistoso; эффективный = eficaz.',
      ),
      q(
        '¿Qué significa невежда?',
        'ignorante',
        ['maleducado', 'ingenuo', 'descortés'],
        'невежда = ignorante; невежа = maleducado.',
      ),
      q(
        '¿Cuál es un pleonasmo que hay que evitar?',
        'свободная вакансия',
        ['крупный учёный', 'проливной дождь', 'закадычный друг'],
        'Una вакансия ya es un puesto libre. Las otras son combinaciones fijas correctas.',
      ),
      q(
        '¿Qué significa «интеллигентный человек»?',
        'una persona culta y educada',
        [
          'una persona inteligente',
          'un intelectual de profesión',
          'una persona simpática',
        ],
        'Falso amigo: inteligente es умный.',
      ),
      q(
        'Completa: «Встреча ___ вчера, как и планировалось.»',
        'состоялась',
        ['случилась', 'состояла', 'произвелась'],
        'состояться se dice de lo planeado que se celebró; случиться, de lo imprevisto.',
      ),
      q(
        'Completa: «Команда ___ победу.»',
        'одержала',
        ['потерпела', 'нанесла', 'совершила'],
        'одержать победу / потерпеть поражение.',
      ),
      q(
        '¿Qué significa декада?',
        'diez días',
        ['diez años', 'un siglo', 'una docena'],
        'Falso amigo: década es десятилетие.',
      ),
    ],
    // 2. Casos difíciles del aspecto y de los verbos de movimiento
    [
      q(
        '¿Qué significa «Нельзя не ответить»?',
        'Hay que responder',
        [
          'No se puede responder',
          'No es obligatorio responder',
          'Está prohibido responder',
        ],
        'La doble negación afirma: es imposible no responder.',
      ),
      q(
        '¿Cuál es la diferencia entre «Я не отвечу» y «Я не буду отвечать»?',
        'No podré o no sabré / me niego',
        [
          'Me niego / no podré',
          'Responderé tarde / no responderé nunca',
          'No hay diferencia',
        ],
        'El futuro imperfectivo negado expresa falta de voluntad.',
      ),
      q(
        '¿Qué verbo se usa con поезд como sujeto?',
        'идёт',
        ['едет', 'ходит', 'везёт'],
        'Trenes, autobuses, cartas, lluvia y tiempo «van» con идти.',
      ),
      q(
        '¿Qué significa «Схожу в аптеку и вернусь»?',
        'Voy un momento a la farmacia y vuelvo',
        [
          'Bajo de la farmacia y vuelvo',
          'Paso de largo la farmacia',
          'Me quedo en la farmacia',
        ],
        'сходить, perfectivo, es una ida y vuelta rápida; no confundir con сходить / сойти (bajar).',
      ),
      q(
        '¿Qué significa «Он изъездил всю страну»?',
        'Ha recorrido el país entero',
        [
          'Se fue del país',
          'Atravesó el país una vez',
          'Conduce por todo el país a diario',
        ],
        'из- + ездить = recorrer por completo.',
      ),
      q(
        'Completa: «Тарелка ___ на столе, а вилка ___.»',
        'стоит / лежит',
        ['лежит / стоит', 'сидит / лежит', 'стоит / висит'],
        'El plato «está de pie» y el tenedor «yace».',
      ),
      q(
        '¿Qué combinación es correcta?',
        'поставить диагноз',
        ['положить диагноз', 'посадить диагноз', 'повесить диагноз'],
        'поставить вопрос, диагноз, оценку, подпись.',
      ),
      q(
        '¿Qué significa слушаться?',
        'obedecer',
        ['escucharse', 'oírse bien', 'quejarse'],
        'El -ся cambia el sentido: слушать = escuchar; слушаться = obedecer.',
      ),
      q(
        '¿Qué tono tiene «Сядьте!» frente a «Садитесь»?',
        'De orden',
        ['De invitación cortés', 'De consejo general', 'De duda'],
        'La invitación va en imperfectivo; el perfectivo suena a orden.',
      ),
      q(
        '¿Qué significa «Он вышел» dicho de alguien en una oficina?',
        'Ha salido un momento y vuelve pronto',
        ['Ya no vuelve hoy', 'Se ha jubilado', 'Nunca vino'],
        'вышел = vuelve pronto; ушёл = ya no está hoy.',
      ),
    ],
    // 3. Sintaxis del texto escrito
    [
      q(
        '¿Cuál es el predicado descompuesto de влиять?',
        'оказывать влияние',
        ['делать влияние', 'принимать влияние', 'наносить влияние'],
        'оказывать влияние, помощь, поддержку.',
      ),
      q(
        '¿Cómo se escribe la preposición?',
        'в течение недели',
        ['в течении недели', 'втечение недели', 'в течени недели'],
        'Como preposición termina en -е; «в течении реки» (sustantivo) va en -и.',
      ),
      q(
        '¿Qué forma es correcta?',
        'по окончании университета',
        [
          'по окончанию университета',
          'по окончание университета',
          'по окончания университета',
        ],
        'по окончании, по прибытии, по истечении terminan en -и.',
      ),
      q(
        'Completa: «Проблема заключается ___, что денег нет.»',
        'в том',
        ['о том', 'на том', 'к тому'],
        'заключаться в + preposicional: se inserta то declinado.',
      ),
      q(
        'Completa: «Он не ___ учёный, сколько популяризатор.»',
        'столько',
        ['только', 'настолько', 'сколько'],
        'не столько…, сколько… = no tanto… como…',
      ),
      q(
        '¿Qué significa «во избежание ошибок»?',
        'para evitar errores',
        [
          'a pesar de los errores',
          'a causa de los errores',
          'en caso de errores',
        ],
        'во избежание + genitivo: finalidad.',
      ),
      q(
        '¿Qué caso pide вопреки?',
        'Dativo',
        ['Genitivo', 'Acusativo', 'Instrumental'],
        'вопреки ожиданиям; несмотря на, en cambio, pide acusativo.',
      ),
      q(
        '¿Cuál es la versión clara de «Осуществление контроля за ходом работ производится отделом»?',
        'Отдел контролирует ход работ.',
        [
          'Отделом контролируется осуществление хода работ.',
          'Контроль отдела ходом работ производится.',
          'Ход работ осуществляет контроль отдела.',
        ],
        'Conviene volver al verbo cuando el estilo nominal se vuelve canceleresco.',
      ),
      q(
        '¿Qué significa «в конечном счёте»?',
        'a fin de cuentas',
        ['por lo menos', 'en primer lugar', 'en cierta medida'],
        'Por lo menos es по крайней мере; en primer lugar, в первую очередь.',
      ),
      q(
        '¿Dónde va la coma? «Он сказал, что ___ будет время, зайдёт.»',
        '«что, если будет время, зайдёт»: coma entre что y если',
        [
          '«что если будет время, зайдёт»: sin coma',
          '«что если, будет время зайдёт»',
          '«что, если будет время зайдёт»',
        ],
        'Se pone coma entre las dos conjunciones si después no viene то.',
      ),
    ],
    // 4. El estilo científico
    [
      q(
        '¿Qué caso pide являться al definir?',
        'Instrumental',
        ['Nominativo', 'Acusativo', 'Genitivo'],
        'X является + instrumental; X представляет собой + acusativo.',
      ),
      q(
        '¿Qué es una аннотация?',
        'Un resumen breve de 4 a 6 frases (abstract)',
        [
          'Una reseña valorativa',
          'Una nota a pie de página',
          'Una ponencia oral',
        ],
        'La reseña es la рецензия; la ponencia, el доклад.',
      ),
      q(
        'Completa: «Статья посвящена ___.» (проблема)',
        'проблеме',
        ['проблему', 'проблемой', 'проблемы'],
        'посвящён pide dativo.',
      ),
      q(
        '¿Qué verbo significa «mencionar de paso»?',
        'упоминать',
        ['утверждать', 'подчёркивать', 'настаивать'],
        'утверждать = afirmar; подчёркивать = recalcar; настаивать = insistir.',
      ),
      q(
        '¿Con qué fórmula se introduce un reparo en una reseña?',
        'Вместе с тем работа не лишена недостатков.',
        [
          'Несомненным достоинством работы является…',
          'Автору удалось…',
          'Актуальность темы не вызывает сомнений.',
        ],
        'Las otras tres elogian el trabajo.',
      ),
      q(
        '¿Qué significa «ср.» en una referencia?',
        'compárese',
        ['véase', 'página', 'siglo'],
        'ср. = сравни; véase es см.; página, с.; siglo, в.',
      ),
      q(
        'Completa: «Этот процесс ___ рядом факторов.»',
        'обусловлен',
        ['свойственен', 'посвящён', 'подразделён'],
        'X обусловлен + instrumental = está condicionado por.',
      ),
      q(
        '¿Cómo evita el «yo» el autor de un texto científico?',
        'Con мы, la pasiva y las impersonales',
        ['Con ты generalizador', 'Con el imperativo', 'Con diminutivos'],
        'Мы полагаем… · В статье рассматривается… · Представляется, что…',
      ),
      q(
        'Completa: «Автор приходит ___ о том, что…»',
        'к выводу',
        ['в вывод', 'на вывод', 'до вывода'],
        'прийти к выводу.',
      ),
      q(
        '¿Qué fórmula cierra una reseña favorable?',
        'В целом работа заслуживает высокой оценки.',
        [
          'Тема моего доклада — …',
          'Материалом исследования послужили…',
          'Вызывает сомнение тезис о…',
        ],
        'заслуживать + genitivo = merecer.',
      ),
    ],
    // 5. El estilo oficial
    [
      q(
        'En una solicitud (заявление), ¿cómo se indica quién la presenta?',
        'от + genitivo',
        ['Dativo sin preposición', 'Nominativo', 'с + instrumental'],
        'El destinatario va en dativo y el remitente, con от + genitivo.',
      ),
      q(
        '¿Qué documento autoriza a otra persona a actuar en tu nombre?',
        'доверенность',
        ['расписка', 'справка', 'характеристика'],
        'расписка es un recibo; справка, un certificado; характеристика, un informe sobre una persona.',
      ),
      q(
        '¿Con qué fórmula se pide la baja voluntaria?',
        'Прошу уволить меня по собственному желанию.',
        [
          'Прошу принять меня на должность…',
          'Прошу выдать справку о…',
          'Прошу предоставить мне отпуск.',
        ],
        'по собственному желанию = por voluntad propia.',
      ),
      q(
        '¿Qué tipo de carta es una рекламация?',
        'Una carta de reclamación',
        [
          'Una carta publicitaria',
          'Una carta de recomendación',
          'Una carta de agradecimiento',
        ],
        'письмо-претензия o рекламация: se reclama por un incumplimiento.',
      ),
      q(
        '¿Cómo se rechaza una propuesta en una carta comercial?',
        'К сожалению, мы не можем принять Ваше предложение.',
        ['Рады предложить…', 'Оплату гарантируем.', 'Направляем Вам…'],
        'Es la fórmula del письмо-отказ.',
      ),
      q(
        '¿Qué significa «расторжение договора»?',
        'rescisión del contrato',
        ['firma del contrato', 'prórroga del contrato', 'objeto del contrato'],
        'расторгнуть договор = rescindir.',
      ),
      q(
        '¿Cuándo se escribe Вы con mayúscula?',
        'Al dirigirse a una sola persona en una carta',
        [
          'Siempre',
          'Solo al dirigirse a varias personas',
          'Nunca en documentos',
        ],
        'Es la mayúscula de cortesía: Вы, Вам, Ваш.',
      ),
      q(
        '¿Qué es el канцелярит?',
        'La invasión del lenguaje burocrático en el habla común',
        [
          'Un tipo de contrato',
          'El sello de un documento',
          'Un saludo de correo electrónico',
        ],
        'El término es de Kornéi Chukovski: «в настоящее время» por сейчас, «данный» por этот.',
      ),
      q(
        '¿Qué valor tiene el presente en «Исполнитель обязуется…» de un contrato?',
        'De obligación',
        ['De acción en curso', 'De costumbre', 'De futuro incierto'],
        'En contratos y normas el presente expresa lo que las partes deben hacer.',
      ),
      q(
        '¿Qué significa «в противном случае»?',
        'de lo contrario',
        ['en ese mismo caso', 'en el mejor de los casos', 'por si acaso'],
        'Introduce la consecuencia del incumplimiento.',
      ),
    ],
    // 6. El estilo periodístico
    [
      q(
        '¿Qué género periodístico es un фельетон?',
        'Una sátira',
        ['Una noticia breve', 'Una entrevista', 'Una investigación'],
        'Noticia breve es заметка; investigación, расследование.',
      ),
      q(
        '¿Qué carga tiene la palabra застой?',
        'Negativa: estancamiento',
        ['Positiva: estabilidad', 'Neutra: pausa', 'Positiva: avance'],
        'El mismo hecho se nombra стабильность (positivo) o застой (negativo).',
      ),
      q(
        '¿A qué ciudad se refiere «Северная столица»?',
        'San Petersburgo',
        ['Moscú', 'Múrmansk', 'Nóvgorod'],
        'Moscú es «белокаменная».',
      ),
      q(
        '¿Qué es «четвёртая власть»?',
        'La prensa',
        ['El ejército', 'Los jueces', 'La Iglesia'],
        'Perífrasis: el cuarto poder.',
      ),
      q(
        '¿Qué figura hay en «отрицательный рост»?',
        'Eufemismo',
        ['Anáfora', 'Gradación', 'Pregunta retórica'],
        'Suaviza una caída llamándola «crecimiento negativo».',
      ),
      q(
        '¿De quién es la frase «Хотели как лучше, а получилось как всегда»?',
        'Chernomyrdin',
        ['Gorbachov', 'Krylov', 'Bulgákov'],
        '«Процесс пошёл» es de Gorbachov; «Рукописи не горят», de Bulgákov.',
      ),
      q(
        '¿A qué obra alude el titular «Мёртвые души избирателей»?',
        '«Almas muertas», de Gógol',
        [
          '«Padres e hijos», de Turguénev',
          '«Crimen y castigo», de Dostoievski',
          '«La desgracia de ser inteligente», de Griboiédov',
        ],
        'Es un texto precedente transformado.',
      ),
      q(
        '¿Qué significa «А воз и ныне там»?',
        'Nada ha avanzado',
        [
          'Todo salió bien',
          'Ya es demasiado tarde',
          'El problema se resolvió solo',
        ],
        'Viene de una fábula de Krylov: el carro sigue en el mismo sitio.',
      ),
      q(
        '¿Qué presupone «Власти наконец признали…»?',
        'Que antes lo negaban',
        ['Que lo dirán pronto', 'Que nadie lo sabía', 'Que es falso'],
        'наконец da por hecho una negativa previa.',
      ),
      q(
        '¿Qué significa блат?',
        'enchufe, favores por contactos',
        ['mercado negro', 'trabajo voluntario', 'escasez'],
        'Sovietismo. Escasez es дефицит; trabajo voluntario, субботник.',
      ),
    ],
    // 7. Orden de palabras, tema y rema, entonación
    [
      q(
        '¿A qué pregunta responde «Вчера приехал Иван»?',
        '¿Quién llegó ayer?',
        ['¿Cuándo llegó Iván?', '¿Llegó Iván ayer?', '¿Adónde llegó Iván?'],
        'El rema, lo nuevo, va al final: Иван.',
      ),
      q(
        '¿Cómo se traduce «В комнату вошёл мальчик»?',
        'Entró un niño en la habitación',
        [
          'El niño entró en la habitación',
          'El niño no entró en la habitación',
          'Un niño salió de la habitación',
        ],
        'El sujeto al final es información nueva: en español, artículo indeterminado.',
      ),
      q(
        '¿Cuál es el orden neutro para anunciar la apertura de un museo?',
        'В городе открылся новый музей.',
        [
          'Новый музей открылся в городе.',
          'Открылся в городе музей новый.',
          'Музей новый в городе открылся.',
        ],
        'En las frases de aparición: circunstancia – verbo – sujeto.',
      ),
      q(
        '¿Qué significa «минут пять»?',
        'unos cinco minutos',
        [
          'exactamente cinco minutos',
          'cada cinco minutos',
          'hace cinco minutos',
        ],
        'Sustantivo + numeral = aproximación.',
      ),
      q(
        '¿Qué significa «Я купил не эту книгу»?',
        'Compré otro libro',
        [
          'No compré nada',
          'Lo compró otra persona',
          'No compré el libro: lo saqué de la biblioteca',
        ],
        'не va justo delante de lo negado.',
      ),
      q(
        '¿Qué construcción entonativa tiene una pregunta sin palabra interrogativa («Это ваш дом?»)?',
        'ИК-3',
        ['ИК-1', 'ИК-2', 'ИК-5'],
        'ИК-3: subida brusca en la sílaba tónica de la palabra clave.',
      ),
      q(
        '¿Qué significa «Какой он врач!» con ИК-7?',
        'No es médico ni nada',
        [
          '¡Qué gran médico es!',
          '¿Qué clase de médico es?',
          'Es un médico cualquiera',
        ],
        'ИК-7 expresa negación expresiva.',
      ),
      q(
        '¿Qué significa «И я там был»?',
        'También yo estuve allí',
        ['Incluso allí estuve', 'Yo solo estuve allí', 'Yo no estuve allí'],
        'La partícula и enfoca la palabra que la sigue: я.',
      ),
      q(
        '¿Qué es el encadenamiento (цепная связь)?',
        'El rema de una frase pasa a ser el tema de la siguiente',
        [
          'Todas las frases comparten el mismo tema',
          'Cada frase empieza por el verbo',
          'Las frases se unen solo con conjunciones',
        ],
        'На столе лежала книга. Книгу подарил мне отец.',
      ),
      q(
        '¿Qué versión es más natural que «Письмо было написано Анной»?',
        'Письмо написала Анна.',
        [
          'Анной письмо было написано.',
          'Анна письмо написала была.',
          'Было написано письмо Анной.',
        ],
        'El ruso prefiere invertir el orden antes que usar la pasiva.',
      ),
    ],
    // 8. Norma culta
    [
      q(
        '¿Dónde lleva el acento normativo «звонит»?',
        'звонИт',
        ['звОнит', 'Ambas son normativas', 'Depende del registro'],
        'En todas las formas de звонить el acento cae en la terminación.',
      ),
      q(
        '¿Cuál es el plural normativo de договор?',
        'договОры',
        ['договорА', 'договОра', 'догОворы'],
        'договорА es coloquial.',
      ),
      q(
        '¿Qué forma es normativa?',
        'положить',
        ['ложить', 'покласть', 'положать'],
        'класть (imperfectivo) — положить (perfectivo): nunca «ложить» ni «покласть».',
      ),
      q(
        '¿Cuál es el imperativo normativo de ехать?',
        'поезжай',
        ['едь', 'ехай', 'ехи'],
        '«Едь» y «ехай» no son normativos.',
      ),
      q(
        '¿Qué forma es correcta?',
        'согласно приказу',
        ['согласно приказа', 'согласно приказом', 'согласно приказе'],
        'согласно pide dativo.',
      ),
      q(
        '¿Qué genitivos plurales son correctos?',
        'пара носков, пара чулок',
        [
          'пара носок, пара чулков',
          'пара носков, пара чулков',
          'пара носок, пара чулок',
        ],
        'носков, pero чулок.',
      ),
      q(
        '¿Cuál es un error?',
        'более лучше',
        ['красивее', 'самый красивый', 'красивейший'],
        'No se duplica el comparativo.',
      ),
      q(
        '¿De qué género es кофе según la norma?',
        'Masculino',
        ['Neutro', 'Femenino', 'No tiene género'],
        'El neutro solo se admite en el habla coloquial.',
      ),
      q(
        '¿Cómo se dice correctamente?',
        'две женщины',
        ['двое женщин', 'двое женщины', 'оба женщины'],
        'Los colectivos solo se usan con masculinos y con дети y люди.',
      ),
      q(
        '¿Cuál se escribe con -ться?',
        'Он хочет учиться.',
        [
          'Он хорошо учиться.',
          'Она учиться в школе.',
          'Что он делает? Учиться.',
        ],
        '¿Что делать? → учиться; ¿что делает? → учится.',
      ),
    ],
    // 9. Fraseología, refranes e intertextualidad
    [
      q(
        '¿Qué significa «козёл отпущения»?',
        'chivo expiatorio',
        ['hijo pródigo', 'lobo con piel de cordero', 'piedra de tropiezo'],
        'Hijo pródigo es блудный сын; piedra de tropiezo, камень преткновения.',
      ),
      q(
        '¿Qué son las «потёмкинские деревни»?',
        'Una fachada montada para engañar',
        [
          'Aldeas muy pobres',
          'Una obra interminable',
          'Una derrota sin remedio',
        ],
        'Se dice de lo que solo aparenta estar bien.',
      ),
      q(
        '¿Qué significa «отложить в долгий ящик»?',
        'dar largas a un asunto',
        ['guardar bajo llave', 'hacerlo enseguida', 'olvidarlo para siempre'],
        'Aplazar algo indefinidamente.',
      ),
      q(
        '¿Qué significa «сизифов труд»?',
        'un trabajo inútil y sin fin',
        [
          'un trabajo bien pagado',
          'un trabajo de limpieza enorme',
          'una victoria muy costosa',
        ],
        'La limpieza enorme son los авгиевы конюшни; la victoria costosa, пиррова победа.',
      ),
      q(
        '¿De dónde viene «А Васька слушает да ест»?',
        'De una fábula de Krylov',
        [
          'De una comedia de Griboiédov',
          'De una película soviética',
          'De la Biblia',
        ],
        'Se dice de quien sigue a lo suyo aunque le regañen.',
      ),
      q(
        '¿De qué obra es «Счастливые часов не наблюдают»?',
        '«Горе от ума», de Griboiédov',
        [
          '«Евгений Онегин», de Pushkin',
          '«Ревизор», de Gógol',
          '«Анна Каренина», de Tolstói',
        ],
        'Griboiédov es una de las grandes fuentes de frases aladas.',
      ),
      q(
        '¿Qué significa «медвежья услуга»?',
        'un flaco favor',
        ['un gran favor', 'un trabajo agotador', 'un regalo caro'],
        'Viene de Krylov: la ayuda que perjudica.',
      ),
      q(
        '¿Qué recurso hay en el titular «Быть или не быть реформе?»?',
        'Sustitución dentro de una cita conocida',
        ['Truncamiento', 'Literalización', 'Un refrán sin cambios'],
        'Se cambia una palabra de la frase de Hamlet.',
      ),
      q(
        '¿Qué significa el refrán «Под лежачий камень вода не течёт»?',
        'Sin esfuerzo no se consigue nada',
        [
          'Todo llega a su tiempo',
          'Las prisas son malas',
          'No hay mal que por bien no venga',
        ],
        'Literalmente: bajo la piedra quieta no corre el agua.',
      ),
      q(
        '¿De qué película es «Восток — дело тонкое»?',
        '«Белое солнце пустыни»',
        ['«Ирония судьбы»', '«Бриллиантовая рука»', '«Кавказская пленница»'],
        'También de ella es «За державу обидно».',
      ),
    ],
    // 10. Leer literatura clásica
    [
      q(
        '¿Cuál es la forma eslavónica de город?',
        'град',
        ['гряд', 'горд', 'огород'],
        '-ра- (eslavón) frente a -оро- (ruso): град / город, глава / голова.',
      ),
      q(
        '¿Qué significa очи?',
        'ojos',
        ['labios', 'mejillas', 'frente'],
        'Labios es уста; mejillas, ланиты; frente, чело.',
      ),
      q(
        '¿Qué significa сей en «сию минуту»?',
        'este',
        ['aquel', 'cada', 'ningún'],
        'сей, сия, сие = этот. Sobrevive en сейчас y до сих пор.',
      ),
      q(
        '¿Qué significa ибо?',
        'porque, pues',
        ['para que', 'si', 'que (comparativo)'],
        'Para que es дабы; si, коли; que comparativo, нежели.',
      ),
      q(
        '¿Qué es una верста?',
        'Una antigua medida de longitud, algo más de un kilómetro',
        ['Una moneda', 'Un carruaje', 'Un rango de funcionario'],
        'Es un historicismo: 1,07 km.',
      ),
      q(
        '¿Qué forma gramatical es «старче» en «Чего тебе надобно, старче?»?',
        'Vocativo',
        ['Genitivo', 'Adjetivo corto', 'Imperativo'],
        'El vocativo antiguo sobrevive en Боже, Господи, отче.',
      ),
      q(
        '¿Qué diferencia a un historicismo de un arcaísmo?',
        'El historicismo nombra una realidad desaparecida; el arcaísmo tiene equivalente actual',
        [
          'El historicismo es poético; el arcaísmo, coloquial',
          'No hay diferencia',
          'El historicismo es eslavónico; el arcaísmo, francés',
        ],
        'помещик es historicismo; очи (= глаза), arcaísmo.',
      ),
      q(
        '¿Qué indica la partícula -с en «да-с», «слушаю-с»?',
        'Respeto servil',
        ['Ironía', 'Negación', 'Duda'],
        'Es el словоерс, típico del habla del siglo XIX.',
      ),
      q(
        '¿Qué sugiere el nombre parlante Молчалин?',
        'El que calla (de молчать)',
        ['El que grita', 'El que pega', 'El perezoso'],
        'Los clásicos usan nombres que caracterizan al personaje.',
      ),
      q(
        '¿Con qué frase empieza «Анна Каренина»?',
        '«Все счастливые семьи похожи друг на друга…»',
        [
          '«Береги честь смолоду»',
          '«Эх, тройка! птица тройка…»',
          '«Белеет парус одинокой…»',
        ],
        'Las otras son de Pushkin, Gógol y Lérmontov.',
      ),
    ],
    // 11. Hablar en público
    [
      q(
        '¿Qué falacia es «переход на личности»?',
        'Atacar a la persona en lugar del argumento',
        [
          'Cambiar el tema',
          'Plantear una falsa disyuntiva',
          'Apelar a la mayoría',
        ],
        'Es el argumento ad hominem. Cambiar el tema es подмена тезиса.',
      ),
      q(
        '¿Con qué fórmula se adelanta el orador a una objeción?',
        'Мне могут возразить, что… На это я отвечу…',
        [
          'Я призываю вас…',
          'Позвольте начать с простого вопроса…',
          'Благодарю за внимание.',
        ],
        'Es la parte de la refutación (опровержение).',
      ),
      q(
        '¿Cuál expresa cautela?',
        'Рискну предположить…',
        ['Я убеждён, что…', 'Не подлежит сомнению, что…', 'Очевидно, что…'],
        'Las otras tres expresan firmeza.',
      ),
      q(
        '¿Cómo se concede para rebatir?',
        'Вы правы в том, что…, однако…',
        [
          'Это демагогия.',
          'Вы передёргиваете.',
          'Это голословное утверждение.',
        ],
        'Primero se reconoce una parte y después se objeta.',
      ),
      q(
        '¿Cómo evitas que te interrumpan?',
        'Позвольте мне закончить.',
        [
          'Простите, что перебиваю…',
          'Можно одно замечание?',
          'Позвольте вмешаться.',
        ],
        'Las otras tres sirven para interrumpir.',
      ),
      q(
        '¿Qué significa «голословное утверждение»?',
        'una afirmación sin pruebas',
        [
          'una afirmación unánime',
          'una afirmación a gritos',
          'una afirmación literal',
        ],
        'Es una réplica dura: se acusa de no fundamentar.',
      ),
      q(
        '¿Qué se grita en las bodas rusas?',
        'Горько!',
        ['Ну, будем!', 'Светлая память!', 'С лёгким паром!'],
        'Los invitados lo gritan para que los novios se besen.',
      ),
      q(
        '¿Cómo se da el pésame?',
        'Примите мои искренние соболезнования.',
        [
          'Позвольте от всей души поздравить вас.',
          'Приношу свои извинения.',
          'Слово предоставляется…',
        ],
        'соболезнование = pésame.',
      ),
      q(
        '¿Para qué sirve el «мы» inclusivo («Мы с вами понимаем…»)?',
        'Para acercar al orador y al auditorio',
        [
          'Para ocultar al autor de un texto científico',
          'Para dar una orden',
          'Para marcar distancia',
        ],
        'Es un recurso de persuasión y de contacto.',
      ),
      q(
        '¿Cómo se cierra una discusión sin acuerdo?',
        'Каждый останется при своём мнении.',
        [
          'В главном мы с вами сходимся.',
          'Предлагаю компромисс.',
          'На чём основано ваше утверждение?',
        ],
        'Cada uno se queda con su opinión.',
      ),
    ],
    // 12. Lengua y cultura
    [
      q(
        '¿Qué es la тоска?',
        'Un anhelo doloroso sin objeto preciso',
        [
          'Un aburrimiento pasajero',
          'Una alegría contenida',
          'Un enfado con alguien cercano',
        ],
        'Mezcla nostalgia, angustia y tedio; Nabokov la consideraba intraducible.',
      ),
      q(
        '¿Cuál es la diferencia entre свобода y воля?',
        'Libertad dentro de un orden / libertad sin límites',
        [
          'Libertad sin límites / libertad dentro de un orden',
          'Libertad política / esclavitud',
          'Son sinónimos exactos',
        ],
        'воля evoca el espacio abierto y hacer lo que uno quiere; también significa «voluntad».',
      ),
      q(
        '¿Cuál es la diferencia entre истина y правда?',
        'Verdad objetiva / verdad vivida y justa',
        [
          'Verdad vivida / verdad objetiva',
          'Verdad / mentira piadosa',
          'Verdad antigua / verdad moderna',
        ],
        'правда está emparentada con право y справедливость.',
      ),
      q(
        '¿Qué significa «надеяться на авось»?',
        'Confiar en que salga bien sin hacer nada para ello',
        [
          'Planear con mucho cuidado',
          'Pedir ayuda a los amigos',
          'Esperar un milagro religioso',
        ],
        'El «авось» es confiar en la suerte.',
      ),
      q(
        '¿Qué significa «не судьба»?',
        'No estaba escrito',
        ['No es justo', 'No es verdad', 'No hace falta'],
        'судьба = el destino que le toca a cada uno.',
      ),
      q(
        '¿Qué es la пошлость?',
        'La vulgaridad autosatisfecha, la falta de autenticidad',
        [
          'La pobreza material',
          'La grosería prepotente',
          'La hazaña con sacrificio',
        ],
        'La grosería prepotente es хамство; la hazaña, подвиг.',
      ),
      q(
        '¿Qué significa «душевный человек»?',
        'una persona cálida',
        [
          'una persona espiritual',
          'una persona indiferente',
          'una persona cobarde',
        ],
        'душевный = cálido; духовный = espiritual; равнодушный = indiferente.',
      ),
      q(
        '¿Qué espera un ruso al preguntar «Как дела?»?',
        'Una respuesta real, no una fórmula',
        ['Un «bien, gracias» y nada más', 'Que no se le responda', 'Una broma'],
        'Es una de las normas de comportamiento verbal: la franqueza se valora.',
      ),
      q(
        '¿Cuál es la diferencia entre родина y отечество?',
        'La tierra natal, íntima / la patria como Estado e historia',
        [
          'El Estado / la aldea',
          'La tierra extraña / la propia',
          'Son sinónimos poéticos',
        ],
        'малая родина frente a Отечественная война.',
      ),
      q(
        '¿Qué superstición se cumple antes de un viaje?',
        'Sentarse un momento («присесть на дорожку»)',
        [
          'Silbar en casa',
          'Dar la mano en el umbral',
          'Regalar un número par de flores',
        ],
        'Las otras tres son cosas que la superstición prohíbe.',
      ),
    ],
  ],
  exam: {
    title: 'Examen final C1',
    instructions: `Este examen cubre las doce estaciones del curso y sigue los contenidos del ТРКИ-3. Son 15 preguntas de opción múltiple; vale 100 puntos y se aprueba con 70. Puedes repetirlo las veces que quieras: cuenta tu mejor nota.

TEXTO PARA LAS PREGUNTAS 12 A 15
«Хотели как лучше»? В городе в очередной раз «оптимизировали» маршруты общественного транспорта. Чиновники уверяют, что горожане якобы только выиграют: автобусов станет меньше, зато они будут ходить «строго по расписанию». Свежо предание… Жители окраин, которым теперь приходится добираться до центра с двумя пересадками, почему-то не спешат благодарить слуг народа. Кому же выгодна такая «забота»? Вопрос, разумеется, риторический. А воз, как водится, и ныне там.`,
    questions: [
      q(
        '¿Qué significa «эффективный метод»?',
        'un método eficaz',
        ['un método vistoso', 'un método barato', 'un método típico'],
        'эффективный = eficaz; эффектный = vistoso.',
      ),
      q(
        '¿Qué significa «Не могу не согласиться»?',
        'Tengo que estar de acuerdo',
        [
          'No puedo estar de acuerdo',
          'No quiero estar de acuerdo',
          'Quizá esté de acuerdo',
        ],
        'La doble negación afirma.',
      ),
      q(
        'Completa: «Всё зависит ___, как пройдут переговоры.»',
        'от того',
        ['о том', 'в том', 'к тому'],
        'зависеть от + genitivo: se inserta то declinado.',
      ),
      q(
        'Completa: «Автор ___ внимание на спорные моменты.»',
        'обращает',
        ['уделяет', 'делает', 'оказывает'],
        'обращать внимание на что; уделять внимание чему (dativo, sin preposición).',
      ),
      q(
        '¿Qué fórmula corresponde a una carta de reclamación?',
        'Требуем возместить ущерб.',
        [
          'Рады предложить Вам…',
          'Имеем честь пригласить Вас…',
          'Выражаем искреннюю благодарность.',
        ],
        'возместить ущерб = indemnizar el daño.',
      ),
      q(
        '¿Qué orden es el neutro para introducir a un personaje nuevo?',
        'В маленьком городе жил старый учитель.',
        [
          'Старый учитель в маленьком городе жил.',
          'Жил старый учитель в городе маленьком.',
          'Учитель старый жил в маленьком городе.',
        ],
        'Circunstancia – verbo – sujeto: el rema va al final.',
      ),
      q(
        '¿Qué forma es normativa?',
        'по приезде',
        ['по приезду', 'по приезда', 'по приездом'],
        'по + preposicional con el sentido de «después de»: по приезде, по окончании.',
      ),
      q(
        '¿Qué significa «тришкин кафтан»?',
        'Un remiendo que arregla una parte estropeando otra',
        [
          'Una prenda muy elegante',
          'Un regalo inesperado',
          'Un secreto mal guardado',
        ],
        'Viene de una fábula de Krylov.',
      ),
      q(
        '¿Cuál es el equivalente actual de уста?',
        'губы, рот',
        ['глаза', 'щёки', 'лоб'],
        'уста es un poetismo.',
      ),
      q(
        '¿Qué réplica rebate con cortesía?',
        'При всём уважении, это утверждение нуждается в доказательстве.',
        [
          'Это демагогия.',
          'Вы передёргиваете.',
          'Это не выдерживает никакой критики.',
        ],
        'Las otras tres son réplicas duras.',
      ),
      q(
        '¿Qué significa «душа нараспашку»?',
        'una persona abierta y sincera',
        [
          'una persona cobarde',
          'una persona sin sentimientos',
          'una persona con el ánimo por los suelos',
        ],
        'душа es el centro de la persona: sentimientos y sinceridad.',
      ),
      q(
        'En la columna, ¿qué indican las comillas en «оптимизировали» y «забота»?',
        'Ironía: el autor no se cree esas palabras',
        [
          'Que son citas literales de un decreto',
          'Que son términos técnicos',
          'Que son palabras extranjeras',
        ],
        'Las comillas son un recurso de distancia irónica.',
      ),
      q(
        '¿Qué aporta «якобы» en «горожане якобы только выиграют»?',
        'Distancia: es lo que dicen los funcionarios, sin garantía',
        ['Certeza absoluta', 'Una orden', 'Un deseo del autor'],
        'якобы = supuestamente.',
      ),
      q(
        '¿A quiénes se refiere «слуги народа» en el texto?',
        'A los funcionarios y políticos, con ironía',
        [
          'A los conductores de autobús',
          'A los vecinos de las afueras',
          'A los periodistas',
        ],
        'Es una perífrasis irónica.',
      ),
      q(
        '¿Qué quiere decir el autor con «А воз и ныне там»?',
        'Que el problema sigue sin resolverse',
        [
          'Que los autobuses por fin llegan a tiempo',
          'Que los vecinos están agradecidos',
          'Que ya no hay nada que discutir',
        ],
        'La cita de Krylov cierra la columna: nada ha avanzado.',
      ),
    ],
  },
};
