import { q, type CourseTests } from './course-content';

// Tests del C2: uno por estación, en el orden de ./c2, y el examen final.
export const C2_TESTS: CourseTests = {
  lessons: [
    // 1. Estilística: tropos y figuras
    [
      q(
        '¿Qué tropo hay en «живой труп»?',
        'Oxímoron',
        ['Metonimia', 'Hipérbole', 'Lítote'],
        'El oxímoron une dos términos opuestos.',
      ),
      q(
        '¿Qué tropo hay en «Я три тарелки съел»?',
        'Metonimia',
        ['Metáfora', 'Personificación', 'Alegoría'],
        'Se nombra el recipiente por el contenido: traslado por contigüidad.',
      ),
      q(
        '¿Qué tropo hay en «Улыбнулись сонные берёзки»?',
        'Personificación',
        ['Sinécdoque', 'Perífrasis', 'Ironía'],
        'Se atribuyen acciones humanas a los abedules.',
      ),
      q(
        '¿Qué figura hay en «Клянусь я первым днём творенья, / Клянусь его последним днём»?',
        'Anáfora',
        ['Epífora', 'Quiasmo', 'Elipsis'],
        'Se repite el comienzo de los versos.',
      ),
      q(
        '¿Qué figura hay en «Он пришёл. Поздно. Один.»?',
        'Parcelación',
        ['Gradación', 'Polisíndeton', 'Inversión'],
        'La frase se parte con puntos para aislar cada elemento.',
      ),
      q(
        '¿Qué figura hay en «Волна и камень, стихи и проза, лёд и пламень»?',
        'Antítesis',
        ['Reticencia', 'Elipsis', 'Anadiplosis'],
        'Se oponen pares de contrarios.',
      ),
      q(
        '¿Qué es un «постоянный эпитет»?',
        'El epíteto fijo del folclore, como «красна девица»',
        [
          'Un epíteto inventado por un autor',
          'Un adjetivo repetido en cada verso',
          'Un adjetivo sin significado',
        ],
        'добрый молодец, чисто поле, синее море.',
      ),
      q(
        '¿Qué recurso fonético hay en «Шипенье пенистых бокалов и пунша пламень голубой»?',
        'Aliteración',
        ['Asonancia', 'Rima interna', 'Encabalgamiento'],
        'Se repiten las consonantes п y ш.',
      ),
      q(
        '¿Qué tropo hay en «Швед, русский — колет, рубит, режет»?',
        'Sinécdoque',
        ['Hipérbole', 'Símil', 'Eufemismo'],
        'El singular vale por el plural: el sueco, el ruso.',
      ),
      q(
        '¿Cuál es el error típico de un análisis estilístico?',
        'Enumerar recursos sin explicar qué efecto producen',
        [
          'Citar el texto',
          'Hablar del tono dominante',
          'Relacionar forma y sentido',
        ],
        'Hay que nombrar el recurso, citarlo y decir qué consigue.',
      ),
    ],
    // 2. Historia de la lengua
    [
      q(
        '¿Qué fenómeno explica las vocales fugitivas (сон / сна, день / дня)?',
        'La caída de las vocales reducidas',
        ['El полногласие', 'El аканье', 'La reforma de 1918'],
        'Las ultrabreves ъ, ь cayeron en posición débil y pasaron a о, е en posición fuerte.',
      ),
      q(
        '¿Por qué el pasado ruso concuerda en género y no en persona?',
        'Porque procede de un participio en -л',
        [
          'Porque procede del aoristo',
          'Por influencia del francés',
          'Por la reforma de Pedro I',
        ],
        'Sobrevivió el participio del perfecto, sin el verbo auxiliar.',
      ),
      q(
        '¿De qué es huella «два часа́» frente a «до ча́са»?',
        'Del número dual',
        ['Del vocativo', 'Del aoristo', 'Del supino'],
        'El dual se usaba para dos objetos; quedan restos como плечи, уши, берега́.',
      ),
      q(
        '¿Qué es el полногласие?',
        'Las secuencias rusas -оро-, -оло-, -ере- frente a las eslavónicas -ра-, -ла-, -ре-',
        [
          'La pronunciación de о átona como a',
          'La caída de las consonantes finales',
          'La alternancia к / ч',
        ],
        'город / град, молоко / млеко, берег / брег.',
      ),
      q(
        '¿De qué lengua vienen деньги, базар, карман y лошадь?',
        'De lenguas túrquicas',
        ['Del griego', 'Del neerlandés', 'Del francés'],
        'Entraron con la Horda y el comercio.',
      ),
      q(
        '¿Qué desapareció con la reforma ortográfica de 1918?',
        'Las letras ѣ, і, ѳ, ѵ y la ъ final',
        [
          'El alfabeto cirílico eclesiástico entero',
          'La letra ё',
          'Las mayúsculas de cortesía',
        ],
        'El alfabeto civil es de Pedro I (1708).',
      ),
      q(
        '¿Qué teoría formuló Lomonósov?',
        'La de los tres estilos: alto, medio y bajo',
        [
          'La del «nuevo estilo» afrancesado',
          'La de la diglosia',
          'La del verso libre',
        ],
        'El «nuevo estilo» es de Karamzín.',
      ),
      q(
        '¿Qué explica la л de люблю y куплю?',
        'El efecto de la yod sobre las labiales',
        ['La primera palatalización', 'Las vocales nasales', 'El аканье'],
        'п, б, м, в + j → пл, бл, мл, вл.',
      ),
      q(
        '¿Qué palabra es un calco?',
        'небоскрёб',
        ['матрос', 'икона', 'сундук'],
        'Calca «skyscraper». Las otras son préstamos directos.',
      ),
      q(
        '¿A quién se considera creador de la lengua literaria moderna?',
        'A Pushkin',
        ['A Lomonósov', 'A Karamzín', 'A Cirilo y Metodio'],
        'Sintetizó lo eslavónico, lo popular y lo europeo.',
      ),
    ],
    // 3. Variedades de la lengua
    [
      q(
        '¿Qué es el просторечие?',
        'El habla urbana de quien no domina la norma',
        [
          'Un dialecto del norte',
          'Una jerga juvenil',
          'El lenguaje críptico del hampa',
        ],
        'No es dialecto ni jerga; los escritores lo usan para caracterizar personajes.',
      ),
      q(
        '¿Qué rasgo es propio de los dialectos del norte?',
        'El оканье',
        ['La г fricativa', 'La -ть blanda en 3.ª persona', 'El яканье'],
        'Los otros tres son rasgos del sur.',
      ),
      q(
        '¿Cuál de estas formas es просторечие?',
        'ихний',
        ['их', 'свой', 'его'],
        'ихний, ейный y евонный no son normativos.',
      ),
      q(
        '¿Qué significa хвост en la jerga estudiantil?',
        'un examen pendiente',
        ['una chuleta', 'una beca', 'un profesor'],
        'Chuleta es шпора; beca, стипуха; profesor, препод.',
      ),
      q(
        '¿Qué significa чайник en la jerga informática?',
        'un novato',
        ['un error del programa', 'un administrador', 'el hardware'],
        'Error es баг o глюк; hardware, железо.',
      ),
      q(
        '¿Qué es el сказ?',
        'Una narración que imita el habla oral de un narrador popular',
        ['Un cuento de hadas', 'Un poema épico antiguo', 'Un informe oficial'],
        'Lo cultivaron Leskov, Bazhov y Zóschenko.',
      ),
      q(
        '¿Qué significa имхо?',
        'en mi humilde opinión',
        ['no lo sé', 'me río a carcajadas', 'por favor'],
        'Abreviación de la red, tomada del inglés IMHO.',
      ),
      q(
        '¿Qué debe hacer un extranjero con el мат?',
        'Reconocerlo y no usarlo',
        [
          'Usarlo para sonar natural',
          'Ignorarlo por completo',
          'Usarlo solo por escrito',
        ],
        'Es un léxico fuertemente tabú en público.',
      ),
      q(
        '¿De dónde procede беспредел, hoy de uso común?',
        'Del argot del hampa',
        [
          'Del lenguaje militar',
          'De los dialectos del sur',
          'Del eslavo eclesiástico',
        ],
        'Como разборка, наезд, крыша o лох.',
      ),
      q(
        '¿Qué era el «олбанский» o язык падонков?',
        'Una moda de escribir con faltas deliberadas',
        [
          'Un dialecto de Siberia',
          'La jerga de los marineros',
          'El ruso de los emigrados',
        ],
        'превед, медвед, аффтар жжот.',
      ),
    ],
    // 4. Análisis de poesía
    [
      q(
        '¿En qué metro está «Мой дядя самых честных правил»?',
        'Yambo',
        ['Troqueo', 'Dáctilo', 'Anapesto'],
        'El acento cae en las sílabas pares: ∪ —.',
      ),
      q(
        '¿En qué metro está «Буря мглою небо кроет»?',
        'Troqueo',
        ['Yambo', 'Anfíbraco', 'Anapesto'],
        'El acento cae en las sílabas impares: — ∪.',
      ),
      q(
        '¿En qué metro está «Тучки небесные, вечные странники»?',
        'Dáctilo',
        ['Anfíbraco', 'Anapesto', 'Yambo'],
        'Pie de tres sílabas con el acento en la primera: — ∪ ∪.',
      ),
      q(
        '¿Qué es un пиррихий?',
        'Un pie de dos sílabas sin acento',
        ['Un pie con dos acentos', 'Un verso sin rima', 'Una pausa interna'],
        'Dos acentos seguidos son un спондей; la pausa interna es la цезура.',
      ),
      q(
        '¿Cómo se llama la rima ABAB?',
        'перекрёстная',
        ['парная', 'кольцевая', 'дактилическая'],
        'AABB es парная; ABBA, кольцевая.',
      ),
      q(
        '¿Qué es una rima мужская?',
        'La que lleva el acento en la última sílaba',
        [
          'La que lleva el acento en la penúltima',
          'La que no es exacta',
          'La que solo riman vocales',
        ],
        'любовь / кровь. La llana es женская.',
      ),
      q(
        '¿Qué es el белый стих?',
        'Verso con metro pero sin rima',
        [
          'Verso sin metro ni rima',
          'Verso de arte menor',
          'Verso con rima asonante',
        ],
        'El verso sin metro ni rima es el верлибр.',
      ),
      q(
        '¿Cuántos versos tiene la онегинская строфа?',
        '14',
        ['8', '12', '16'],
        'Catorce versos de tetrámetro yámbico, invención de Pushkin.',
      ),
      q(
        'En «Я вас любил…», ¿de dónde viene la fuerza del poema?',
        'De la gramática y la contención, casi sin tropos',
        [
          'De una larga serie de metáforas',
          'Del léxico dialectal',
          'De los neologismos de autor',
        ],
        'Solo hay una metáfora (угасла); el efecto está en los tiempos y la modalidad.',
      ),
      q(
        '¿A qué grupo pertenecen Ajmátova, Gumiliov y Mandelshtam?',
        'A los acmeístas',
        ['A los simbolistas', 'A los futuristas', 'A los bardos'],
        'Simbolistas: Blok, Bely; futuristas: Maiakovski, Jlébnikov.',
      ),
    ],
    // 5. Análisis de prosa
    [
      q(
        '¿Qué es la несобственно-прямая речь?',
        'El estilo indirecto libre: la voz del narrador se tiñe de la del personaje',
        [
          'El estilo directo entre comillas',
          'El estilo indirecto con что',
          'Un monólogo dicho en voz alta',
        ],
        'No lleva verbo introductor ni comillas, pero conserva exclamaciones y léxico del personaje.',
      ),
      q(
        '¿Cuál es la diferencia entre повествователь y рассказчик?',
        'Narrador en tercera persona, fuera del mundo narrado / narrador con rostro propio',
        [
          'Narrador con rostro propio / narrador en tercera persona',
          'Autor biográfico / personaje',
          'Son sinónimos exactos',
        ],
        'Grinióv o Maksim Maksímych son рассказчики.',
      ),
      q(
        '¿Qué es la полифония según Bajtín?',
        'Las voces de los personajes son conciencias autónomas, no subordinadas al autor',
        [
          'Varios narradores que se turnan por capítulos',
          'La mezcla de verso y prosa',
          'El uso de dialectos',
        ],
        'Bajtín la describió en las novelas de Dostoievski.',
      ),
      q(
        '¿Qué es el остранение?',
        'Presentar lo conocido como si se viera por primera vez',
        [
          'Alejar al narrador de los hechos',
          'Usar palabras extranjeras',
          'Suprimir el final',
        ],
        'El término es de Shklovski: la ópera vista por Natasha Rostova.',
      ),
      q(
        '¿Cuál es la diferencia entre фабула y сюжет?',
        'Los hechos en su orden / cómo se cuentan',
        [
          'Cómo se cuentan / los hechos en su orden',
          'El tema / la idea',
          'El principio / el final',
        ],
        'La trama puede alterar el orden de la fábula.',
      ),
      q(
        '¿Qué es el хронотоп?',
        'La unidad de tiempo y espacio del relato',
        [
          'El orden cronológico de los capítulos',
          'La fecha de publicación',
          'El ritmo de la frase',
        ],
        'Otro concepto de Bajtín: el camino, el salón, el umbral.',
      ),
      q(
        '¿Qué rasgo es típico de Chéjov?',
        'El final abierto y el subtexto',
        [
          'La hipérbole y lo grotesco',
          'El periodo analítico largo',
          'El habla nerviosa y el escándalo',
        ],
        'Los otros rasgos son de Gógol, Tolstói y Dostoievski.',
      ),
      q(
        '¿Qué es un ненадёжный рассказчик?',
        'Un narrador del que el lector no puede fiarse',
        [
          'Un narrador omnisciente',
          'Un narrador que no aparece nunca',
          'Un narrador que habla en dialecto',
        ],
        'Como el de «Записки сумасшедшего» de Gógol.',
      ),
      q(
        '¿Qué marca delata el estilo indirecto libre?',
        'Tercera persona con las preguntas y exclamaciones del personaje',
        [
          'Comillas y dos puntos',
          'La conjunción что',
          'La primera persona del narrador',
        ],
        '«Неужели всё кончено? Нет, не может быть!»',
      ),
      q(
        '¿Qué significa подтекст?',
        'Lo no dicho, el sentido bajo las palabras',
        [
          'Una nota a pie de página',
          'El título de un capítulo',
          'Un resumen previo',
        ],
        'Es el «подводное течение» del teatro de Chéjov.',
      ),
    ],
    // 6. Traducción español–ruso
    [
      q(
        '¿Cómo se transcribe «Jorge» en ruso?',
        'Хорхе',
        ['Жорже', 'Джордж', 'Йорге'],
        'La j y la g ante e, i se transcriben con х.',
      ),
      q(
        '¿Qué es la конкретизация?',
        'Sustituir un verbo general por uno más preciso',
        [
          'Explicar con una frase lo que no tiene equivalente',
          'Traducir por el antónimo',
          'Recuperar en otro lugar un efecto perdido',
        ],
        '«Poner» → положить, поставить, повесить según el caso.',
      ),
      q(
        '¿Qué transformación hay en «No es difícil» → «Это легко»?',
        'Traducción antonímica',
        ['Calco', 'Generalización', 'Transliteración'],
        'Se expresa la misma idea con el término opuesto y sin negación.',
      ),
      q(
        '¿Cómo se traduce «Dijo que vendría»?',
        'Он сказал, что придёт.',
        [
          'Он сказал, что пришёл бы.',
          'Он сказал, что приходил.',
          'Он сказал, чтобы пришёл.',
        ],
        'En ruso no hay concordancia de tiempos.',
      ),
      q(
        '¿Cómo se traduce «Se lavó las manos»?',
        'Он вымыл руки.',
        ['Он вымыл свои руки.', 'Он вымыл его руки.', 'Он вымылся свои руки.'],
        'El ruso omite el posesivo con las partes del cuerpo.',
      ),
      q(
        '¿Qué significa репетиция?',
        'ensayo',
        ['repetición', 'clase particular', 'receta'],
        'Falso amigo: repetición es повторение.',
      ),
      q(
        '¿Cuál es el equivalente de «Matar dos pájaros de un tiro»?',
        'убить двух зайцев',
        ['убить двух птиц', 'сесть в калошу', 'лить как из ведра'],
        'Se busca el equivalente, no el calco: en ruso son dos liebres.',
      ),
      q(
        '¿Cómo se traduce «Está leyendo»?',
        'Он читает.',
        ['Он есть читая.', 'Он находится читая.', 'Он стоит читать.'],
        '«Estar + gerundio» se traduce con el imperfectivo simple.',
      ),
      q(
        '¿Cuál es el equivalente de «En casa del herrero, cuchillo de palo»?',
        'Сапожник без сапог',
        ['Нет дыма без огня', 'Нет худа без добра', 'Лучше синица в руках'],
        'Literalmente: zapatero sin botas.',
      ),
      q(
        '¿Qué es el буквализм?',
        'El calco servil, palabra por palabra',
        [
          'La traducción libre',
          'La nota del traductor',
          'La adaptación cultural',
        ],
        '«Он взял своё пальто и надел его на свои плечи».',
      ),
    ],
    // 7. Norma y variación
    [
      q(
        '¿Qué es una norma диспозитивная?',
        'La que admite variantes',
        [
          'La que no admite variantes',
          'La que solo vale por escrito',
          'La que ya no se usa',
        ],
        'творОг / твОрог. La obligatoria es императивная: звонИт.',
      ),
      q(
        '¿Qué par se distingue solo por el acento?',
        'ви́дение (modo de ver) / виде́ние (aparición)',
        ['творОг / твОрог', 'одноврЕменно / одновремЕнно', 'бАржа / баржА'],
        'Los otros tres son dobletes sin cambio de sentido.',
      ),
      q(
        '¿Qué tendencia histórica explica «звОнит»?',
        'El desplazamiento del acento hacia la raíz en los verbos en -ить',
        [
          'La influencia del ucraniano',
          'La reforma de 1918',
          'El оканье del norte',
        ],
        'Ya se consumó en вАрит, кУрит, плАтит.',
      ),
      q(
        '¿Cuál es la diferencia entre хлебы y хлеба?',
        'Hogazas / mieses',
        ['Mieses / hogazas', 'Singular / plural', 'Norma / error'],
        'Algunos plurales en -ы y -а́ se han especializado.',
      ),
      q(
        '¿Qué significa узус?',
        'el uso real de los hablantes',
        [
          'la norma escrita',
          'un diccionario ortográfico',
          'una regla de puntuación',
        ],
        'Se opone a кодификация.',
      ),
      q(
        '¿Cuál es la norma tradicional rusa?',
        'на Украине',
        ['в Украине', 'по Украине', 'у Украины'],
        '«В Украине» es el uso ucraniano y diplomático.',
      ),
      q(
        '¿Cuándo es obligatoria la letra ё?',
        'Cuando hay ambigüedad, en nombres propios y en textos para niños y extranjeros',
        ['Siempre', 'Nunca', 'Solo en poesía'],
        'все / всё, небо / нёбо.',
      ),
      q(
        '¿Qué son las слова-паразиты?',
        'Las muletillas',
        ['Los préstamos', 'Los arcaísmos', 'Los términos técnicos'],
        'как бы, типа, на самом деле, короче.',
      ),
      q(
        '¿Qué es lo primero al responder a una consulta normativa?',
        'Formular la duda e indicar la variante normativa con su fuente',
        [
          'Dar la opinión personal',
          'Corregir al que pregunta',
          'Citar un poema',
        ],
        'Después se explica la regla y el estatus de la otra variante.',
      ),
      q(
        '¿Qué forma es la normativa?',
        'с пятьюстами рублями',
        ['с пятистами рублями', 'с пятьсот рублями', 'с пятьюсот рублями'],
        'Se declinan las dos partes del numeral.',
      ),
    ],
    // 8. Edición y redacción
    [
      q(
        '¿Qué error hay en «дешёвые цены»?',
        'De combinabilidad: los precios son низкие',
        ['Pleonasmo', 'Tautología', 'Anacronismo'],
        'Lo barato son las cosas; los precios son bajos.',
      ),
      q(
        '¿Qué error hay en «народный фольклор»?',
        'Pleonasmo',
        ['Ambigüedad', 'Cliché', 'Mezcla de estilos'],
        'El folclore ya es popular por definición.',
      ),
      q(
        '¿Qué error hay en «Мать любит дочь»?',
        'Ambigüedad: no se sabe quién quiere a quién',
        ['Concordancia', 'Tautología', 'Rección'],
        'Nominativo y acusativo coinciden en las dos palabras.',
      ),
      q(
        '¿Cómo se corrige «Он любит футбол и плавать»?',
        'Он любит футбол и плавание.',
        [
          'Он любит футбол и плавая.',
          'Он любит в футбол и плавать.',
          'Он любит футбол, плавать.',
        ],
        'Los miembros homogéneos deben tener la misma forma.',
      ),
      q(
        '¿Cómo se corrige «Приехавшие делегаты на съезд»?',
        'Приехавшие на съезд делегаты',
        [
          'Делегаты на съезд приехавшие',
          'Приехавшие делегаты, на съезд',
          'На съезд делегаты приехавшие',
        ],
        'El giro participial no se puede partir con el sustantivo.',
      ),
      q(
        '¿Cómo se aligera «провести проверку»?',
        'проверить',
        [
          'осуществить проверку',
          'произвести проверку',
          'проверка была проведена',
        ],
        'Verbo en lugar de sustantivo verbal.',
      ),
      q(
        '¿Qué signo corresponde? «Я опоздал ___ сломался автобус.»',
        'Dos puntos',
        ['Raya', 'Coma', 'Punto y coma'],
        'En la yuxtaposición los dos puntos introducen la causa.',
      ),
      q(
        '¿Qué signo corresponde? «Вернёшься ___ позвони.»',
        'Raya',
        ['Dos puntos', 'Coma', 'Punto y coma'],
        'La raya marca tiempo o condición: «cuando vuelvas, llama».',
      ),
      q(
        '¿En cuál «наконец» es inciso y va entre comas?',
        'Во-первых, он устал; наконец, он просто не хотел идти.',
        [
          'Наконец он пришёл.',
          'Он наконец понял.',
          'Мы ждали и наконец дождались.',
        ],
        'Como remate de una enumeración es inciso; con el sentido «al cabo de un tiempo», no.',
      ),
      q(
        '¿Por dónde se empieza al editar por capas?',
        'Por el sentido y la estructura',
        ['Por la puntuación', 'Por la ortografía', 'Por las repeticiones'],
        'Se va de lo general a lo particular: sentido, lógica, frases, palabras, norma.',
      ),
    ],
    // 9. Juego lingüístico, ironía y subtexto
    [
      q(
        '¿En qué se basa el chiste «Штирлиц увидел голубые ели… оказалось, что голубые не только ели, но и пили»?',
        'En la homonimia de «ели»: «abetos» y «comían»',
        ['En una rima', 'En un dialectalismo', 'En una hipérbole'],
        'Es un calambur por homonimia.',
      ),
      q(
        '¿Qué demuestra la frase «Глокая куздра штеко будланула бокра»?',
        'Que la gramática sola ya transmite sentido',
        [
          'Que el ruso antiguo era incomprensible',
          'Que los trabalenguas son útiles',
          'Que los préstamos empobrecen la lengua',
        ],
        'Scherba la inventó con raíces inexistentes y morfología real.',
      ),
      q(
        '¿Qué figura hay en «Пил чай с женой, с лимоном и с удовольствием»?',
        'Zeugma',
        ['Palíndromo', 'Paronomasia', 'Anáfora'],
        'Se coordinan elementos de naturaleza distinta bajo una misma construcción.',
      ),
      q(
        '¿Qué significa «Ну ты и молодец!» dicho con ironía?',
        'Un reproche',
        ['Un elogio sincero', 'Una pregunta', 'Una despedida'],
        'Antífrasis: se dice lo contrario de lo que se piensa.',
      ),
      q(
        '¿Qué es el эзопов язык?',
        'Decir entre líneas para burlar la censura',
        [
          'El lenguaje de las fábulas para niños',
          'Un argot de comerciantes',
          'El estilo de los refranes',
        ],
        'Tradición que va de Saltykov-Schedrín a la prensa soviética.',
      ),
      q(
        '¿Qué suele querer decir «Надо подумать» en una conversación?',
        'Que no',
        [
          'Que sí, con entusiasmo',
          'Que se necesita más información técnica',
          'Que ya está decidido a favor',
        ],
        'Es un ejemplo de subtexto: lo que se dice no coincide con lo que se quiere decir.',
      ),
      q(
        '¿Qué es un прецедентный текст?',
        'Un texto que la comunidad conoce y al que basta aludir',
        [
          'Una sentencia judicial anterior',
          'El primer borrador de una obra',
          'Un prólogo',
        ],
        'Clásicos escolares, la Biblia, cuentos, cine soviético, lemas.',
      ),
      q(
        '¿Qué significa llamar a alguien «Плюшкин»?',
        'Que es un tacaño que lo guarda todo',
        [
          'Que es un vago',
          'Que es un mentiroso fanfarrón',
          'Que es un soñador inútil',
        ],
        'Personaje de Gógol. El vago es Обломов; el fanfarrón, Хлестаков; el soñador, Манилов.',
      ),
      q(
        '¿Qué quiere decir «Я вас не задерживаю»?',
        'Váyase',
        ['Quédese cuanto quiera', 'No tengo prisa', 'Le espero fuera'],
        'Es una fórmula de distancia helada.',
      ),
      q(
        '¿Qué es un палиндром?',
        'Una frase que se lee igual en los dos sentidos',
        [
          'Un trabalenguas',
          'Una palabra inventada por un autor',
          'Un chiste político',
        ],
        '«А роза упала на лапу Азора».',
      ),
    ],
    // 10. El discurso académico
    [
      q(
        '¿A qué equivale aproximadamente un «кандидат наук»?',
        'A un doctor',
        ['A un graduado', 'A un catedrático', 'A un estudiante de máster'],
        'El «доктор наук» es un grado superior, de habilitación.',
      ),
      q(
        '¿Cuál es la diferencia entre объект y предмет исследования?',
        'El fenómeno / el aspecto concreto que se estudia',
        [
          'El aspecto concreto / el fenómeno',
          'El objetivo / las tareas',
          'El método / el material',
        ],
        'Los dos apartados son obligatorios en la introducción de una tesis rusa.',
      ),
      q(
        '¿Cómo se formulan las задачи de una tesis?',
        'Con infinitivos: выявить, описать, сопоставить',
        [
          'Con preguntas retóricas',
          'Con sustantivos en plural',
          'Con verbos en pasado',
        ],
        'El objetivo (цель) es uno; las tareas son varias.',
      ),
      q(
        '¿Qué es un автореферат?',
        'El resumen publicado de la tesis',
        [
          'La autobiografía del doctorando',
          'Un informe del director',
          'Un programa antiplagio',
        ],
        'Se publica antes de la defensa.',
      ),
      q(
        '¿Cuál es un ejemplo de хеджирование (prudencia epistémica)?',
        'есть основания полагать',
        ['очевидно, что', 'общеизвестно', 'несомненно'],
        'Las otras tres afirman sin matiz y conviene evitarlas sin prueba.',
      ),
      q(
        '¿Cómo se expresa un desacuerdo cortés con otro autor?',
        'Представляется спорным утверждение Х о…',
        [
          'Мы разделяем точку зрения Х.',
          'Вслед за Х…',
          'Справедливо замечание Х о том, что…',
        ],
        'Las otras tres expresan acuerdo.',
      ),
      q(
        '¿Cómo se dirige uno por escrito a un profesor ruso?',
        'Уважаемый Иван Петрович!',
        ['Господин Иванов!', 'Профессор Иванов!', 'Иван!'],
        'Nombre y patronímico; nunca «господин» ni «профессор» con el apellido.',
      ),
      q(
        '¿Qué significa «Гипотеза подтвердилась частично»?',
        'La hipótesis se confirmó en parte',
        [
          'La hipótesis fue rechazada',
          'La hipótesis no se pudo comprobar',
          'La hipótesis se reformuló',
        ],
        'Fórmula habitual de las conclusiones.',
      ),
      q(
        '¿Con qué fórmula responde el doctorando a un oponente?',
        'Благодарю уважаемого оппонента за высказанные замечания.',
        [
          'Это голословное утверждение.',
          'Вы передёргиваете.',
          'Я вас не задерживаю.',
        ],
        'La defensa tiene un ritual de cortesía.',
      ),
      q(
        '¿Qué pronombre prefiere el autor de un texto académico ruso?',
        'мы',
        ['я', 'ты', 'вы'],
        'Se evita «я считаю»: по нашему мнению, мы полагаем.',
      ),
    ],
    // 11. Retórica
    [
      q(
        '¿Qué modo de persuasión se apoya en la credibilidad del orador?',
        'этос',
        ['логос', 'пафос', 'топос'],
        'логос es el argumento; пафос, la emoción del auditorio.',
      ),
      q(
        '¿Qué parte del canon retórico consiste en ordenar el discurso?',
        'диспозиция',
        ['инвенция', 'элокуция', 'акция'],
        'инвенция = hallar qué decir; элокуция = vestirlo de palabras; акция = pronunciarlo.',
      ),
      q(
        '¿Qué dice el «закон края»?',
        'Que se recuerda el principio y el final',
        [
          'Que el argumento más débil va al final',
          'Que no se debe superar el tiempo',
          'Que hay que empezar con una disculpa',
        ],
        'Por eso importan el comienzo y el cierre.',
      ),
      q(
        '¿Qué es el «гомеров порядок»?',
        'Argumentos fuertes, luego débiles y, al final, el más fuerte',
        [
          'Del más débil al más fuerte',
          'Del más fuerte al más débil',
          'En orden alfabético',
        ],
        'Así el cierre deja la mejor impresión.',
      ),
      q(
        '¿A qué género pertenece la защитительная речь?',
        'Al judicial',
        ['Al académico', 'Al religioso', 'Al doméstico'],
        'La pronuncia el abogado; la tradición rusa tiene a Plevako y Koni.',
      ),
      q(
        '¿Qué recurso usó Plevako en la defensa de la anciana de la tetera?',
        'La reducción al absurdo con gradación e ironía',
        [
          'El argumento de autoridad',
          'La apelación a la piedad',
          'El ataque personal al fiscal',
        ],
        '«Этого Россия уж, конечно, не выдержит».',
      ),
      q(
        '¿Qué es «навешивание ярлыков»?',
        'Poner etiquetas en lugar de argumentar',
        ['Citar fuentes', 'Resumir al final', 'Hacer una pausa'],
        'Es una de las trampas (уловки) que hay que saber desmontar.',
      ),
      q(
        '¿Qué debe evitar un orador?',
        'Disculparse al empezar («Я не оратор…»)',
        ['Mirar al público', 'Hacer pausas', 'Usar ejemplos'],
        'También leer del papel, las muletillas y pasarse del tiempo.',
      ),
      q(
        '¿Qué figura abre «Во дни сомнений, во дни тягостных раздумий…» de Turguénev?',
        'Anáfora',
        ['Oxímoron', 'Zeugma', 'Lítote'],
        'Se repite «во дни» al comienzo de cada miembro.',
      ),
      q(
        '¿Cuándo es más eficaz la argumentación de dos caras (двусторонняя)?',
        'Ante un público informado u hostil',
        [
          'Ante niños',
          'Cuando falta tiempo',
          'Cuando el público ya está de acuerdo',
        ],
        'Incluye y rebate los contraargumentos.',
      ),
    ],
    // 12. El ensayo crítico
    [
      q(
        '¿Cuál es una buena tesis de ensayo?',
        '«Язык не отражает характер народа — он его сочиняет».',
        [
          '«Язык важен».',
          '«Язык — средство общения».',
          '«Русский язык красив».',
        ],
        'La tesis debe ser discutible, no trivial.',
      ),
      q(
        '¿Qué tres tipos de texto alterna un buen ensayo?',
        'описание, повествование, рассуждение',
        [
          'зачин, тезис, вывод',
          'логос, этос, пафос',
          'фабула, сюжет, развязка',
        ],
        'Qué es, qué pasó y por qué.',
      ),
      q(
        '¿Cómo debe ser el final de un ensayo?',
        'Una imagen, una pregunta o una vuelta al inicio con sentido nuevo',
        [
          'Un resumen de la introducción',
          'Una moraleja',
          'Una lista de fuentes',
        ],
        'El final abre; no repite.',
      ),
      q(
        '¿Cuál es un recurso de autocorrección?',
        '«Вернее сказать…»',
        ['«Во-первых…»', '«Мне возразят…»', '«Таким образом…»'],
        'Muestra el pensamiento en movimiento.',
      ),
      q(
        '¿Qué significa «восходить к»?',
        'remontarse a',
        ['reducirse a', 'oponerse a', 'preceder a'],
        'Reducirse a es сводиться к; oponerse, противостоять; preceder, предшествовать.',
      ),
      q(
        '¿Cuál es un error del ensayo avanzado?',
        'El exceso de conectores escolares (во-первых, во-вторых…)',
        [
          'La concesión real al oponente',
          'La cita comentada y discutida',
          'La alternancia de frases largas y cortas',
        ],
        'También las generalidades sin ejemplo y la moralina final.',
      ),
      q(
        '¿Qué significa «оборачиваться» + instrumental?',
        'acabar siendo',
        ['dar la vuelta a', 'proceder de', 'poner en duda'],
        'Проистекать из = proceder de; ставить под сомнение = poner en duda.',
      ),
      q(
        'En el texto modelo, ¿cuál es la tesis?',
        'Lo intraducible no es la palabra, sino la costumbre de arreglarse con una sola',
        [
          'La palabra «тоска» no se puede traducir',
          'Nabokov tradujo mal «тоска»',
          'El español no tiene sentimientos equivalentes',
        ],
        '«Непереводимо не слово — непереводима привычка обходиться одним словом…»',
      ),
      q(
        'En el texto modelo, ¿qué queda de la «загадочная русская душа»?',
        'No un enigma, sino una biblioteca',
        [
          'Un misterio sin solución',
          'Un invento de los extranjeros',
          'Un carácter heredado',
        ],
        '«Душу сочинили писатели, а язык лишь аккуратно записал за ними».',
      ),
      q(
        '¿Qué juego de palabras cierra el texto modelo?',
        'перевести / перевезти',
        ['тоска / доска', 'слово / слава', 'душа / суша'],
        'Traducir frente a transportar: se puede traducir todo, pero no llevarse la estantería de libros.',
      ),
    ],
  ],
  exam: {
    title: 'Examen final C2',
    instructions: `Este examen cubre las doce estaciones del curso y sigue el espíritu del ТРКИ-4. Son 15 preguntas de opción múltiple; vale 100 puntos y se aprueba con 70. Puedes repetirlo las veces que quieras: cuenta tu mejor nota.

TEXTO PARA LAS PREGUNTAS 12 A 15
Вопрос о том, какого рода слово «кофе», давно перестал быть грамматическим и превратился в социальный. Формально средний род допустим уже несколько десятилетий, но стоит кому-нибудь сказать «чёрное кофе», как собеседник мысленно ставит ему диагноз. Норма, таким образом, служит не только общению, но и опознаванию «своих». Язык между тем живёт по собственным законам: то, что вчера считалось грубой ошибкой, сегодня допускается словарями, а завтра, возможно, станет единственно верным.`,
    questions: [
      q(
        '¿Qué tropo hay en «мёртвые души»?',
        'Oxímoron',
        ['Sinécdoque', 'Lítote', 'Símil'],
        'Une dos términos que se excluyen: las almas son inmortales.',
      ),
      q(
        '¿Qué resto dejó el número dual en el ruso actual?',
        'Plurales en -а́ de pares, como берега́ y глаза́',
        ['El vocativo «Боже»', 'La partícula бы', 'El genitivo en -у'],
        'También «два часа́» y двести.',
      ),
      q(
        '¿Cuál de estas palabras es jerga juvenil?',
        'препод',
        ['преподаватель', 'теперича', 'баять'],
        'теперича es просторечие y баять, un dialectalismo.',
      ),
      q(
        '¿En qué metro está «Как ныне сбирается вещий Олег»?',
        'Anfíbraco',
        ['Dáctilo', 'Anapesto', 'Yambo'],
        'Pie de tres sílabas con el acento en la segunda: ∪ — ∪.',
      ),
      q(
        '¿Qué forma de habla es «Он остановился. Неужели всё кончено? Нет, не может быть!»?',
        'Estilo indirecto libre',
        ['Estilo directo', 'Estilo indirecto', 'Сказ'],
        'Tercera persona, pero con las preguntas y exclamaciones del personaje.',
      ),
      q(
        '¿Cómo se traduce «Quiero que vengas»?',
        'Я хочу, чтобы ты пришёл.',
        [
          'Я хочу, что ты придёшь.',
          'Я хочу, чтобы ты придёшь.',
          'Я хочу тебя прийти.',
        ],
        'El subjuntivo se traduce con чтобы + pasado.',
      ),
      q(
        '¿Qué error hay en «Подъезжая к станции, у меня слетела шляпа»?',
        'El gerundio no tiene el mismo sujeto que el verbo principal',
        [
          'Un pleonasmo',
          'Una falta de concordancia de género',
          'Una rección equivocada',
        ],
        'El sombrero no se acercaba a la estación.',
      ),
      q(
        '¿Qué error hay en «согласно плана»?',
        'De rección: согласно pide dativo (плану)',
        ['De ortografía', 'De combinabilidad', 'De puntuación'],
        'Es uno de los errores más frecuentes del lenguaje administrativo.',
      ),
      q(
        '¿Qué recurso hay en «Его ставили в пример. Он стоял и мёрз»?',
        'Literalización de una metáfora',
        ['Palíndromo', 'Trabalenguas', 'Anáfora'],
        'Se toma al pie de la letra «ставить в пример».',
      ),
      q(
        'En la introducción de una tesis, ¿qué explica la «актуальность исследования»?',
        'Por qué el tema importa ahora',
        [
          'Qué métodos se usan',
          'Cuántas páginas tiene',
          'Quién dirige la tesis',
        ],
        'Актуальность темы обусловлена…',
      ),
      q(
        '¿Qué modo de persuasión apela a la emoción del auditorio?',
        'пафос',
        ['логос', 'этос', 'диспозиция'],
        'логос es el argumento; этос, la credibilidad del orador.',
      ),
      q(
        'Según el texto, ¿en qué se ha convertido la cuestión del género de «кофе»?',
        'En una cuestión social',
        [
          'En una cuestión puramente gramatical',
          'En un asunto legal',
          'En un problema de traducción',
        ],
        '«…перестал быть грамматическим и превратился в социальный».',
      ),
      q(
        'Según el texto, ¿qué ocurre cuando alguien dice «чёрное кофе»?',
        'Su interlocutor lo juzga, aunque el neutro esté admitido',
        [
          'Nadie lo nota',
          'Lo corrigen por ley',
          'Lo felicitan por seguir la norma nueva',
        ],
        '«Собеседник мысленно ставит ему диагноз».',
      ),
      q(
        'Según el texto, ¿para qué sirve la norma además de para comunicarse?',
        'Para reconocer a «los nuestros»',
        [
          'Para enseñar a los extranjeros',
          'Para frenar los préstamos',
          'Para simplificar la ortografía',
        ],
        '«Норма… служит не только общению, но и опознаванию „своих“».',
      ),
      q(
        '¿Qué idea cierra el texto?',
        'Lo que ayer era un error puede ser mañana lo único correcto',
        [
          'La norma no cambia nunca',
          'Los diccionarios siempre se equivocan',
          'Hay que prohibir las variantes',
        ],
        '«Язык… живёт по собственным законам».',
      ),
    ],
  },
};
