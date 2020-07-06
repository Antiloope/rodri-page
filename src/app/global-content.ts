import {Album, Playlist, Song} from "./global-types";
import {animate, state, style, transition, trigger} from "@angular/animations";

export const upDownAnimation = [
  trigger('openClose', [
    state('open', style({
      transform: 'translateY(0%)',
      visibility: 'visible',
    })),
    state('closed',
      style({
        transform: 'translateY(150%)',
      })),
    transition('open => closed', [
      animate("0.4s cubic-bezier(0,0,.42,1.02)")
    ]),
    transition('closed => open', [
      animate('0.4s cubic-bezier(0,0,.42,1.02)')
    ]),
  ]),
]
export const playlists: Playlist[] = [
  {
    id: 1,
    image: "assets/playlist1.png",
    title: ["Inspiration", "Inspiración"],
    subtitle: [" ", " "],
    embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/1RBh3VQ7qOKR40pGvpX21w\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
  },

  {
    id: 2,
    image: "assets/playlist5.png",
    title: ["Random", "Random"],
    subtitle: [" ", " "],
    embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/5EXv2Zvd8xElo5I13lPS9m\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
  },
  {
    id: 3,
    image: "assets/playlist2.png",
    title: ["Classicism", "Clasicismo"],
    subtitle: [" ", " "],
    embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/4ie5YFRRj3EZe8KtrSQOAj\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
  },
  {
    id: 4,
    image: "assets/playlist4.png",
    title: ["Epic!", "Épicos!"],
    subtitle: [" ", " "],
    embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/67zBNdyCco1g7atVFIRvzI\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
  },
  {
    id: 5,
    image: "assets/playlist3.png",
    title: ["Escena ARG", "Escena ARG"],
    subtitle: [" ", " "],
    embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/61wBaEIzq3PDu9Ep2AMxKA\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
  },
]
export const albums: Album[] = [
  {
    id: 1,
    image: "assets/studies.jpg",
    route: "album1",
    title: ["Studies", "Estudios"],
    subtitle: ["My formal education", "Mi educación formal"],
  },
  {
    id: 2,
    image: "assets/working.jpg",
    route: "album2",
    title: ["Work", "Trabajo"],
    subtitle: ["Working experiences", "Experiencias laborales"],
  },
  {
    id: 3,
    image: "assets/projects.jpg",
    route: "album3",
    title: ["Personal projects", "Proyectos personales"],
    subtitle: ["Ideas, prototypes...", "Ideas, prototipos..."],
  },
  {
    id: 4,
    image: "assets/art.png",
    route: "album4",
    title: ["Art", "Arte"],
    subtitle: ["Artistic expressions", "Expresiones artísticas"],
  },
  {
    id: 5,
    image: "assets/hobbies.jpg",
    route: "album5",
    title: ["Other hobbies", "Otros hobbies"],
    subtitle: ["Gaming, 3D printing...", "Juegos, impresion 3D..."],
  },
  {
    id: 6,
    image: "assets/recommendations.jpg",
    route: "album6",
    title: ["Recommendations", "Recomendaciones"],
    subtitle: ["Books, films, games...", "Libros, películas, juegos..."],
  },
]
export const songs: Song[] = [
  {
    id: 2,
    album: 2,
    name: ["Siges", "Siges"],
    image: "assets/siges.png",
    duration: ["2019 (July) - today", "2019 (Julio) - actualidad"],
    description: [
      "I work at <a href='https://www.linkedin.com/company/sistemasiges/about/' style='text-decoration: none;color: inherit' target='_blank'><b>SIGES SA</b></a>, a company that produce and manage its own integral management software for service stations. As developer in charge of integration projects of new technologies as Mercado Pago, YPF app and other projects in C# (.NET) and MSSQL.",
      "Trabajo en <a href='https://www.linkedin.com/company/sistemasiges/about/' style='text-decoration: none;color: inherit' target='_blank'><b>SIGES SA</b></a>, empresa que produce y administra un software propio para gestión integral de estaciones de servicio. Mi cargo es de desarrollador a cargo de proyectos de integración de nuevas tecnologias como Mercado Pago, APP de YPF y otros desarrollos en C# (.NET) y MSSQL."],
  },
  {
    id: 3,
    album: 2,
    name: ["School support classes", "Clases de apoyo escolar"],
    image: "assets/school.png",
    duration: ["2018 - today", "2018 - actualidad"],
    description: [
      "I love education and for this reason I started teaching a group of students in 2018, helping them with subjects like electronics or mathematics. Over time, I met more students and managed to accommodate my schedules to continue giving private lessons, working and studying.",
      "Me encanta la educación y por eso empecé a dar clases en 2018 a varios alumnos, ayudandolos con materias de electrónica o matemáticas. Con el paso del tiempo, fui conociendo nuevos alumnos y acomodando mis horarios para poder dar clases, estudiar y trabajar."],
  },
  {
    id: 4,
    album: 2,
    name: ["Internship in Pentacom", "Pasantía en Pentacom"],
    image: "assets/pentacom.png",
    duration: ["2016 (3 months)", "2016 (3 meses)"],
    description: [
      "In my last year at high school, I made a working internship at <a href='https://www.pentacom.com.ar/' style='text-decoration: none;color: inherit' target='_blank'><b>Pentacom</b></a>. A company that makes repairs of electronic devices, which allowed me to see how all technical contents studied in my school are applied in real life.",
      "En el último año del secundario, realicé una pasantia de trabajo en <a href='https://www.pentacom.com.ar/' style='text-decoration: none;color: inherit' target='_blank'><b>Pentacom</b></a>. Una empresa que realiza reparaciones de aparatos electrónicos, lo cual me permitió ver como se aplican en la realidad los contenidos técnicos vistos en el colegio."],
  },
  {
    id: 5,
    album: 1,
    name: ["Computer Engineering", "Ingeniería en computación"],
    image: "assets/ucc.png",
    duration: ["2017 - today", "2017 - actualidad"],
    description: [
      "Since I entered technical oriented high school, I knew I was going to study any career related with electronics, and that's how years later, I chose <a href='https://www.ucc.edu.ar/facultades/ingenieria/' style='text-decoration: none;color: inherit' target='_blank'><b>computer engineering</b></a>. A degree that relates everything I like and fits perfectly with my abilities.",
      "Desde que entré al secundario técnico, ya sabía que iba a estudiar un carrera relacionada con la electrónica, y asi fue como años mas tarde, tomé la elección por <a href='https://www.ucc.edu.ar/facultades/ingenieria/' style='text-decoration: none;color: inherit' target='_blank'><b>ingeniería en computación</b></a>. Una carrera que relaciona todo lo que mas me gusta y encaja a la perfección con mis habilidades."],
  },
  {
    id: 6,
    album: 1,
    name: ["High school", "Escuela secundaria"],
    image: "assets/highSchool.png",
    duration: ["2009 - 2016", "2009 - 2016"],
    description: [
      "I attended my secondary school at <a href='https://www.itsv.edu.ar/itsv/index.php' style='text-decoration: none;color: inherit' target='_blank'><b>Instituto Técnico Salesiano Villada</b></a>. A high school with technical orientation in 3 areas: informatics, electromechanics and electronics. In my fourth year, I make the decision to enter the speciality in electronics, where I learned most of the main concepts and tools that I deepened later in my career.",
      "Hice el secundario en el <a href='https://www.itsv.edu.ar/itsv/index.php' style='text-decoration: none;color: inherit' target='_blank'><b>Instituto Técnico Salesiano Villada</b></a>. Una escuela con orientación técnica en 3 areas: informática, electromecánica y electrónica. En cuarto año, tomé la desición de entrar a electrónica, donde aprendí gran parte de los conceptos y herraminetas que despues profundicé durante la carrera."],
  },
  {
    id: 7,
    album: 1,
    name: ["Primary school", "Escuela primaria"],
    image: "assets/pias.png",
    duration: ["2004 - 2009", "2004 - 2009"],
    description: [
      "I did my primary school in <b>Escuelas Pías</b>, a catholic school with orientation in social sciences",
      "Mi escuela primaria la hice en <b>Escuelas Pías</b>, un colegio católico con orientación en ciencias sociales"],
  },
  {
    id: 1,
    album: 3,
    name: ["ChordScript", "ChordScript"],
    image: "assets/cs.png",
    duration: ["2020", "2020"],
    description: [
      "<a href='https://github.com/Antiloope/ChordScript' style='text-decoration: none;color: inherit' target='_blank'><b>ChordScript</b></a> is my thesis project. A tool for music programming, based on 3 pillars: programming, music and education. If you are a musician interested in programming or a programmer interested in music, ChordScript is perfect for you",
      "<a href='https://github.com/Antiloope/ChordScript' style='text-decoration: none;color: inherit' target='_blank'><b>ChordScript</b></a> es mi proyecto de tesis. Una herramienta para programar música, centrada en 3 pilares: programación, música y educación. Si sos músico y te interesa la programación o sos programador y te interesa la música, ChordScript es la herramienta perfecta"],
  },
]
export const lang: string = navigator.language;
