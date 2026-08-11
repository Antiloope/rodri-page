import { Album, ContactLink, Playlist, Song } from './types';

export const ARTIST = {
  name: 'Rodrigo Pizarro',
  photo: 'assets/profile.jpg',
  photoLow: 'assets/profile-low.jpg',
  monthlyListeners: '100,000,000',
  linkedIn: 'https://www.linkedin.com/in/rodrigo-pizarro-bb7449125/',
  github: 'https://github.com/Antiloope',
} as const;

export const songs: Song[] = [
  {
    id: 1,
    albumId: 2,
    name: ['Mercado Libre', 'Mercado Libre'],
    image: 'assets/meli.png',
    duration: ['2021 (February) - today', '2021 (Febrero) - actualidad'],
    description: [
      'Im currently working in the Shipping unit of <a href="https://mercadolibre.com/" target="_blank" rel="noopener noreferrer"><b>Mercado Libre</b></a>, e-commerce #1 in latin america. My position is as software development analyst in the fulfilment area, using Java as backend language',
      'Actualmente trabajo en el area de Shipping de <a href="https://mercadolibre.com/" target="_blank" rel="noopener noreferrer"><b>Mercado Libre</b></a>, e-commerce #1 en américa latina. Mi cargo es de analista de desarrollo en la sub area de fulfilment utilizando Java como lenguaje de backend',
    ],
  },
  {
    id: 2,
    albumId: 3,
    name: ['ChordScript', 'ChordScript'],
    image: 'assets/cs.png',
    duration: ['2020', '2020'],
    description: [
      '<a href="https://github.com/Antiloope/ChordScript" target="_blank" rel="noopener noreferrer"><b>ChordScript</b></a> is my thesis project. A programming language for coding music that merge my three passions: music, programming and education. Downloads available now!',
      '<a href="https://github.com/Antiloope/ChordScript" target="_blank" rel="noopener noreferrer"><b>ChordScript</b></a> es mi proyecto de tesis. Un lenguaje para programar música que junta mis 3 pasiones: la musica, la programación y la educación. Disponible para descargar!',
    ],
  },
  {
    id: 3,
    albumId: 1,
    name: ['Computer Engineering', 'Ingeniería en computación'],
    image: 'assets/ucc.png',
    duration: ['2017 - 2020', '2017 - 2020'],
    description: [
      'Since I entered technical oriented high school, I knew I was going to study any career related with electronics, and that\'s how years later, I chose <a href="https://www.ucc.edu.ar/facultades/ingenieria/" target="_blank" rel="noopener noreferrer"><b>computer engineering</b></a>. A degree that relates everything I like and fits perfectly with my abilities.',
      'Desde que entré al secundario técnico, ya sabía que iba a estudiar un carrera relacionada con la electrónica, y asi fue como años mas tarde, tomé la elección por <a href="https://www.ucc.edu.ar/facultades/ingenieria/" target="_blank" rel="noopener noreferrer"><b>ingeniería en computación</b></a>. Una carrera que relaciona todo lo que mas me gusta y encaja a la perfección con mis habilidades.',
    ],
  },
  {
    id: 4,
    albumId: 2,
    name: ['Siges', 'Siges'],
    image: 'assets/siges.png',
    duration: ['2019 (July) - 2021 (January)', '2019 (Julio) - 2021 (Enero)'],
    description: [
      'I work at <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES SA</b></a>, a company that produce and manage its own integral management software for service stations. As developer in charge of integration projects of new technologies as Mercado Pago, YPF app and other projects in C# (.NET) and MSSQL.',
      'Trabajé en <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES SA</b></a>, empresa que produce y administra un software propio para gestión integral de estaciones de servicio. Mi cargo fue como desarrollador a cargo de proyectos de integración con nuevas tecnologias como Mercado Pago, APP de YPF y otros desarrollos en C# (.NET) y MSSQL.',
    ],
  },
  {
    id: 5,
    albumId: 2,
    name: ['School support classes', 'Clases de apoyo escolar'],
    image: 'assets/school.png',
    duration: ['2018 - 2020', '2018 - 2020'],
    description: [
      'I love education and for this reason I started teaching a group of students in 2018, helping them with subjects like electronics or mathematics. Over time, I met more students and managed to accommodate my schedules to continue giving private lessons, working and studying.',
      'Me encanta la educación y por eso empecé a dar clases en 2018 a varios alumnos, ayudandolos con materias de electrónica o matemáticas. Con el paso del tiempo, fui conociendo nuevos alumnos y acomodando mis horarios para poder dar clases, estudiar y trabajar.',
    ],
  },
  {
    id: 6,
    albumId: 2,
    name: ['Internship in Pentacom', 'Pasantía en Pentacom'],
    image: 'assets/pentacom.png',
    duration: ['2016 (3 months)', '2016 (3 meses)'],
    description: [
      'In my last year at high school, I made a working internship at <a href="https://www.pentacom.com.ar/" target="_blank" rel="noopener noreferrer"><b>Pentacom</b></a>. A company that makes repairs of electronic devices, which allowed me to see how all technical contents studied in my school are applied in real life.',
      'En el último año del secundario, realicé una pasantia de trabajo en <a href="https://www.pentacom.com.ar/" target="_blank" rel="noopener noreferrer"><b>Pentacom</b></a>. Una empresa que realiza reparaciones de aparatos electrónicos, lo cual me permitió ver como se aplican en la realidad los contenidos técnicos vistos en el colegio.',
    ],
  },
  {
    id: 7,
    albumId: 1,
    name: ['High school', 'Escuela secundaria'],
    image: 'assets/highSchool.png',
    duration: ['2009 - 2016', '2009 - 2016'],
    description: [
      'I attended my secondary school at <a href="https://www.itsv.edu.ar/itsv/index.php" target="_blank" rel="noopener noreferrer"><b>Instituto Técnico Salesiano Villada</b></a>. A high school with technical orientation in 3 areas: informatics, electromechanics and electronics. In my fourth year, I make the decision to enter the speciality in electronics, where I learned most of the main concepts and tools that I deepened later in my career.',
      'Hice el secundario en el <a href="https://www.itsv.edu.ar/itsv/index.php" target="_blank" rel="noopener noreferrer"><b>Instituto Técnico Salesiano Villada</b></a>. Una escuela con orientación técnica en 3 areas: informática, electromecánica y electrónica. En cuarto año, tomé la desición de entrar a electrónica, donde aprendí gran parte de los conceptos y herraminetas que despues profundicé durante la carrera.',
    ],
  },
  {
    id: 8,
    albumId: 1,
    name: ['Primary school', 'Escuela primaria'],
    image: 'assets/pias.png',
    duration: ['2004 - 2009', '2004 - 2009'],
    description: [
      'I did my primary school in <b>Escuelas Pías</b>, a catholic school with orientation in social sciences',
      'Mi escuela primaria la hice en <b>Escuelas Pías</b>, un colegio católico con orientación en ciencias sociales',
    ],
  },
];

