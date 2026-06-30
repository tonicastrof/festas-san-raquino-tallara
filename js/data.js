/* ────────────────────────────────────────────────────────────
   DATA.js  —  Aquí se edita todo o contido da web.
   Cada sección ten gl (galego) e es (castelán).
   ──────────────────────────────────────────────────────────── */

const DATA = {

  /* ── Banner do Hero (carousel) ─────────────────────────── */
  heroBanner: [
    {
      image: "img/cabecerafiesta.png",
      gl: {
        title: "Festas de San Roquiño 2026",
        subtitle: "Tállara · Lousame · A Coruña",
        cta: "Ver programa",
        ctaLink: "#festas",
      },
      es: {
        title: "Fiestas de San Roquiño 2026",
        subtitle: "Tállara · Lousame · A Coruña",
        cta: "Ver programa",
        ctaLink: "#festas",
      },
    },
    {
      image: "img/xantar-popular.jpg",
      gl: {
        title: "I Xantar Popular",
        subtitle: "16 de agosto · San Roquiño Tállara · Pulpo, churrasco e moito máis!",
        cta: "Máis información",
        ctaLink: "novidade.html#xantar-popular",
      },
      es: {
        title: "I Xantar Popular",
        subtitle: "16 de agosto · San Roquiño Tállara · ¡Pulpo, churrasco y mucho más!",
        cta: "Más información",
        ctaLink: "novidade.html#xantar-popular",
      },
    },
    {
      image: "img/debuxo.jpg",
      gl: {
        title: "Libro de San Roquiño",
        subtitle: "Convidamos a todos os nenos e nenas da parroquia a enviar os seus debuxos!",
        cta: "Máis información",
        ctaLink: "novidade.html#libro-san-roquino",
      },
      es: {
        title: "Libro de San Roquiño",
        subtitle: "¡Invitamos a todos los niños y niñas de la parroquia a enviar sus dibujos!",
        cta: "Más información",
        ctaLink: "novidade.html#libro-san-roquino",
      },
    },
  ],

  /* ── Novidades ─────────────────────────────────────────── */
  novidades: [
    {
      slug: "ruta-nocturna-2026",
      emoji: "🌙",
      image: "img/ruta-nocturna.jpg",
      hasRutaForm: true,
      gl: {
        date:  "Setembro 2026",
        title: "Ruta Nocturna 2026",
        text:  "Este ano a ruta nocturna celébrase nun sábado! O 26 de setembro, ven camiñar baixo as estrelas polos camiños de Lousame. 10 € por persoa.",
        detail: {
          intro: "Atendendo ás peticións de moitos veciños, este ano a Ruta Nocturna celebrarase por primeira vez nun sábado! O 26 de setembro, camiñaremos xuntos polos sendeiros da parroquia baixo o ceo estrelado, gozando da natureza, a amizade e a diversión.",
          infoCards: [
            { icon: "📅", label: "Data",    value: "Sábado, 26 de setembro de 2026" },
            { icon: "📍", label: "Lugar",   value: "Saída e chegada en Tállara" },
            { icon: "💶", label: "Prezo",   value: "10 € por persoa" },
            { icon: "📏", label: "Distancia", value: "Aproximadamente 8 km" },
          ],
          sections: [
            {
              icon: "🌙",
              title: "Unha noite especial",
              content: "Camiñaremos polas sendas da parroquia baixo o ceo estrelado, gozando da natureza e da tranquilidade do rural galego.",
            },
            {
              icon: "🎒",
              title: "Que inclúe?",
              content: "Percorrido guiado · Avituallamento durante a ruta · Seguro de participación.",
            },
            {
              icon: "👨‍👩‍👧‍👦",
              title: "Para todos",
              content: "Apto para todos os niveis e idades. Ven coa familia, amigos ou veciños!",
            },
          ],
          closing: "Non te perdas esta experiencia única! Inscríbete xa e camiña con nós baixo as estrelas.",
        },
      },
      es: {
        date:  "Septiembre 2026",
        title: "Ruta Nocturna 2026",
        text:  "¡Este año la ruta nocturna se celebra en sábado! El 26 de septiembre, ven a caminar bajo las estrellas por los caminos de Lousame. 10 € por persona.",
        detail: {
          intro: "Atendiendo a las peticiones de muchos vecinos, ¡este año la Ruta Nocturna se celebrará por primera vez en sábado! El 26 de septiembre, caminaremos juntos por los senderos de la parroquia bajo el cielo estrellado, disfrutando de la naturaleza, la amistad y la diversión.",
          infoCards: [
            { icon: "📅", label: "Fecha",     value: "Sábado, 26 de septiembre de 2026" },
            { icon: "📍", label: "Lugar",     value: "Salida y llegada en Tállara" },
            { icon: "💶", label: "Precio",    value: "10 € por persona" },
            { icon: "📏", label: "Distancia", value: "Aproximadamente 8 km" },
          ],
          sections: [
            {
              icon: "🌙",
              title: "Una noche especial",
              content: "Caminaremos por los senderos de la parroquia bajo el cielo estrellado, disfrutando de la naturaleza y la tranquilidad del rural gallego.",
            },
            {
              icon: "🎒",
              title: "¿Qué incluye?",
              content: "Recorrido guiado · Avituallamiento durante la ruta · Seguro de participación.",
            },
            {
              icon: "👨‍👩‍👧‍👦",
              title: "Para todos",
              content: "Apto para todos los niveles y edades. ¡Ven con la familia, amigos o vecinos!",
            },
          ],
          closing: "¡No te pierdas esta experiencia única! Inscríbete ya y camina con nosotros bajo las estrellas.",
        },
      },
    },
    {
      slug: "xantar-popular",
      emoji: "🍽️",
      image: "img/xantar-popular.jpg",
      eventoSlug: "xantar-popular",
      gl: {
        date:  "Agosto 2026",
        title: "I Xantar Popular de San Roquiño",
        text:  "Primeira edición do Xantar Popular! Pulpo a fartar, churrasco, bebida, café e postre por 40€. O 16 de agosto en Tállara.",
        detail: {
          intro: "A Comisión de Festas de San Roquiño organiza a primeira edición do Xantar Popular. Unha tarde de gastronomía, música, bingo e sorteos para toda a parroquia e visitantes. Acompáñanos o 16 de agosto en San Roquiño Tállara!",
          infoCards: [
            { icon: "📅", label: "Data",           value: "16 de agosto de 2026" },
            { icon: "📍", label: "Lugar",          value: "San Roquiño Tállara, Lousame" },
            { icon: "💶", label: "Adultos",        value: "40 €" },
            { icon: "👶", label: "Nenos/as",       value: "0–5 anos gratis · 6–12 anos: 22 €" },
          ],
          sections: [
            {
              icon: "🐙",
              title: "Que inclúe o menú?",
              content: "Pulpo a fartar · Churrasco · Bebida · Café · Postre",
            },
            {
              icon: "🎉",
              title: "E ademais...",
              content: "Bingo, música, sorteos e moito máis durante toda a tarde!",
            },
            {
              icon: "🎟️",
              title: "Venta de tickets",
              content: "No Estanco de Tállara. Tamén todos os domingos de xullo de 12:00 a 13:00 en San Roquiño.",
            },
          ],
          closing: "Non te quedes fóra desta primeira edición! Anótate online ou merca o teu ticket no Estanco de Tállara.",
        },
      },
      es: {
        date:  "Agosto 2026",
        title: "I Xantar Popular de San Roquiño",
        text:  "¡Primera edición del Xantar Popular! Pulpo a fartar, churrasco, bebida, café y postre por 40€. El 16 de agosto en Tállara.",
        detail: {
          intro: "La Comisión de Fiestas de San Roquiño organiza la primera edición del Xantar Popular. Una tarde de gastronomía, música, bingo y sorteos para toda la parroquia y visitantes. ¡Acompáñanos el 16 de agosto en San Roquiño Tállara!",
          infoCards: [
            { icon: "📅", label: "Fecha",          value: "16 de agosto de 2026" },
            { icon: "📍", label: "Lugar",          value: "San Roquiño Tállara, Lousame" },
            { icon: "💶", label: "Adultos",        value: "40 €" },
            { icon: "👶", label: "Niños/as",       value: "0–5 años gratis · 6–12 años: 22 €" },
          ],
          sections: [
            {
              icon: "🐙",
              title: "¿Qué incluye el menú?",
              content: "Pulpo a fartar · Churrasco · Bebida · Café · Postre",
            },
            {
              icon: "🎉",
              title: "Y además...",
              content: "¡Bingo, música, sorteos y mucho más durante toda la tarde!",
            },
            {
              icon: "🎟️",
              title: "Venta de tickets",
              content: "En el Estanco de Tállara. También todos los domingos de julio de 12:00 a 13:00 en San Roquiño.",
            },
          ],
          closing: "¡No te quedes fuera de esta primera edición! Apúntate online o compra tu ticket en el Estanco de Tállara.",
        },
      },
    },
    {
      slug: "libro-san-roquino",
      emoji: "📖",
      image: "img/debuxo.jpg",
      hasForm: true,
      gl: {
        date:  "Xuño 2025",
        title: "Libro de San Roquiño — Concurso de debuxo",
        text:  "Recuperamos o Libro de San Roquiño! Convidamos a todos os nenos e nenas da parroquia a enviar os seus debuxos. O debuxo gañador será a portada do libro!",
        detail: {
          intro: "Este ano recuperamos o Libro de San Roquiño! Dende a organización queremos facer algo moi especial... e para iso precisamos da axuda dos máis pequenos e pequenas da nosa parroquia.",
          sections: [
            {
              title: "Que buscamos?",
              content: "Convidamos a todos os nenos e nenas da parroquia de Tállara a participar enviando os seus debuxos! Todos os debuxos recibidos formarán parte do interior do Libro de San Roquiño. E ademais, o debuxo gañador será a portada do libro!",
            },
            {
              title: "Votación",
              content: "A votación realizarase entre os membros da comisión o 1 de agosto.",
            },
            {
              title: "Prazo de participación",
              content: "Do 1 de xuño ao 15 de xullo.",
            },
          ],
          requisitos: [
            "Ser da parroquia de Tállara.",
            "Ter entre 0 e 10 anos.",
            "O debuxo deberá ter un tamaño aproximado de medio folio.",
            "Entregar o debuxo nun sobre pechado.",
            "Dentro do sobre deberá haber un papel co nome e apelidos do ou da artista e un número de teléfono de contacto.",
          ],
          requisitos_title: "Requisitos",
          entrega_title: "Onde entregar os debuxos?",
          entrega: [
            "A calquera membro da comisión.",
            "No Estanco de Tállara.",
            "Na Peluquería \"Na de Canle\" en Tállara.",
            "Mediante o formulario en liña dispoñible máis abaixo nesta páxina.",
          ],
          closing: "Animamos a todas as familias a participar e a encher o noso libro de cor, ilusión e creatividade. Contamos convosco para facer deste regreso algo inesquecible!",
        },
      },
      es: {
        date:  "Junio 2025",
        title: "Libro de San Roquiño — Concurso de dibujo",
        text:  "¡Recuperamos el Libro de San Roquiño! Invitamos a todos los niños y niñas de la parroquia a enviar sus dibujos. ¡El dibujo ganador será la portada del libro!",
        detail: {
          intro: "¡Este año recuperamos el Libro de San Roquiño! Desde la organización queremos hacer algo muy especial... y para eso necesitamos la ayuda de los más pequeños y pequeñas de nuestra parroquia.",
          sections: [
            {
              title: "¿Qué buscamos?",
              content: "¡Invitamos a todos los niños y niñas de la parroquia de Tállara a participar enviando sus dibujos! Todos los dibujos recibidos formarán parte del interior del Libro de San Roquiño. ¡Y además, el dibujo ganador será la portada del libro!",
            },
            {
              title: "Votación",
              content: "La votación se realizará entre los miembros de la comisión el 1 de agosto.",
            },
            {
              title: "Plazo de participación",
              content: "Del 1 de junio al 15 de julio.",
            },
          ],
          requisitos: [
            "Ser de la parroquia de Tállara.",
            "Tener entre 0 y 10 años.",
            "El dibujo deberá tener un tamaño aproximado de medio folio.",
            "Entregar el dibujo en un sobre cerrado.",
            "Dentro del sobre deberá haber un papel con el nombre y apellidos del o de la artista y un número de teléfono de contacto.",
          ],
          requisitos_title: "Requisitos",
          entrega_title: "¿Dónde entregar los dibujos?",
          entrega: [
            "A cualquier miembro de la comisión.",
            "En el Estanco de Tállara.",
            "En la Peluquería \"Na de Canle\" en Tállara.",
            "Mediante el formulario en línea disponible más abajo en esta página.",
          ],
          closing: "¡Animamos a todas las familias a participar y a llenar nuestro libro de color, ilusión y creatividad. ¡Contamos con vosotros para hacer de este regreso algo inolvidable!",
        },
      },
    },
    {
      slug: "novidades-2026",
      emoji: "📣",
      gl: {
        date: "Xuño 2025",
        title: "A Comisión xa está mans á obra para 2026!",
        text: "Novidades sobre as festas deste ano: ruta nocturna o sábado, recuperamos o Libro das Festas e 7 días de celebración.",
        detail: {
          intro: "A Comisión de Festas de San Roquiño xa está mans á obra para comezar a organizar as festas deste ano, con moita ilusión e ganas de facer unhas celebracións á altura de todos os veciños e veciñas.",
          sections: [
            {
              icon: "🌙",
              title: "Ruta Nocturna: novidade!",
              content: "Como novidade, este ano a ruta nocturna celebrarase o sábado, na véspera da festa de San Roquiño, unha proposta que esperamos que guste e que faga aínda máis especial esa noite tan esperada.",
            },
            {
              icon: "📖",
              title: "Recuperamos o Libro das Festas",
              content: "Ademais, queremos compartir tamén unha gran nova: recuperamos unha tradición que sempre tivo moi boa acollida entre todos e todas, como é a elaboración do libro das festas. Volvemos poñelo en marcha con moitas ganas, para recoller a historia, a programación e os mellores momentos destas celebracións tan nosas.",
            },
            {
              icon: "🎉",
              title: "7 días de celebración",
              content: "Seguimos traballando para que as festas de San Roquiño sexan, un ano máis, un punto de encontro, alegría e convivencia para todas e todos. Porque estas festas son de quen as fai, é decir, de todos os veciños e veciñas, e queremos traballar para que o pasades en grande durante 7 días (1 de ruta + 6 de verbena).",
            },
          ],
          closing: "Seguimos traballando para que as festas de San Roquiño sexan, un ano máis, un punto de encontro, alegría e convivencia para todas e todos. Estas festas son de todos!",
        },
      },
      es: {
        date: "Junio 2025",
        title: "¡La Comisión ya está manos a la obra para 2026!",
        text: "Novedades sobre las fiestas de este año: ruta nocturna el sábado, recuperamos el Libro de las Fiestas y 7 días de celebración.",
        detail: {
          intro: "La Comisión de Fiestas de San Roquiño ya está manos a la obra para empezar a organizar las fiestas de este año, con mucha ilusión y ganas de hacer unas celebraciones a la altura de todos los vecinos y vecinas.",
          sections: [
            {
              icon: "🌙",
              title: "Ruta Nocturna: ¡novedad!",
              content: "Como novedad, este año la ruta nocturna se celebrará el sábado, en la víspera de la fiesta de San Roquiño, una propuesta que esperamos que guste y que haga aún más especial esa noche tan esperada.",
            },
            {
              icon: "📖",
              title: "Recuperamos el Libro de las Fiestas",
              content: "Además, queremos compartir también una gran noticia: recuperamos una tradición que siempre tuvo muy buena acogida entre todos, como es la elaboración del libro de las fiestas. Lo volvemos a poner en marcha con muchas ganas, para recoger la historia, la programación y los mejores momentos de estas celebraciones tan nuestras.",
            },
            {
              icon: "🎉",
              title: "7 días de celebración",
              content: "Seguimos trabajando para que las fiestas de San Roquiño sean, un año más, un punto de encuentro, alegría y convivencia para todos y todas. Porque estas fiestas son de quien las hace, es decir, de todos los vecinos y vecinas, y queremos trabajar para que lo paséis en grande durante 7 días (1 de ruta + 6 de verbena).",
            },
          ],
          closing: "¡Seguimos trabajando para que las fiestas de San Roquiño sean, un año más, un punto de encuentro, alegría y convivencia para todos! ¡Estas fiestas son de todos!",
        },
      },
    },

    /* Engade máis novidades aquí co mesmo formato */
  ],

  /* ── Actividades ────────────────────────────────────────── */
  actividades: [
    {
      slug: "aldea-papa-noel",
      icon: "🎅",
      image: "img/aldea-papa-noel.jpg",
      gl: {
        season: "Nadal",
        name:   "A Aldea de Papa Noel",
        desc:   "Cada Nadal transformamos Tállara nunha máxica aldea de Papa Noel, chea de actividades para grandes e pequenos.",
        detail: {
          badge: "Edición 2024 · Pasada",
          intro: "Quedan moi poucas prazas para A Aldea de Papá Noel! O vindeiro 13 de decembro, en Carantoña (Tállara – Lousame), Papá Noel estará agardando por vós para recoller as vosas cartas… e iso non é todo!",
          infoCards: [
            { icon: "📅", label: "Data", value: "13 de decembro" },
            { icon: "⏰", label: "Horario", value: "De 16:00 a 21:00" },
            { icon: "📍", label: "Lugar", value: "Carantoña · Tállara · Lousame" },
            { icon: "💶", label: "Prezo", value: "5 € (0–3 anos gratis)" },
          ],
          activities: [
            { icon: "🎅", text: "Papá Noel recollendo as vosas cartas" },
            { icon: "🍫", text: "Chocolatada incluída" },
            { icon: "🎁", text: "Moitas actividades para toda a familia" },
            { icon: "👶", text: "Nenos/as de 0 a 3 anos: entrada gratis" },
          ],
          activities_title: "Que che agarda?",
          registration: {
            title: "Inscricións",
            deadline: "Ata o 10 de decembro ou fin de prazas",
            phones: ["636 517 268", "686 056 341"],
          },
          closing: "Non quedes fóra desta tarde máxica! Reserva xa a túa praza!",
        },
      },
      es: {
        season: "Navidad",
        name:   "La Aldea de Papá Noel",
        desc:   "Cada Navidad transformamos Tállara en la mágica aldea de Papá Noel, llena de actividades para grandes y pequeños.",
        detail: {
          badge: "Edición 2024 · Pasada",
          intro: "¡Quedan muy pocas plazas para La Aldea de Papá Noel! El próximo 13 de diciembre, en Carantoña (Tállara – Lousame), Papá Noel estará esperándoos para recoger vuestras cartas… ¡y eso no es todo!",
          infoCards: [
            { icon: "📅", label: "Fecha", value: "13 de diciembre" },
            { icon: "⏰", label: "Horario", value: "De 16:00 a 21:00" },
            { icon: "📍", label: "Lugar", value: "Carantoña · Tállara · Lousame" },
            { icon: "💶", label: "Precio", value: "5 € (0–3 años gratis)" },
          ],
          activities: [
            { icon: "🎅", text: "Papá Noel recogiendo vuestras cartas" },
            { icon: "🍫", text: "Chocolatada incluida" },
            { icon: "🎁", text: "Muchas actividades para toda la familia" },
            { icon: "👶", text: "Niños/as de 0 a 3 años: entrada gratis" },
          ],
          activities_title: "¿Qué te espera?",
          registration: {
            title: "Inscripciones",
            deadline: "Hasta el 10 de diciembre o fin de plazas",
            phones: ["636 517 268", "686 056 341"],
          },
          closing: "¡No te quedes fuera de esta tarde mágica! ¡Reserva ya tu plaza!",
        },
      },
    },
    {
      slug: "ruta-nocturna",
      icon: "🌙",
      gl: {
        season: "Verán",
        name:   "Ruta Nocturna",
        desc:   "Unha ruta nocturna para descubrir as paisaxes de Lousame baixo o ceo estrelado. Para todos os niveis e idades.",
        detail: {
          intro: "A Ruta Nocturna é unha experiencia única que che permitirá descubrir os camiños e paisaxes de Lousame cando cae a noite. Camiñaremos polas sendas da parroquia baixo o ceo estrelado, gozando da natureza e da tranquilidade do rural galego.",
          features: [
            "Percorrido guiado polos camiños de Lousame",
            "Observación de estrelas",
            "Avituallamento durante a ruta",
            "Apto para todos os niveis e idades",
            "Distancia aproximada: 8 km",
            "Saída e chegada en Tállara",
          ],
          when: "Verán (xullo / agosto)",
          where: "Tállara, Lousame",
        },
      },
      es: {
        season: "Verano",
        name:   "Ruta Nocturna",
        desc:   "Una ruta nocturna para descubrir los paisajes de Lousame bajo el cielo estrellado. Para todos los niveles y edades.",
        detail: {
          intro: "La Ruta Nocturna es una experiencia única que te permitirá descubrir los caminos y paisajes de Lousame cuando cae la noche. Caminaremos por las sendas de la parroquia bajo el cielo estrellado, disfrutando de la naturaleza y la tranquilidad del rural gallego.",
          features: [
            "Recorrido guiado por los caminos de Lousame",
            "Observación de estrellas",
            "Avituallamiento durante la ruta",
            "Apto para todos los niveles y edades",
            "Distancia aproximada: 8 km",
            "Salida y llegada en Tállara",
          ],
          when: "Verano (julio / agosto)",
          where: "Tállara, Lousame",
        },
      },
    },
    {
      slug: "festas-san-roquino",
      icon: "🎉",
      gl: {
        season: "Setembro · Outubro",
        name:   "Festas de San Roquiño",
        desc:   "6 días de festa en honra a San Roquiño. Música, gastronomía, xogos e moita diversión para toda a familia.",
        detail: {
          intro: "As Festas de San Roquiño son a celebración grande do ano en Tállara. Durante seis días, a parroquia enchese de música, gastronomía, xogos tradicionais e moita diversión para todas as idades. Unha tradición que leva anos reunindo a veciños e visitantes.",
          features: [
            "Misas e procesións tradicionais",
            "Verbenas e orquestras cada noite",
            "Xantar e vermú popular",
            "Xogos infantís e tradicionais",
            "Queimada popular",
            "Concursos de petanca",
          ],
          when: "Setembro – Outubro",
          where: "Tállara, Lousame",
        },
      },
      es: {
        season: "Septiembre · Octubre",
        name:   "Fiestas de San Roquiño",
        desc:   "6 días de fiesta en honor a San Roquiño. Música, gastronomía, juegos y mucha diversión para toda la familia.",
        detail: {
          intro: "Las Fiestas de San Roquiño son la gran celebración del año en Tállara. Durante seis días, la parroquia se llena de música, gastronomía, juegos tradicionales y mucha diversión para todas las edades. Una tradición que lleva años reuniendo a vecinos y visitantes.",
          features: [
            "Misas y procesiones tradicionales",
            "Verbenas y orquestas cada noche",
            "Comida y vermú popular",
            "Juegos infantiles y tradicionales",
            "Queimada popular",
            "Concursos de petanca",
          ],
          when: "Septiembre – Octubre",
          where: "Tállara, Lousame",
        },
      },
    },
  ],

  /* ── Programa das Festas ────────────────────────────────── */
  /* festas_confirmed: false  →  mostra mensaxe "próximamente" + edición anterior */
  /* festas_confirmed: true   →  mostra o programa confirmado de festas_year      */
  festas_confirmed: false,
  festas_year: 2026,

  /* Programa 2026 – énchese cando se confirmen actos */
  programa: [],

  /* ── Edición anterior (2025) ────────────────────────────── */
  programa_anterior_year: 2025,
  programa_anterior: [
    {
      numero: "28",
      gl: { dia: "Domingo", santo: "San Roque" },
      es: { dia: "Domingo", santo: "San Roque" },
      fecha_gl: "28 set.", fecha_es: "28 sep.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»" }, es: { nombre: "Grupo de Gaitas «O Son do Pote»" } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: UNIÓN Y FUERZA"    }, es: { nombre: "Sesión Vermú: UNIÓN Y FUERZA"    } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "PILI PAMPÍN e UNIÓN Y FUERZA"    }, es: { nombre: "PILI PAMPÍN e UNIÓN Y FUERZA"    } },
      ],
    },
    {
      numero: "29",
      gl: { dia: "Luns", santo: "Virxe do Loreto" },
      es: { dia: "Lunes", santo: "Virxe do Loreto" },
      fecha_gl: "29 set.", fecha_es: "29 sep.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»" }, es: { nombre: "Grupo de Gaitas «O Son do Pote»" } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: DÚO CHARADA"       }, es: { nombre: "Sesión Vermú: DÚO CHARADA"       } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "LOS SATÉLITES e DÚO CHARADA"     }, es: { nombre: "LOS SATÉLITES e DÚO CHARADA"     } },
      ],
    },
    {
      numero: "30",
      gl: { dia: "Martes", santo: "Purísima Concepción" },
      es: { dia: "Martes", santo: "Purísima Concepción" },
      fecha_gl: "30 set.", fecha_es: "30 sep.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»"            }, es: { nombre: "Grupo de Gaitas «O Son do Pote»"            } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: D'NOCHE e CHARANGA OS CELTAS" }, es: { nombre: "Sesión Vermú: D'NOCHE e CHARANGA OS CELTAS" } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "KUBO e D'NOCHE"                             }, es: { nombre: "KUBO e D'NOCHE"                             } },
      ],
    },
    {
      numero: "1",
      gl: { dia: "Mércores", santo: "San Miguel" },
      es: { dia: "Miércoles", santo: "San Miguel" },
      fecha_gl: "01 out.", fecha_es: "01 oct.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»" }, es: { nombre: "Grupo de Gaitas «O Son do Pote»" } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: COMPOSTELA"         }, es: { nombre: "Sesión Vermú: COMPOSTELA"         } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "COMPOSTELA e DISTRITO 7"           }, es: { nombre: "COMPOSTELA e DISTRITO 7"           } },
      ],
    },
    {
      numero: "2",
      gl: { dia: "Xoves", santo: "Anxo da Garda" },
      es: { dia: "Jueves", santo: "Ángel de la Guarda" },
      fecha_gl: "02 out.", fecha_es: "02 oct.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»" }, es: { nombre: "Grupo de Gaitas «O Son do Pote»" } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: GRUPO ARENA"        }, es: { nombre: "Sesión Vermú: GRUPO ARENA"        } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "MARBELLA e GRUPO ARENA"            }, es: { nombre: "MARBELLA e GRUPO ARENA"            } },
      ],
    },
    {
      numero: "3",
      gl: { dia: "Venres", santo: "Nosa Señora de Fátima" },
      es: { dia: "Viernes", santo: "Nuestra Señora de Fátima" },
      fecha_gl: "03 out.", fecha_es: "03 oct.",
      eventos: [
        { hora: "12:00", tipo: "gaitas",    gl: { nombre: "Grupo de Gaitas «O Son do Pote»" }, es: { nombre: "Grupo de Gaitas «O Son do Pote»" } },
        { hora: "14:00", tipo: "vermu",     gl: { nombre: "Sesión Vermú: JB SON"             }, es: { nombre: "Sesión Vermú: JB SON"             } },
        { hora: "22:00", tipo: "orquestra", gl: { nombre: "MIRAMAR e JB SON"                 }, es: { nombre: "MIRAMAR e JB SON"                 } },
      ],
    },
  ],

  /* ── Ruta Nocturna — Inscripcións ────────────────────────
     Pon a true para abrir inscripcións, a false para pechalas. */
  ruta_inscripcions_open: true,
  ruta_precio_persona: 10,
  ruta_iban: 'ES00 0000 0000 00 0000000000',

  /* ── Patrocinadores ─────────────────────────────────────── */
  patrocinadores: [
    { name: "Concello de Lousame",  url: "#", logo_placeholder: true },
    { name: "Patrocinador 2",       url: "#", logo_placeholder: true },
    { name: "Patrocinador 3",       url: "#", logo_placeholder: true },
    { name: "Patrocinador 4",       url: "#", logo_placeholder: true },
  ],

  /* ── Redes sociais ──────────────────────────────────────── */
  social: [
    { label: "FB",  ariaLabel: "Facebook",  url: "https://www.facebook.com/profile.php?id=100069960377017" },
    { label: "IG",  ariaLabel: "Instagram", url: "https://www.instagram.com/festas_de_sanroquino/" },
  ],

  /* ── Localización ───────────────────────────────────────── */
  location: {
    lat: 42.751684935589346,
    lng: -8.870794044096709,
    zoom: 15,
    gl: { popup: "<strong>Tállara</strong><br>Lousame, A Coruña" },
    es: { popup: "<strong>Tállara</strong><br>Lousame, A Coruña" },
  },
};
