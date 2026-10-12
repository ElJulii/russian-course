import type { CourseContent } from './course-content';

// Temario B1 (equivalente a ТРКИ-1): el plural de todos los casos, los verbos
// de movimiento con prefijos, participios y gerundios, el condicional, la
// oración compuesta y el estilo indirecto.
export const B1: CourseContent = {
  lessons: [
    {
      title: 'Los casos en plural y el repaso del sistema',
      durationMinutes: 60,
      content: `En A2 dominaste el singular. En B1 se espera que declines sin pensar también en plural, con adjetivos y pronombres.

EL PLURAL DE LOS SEIS CASOS
            sustantivos                    adjetivos
Nom.   столы, книги, окна, двери          новые, хорошие
Gen.   столов, книг, окон, дверей         новых, хороших
Dat.   столам, книгам, окнам, дверям      новым, хорошим
Acus.  = Nom. (inanimado) / = Gen. (animado)
Instr. столами, книгами, окнами, дверями  новыми, хорошими
Prep.  о столах, книгах, окнах, дверях    о новых, хороших
En dativo, instrumental y preposicional el género deja de importar: -ам / -ям, -ами / -ями, -ах / -ях.

EL ACUSATIVO ANIMADO EN PLURAL vale para los tres géneros:
Я вижу новых студентов, своих сестёр, маленьких детей. / Я вижу новые дома.

IRREGULARES EN INSTRUMENTAL: людьми, детьми, дочерьми, лошадьми. Y con raíz especial: друзьями, братьями, сыновьями, стульями, листьями.

PRONOMBRES EN PLURAL
эти: этих, этим, эти/этих, этими, об этих · те: тех, тем, теми, о тех
все: всех, всем, всеми, обо всех · мои: моих, моим, моими, о моих · наши: наших, нашим, нашими
какие: каких, каким, какими · чьи: чьих, чьим, чьими

SUSTANTIVOS QUE NO SE DECLINAN: пальто, метро, кино, кафе, такси, меню, интервью, радио, фото, кофе, какао, шоссе, жюри, y apellidos como Дюма, Шевченко, Живаго. El caso se ve en el adjetivo: в новом пальто, без чёрного кофе.

SUSTANTIVOS CON DECLINACIÓN ESPECIAL
· En -мя (neutros): имя, имени, имени, имя, именем, об имени; plural имена, имён, именам. Igual время, знамя, племя, семя.
· путь (masc.): пути, пути, путь, путём, о пути.
· мать, дочь: матери, дочери en todos los casos oblicuos; instr. матерью, дочерью.
· Apellidos en -ов / -ин: instr. masc. -ым (с Ивановым); el femenino se declina como adjetivo salvo en acus. (Иванову, с Ивановой).

USOS DE LOS CASOS QUE SE AÑADEN EN B1
Genitivo: comparar (старше брата), fechas (первого мая), tras ни… ни y negación enfática (не сказал ни слова), con ждать, хотеть, бояться, достигать, избегать, требовать, желать.
Dativo: благодаря (gracias a), вопреки (a pesar de), согласно (según), навстречу; con verbos радоваться, удивляться, завидовать, верить, мешать, принадлежать, учиться.
Instrumental: pasiva (написан Пушкиным), con гордиться, пользоваться, руководить, управлять, владеть, болеть, восхищаться, увлекаться, оказаться, являться, считаться.
Preposicional: участвовать в, нуждаться в, сомневаться в, убедиться в, признаться в, жениться на, настаивать на.

TEXTO
В наших больших городах живут люди разных национальностей и профессий. Многим молодым специалистам приходится снимать квартиры, потому что цены на новое жильё остаются высокими. Городские власти гордятся новыми парками и современными станциями метро, однако жители часто жалуются на пробки и нуждаются в удобных дорогах. Благодаря новым технологиям многие теперь работают из дома и встречаются с коллегами только по пятницам.`,
      exercises: [
        'Declina en los seis casos del plural: эти новые студенты / мои старшие сёстры / большие окна.',
        'Pon en la forma correcta: Я познакомился с ___ (интересные люди). Мы помогаем ___ (наши дети). Он рассказывал о ___ (свои друзья). У ___ (все студенты) есть учебники. Я вижу ___ (эти красивые девушки) и ___ (высокие здания).',
        'Completa con el caso que exige el verbo o la preposición: Он гордится ___ (свои дети). Я сомневаюсь в ___ (его слова). Благодаря ___ (ваша помощь) мы успели. Она боится ___ (большие собаки). Этот дом принадлежит ___ (мои родители). Мы пользуемся ___ (новые программы).',
        'Declina en singular: время, путь, дочь, имя. Luego escribe una frase con cada una en un caso oblicuo.',
        'Escribe un texto de 10 frases sobre los habitantes de tu ciudad (jóvenes, mayores, turistas, estudiantes) usando al menos una vez cada caso del plural.',
      ],
    },
    {
      title: 'Verbos de movimiento sin prefijo: los ocho pares',
      durationMinutes: 60,
      content: `En A2 conociste идти / ходить y ехать / ездить. El sistema completo tiene más pares. El primero de cada par es UNIDIRECCIONAL (un movimiento concreto, en una dirección); el segundo es MULTIDIRECCIONAL (ida y vuelta, repetido, sin rumbo, o la capacidad de moverse).

MOVERSE UNO MISMO
идти / ходить — ir a pie
ехать / ездить — ir en transporte
бежать / бегать — correr: я бегу, ты бежишь, они бегут / я бегаю
лететь / летать — volar: я лечу, ты летишь / я летаю
плыть / плавать — nadar, navegar: я плыву, ты плывёшь / я плаваю
лезть / лазить — trepar: я лезу, ты лезешь
ползти / ползать — arrastrarse, gatear

LLEVAR ALGO O A ALGUIEN (transitivos)
нести / носить — llevar en las manos, a pie: я несу, ты несёшь, pasado нёс, несла / я ношу, ты носишь
везти / возить — llevar en un vehículo: я везу, ты везёшь, pasado вёз, везла / я вожу, ты возишь
вести / водить — llevar de la mano, guiar, conducir: я веду, ты ведёшь, pasado вёл, вела / я вожу, ты водишь
Мать несёт ребёнка на руках. / Мать ведёт ребёнка за руку. / Мать везёт ребёнка в коляске.
Он водит машину уже десять лет. (sabe conducir) / Сейчас он ведёт машину. (está conduciendo)

CUÁNDO SE USA EL UNIDIRECCIONAL
· Movimiento en curso hacia un sitio: Куда ты бежишь? — Я бегу на автобус.
· Acción simultánea o de fondo: Когда я шёл домой, я встретил Анну.
· Futuro cercano planeado: Завтра мы летим в Сочи.
· Duración del trayecto de ida: Мы летели до Москвы три часа.
· Con каждый день si se habla solo del trayecto de ida: Каждое утро я иду на работу мимо парка.

CUÁNDO SE USA EL MULTIDIRECCIONAL
· Costumbre, repetición: Дети ходят в школу. Я часто летаю в командировки.
· Ida y vuelta ya hecha (pasado): В субботу мы ездили на дачу. = были на даче.
· Sin dirección: Он ходит по комнате. Птицы летают над морем.
· Capacidad o gusto: Ребёнок уже ходит. Я не умею плавать. Она любит бегать.

CON EL PREFIJO ПО-
· по- + unidireccional = empezar a moverse, perfectivo: пойти, поехать, побежать, полететь, поплыть, понести, повезти, повести. Он встал и пошёл к двери.
· по- + multidireccional = moverse un rato: походить, побегать, поплавать, полетать. Мы немного погуляли и походили по магазинам.

SENTIDOS FIGURADOS (siempre con el verbo indicado)
Идёт дождь, снег, урок, фильм, время. · Часы идут. · Эта шляпа вам идёт. · Автобус идёт в центр.
носить одежду, очки, имя, характер · вести урок, собрание, переговоры, дневник, себя · водить машину
Время летит. · Годы бегут. · Мне везёт! (¡Tengo suerte!) / Ему не повезло.

TEXTO
Каждое утро Андрей бегает в парке, а потом везёт детей в школу на машине. Сегодня машина сломалась, поэтому он ведёт сына за руку, а дочь несёт на руках: она ещё маленькая и ходит медленно. По дороге они видят, как над рекой летают чайки, а по воде плывёт белый теплоход. «Папа, а куда он плывёт?» — спрашивает сын. «В Казань. Летом мы тоже поплывём туда», — отвечает Андрей.`,
      exercises: [
        'Elige el verbo correcto y ponlo en la forma adecuada: Смотри, как быстро ___ (бежать / бегать) эта собака! По утрам я ___ (бежать / бегать) в парке. Вчера мы ___ (лететь / летать) в Петербург и уже вернулись. Самолёт ___ (лететь / летать) на высоте десять километров. Он хорошо ___ (плыть / плавать).',
        'Completa con нести / носить, везти / возить o вести / водить: Официант ___ нам кофе. Каждый день отец ___ детей в школу на машине. Экскурсовод ___ туристов по музею. Она всегда ___ очки. Грузовик ___ мебель в новый дом. Кто ___ собрание сегодня?',
        'Explica la diferencia de significado: a) Вчера я шёл в театр. / Вчера я ходил в театр. b) Он ведёт машину. / Он водит машину. c) Мы поплавали в море. / Мы поплыли к берегу.',
        'Traduce al ruso: Llueve desde la mañana. Este vestido te queda bien. El tiempo vuela. Tuve suerte: encontré trabajo. Lleva gafas. La profesora dirige la clase.',
        'Describe en 10 frases lo que ves desde una ventana o en una estación: gente, vehículos, animales en movimiento. Usa al menos seis pares de verbos distintos.',
      ],
    },
    {
      title: 'Verbos de movimiento con prefijos',
      durationMinutes: 65,
      content: `Al añadir un prefijo espacial, el verbo unidireccional se vuelve PERFECTIVO y el multidireccional pasa a ser su pareja IMPERFECTIVA. Ya no hay oposición una dirección / varias.
прийти (perf.) / приходить (imperf.) · принести / приносить · привезти / привозить · прилететь / прилетать
Atención a las raíces que cambian: идти → -йти (прийти, уйти, войти); ездить → -езжать (приезжать); плавать → -плывать (приплывать); бегать → -бегать con acento desplazado (прибегАть).

LOS PREFIJOS Y SUS PREPOSICIONES
при- llegada: прийти в / на + acus., к + dat. — Он пришёл на работу, к врачу.
у- marcharse por un tiempo largo: уйти из / с / от + gen. — Она ушла с работы.
в- (во-) entrar: войти в + acus. — Войдите в комнату.
вы- salir de dentro; salir un momento: выйти из + gen. — Он вышел из дома. Директор вышел. (vuelve enseguida)
под- (подо-) acercarse: подойти к + dat. — Подойдите к окну.
от- (ото-) apartarse; llevar algo a su destino: отойти от + gen. — Отойдите от края платформы. Я отнёс книги в библиотеку.
до- llegar hasta: дойти до + gen. — Как доехать до вокзала?
пере- cruzar; mudarse: перейти (через) улицу · переехать в другой город
про- pasar de largo, a través o recorrer una distancia: пройти мимо + gen., через + acus. — Мы прошли мимо театра. Мы проехали свою остановку. Проходите!
за- pasar de camino, por poco tiempo; detrás: зайти к + dat., в + acus., за + instr. — Я зайду к тебе вечером. Зайди в магазин за хлебом. Солнце зашло за тучу.
об- (обо-) rodear; recorrer todos: обойти вокруг + gen. — Мы обошли озеро. Он объехал все магазины.
с- bajar; ir y volver rápido (solo con multidireccional, perfectivo): сойти с + gen. — сойти с поезда. Сходи за хлебом! Я съездил в Москву на два дня.
с-…-ся juntarse / раз-…-ся dispersarse: Гости съехались со всей страны. После концерта все разошлись.
вз- (вс-, взо-) subir: взойти на гору · взлететь (despegar)

EL ASPECTO: UNA DIFERENCIA CLAVE EN PASADO
El imperfectivo en pasado puede indicar acción ANULADA (ida y vuelta):
К тебе приходил Иван. (vino y ya se fue) / К тебе пришёл Иван. (está aquí)
Я открывал окно. (ahora está cerrado) / Я открыл окно. (sigue abierto)
Летом к нам приезжали родители. (ya se marcharon)

LLEVAR CON PREFIJO
принести / приносить (traer a pie) · привезти / привозить (traer en vehículo) · привести / приводить (traer a alguien) · унести, увезти, увести (llevarse) · отнести, отвезти, отвести (llevar a un sitio y dejar) · перевести / переводить (traducir; transferir; pasar al otro lado) · провести / проводить время (pasar el tiempo) · произвести впечатление (causar impresión)
Что тебе привезти из Испании? · Отведи детей в школу. · Приведите пример.

SENTIDOS FIGURADOS FRECUENTES
выйти замуж (casarse, la mujer) · выходить из себя (perder los nervios) · прийти в голову (ocurrírsele) · прийти к выводу (llegar a la conclusión) · перейти на «ты» · подходить (convenir, ir bien): Это время мне подходит. · проходить (transcurrir): Как прошёл экзамен? · происходить / произойти (ocurrir): Что произошло? · обойтись без (arreglárselas sin) · сойти с ума (volverse loco) · вывести из строя · ввести в курс дела · довести до конца · уходить в отпуск

TEXTO
Вчера я вышел из дома рано, дошёл до остановки и сел в автобус. Мы проехали мост, и я вышел у вокзала. Мне нужно было встретить сестру: она приезжала к нам на праздники. Поезд пришёл вовремя. Сестра сошла с поезда, подошла ко мне, и мы обнялись. Она привезла подарки всей семье. По дороге домой мы зашли в кафе, а потом обошли весь центр. Через неделю она уехала, и я отвёз её на вокзал.`,
      exercises: [
        'Añade el prefijo adecuado (при-, у-, в-, вы-, под-, от-, до-, пере-, про-, за-, об-, с-): Он ___шёл в комнату и поздоровался. Мы ___шли улицу на зелёный свет. ___йди к доске! Я ___ехал свою остановку. По дороге я ___шёл в аптеку. Она ___ехала в другую страну навсегда. Как ___ехать до аэропорта? Он ___шёл от окна. Мы ___шли вокруг озера.',
        'Elige el aspecto y explica por qué: Пока тебя не было, (приходил / пришёл) сосед. Иди скорее, (приходил / пришёл) твой брат, он ждёт на кухне. Летом мы (уезжали / уехали) на море на две недели. Она (выходила / вышла) замуж и теперь живёт в Казани. Кто (брал / взял) мой словарь? Он лежит не на месте.',
        'Completa con принести, привезти, привести, отнести, отвезти u отвести en la forma correcta: Что тебе ___ из Мексики? Официант ___ нам меню. ___, пожалуйста, эти документы директору. Каждое утро я ___ сына в детский сад на машине. ___ пример из жизни. Она ___ на вечеринку своего нового друга.',
        'Traduce usando sentidos figurados: ¿Cómo fue el examen? Llegué a la conclusión de que tienes razón. ¿Qué ha pasado? Este horario no me conviene. Se me ocurrió una idea. No puedo arreglármelas sin tu ayuda.',
        'Explica por escrito a un turista cómo llegar desde la estación de tu ciudad hasta un museo o plaza (10 a 12 frases) usando al menos ocho verbos de movimiento con prefijos distintos.',
      ],
    },
    {
      title: 'El aspecto a fondo: infinitivo, imperativo y negación',
      durationMinutes: 60,
      content: `En A2 aprendiste la oposición proceso / resultado en pasado y futuro. Ahora vemos el aspecto donde más dudas produce.

1. EL ASPECTO DEL INFINITIVO
Imperfectivo obligatorio:
· Tras verbos de comienzo, continuación y fin: начать, стать, продолжать, кончить, перестать, бросить → Он перестал курить. Она стала изучать право.
· Tras verbos de hábito, gusto y cansancio: привыкнуть, отвыкнуть, учиться, любить, нравиться, надоесть, устать, уметь → Я привык вставать рано. Мне надоело ждать.
· Tras не надо, не нужно, не стоит, не следует, незачем, вредно, бесполезно → Не надо звонить. Не стоит покупать эту книгу.
Perfectivo habitual:
· Tras успеть, удаться, забыть, суметь, остаться (queda por hacer) → Я забыл купить хлеб. Нам удалось достать билеты. Осталось написать вывод.
Con хотеть, мочь, надо, нужно, должен depende del sentido: una vez con resultado (Мне надо позвонить маме) o proceso y repetición (Тебе надо больше читать).

2. НЕЛЬЗЯ Y МОЖНО
нельзя + imperfectivo = está prohibido: Сюда нельзя входить.
нельзя + perfectivo = es imposible: Сюда нельзя войти: дверь заперта.
не могу + imperf. (no debo) / не могу + perf. (no lo consigo): Я не могу открыть окно.

3. EL IMPERATIVO
Perfectivo: petición u orden concreta, una vez → Закройте окно. Передайте соль, пожалуйста. Запишите адрес.
Imperfectivo:
· Invitación cortés: Входите! Раздевайтесь! Садитесь! Берите пирог!
· Proceso, repetición, consejo general: Пишите аккуратно. Звоните в любое время.
· Señal para empezar algo ya acordado: Ну, рассказывай! Читайте, пожалуйста.
· Insistencia o impaciencia tras un perfectivo: Откройте дверь! Открывайте же!
Negativo:
· не + imperfectivo = no lo hagas (prohibición o petición): Не открывайте окно. Не говори ему.
· не + perfectivo = advertencia de algo involuntario (con смотри, осторожно): Не упади! Смотри не опоздай! Не забудьте паспорт! Не простудись!

4. LA NEGACIÓN EN PASADO
Я не читал этот роман. (no ocurrió, en general)
Я не прочитал роман. (se esperaba, pero no lo terminé)
Он долго не отвечал. / Он так и не ответил.

5. UNA VEZ, VARIAS, CUÁNTO TIEMPO
Repetición → imperfectivo: Я звонил ему три раза. Каждый раз, когда он приходил, мы пили чай.
Pero un número exacto de repeticiones como un todo admite perfectivo: Я прочитал письмо два раза.
долго, два часа, весь день → imperfectivo: Он писал доклад всю ночь.
за два часа, быстро, сразу, наконец, вдруг → perfectivo: Он написал доклад за ночь.
Duración del RESULTADO → на + acus. con perfectivo: Он приехал на неделю. Я взял книгу на два дня.

6. VERBOS CON по- Y про- TEMPORALES
по- = un rato (perfectivo): поговорить, почитать, поработать, посидеть, погулять.
про- = durante todo un periodo (perfectivo, exige duración): Он проработал там десять лет. Мы проговорили всю ночь.
за- = empezar: заплакать, засмеяться, закричать, заговорить, заболеть.

7. PAREJAS QUE CAMBIAN DE SIGNIFICADO
сдавать экзамен (presentarse) / сдать экзамен (aprobar) · решать задачу (intentar resolver) / решить (resolver) · уговаривать (tratar de convencer) / уговорить (convencer) · поступать в университет (solicitar plaza) / поступить (ingresar) · учить / выучить · искать / найти · ловить / поймать · добиваться / добиться (conseguir)
Он долго уговаривал меня, но так и не уговорил.

TEXTO
— Входите, садитесь! Чай будете? — Спасибо, не откажусь. — Берите печенье, не стесняйтесь. Ну, рассказывайте, как вы сдавали экзамен. — Сдавал я его три раза и наконец сдал! Весь месяц я готовился: вставал в шесть, перестал смотреть сериалы и даже привык заниматься по ночам. — Молодец! Только смотрите не заболейте от такой жизни. Теперь вам надо отдохнуть.`,
      exercises: [
        'Elige el infinitivo correcto y escribe la frase: Он начал (писать / написать) диссертацию. Я забыл (выключать / выключить) свет. Мне надоело (повторять / повторить) одно и то же. Нам удалось (покупать / купить) билеты. Не стоит (спорить / поспорить) с ним. Она привыкла (обедать / пообедать) дома.',
        'Explica la diferencia: a) Здесь нельзя переходить улицу. / Здесь нельзя перейти улицу. b) Не открывай дверь! / Смотри не открой дверь! c) Он сдавал экзамен. / Он сдал экзамен. d) Она приехала на месяц. / Она ехала месяц.',
        'Forma el imperativo adecuado (вы) y escribe la frase: (Входить / войти), пожалуйста, и (садиться / сесть)! (Записывать / записать) мой номер телефона. Не (забывать / забыть) зонтик, будет дождь! Не (говорить / сказать) ей об этом, это секрет. Осторожно, не (падать / упасть)!',
        'Completa con el verbo en el aspecto correcto (pasado): Он ___ (работать / проработать) в этой фирме двадцать лет и ушёл на пенсию. Я ___ (читать / прочитать) этот текст два раза, но ничего не понял. Мы ___ (решать / решить) задачу целый час и наконец ___ (решать / решить) её. Ребёнок вдруг ___ (плакать / заплакать).',
        'Escribe un diálogo de 12 líneas: recibes en casa a un invitado ruso (invitaciones corteses en imperfectivo), le pides dos favores concretos (perfectivo) y le haces dos advertencias (не + perfectivo).',
      ],
    },
    {
      title: 'Participios activos',
      durationMinutes: 55,
      content: `El participio (причастие) es una forma del verbo que funciona como adjetivo: concuerda con el sustantivo y se declina como adjetivo. Es propio del lenguaje escrito; al hablar se prefiere который.

Студент, читающий книгу, сидит у окна. = Студент, который читает книгу, сидит у окна.

1. PARTICIPIO ACTIVO DE PRESENTE: "que hace"
Solo de verbos imperfectivos. Se toma la forma они, se quita -т y se añade -щий.
читать → читаю-т → читающий, -ая, -ее, -ие
говорить → говоря-т → говорящий
жить → живу-т → живущий
писать → пишу-т → пишущий
идти → иду-т → идущий
1.ª conjugación: -ущ- / -ющ- · 2.ª conjugación: -ащ- / -ящ-
Reflexivos: siempre -ся (nunca -сь): занимающийся, занимающаяся, занимающиеся.

2. PARTICIPIO ACTIVO DE PASADO: "que hacía / que hizo"
De ambos aspectos. Se parte del pasado masculino.
· Si termina en -л: se quita -л y se añade -вший: читал → читавший · написал → написавший · жил → живший · вернулся → вернувшийся
· Si termina en otra consonante: + -ший: нёс → нёсший · вырос → выросший · помог → помогший · умер → умерший · привык → привыкший
· Especiales: идти → шедший · прийти → пришедший · вести → ведший · привести → приведший
Человек, написавший это письмо, уже уехал. = Человек, который написал это письмо…

3. CONCORDANCIA Y CASOS
El participio va en el mismo género, número y caso que el sustantivo:
Я знаю студента, живущего в этой комнате. (acus. animado = gen.)
Мы говорили с девушкой, приехавшей из Перу. (instr. fem.)
Я написал друзьям, живущим в Москве. (dat. pl.)
Con который el caso depende de la subordinada (который es siempre sujeto, nominativo, cuando se sustituye un participio activo).

4. POSICIÓN Y COMAS
· Después del sustantivo, el giro participial va ENTRE COMAS: Дети, играющие во дворе, очень шумят.
· Antes del sustantivo, sin comas: Играющие во дворе дети очень шумят.

5. CUÁL ELEGIR
Presente: acción simultánea a la principal → Я смотрел на детей, играющих во дворе.
Pasado imperfectivo: acción pasada anterior o proceso pasado → Писатель, живший в этом доме, умер в 1950 году.
Pasado perfectivo: acción terminada → Студенты, сдавшие экзамен, могут идти.

6. PARTICIPIOS CONVERTIDOS EN ADJETIVOS O SUSTANTIVOS
следующий (siguiente) · будущий (futuro) · настоящий (presente, verdadero) · бывший (ex) · блестящий (brillante) · подходящий (adecuado) · ведущий (principal; presentador) · выдающийся (destacado) · текущий (corriente) · решающий (decisivo) · потрясающий (impresionante)
учащийся (alumno) · служащий (empleado) · заведующий (jefe de sección) · управляющий (gerente) · трудящиеся (trabajadores) · отдыхающие (veraneantes) · провожающие (acompañantes) · пострадавший (víctima) · умерший (difunto)

TEXTO
Учёные, изучающие климат, предупреждают: число людей, страдающих от жары, растёт с каждым годом. Города, находящиеся у моря, особенно уязвимы. Специалисты, участвовавшие в прошлогодней конференции, предложили программу, уже получившую поддержку многих стран. Однако жители регионов, пострадавших от наводнений, считают, что помощь приходит слишком медленно.`,
      exercises: [
        'Forma el participio activo de presente y de pasado (masculino): читать, говорить, жить, писать, заниматься, работать, идти, нести, учиться, любить.',
        'Sustituye который por un participio activo: Девушка, которая сидит у окна, — моя сестра. Я знаю человека, который написал эту книгу. Мы говорили со студентами, которые изучают русский язык. Туристы, которые приехали вчера, живут в гостинице. Он подошёл к детям, которые играли в парке.',
        'Sustituye el participio por una oración con который: Люди, живущие на севере, привыкли к холоду. Поезд, прибывший на первый путь, следует до Казани. Я встретил друга, вернувшегося из экспедиции. Мы помогаем семьям, нуждающимся в поддержке.',
        'Pon el participio en el caso correcto: Я получил письмо от друга, ___ (живущий) в Чили. Мы поздравили студентов, ___ (сдавший) экзамен. Она работает с детьми, ___ (изучающий) музыку. Он рассказал о людях, ___ (построивший) этот город.',
        'Escribe una noticia breve (8 a 10 frases) sobre un suceso de tu ciudad usando al menos seis participios activos, tres antes y tres después del sustantivo, con las comas correctas.',
      ],
    },
    {
      title: 'Participios pasivos y forma corta',
      durationMinutes: 60,
      content: `El participio pasivo describe al objeto que recibe la acción. Solo lo forman los verbos transitivos.
Книга, написанная Толстым. = Книга, которую написал Толстой.
Quien realiza la acción va en INSTRUMENTAL.

1. PARTICIPIO PASIVO DE PASADO: "hecho" (el más usado)
De verbos perfectivos.
· Verbos en -ать, -ять, -еть → -нн-: написать → написанный · прочитать → прочитанный · сделать → сделанный · потерять → потерянный · увидеть → увиденный
· Verbos en -ить y en -сти, -зти, -чь → -енн- / -ённ- (con los cambios de la forma я): построить → построенный · получить → полученный · купить → купленный · приготовить → приготовленный · встретить → встреченный · пригласить → приглашённый · решить → решённый · принести → принесённый · перевести → переведённый · испечь → испечённый · найти → найденный
· Verbos en -ыть, -уть, -оть, -ереть y monosílabos con prefijo → -т-: открыть → открытый · закрыть → закрытый · забыть → забытый · взять → взятый · принять → принятый · начать → начатый · занять → занятый · убить → убитый · выпить → выпитый · одеть → одетый · запереть → запертый · понять → понятый

2. LA FORMA CORTA: el predicado de la pasiva
Se usa con быть para decir "está / fue / será hecho". Tiene una sola н.
написан, написана, написано, написаны · построен, построена, построено, построены · открыт, открыта, открыто, открыты
Дом построен в 1900 году. (es de 1900) · Дом был построен за два года. · Дом будет построен в следующем году.
Письмо написано по-русски. · Магазин закрыт. · Все билеты проданы. · Работа сделана.
Роман «Война и мир» написан Львом Толстым.
Muy frecuentes: сделан, сказан, решён, принят, открыт, закрыт, занят, продан, куплен, основан (fundado), создан (creado), назван, расположен (situado), посвящён (dedicado), связан (relacionado), вынужден (obligado), рождён.

3. PARTICIPIO PASIVO DE PRESENTE: "que es hecho"
De verbos imperfectivos transitivos; forma мы + -ый. Es libresco.
читать → читаем → читаемый · любить → любим → любимый · уважать → уважаемый · изучать → изучаемый · производить → производимый
Muchos son hoy adjetivos: любимый (favorito), уважаемый (estimado), так называемый (el llamado), незабываемый (inolvidable), необходимый (necesario), видимый, независимый, невыносимый, неповторимый.
Проблемы, изучаемые нашим институтом, очень важны.

4. -Н- O -НН-
Dos н: participio largo con prefijo o con palabras dependientes: написанное письмо, жаренная в масле рыба.
Una н: forma corta (написано) y adjetivos sin prefijo: жареная рыба, варёное яйцо, солёный огурец.

5. LAS TRES MANERAS DE HACER LA PASIVA
· быть + participio corto (acción terminada): Мост был построен в прошлом году.
· Verbo imperfectivo en -ся (proceso): Мост строится уже два года. Здесь продаются билеты.
· Tercera persona del plural sin sujeto (lo más natural al hablar): Мост построили в прошлом году. Здесь продают билеты. Мне сказали, что…

6. CON QUÉ CASO
Quién lo hizo → instrumental: открыт Колумбом. · De qué está hecho → из + gen.: сделан из дерева. · A quién va dedicado → dat.: посвящён матери.

TEXTO
Москва была основана в 1147 году князем Юрием Долгоруким. Кремль, окружённый высокими красными стенами, расположен в самом центре города. Многие здания, построенные в XIX веке, сегодня отреставрированы и открыты для посетителей. Третьяковская галерея, названная в честь своего основателя, известна картинами, написанными лучшими русскими художниками. Билеты продаются в кассе, но по понедельникам музей закрыт.`,
      exercises: [
        'Forma el participio pasivo de pasado, largo y corto (masculino): написать, сделать, построить, купить, открыть, забыть, получить, пригласить, взять, перевести, найти, принять.',
        'Transforma a pasiva con participio corto: Эту книгу написал Чехов. Университет основали в 1755 году. Все билеты уже продали. Письмо отправят завтра. Этот фильм сняли в Сибири. Проблему решили быстро.',
        'Sustituye который por un participio pasivo: Письмо, которое я получил вчера, было от брата. Дом, который построили в прошлом году, уже продан. Мы говорили о книге, которую перевели на испанский язык. Задача, которую решил студент, была трудной.',
        'Elige entre forma larga y corta y ponla en la forma correcta: Магазин уже ___ (закрытый). Я подошёл к ___ (закрытый) двери. Этот собор ___ (построенный) в XVI веке. В ___ (построенный) недавно доме ещё никто не живёт. Все места ___ (занятый).',
        'Describe un monumento, edificio o museo de tu país en 10 frases: cuándo fue fundado o construido, por quién, de qué está hecho, a quién está dedicado, qué se conserva en él. Usa al menos seis participios pasivos.',
      ],
    },
    {
      title: 'Los gerundios (деепричастия)',
      durationMinutes: 50,
      content: `El gerundio (деепричастие) expresa una acción secundaria del MISMO sujeto que la principal. No se declina ni se conjuga. Es propio del lenguaje escrito y cuidado.

1. GERUNDIO IMPERFECTIVO: acción simultánea, "haciendo"
Forma они sin la terminación + -я (o -а tras ж, ш, щ, ч).
читать → чита-ют → читая · говорить → говор-ят → говоря · идти → ид-ут → идя · слышать → слыша · держать → держа
Reflexivos: + -сь: заниматься → занимаясь · улыбаться → улыбаясь · возвращаться → возвращаясь
Verbos en -авать conservan -ва-: давать → давая · вставать → вставая · узнавать → узнавая
быть → будучи
No tienen gerundio imperfectivo (o no se usa): писать, петь, ждать, пить, бежать, хотеть, мочь, есть, ехать. Se dice: когда он писал…
Читая книгу, он делал заметки. = Когда он читал книгу, он делал заметки.
Она шла по улице, улыбаясь прохожим.

2. GERUNDIO PERFECTIVO: acción anterior, "habiendo hecho, tras hacer"
Pasado masculino sin -л + -в: прочитать → прочитал → прочитав · написать → написав · сделать → сделав · сказать → сказав · увидеть → увидев · закончить → закончив
Reflexivos: + -вшись: вернуться → вернувшись · проснуться → проснувшись · умыться → умывшись · встретиться → встретившись
Verbos de movimiento con prefijo y algunos en -сти: -я: прийти → придя · войти → войдя · уйти → уйдя · выйти → выйдя · принести → принеся · перевести → переведя · подойти → подойдя
Прочитав письмо, она заплакала. = Когда она прочитала письмо, она заплакала.
Вернувшись домой, он сразу лёг спать.

3. QUÉ PUEDE SIGNIFICAR
Tiempo: Гуляя по парку, я встретил друга. (cuando) · Causa: Не зная адреса, я не смог найти дом. (como no sabía) · Condición: Занимаясь каждый день, вы быстро выучите язык. (si) · Modo: Он говорил, не глядя на меня. (sin mirar) · Concesión: Зная правду, он всё-таки молчал. (aunque)
не + gerundio = "sin + infinitivo": не думая, не спеша, не говоря ни слова, не попрощавшись.

4. LA REGLA DE ORO: UN SOLO SUJETO
Correcto: Подъезжая к станции, я увидел море.
Incorrecto: «Подъезжая к станции, у меня слетела шляпа.» (la frase es de Chéjov, que se burla del error: el sombrero no se acercaba a la estación)
Por eso no se usa con frases impersonales del tipo мне было холодно, salvo con infinitivo: Переходя улицу, нужно быть внимательным.

5. COMAS
El giro de gerundio va siempre separado por comas, en cualquier posición: Он, улыбаясь, вошёл в комнату.
Excepción: los que funcionan como adverbios fijos: молча (en silencio), стоя, сидя, лёжа, шутя, не спеша, нехотя. Он читал лёжа.

6. EXPRESIONES FIJAS
честно говоря (sinceramente) · откровенно говоря · короче говоря (en resumen) · иначе говоря · собственно говоря · судя по + dat. (a juzgar por) · несмотря на + acus. (a pesar de) · благодаря + dat. (gracias a) · спустя + acus. (al cabo de) · начиная с + gen. (a partir de) · не говоря уже о (por no hablar de) · сломя голову (a toda prisa) · спустя рукава (con desgana) · положа руку на сердце

TEXTO
Окончив университет, Марина решила переехать в Петербург. Не имея там ни друзей, ни работы, она сначала чувствовала себя одинокой. Гуляя по городу, она часто заходила в маленькие кафе и, сидя у окна, писала письма домой. Найдя наконец работу в издательстве и познакомившись с коллегами, она поняла, что сделала правильный выбор. Честно говоря, теперь она не представляет себе жизни в другом городе.`,
      exercises: [
        'Forma el gerundio: (imperfectivo) читать, говорить, жить, заниматься, вставать, смотреть, возвращаться · (perfectivo) прочитать, сказать, вернуться, увидеть, прийти, войти, написать, проснуться.',
        'Sustituye la oración subordinada por un gerundio: Когда я возвращался домой, я встретил соседа. Когда она закончила работу, она пошла гулять. Так как он не знал русского языка, он ничего не понял. Если вы будете читать каждый день, вы быстро выучите слова. После того как мы пообедали, мы поехали в центр.',
        'Sustituye el gerundio por una oración subordinada (когда, так как, если, хотя): Выйдя из дома, я вспомнил, что забыл телефон. Не имея денег, он не мог купить билет. Читая газету, отец пил кофе. Зная об опасности, он всё-таки поехал.',
        'Di cuáles frases son incorrectas y corrígelas: a) Читая письмо, у меня зазвонил телефон. b) Войдя в комнату, он включил свет. c) Возвращаясь домой, начался дождь. d) Посмотрев фильм, мне стало грустно. e) Гуляя по лесу, мы собирали грибы.',
        'Cuenta en 10 frases cómo fue tu primer día en un lugar nuevo (ciudad, trabajo, universidad) usando al menos seis gerundios, tres de cada aspecto, y dos expresiones fijas.',
      ],
    },
    {
      title: 'El condicional y el subjuntivo: бы, если бы, чтобы',
      durationMinutes: 55,
      content: `El ruso tiene un solo modo para lo hipotético, lo deseado y lo irreal: la partícula БЫ + verbo en PASADO. No distingue tiempo: el contexto dice si es presente, pasado o futuro.

1. FORMACIÓN
Я пошёл бы. / Я бы пошёл. — Iría. / Habría ido.
Она сказала бы. · Мы хотели бы. · Это было бы хорошо.
бы suele ir tras la primera palabra acentuada o tras el verbo. Tras vocal puede reducirse a б: Я б хотел…

2. CONDICIONES REALES E IRREALES
Real (puede cumplirse) → если + indicativo, con futuro en las dos partes:
Если будет время, я приду. — Si tengo tiempo, iré.
Irreal (no se cumple o no se cumplió) → если бы + pasado, … бы + pasado:
Если бы у меня было время, я бы пришёл. — Si tuviera tiempo, iría. / Si hubiera tenido tiempo, habría ido.
Если бы я знал об этом раньше, я бы тебе помог.
Если бы не дождь, мы пошли бы гулять. — Si no fuera por la lluvia…
Если бы не ты, я бы опоздал.
La segunda parte puede empezar con то: Если бы я был на твоём месте, то я бы согласился.

3. DESEOS Y PETICIONES CORTESES
Я хотел бы поговорить с директором. — Quisiera…
Мне хотелось бы узнать… · Не могли бы вы помочь мне? · Вы не подскажете…?
Я бы выпил кофе. — Me tomaría un café.
Deseo con infinitivo o pasado: Поспать бы сейчас! (¡Quién pudiera dormir!) · Только бы он пришёл! · Лишь бы не было дождя! · Хорошо бы поехать на море!
Si es irrealizable: Если бы я был моложе! · Вот бы мне такую машину!

4. CONSEJOS Y REPROCHES SUAVES
Ты бы отдохнул. — Deberías descansar. · Сходил бы ты к врачу. · Вы бы позвонили ей. · Шёл бы ты домой.
На твоём месте я бы не спешил.
Reproche por lo no hecho: Мог бы и позвонить! · Сказал бы раньше!

5. ЧТОБЫ: "para que", "que"
a) Finalidad
· Mismo sujeto → чтобы + infinitivo: Я пришёл, чтобы помочь тебе.
· Sujeto distinto → чтобы + pasado: Я пришёл, чтобы ты помог мне. Говорите громче, чтобы все слышали.
Con verbos de movimiento y mismo sujeto se puede omitir: Я пришёл помочь.
b) Deseo, petición, orden dirigidos a otra persona → чтобы + pasado
хотеть, просить, требовать, советовать, велеть, желать, сказать, предлагать, настаивать на том, стараться, следить за тем
Я хочу, чтобы ты пришёл. — Quiero que vengas. (Nunca presente ni futuro tras чтобы.)
Мама сказала, чтобы я купил хлеб. · Врач советует, чтобы он больше гулял. · Нужно, чтобы все знали об этом. · Важно, чтобы вы понимали правила.
c) Duda y negación: Я не думаю, чтобы он согласился. · Не может быть, чтобы она забыла.
d) вместо того чтобы (en lugar de) · для того чтобы (con el fin de) · без того чтобы

6. ЧТО FRENTE A ЧТОБЫ
Он сказал, что придёт. (informa) / Он сказал, чтобы я пришёл. (ordena)
Я знаю, что она дома. / Я хочу, чтобы она была дома.

7. QUIENQUIERA, DONDE SEA: pronombre + бы + ни + pasado
Что бы ни случилось, я буду с тобой. — Pase lo que pase.
Где бы он ни был, он всегда звонит матери. · Кто бы ни пришёл, меня нет дома. · Как бы то ни было… (sea como sea) · Сколько бы это ни стоило…

8. COMO SI: как будто (бы), будто, словно
Он говорит так, как будто всё знает. · Она посмотрела на меня, словно видела впервые.

TEXTO
Если бы мне предложили выбрать любую страну, я бы уехал в Аргентину. Я хотел бы жить у океана и работать переводчиком. Родители, конечно, хотят, чтобы я остался дома и стал врачом. «Ты бы подумал о будущем», — говорит отец. Но я учу языки именно для того, чтобы увидеть мир. Что бы ни говорили другие, я попробую. А если бы не попробовал, то жалел бы об этом всю жизнь.`,
      exercises: [
        'Transforma en condición irreal. Modelo: У меня нет времени, поэтому я не приду. → Если бы у меня было время, я бы пришёл. — Он не знает языка, поэтому не работает за границей. / Шёл дождь, поэтому мы не поехали на дачу. / Я опоздал, потому что не услышал будильник. / У неё нет денег, поэтому она не покупает машину.',
        'Completa con что o чтобы y la forma correcta del verbo: Мама хочет, ___ я ___ (стать) врачом. Он сказал, ___ завтра ___ (прийти) вовремя. Я знаю, ___ ты ___ (быть) прав. Учитель попросил, ___ мы ___ (принести) словари. Я встал рано, ___ ___ (успеть) на поезд. Говори тише, ___ дети не ___ (проснуться).',
        'Haz más corteses estas frases con бы: Я хочу поговорить с вами. / Помогите мне! / Отдохни. / Позвони родителям. / Можно мне чаю?',
        'Completa con tus ideas: Если бы я был президентом, … / Если бы не интернет, … / Что бы ни случилось, … / Я учу русский язык, чтобы … / Мои родители хотят, чтобы … / На твоём месте я бы …',
        'Escribe 12 frases sobre el tema «Если бы я мог начать жизнь сначала»: qué cambiarías, qué harías igual y qué quieres que hagan los demás. Usa если бы, чтобы con sujeto distinto y una construcción con бы ни.',
      ],
    },
    {
      title: 'La oración compuesta: который, tiempo, causa, concesión',
      durationMinutes: 60,
      content: `1. КОТОРЫЙ EN TODOS LOS CASOS
Género y número: los del sustantivo al que se refiere. Caso: el que pide su función dentro de la subordinada. La preposición va delante.
Nom. Это врач, который лечит мою мать.
Gen. Это врач, у которого я был вчера. · Это книга, без которой я не могу работать.
Dat. Это друг, которому я звоню каждый день. · Вот дом, к которому мы шли.
Acus. Это фильм, который я видел. · Это человек, которого я уважаю. · Это страна, в которую я хочу поехать.
Instr. Это коллега, с которым я работаю. · Это ручка, которой я пишу.
Prep. Это город, в котором я родился. · Это проблема, о которой мы говорили.
Plural: люди, которых я знаю · друзья, с которыми я учился · книги, о которых ты говорил
"Cuyo" se dice con el genitivo de который DESPUÉS del sustantivo: Это писатель, книги которого я люблю. · Это девушка, брата которой я знаю.

2. OTRAS PALABRAS RELATIVAS
где, куда, откуда (lugar): Город, где я родился… · Страна, откуда он приехал…
когда (tiempo): День, когда мы познакомились…
кто tras тот, те, все, каждый, никто: Тот, кто много читает, много знает. · Все, кто пришёл, получили подарки.
что tras то, всё, ничего: Я сделал всё, что мог. · То, что ты сказал, очень важно. · Расскажи о том, что ты видел.
чей (libresco): Писатель, чьи книги я люблю…
какой (de qué clase): Такого фильма, какой мы видели вчера, я ещё не встречал.

3. EL TIEMPO
когда (cuando) · пока (mientras): Пока ты спал, я приготовил завтрак.
пока не + perfectivo (hasta que): Подожди, пока я не закончу. · Я не уйду, пока ты не ответишь.
в то время как (mientras que, también contraste) · по мере того как (a medida que)
до того как / перед тем как / прежде чем (antes de) + infinitivo si el sujeto es el mismo: Перед тем как уйти, выключи свет. · Позвони мне до того, как он придёт.
после того как (después de que): После того как мы пообедали, мы пошли гулять.
как только (en cuanto): Как только приеду, позвоню.
с тех пор как (desde que): С тех пор как он уехал, прошло два года.
едва (apenas) · не успел…, как: Не успел я войти, как зазвонил телефон.

4. LA CAUSA
потому что (nunca al principio) · так как (en cualquier posición) · поскольку (puesto que) · оттого что · ведь (es que, coloquial)
из-за того что (causa negativa) · благодаря тому что (causa positiva) · в связи с тем что (formal) · ввиду того что · вследствие того что
Con sustantivo: из-за + gen. (por culpa de): из-за дождя · благодаря + dat.: благодаря друзьям · от + gen. (causa involuntaria): от страха, от радости, от холода · по + dat. (por error propio): по ошибке, по болезни, по привычке · за + acus.: спасибо за помощь

5. LA CONSECUENCIA
поэтому (por eso) · так что (así que) · вот почему · в результате · следовательно (por consiguiente, formal)
так…, что / такой…, что / настолько…, что: Он так устал, что сразу заснул. · Был такой шум, что я ничего не слышал.

6. LA CONCESIÓN
хотя (aunque) · несмотря на то что (a pesar de que) · пусть / пускай (aunque, que) · тем не менее (sin embargo) · всё-таки, всё же, всё равно (aun así) · зато (en cambio, compensación) · однако (sin embargo)
несмотря на + acus.: Несмотря на дождь, мы пошли гулять. · вопреки + dat.: вопреки ожиданиям
как ни / сколько ни + verbo: Как я ни старался, ничего не получилось.

7. COMPARAR Y OPONER
чем…, тем… (cuanto más…, más…): Чем больше я читаю, тем больше хочу знать. · Чем раньше, тем лучше.
не только…, но и… · как…, так и… (tanto… como…) · не столько…, сколько… · либо…, либо… / или…, или… · то…, то… · ни…, ни… · если…, то… · а то / иначе (si no): Поспеши, а то опоздаешь.

TEXTO
Город, в котором я вырос, сильно изменился с тех пор, как я уехал. Улица, по которой я ходил в школу, теперь закрыта для машин, а на месте кинотеатра, куда мы бегали по воскресеньям, построили торговый центр. Хотя многое мне нравится, я скучаю по тому, что было раньше. Чем старше я становлюсь, тем чаще вспоминаю людей, с которыми провёл детство. Как только у меня появится отпуск, я поеду туда, несмотря на то что билеты стоят дорого.`,
      exercises: [
        'Completa con который en la forma correcta, con preposición si hace falta: Это друг, ___ я учился в школе. Вот книга, ___ я тебе говорил. Это врач, ___ я хожу каждый месяц. Мы живём в доме, ___ нет лифта. Это студенты, ___ я преподаю испанский. Это писатель, романы ___ переведены на многие языки.',
        'Une las frases con который: Это мой коллега. Я ездил с ним в командировку. / Вчера я встретил женщину. Её сын учится со мной. / Мы были в деревне. В этой деревне родился мой дед. / Он купил машину. Он давно мечтал об этой машине.',
        'Completa con la conjunción adecuada (пока, пока не, как только, после того как, перед тем как, с тех пор как): ___ уйти, закрой окно. Я подожду здесь, ___ ты ___ вернёшься. ___ я приеду, я сразу позвоню. ___ мы переехали, мы редко видимся. ___ ты готовишь ужин, я схожу в магазин.',
        'Elige la preposición causal (из-за, благодаря, от, по): Мы опоздали ___ пробок. ___ вашей помощи я сдал экзамен. Ребёнок заплакал ___ страха. Я взял чужой зонт ___ ошибке. Она не пришла ___ болезни. Рейс отменили ___ тумана.',
        'Escribe un texto de 12 a 14 frases sobre el lugar donde creciste y cómo ha cambiado. Usa который en al menos cuatro casos distintos, dos conjunciones de tiempo, una de causa, una de concesión y la construcción чем…, тем….',
      ],
    },
    {
      title: 'Estilo indirecto, pronombres indefinidos y negativos',
      durationMinutes: 55,
      content: `1. EL ESTILO INDIRECTO
A diferencia del español, el ruso NO cambia el tiempo verbal: se conserva el tiempo de la frase original. Solo cambian las personas.
Он сказал: «Я приду завтра». → Он сказал, что придёт завтра. (Dijo que vendría.)
Она ответила: «Я не знаю». → Она ответила, что не знает. (…que no sabía.)
Он написал: «Я был в Москве». → Он написал, что был в Москве. (…que había estado.)

Preguntas con palabra interrogativa: se conserva la palabra.
Он спросил: «Где ты живёшь?» → Он спросил, где я живу.
Она хотела узнать, когда начнётся концерт.

Preguntas de sí o no: la palabra sobre la que se pregunta va primero, seguida de ЛИ. Nunca se usa если.
Он спросил: «Ты придёшь?» → Он спросил, приду ли я.
Я не знаю, дома ли она. · Интересно, есть ли здесь аптека. · Скажите, можно ли здесь курить?

Órdenes y peticiones: чтобы + pasado, o infinitivo con просить, советовать, велеть.
Мать сказала сыну: «Убери комнату». → Мать сказала сыну, чтобы он убрал комнату. / Мать велела сыну убрать комнату.
Он попросил меня: «Помогите, пожалуйста». → Он попросил меня помочь. / Он попросил, чтобы я помог.

Verbos para introducir: сказать, ответить, спросить, сообщить (informar), заявить (declarar), объяснить, добавить, заметить (señalar), подчеркнуть (subrayar), признаться (confesar), пообещать, предупредить (advertir), напомнить, утверждать (afirmar), отрицать (negar), жаловаться на то, что.
Fuente de la información: по словам + gen. (según) · по мнению · как сообщает… · говорят, что… · якобы (supuestamente) · мол, дескать (coloquial)

2. PRONOMBRES INDEFINIDOS
-ТО: algo concreto pero desconocido o no dicho (hecho real, pasado o presente)
Кто-то звонил тебе. (alguien, no sé quién) · Он что-то сказал. · Она где-то здесь. · Я когда-то жил в Киеве. · почему-то (no sé por qué)
-НИБУДЬ: cualquiera, no importa cuál; aún no existe (preguntas, órdenes, futuro, condición, hábitos)
Кто-нибудь звонил? · Купи что-нибудь к чаю. · Давай поедем куда-нибудь. · Если что-нибудь случится, позвони. · Расскажи какую-нибудь историю.
-ЛИБО: como -нибудь, libresco: какие-либо вопросы.
КОЕ-: el hablante lo sabe pero no lo dice; o "unos cuantos": Я хочу тебе кое-что сказать. · Кое-кто уже знает. · Мне надо кое-куда зайти. La preposición se intercala: кое с кем, кое о чём.
НЕ-: некоторый (cierto, algunos), несколько (varios), некто (un tal), нечто (algo): некоторые студенты · нечто странное

3. PRONOMBRES NEGATIVOS CON НИ-: doble negación obligatoria
никто, ничто, никакой, ничей, нигде, никуда, никогда, никак, нисколько + не
Никто не пришёл. · Я ничего не знаю. · Он никогда никому ничего не говорит.
La preposición se mete en medio: ни у кого, ни с кем, ни о чём, ни в каком, ни к кому.
Я ни с кем не говорил. · Она ни о чём не думает. · У меня ни у кого нет его адреса.
ничто en genitivo: ничего; en acusativo también ничего: Я ничего не вижу.

4. PRONOMBRES CON НЕ- ACENTUADA: "no hay quién / qué / dónde"
некого, нечего, негде, некуда, некогда, незачем + infinitivo; la persona va en dativo. No llevan otra negación.
Мне некогда. — No tengo tiempo. · Мне нечего делать. — No tengo nada que hacer. · Здесь негде сесть. · Ему некуда идти. · Нам не с кем поговорить. · Не о чем спорить.
En pasado y futuro: Мне нечего было сказать. · Тебе некуда будет пойти.
Compara: Я ничего не делал. (no hice nada) / Мне нечего было делать. (no tenía nada que hacer)
Positivo: Мне есть что сказать. · Есть с кем посоветоваться.

5. LOS DETERMINATIVOS: сам, самый, весь, каждый, любой, всякий, другой, иной
сам (uno mismo): Я сам это сделаю. · Спроси у него самого.
самый (el mismo; superlativo; justo): тот же самый · в самом центре · с самого утра
каждый (cada uno) · любой (cualquiera que elijas) · всякий (de toda clase): Каждый день · В любое время · Всякое бывает.
друг друга (el uno al otro): Они любят друг друга. · Мы помогаем друг другу. · Они говорят друг с другом.
себя (a sí mismo), sin nominativo: себя, себе, себя, собой, о себе. Он думает только о себе. · Возьми с собой зонт. · Как вы себя чувствуете?

TEXTO
Вчера мне кто-то позвонил и сказал, что я выиграл поездку в Сочи. Я спросил, откуда у них мой номер и нужно ли что-нибудь платить. Мужчина ответил, что платить ничего не нужно, но попросил, чтобы я сообщил номер своей карты. Я сказал, что мне некогда и что я никому никогда не даю таких сведений. Потом я рассказал об этом соседу, и он признался, что с ним когда-то случилось то же самое.`,
      exercises: [
        'Pasa a estilo indirecto: Анна сказала: «Я завтра уезжаю в Казань». / Он спросил меня: «Где ты купил этот словарь?» / Мама спросила: «Ты уже пообедал?» / Врач сказал больному: «Принимайте это лекарство два раза в день». / Она спросила: «Есть ли у вас билеты на вечер?» / Друг попросил: «Позвони мне в субботу».',
        'Completa con -то, -нибудь o кое-: Тебе ___ (кто) звонил, но не сказал своё имя. Ты ___ (когда) был в России? Дай мне ___ (что) почитать. Он ___ (почему) не пришёл на урок. Я должен тебе ___ (что) рассказать, это важно. Если ___ (кто) придёт, скажи, что я скоро вернусь.',
        'Responde negativamente con ни-: С кем ты говорил? О чём вы думаете? У кого есть вопросы? Куда вы ездили летом? Кому ты рассказал об этом? Какой фильм тебе понравился?',
        'Transforma con не- + infinitivo. Modelo: У меня нет времени. → Мне некогда. — Здесь нет места, чтобы сесть. / У него нет никого, с кем можно поговорить. / В этом городе нет мест, куда можно пойти вечером. / У нас нет ничего, что можно есть. / Не было причины спорить.',
        'Cuenta en estilo indirecto una conversación reciente (12 frases): quién dijo qué, qué preguntó, qué pidió y qué respondiste. Incluye dos preguntas con ли, una petición con чтобы y tres verbos introductores distintos de сказать.',
      ],
    },
    {
      title: 'Numerales, fechas y adjetivos cortos',
      durationMinutes: 55,
      content: `1. LOS NUMERALES SE DECLINAN
один se declina como adjetivo: одного, одному, одним, об одном; fem. одной, одну.
два / две: двух, двум, двумя, о двух · три: трёх, трём, тремя, о трёх · четыре: четырёх, четырём, четырьмя, о четырёх
5–20 y 30 se declinan como ночь: пять → пяти, пяти, пять, пятью, о пяти · восемь → восьми, восемью
40, 90, 100 solo tienen dos formas: сорок / сорока · девяносто / девяноста · сто / ста
50–80: las dos partes cambian: пятьдесят → пятидесяти, пятьюдесятью
200–900: двести → двухсот, двумстам, двумястами, о двухстах · пятьсот → пятисот, пятистам, пятьюстами
тысяча se declina como sustantivo femenino; миллион, como masculino.
En los compuestos se declina cada palabra: с двумястами пятьюдесятью рублями. Al hablar se simplifica, pero en un examen se espera la forma completa.

2. NUMERAL + SUSTANTIVO EN CASOS OBLICUOS
En nominativo y acusativo inanimado rige la regla conocida (два стола, пять столов). En los demás casos, numeral y sustantivo van en el mismo caso, en plural:
около двух часов · к пяти часам · с тремя друзьями · в четырёх городах · без десяти минут
Con adjetivo: два новых стола (masc. y neutro: gen. pl.) · две новые / новых книги (fem.) · пять новых книг

3. LOS COLECTIVOS: двое, трое, четверо, пятеро, шестеро, семеро + genitivo plural
· Con hombres, niños y personas: двое друзей, трое детей, четверо студентов.
· Con palabras solo en plural: двое суток (dos días completos), трое ножниц, двое часов.
· Con pronombres: Нас было трое. · Их четверо.
оба (masc. y neutro) / обе (fem.) + gen. sg.: оба брата, обе сестры; обоих, обеим…
полтора (masc.) / полторы (fem.) = uno y medio: полтора часа, полторы минуты.

4. ORDINALES Y FECHAS
первый, второй, третий (третья, третье, третьи), четвёртый, пятый… сороковой, сотый, тысячный
En los compuestos solo se declina el último: в тысяча девятьсот девяносто первом году.
Какое сегодня число? — Двадцать третье марта. (neutro nominativo)
Когда? — Двадцать третьего марта две тысячи двадцать шестого года. (genitivo)
Solo el año: в две тысячи двадцать шестом году. · Mes y año: в марте две тысячи двадцать шестого года.
Siglos: в двадцать первом веке · в девятнадцатом веке · в восьмидесятые годы (en los ochenta) · в начале / в середине / в конце века
С… по… / с… до…: с пятого по десятое мая · с 1990 до 2000 года

5. LA HORA COLOQUIAL
Primera media hora: minutos + genitivo de la hora SIGUIENTE (ordinal): 2:10 десять минут третьего · 2:15 четверть третьего · 2:30 половина третьего / полтретьего
Segunda media hora: без + genitivo de los minutos + hora siguiente: 2:45 без четверти три · 2:50 без десяти три
В котором часу? — В половине третьего. · Без четверти три.
Oficial: четырнадцать тридцать.

6. FRACCIONES, DECIMALES, PORCENTAJES
1/2 одна вторая (половина) · 1/3 одна третья (треть) · 1/4 одна четвёртая (четверть) · 2/3 две третьих · 3/4 три четвёртых
0,5 ноль целых пять десятых · 2,7 две целых семь десятых
Tras fracción, genitivo singular: 2,5 процента · полтора километра.
Aproximación: invertir el orden o usar около + gen., примерно, приблизительно: лет двадцать · около двадцати лет · часа два

7. ADJETIVOS CORTOS
Solo en nominativo y solo como predicado. Se forman quitando la terminación: красивый → красив, красива, красиво, красивы.
Vocal intercalada en masculino: больной → болен · интересный → интересен · нужный → нужен · полный → полон · свободный → свободен · короткий → короток · лёгкий → лёгок
Diferencia con la forma larga:
· La corta indica estado temporal o relativo a una situación; la larga, cualidad permanente: Он болен. (ahora) / Он больной. (es un enfermo) · Она сегодня очень весела.
· La corta puede significar "demasiado": Эти туфли мне малы / велики. · Пальто тебе длинно. · Он слишком молод для этой работы.
· Con complemento se prefiere la corta: Я согласен с вами. · Она похожа на мать. · Мы готовы к экзамену. · Город известен своими музеями.
Solo o casi solo cortos: рад, должен, готов, согласен, прав, виноват, занят, свободен, уверен, знаком, женат, жив, здоров, болен, похож, способен, склонен, намерен, благодарен, доволен, сыт, голоден.
Я рад вас видеть. · Вы правы. · Я вам очень благодарен. · Будьте добры… · Будь здоров!

TEXTO
Санкт-Петербург был основан двадцать седьмого мая тысяча семьсот третьего года. Сегодня в нём живёт более пяти миллионов человек, а в городе около трёхсот сорока мостов. Мы приехали туда вчетвером и провели там двое суток. Поезд отправлялся в половине двенадцатого ночи, поэтому без четверти одиннадцать мы уже были на вокзале. Оба мои брата были довольны поездкой, хотя гостиница оказалась слишком мала для нас четверых.`,
      exercises: [
        'Escribe con letras, en el caso que pide el contexto: Я вернусь к (5) часам. В классе нет (3) студентов. Он пришёл с (2) друзьями. Мы были в (4) странах. Это стоит около (200) рублей. Он уехал без (10) рублей в кармане. Она живёт в (25) километрах от города.',
        'Escribe con letras las fechas completas: tu fecha de nacimiento (Я родился / родилась…), la fecha de hoy, 12/06/1990, 01/01/2000, y los siglos XIX y XXI en la frase «в … веке».',
        'Escribe la hora de forma coloquial: 3:10, 4:15, 6:30, 7:45, 8:50, 12:05, 1:30, 10:40. Luego responde: В котором часу вы обычно обедаете и ложитесь спать?',
        'Completa con двое, трое, оба, обе o полтора / полторы: У них ___ детей (3). ___ сестры учатся в Москве. Нас было ___ (2). Мы ждали ___ часа. ___ брата женаты. Поезд идёт ___ суток (2). Купи ___ килограмма сыра.',
        'Elige entre forma larga y corta y explica: Он сегодня (больной / болен). Эта задача слишком (трудная / трудна) для первого курса. Я (согласный / согласен) с тобой. Она очень (похожая / похожа) на отца. У нас (интересная / интересна) работа. Брюки мне (короткие / коротки).',
      ],
    },
    {
      title: 'Trabajo, estudios y biografía: textos formales',
      durationMinutes: 60,
      content: `El examen ТРКИ-1 pide desenvolverse en las esferas social, cultural y profesional básica: hablar de estudios y trabajo, contar una biografía, escribir una carta formal y una solicitud.

1. LA EDUCACIÓN
детский сад · начальная / средняя школа · гимназия · колледж · университет · факультет · кафедра (departamento) · курс (año de carrera): Я учусь на третьем курсе. · семестр · сессия (periodo de exámenes) · зачёт (prueba de apto) · диплом · бакалавриат · магистратура · аспирантура (doctorado) · стипендия (beca) · общежитие (residencia)
поступить в университет (ingresar) · учиться на юриста / на экономиста · окончить школу, университет · получить образование · защитить диплом / диссертацию · сдать сессию · пропускать занятия (faltar a clase) · получать пятёрки
преподаватель · профессор · декан · ректор · научный руководитель (director de tesis) · выпускник (egresado) · абитуриент (aspirante) · первокурсник
Notas rusas: 5 отлично · 4 хорошо · 3 удовлетворительно · 2 неудовлетворительно («двойка»).

2. EL TRABAJO
искать работу · вакансия · резюме (currículum) · собеседование (entrevista) · опыт работы (experiencia) · зарплата · устроиться на работу (colocarse) · работать + instr. (кем?) · занимать должность (ocupar un cargo) · сотрудник (empleado) · начальник · подчинённый · коллега · отдел (departamento) · командировка (viaje de trabajo) · отпуск · больничный (baja médica) · повышение (ascenso) · уволить / уволиться (despedir / dimitir) · выйти на пенсию · безработный · полный / неполный рабочий день · удалённая работа (teletrabajo) · фриланс
Чем вы занимаетесь? · Кем вы работаете? · Где вы работаете? · Какие у вас обязанности? (funciones) · Я отвечаю за… (soy responsable de) · Я руковожу отделом. · В мои обязанности входит…

3. CONTAR UNA BIOGRAFÍA
родиться в… году в семье + gen.: Он родился в 1860 году в семье купца.
вырасти · провести детство · пойти в школу · увлекаться + instr. · поступить · окончить · переехать · познакомиться с · жениться на + prep. (el hombre) / выйти замуж за + acus. (la mujer) / пожениться (los dos) · развестись · у них родился сын · стать + instr. · получить премию · прославиться · умереть в возрасте… лет · похоронен в…
в детстве · в юности · в молодости · в зрелом возрасте · в старости · в возрасте пяти лет · когда ему было двадцать лет · спустя два года · через год после + gen. · к тому времени · всю жизнь

4. CARTA FORMAL
Encabezado: Уважаемый господин Иванов! / Уважаемая Анна Сергеевна! / Уважаемые коллеги!
Motivo: Обращаюсь к вам с просьбой… · Пишу вам по поводу + gen. · Меня интересует… · Хотел бы узнать, … · В ответ на ваше письмо от 5 мая сообщаю, что…
Petición: Прошу вас сообщить… · Не могли бы вы прислать… · Буду признателен, если вы…
Cierre: Заранее благодарю. · Надеюсь на скорый ответ. · С уважением, … · С наилучшими пожеланиями, …

5. LA SOLICITUD (заявление): formato fijo
Arriba a la derecha: a quién (dativo) y de quién (от + genitivo).
Ректору Казанского университета
профессору Иванову И. И.
от студента 2 курса Гомеса Карлоса
En el centro: заявление
Texto: Прошу предоставить мне академический отпуск с 1 сентября 2026 года по семейным обстоятельствам. / Прошу принять меня на должность переводчика. / Прошу разрешить мне сдать экзамен досрочно.
Abajo: fecha a la izquierda, firma a la derecha.

6. AUTOBIOGRAFÍA Y CURRÍCULUM
Я, Гомес Карлос, родился 12 марта 1998 года в городе Богота. В 2015 году окончил школу и поступил в Национальный университет на факультет иностранных языков. В 2020 году получил диплом бакалавра по специальности «Переводчик». С 2021 года работаю в компании… Владею испанским (родной), английским (свободно) и русским (средний уровень) языками. Не женат.
Apartados: личные данные · образование · опыт работы · профессиональные навыки · владение языками · личные качества: ответственный, коммуникабельный, пунктуальный, целеустремлённый.

7. EN LA ENTREVISTA
Расскажите о себе. · Почему вы хотите работать у нас? · Какой у вас опыт? · Каковы ваши сильные и слабые стороны? · На какую зарплату вы рассчитываете? · Когда вы можете приступить к работе?
Я считаю, что подхожу на эту должность, потому что… · У меня есть опыт работы в сфере… · Я быстро учусь и умею работать в команде. · Меня привлекает возможность + inf.

TEXTO
Антон Павлович Чехов родился в 1860 году в Таганроге в семье мелкого купца. В детстве он помогал отцу в лавке и пел в церковном хоре. Окончив гимназию, он поступил на медицинский факультет Московского университета. Ещё будучи студентом, Чехов начал писать юмористические рассказы, чтобы помочь семье. Получив диплом врача, он не оставил литературу и вскоре прославился как автор рассказов и пьес. В 1901 году он женился на актрисе Ольге Книппер. Чехов умер в 1904 году в возрасте сорока четырёх лет и похоронен в Москве.`,
      exercises: [
        'Responde con frases completas: Где и на кого вы учились или учитесь? Кем и где вы работаете? Что входит в ваши обязанности? Какой у вас опыт работы? Чем вы хотели бы заниматься через пять лет?',
        'Responde sobre el texto de Chéjov: В какой семье он родился? Чем он занимался в детстве? Какое образование он получил? Почему он начал писать? На ком он женился? В каком возрасте он умер?',
        'Escribe una solicitud (заявление) con el formato completo: pides al decano que te permita presentar un examen antes de la fecha por un viaje de trabajo.',
        'Escribe una carta formal de 10 a 12 frases a una escuela de idiomas de Moscú: te presentas, preguntas por los cursos de verano, precios, alojamiento y visado, y pides que te envíen el programa.',
        'Escribe la biografía de una persona conocida de tu país o tu autobiografía (14 a 16 frases) en orden cronológico, con fechas escritas con letras, al menos dos participios, dos gerundios y cuatro marcadores temporales.',
      ],
    },
  ],
  exam: {
    title: 'Examen final B1',
    instructions: `Este examen cubre las doce estaciones del curso y sigue el formato del ТРКИ-1: gramática, lectura y escritura. Responde en ruso salvo que el ejercicio pida otra cosa. Puedes corregir tu entrega mientras el profe no la haya calificado. Vale 100 puntos y se aprueba con 70.

TEXTO PARA LOS EJERCICIOS 11 Y 12
Когда Елена окончила университет, ей предложили работу в крупной московской компании. Родители хотели, чтобы она согласилась: зарплата была высокая, а должность — престижная. Однако Елена, с детства мечтавшая стать учителем, отказалась и уехала в небольшой сибирский город, где не хватало преподавателей. Сначала ей было трудно. Квартира, которую ей дали, находилась далеко от школы, и зимой, выходя из дома в семь утра, она шла по тёмным улицам при тридцатиградусном морозе. Ученики, привыкшие к строгим учителям, не сразу поверили молодой учительнице, никогда не повышавшей голос. Но Елена не сдавалась. Она организовала школьный театр, в который записалось больше сорока детей, и стала водить ребят в походы. Через два года её класс был признан лучшим в области. Когда журналист спросил её, не жалеет ли она о своём решении, Елена ответила, что, если бы ей пришлось выбирать снова, она поступила бы точно так же. «Чем больше отдаёшь, тем больше получаешь», — сказала она.`,
    questions: [
      'Casos en plural. Completa: Он гордится ___ (свои взрослые дети). Мы написали ___ (все наши друзья). Она рассказывала о ___ (далёкие страны). У ___ (эти молодые специалисты) мало опыта. Я встретил ___ (старые знакомые) и ___ (их жёны).',
      'Verbos de movimiento sin prefijo. Completa con el verbo adecuado en la forma correcta (идти / ходить, ехать / ездить, лететь / летать, нести / носить, везти / возить, вести / водить): Каждое лето мы ___ на море. Смотри, мальчик ___ тяжёлый рюкзак. Мой отец ___ автобус уже двадцать лет. Сейчас мы ___ над океаном. Вчера я ___ к врачу и уже вернулся. Она ___ сына за руку.',
      'Verbos de movimiento con prefijos. Completa con el prefijo y la forma adecuados: Он ___шёл из комнаты и закрыл дверь. Мы ___ехали мост и повернули направо. ___ходите, пожалуйста, садитесь! По дороге домой я ___шёл в аптеку. Она ___ехала из Киева три года назад и больше там не была. ___йдите к карте и покажите Волгу. Что тебе ___везти из Парижа?',
      'Aspecto. Elige y justifica brevemente cada elección: Не (открывайте / откройте) окно, мне холодно. Осторожно, не (падай / упади)! Он начал (учить / выучить) китайский язык. Мне не удалось (покупать / купить) билеты. Здесь нельзя (проходить / пройти): идёт ремонт. Пока меня не было, ко мне (приходил / пришёл) почтальон и оставил записку.',
      'Participios. a) Sustituye por un participio: Студенты, которые сдали экзамен, уехали домой. / Я читаю роман, который написал Достоевский. / Люди, которые живут в этом доме, очень дружные. b) Sustituye por который: Письмо, полученное вчера, лежит на столе. / Мы говорили с учёным, изучающим климат.',
      'Pasiva. Transforma con participio corto: Этот собор построили в XV веке. / Роман перевели на тридцать языков. / Магазин откроют в сентябре. / Проблему уже решили. Luego escribe dos frases propias con «был основан» y «расположен».',
      'Gerundios. Sustituye por un gerundio: Когда он вошёл в комнату, он поздоровался. / Так как она не знала дороги, она заблудилась. / Когда мы гуляли по городу, мы фотографировали. / После того как я закончил работу, я пошёл домой. Luego corrige: «Возвращаясь домой, у меня сломалась машина».',
      'Condicional y чтобы. a) Transforma en condición irreal: Я не знал о концерте, поэтому не пошёл. / У неё нет визы, поэтому она не едет. b) Completa: Родители хотят, чтобы я ___ (поступить) в университет. Он попросил, чтобы мы ___ (подождать). Я пришёл, чтобы ___ (поговорить) с вами. Что бы ни ___ (случиться), звони.',
      'Который y conjunciones. a) Completa: Это город, ___ я мечтаю поехать. Вот человек, ___ я тебе рассказывал. Это писатель, книги ___ я очень люблю. b) Une con la conjunción adecuada: Шёл сильный дождь. Мы пошли гулять. (concesión) / Я приеду. Я сразу позвоню. (tiempo) / Больше читаешь. Больше знаешь. (чем…, тем…)',
      'Estilo indirecto y pronombres. a) Pasa a estilo indirecto: Он спросил: «Вы говорите по-русски?» / Она сказала: «Я вернусь через час». / Учитель сказал нам: «Откройте учебники». b) Completa con -то, -нибудь, ни- o не-: Тебе ___ (кто) звонил утром. Купи ___ (что) на ужин. Я ___ (с кем) не разговаривал. Мне ___ (когда) отдыхать.',
      'Comprensión. Lee el texto sobre Elena y responde con frases completas: Чего хотели её родители и почему? Почему она отказалась от работы в Москве? Какие трудности были у неё сначала? Как относились к ней ученики и почему? Что она сделала для школы? Что она ответила журналисту?',
      'Análisis del texto. Copia del texto: dos participios activos, un participio pasivo corto, un gerundio, una oración con который con preposición, una condición irreal, una pregunta indirecta con ли y la construcción чем…, тем…. Explica en español qué significa cada una.',
      'Numerales. Escribe con letras: «Он родился (23.04.1985)». «Поезд отправляется (в 2:45, forma coloquial)». «Мы встретились с (3) друзьями в (5) километрах от города». «У них (4, colectivo) детей». «В городе живёт около (500 000) человек».',
      'Escritura formal. Escribe una solicitud (заявление) completa al director de una empresa pidiendo vacaciones del 1 al 14 de agosto, y debajo una carta formal de 8 frases a un hotel de Sochi para reservar habitación en esas fechas.',
      'Redacción. Escribe un texto de 18 a 20 frases sobre el tema «Работа мечты: что для меня важнее — зарплата или призвание?». Expón tu opinión, da dos argumentos y un ejemplo (puedes referirte al texto de Elena), y concluye. Usa al menos un participio, un gerundio, una condición irreal y tres conjunciones distintas.',
    ],
  },
};