export const albums: Album[] = [
  {
    id: 1,
    image: 'assets/studies.jpg',
    title: ['Studies', 'Estudios'],
    subtitle: ['My education', 'Mi educación'],
  },
  {
    id: 2,
    image: 'assets/working.jpg',
    title: ['Work', 'Trabajo'],
    subtitle: ['Working experiences', 'Experiencias laborales'],
  },
  {
    id: 3,
    image: 'assets/projects.jpg',
    title: ['Personal projects', 'Proyectos personales'],
    subtitle: ['Ideas, prototypes...', 'Ideas, prototipos...'],
  },
  {
    id: 4,
    image: 'assets/art.png',
    title: ['Art', 'Arte'],
    subtitle: ['Artistic expressions', 'Expresiones artísticas'],
  },
  {
    id: 5,
    image: 'assets/hobbies.jpg',
    title: ['Other hobbies', 'Otros hobbies'],
    subtitle: ['Gaming, 3D printing...', 'Juegos, impresion 3D...'],
  },
  {
    id: 6,
    image: 'assets/recommendations.jpg',
    title: ['Recommendations', 'Recomendaciones'],
    subtitle: ['Books, films, games...', 'Libros, películas, juegos...'],
  },
];

export const playlists: Playlist[] = [
  {
    id: 1,
    image: 'assets/playlist1.png',
    title: ['Inspiration', 'Inspiración'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '1RBh3VQ7qOKR40pGvpX21w',
  },
  {
    id: 2,
    image: 'assets/playlist5.png',
    title: ['Random', 'Random'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '5EXv2Zvd8xElo5I13lPS9m',
  },
  {
    id: 5,
    image: 'assets/playlist2.png',
    title: ['Bass', 'Bass'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '3yFGjbYTsk86x68R0f5Ha7',
  },
  {
    id: 4,
    image: 'assets/playlist4.png',
    title: ['Epic!', 'Épicos!'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '67zBNdyCco1g7atVFIRvzI',
  },
  {
    id: 3,
    image: 'assets/playlist3.png',
    title: ['Escena ARG', 'Escena ARG'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '61wBaEIzq3PDu9Ep2AMxKA',
  },
];

export const contacts: ContactLink[] = [
  {
    id: 'email',
    href: 'mailto:rodrigopizarro1234@gmail.com',
    name: ['Personal email', 'Correo personal'],
  },
  {
    id: 'github',
    href: 'https://github.com/Antiloope',
    name: ['Github', 'Github'],
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/rodrigo-pizarro-bb7449125/',
    name: ['LinkedIn', 'LinkedIn'],
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/rodri__pizarro/',
    name: ['Instagram', 'Instagram'],
  },
];

export const popularIds = [1, 2, 3, 4, 5] as const;

export const popularSongs = popularIds
  .map((id) => songs.find((song) => song.id === id))
  .filter((song): song is Song => Boolean(song));

export function songById(id: number): Song | undefined {
  return songs.find((song) => song.id === id);
}

export function albumById(id: number): Album | undefined {
  return albums.find((album) => album.id === id);
}

export function playlistById(id: number): Playlist | undefined {
  return playlists.find((playlist) => playlist.id === id);
}

export function songsInAlbum(albumId: number): Song[] {
  return songs.filter((song) => song.albumId === albumId);
}
