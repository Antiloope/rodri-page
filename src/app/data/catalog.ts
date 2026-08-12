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
    id: 9,
    albumId: 2,
    name: ['Siges (Pt. II)', 'Siges (Pt. II)'],
    image: 'assets/siges.png',
    duration: ['2025 (December) - today', '2025 (Diciembre) - actualidad'],
    description: [
      '<p>Same track, different arrangement.</p><p>After Mercado Libre I came back to <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES</b></a>, now as an IT consultant, a few hours a week. I help organise the team and lead the creation of a new version of the system.</p><p>It\'s the rematch. I already knew the catalog. Now I\'m here to help them record the next one.</p>',
      '<p>Mismo tema, otro arreglo.</p><p>Después de Mercado Libre volví a <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES</b></a>, ahora como consultor de IT, unas horas por semana. Ayudo a organizar el equipo y lidero la creación de una versión nueva del sistema.</p><p>Es la revancha. Ya conocía el catálogo. Ahora estoy para ayudarlos a grabar el siguiente disco.</p>',
    ],
  },
  {
    id: 1,
    albumId: 2,
    name: ['Mercado Libre', 'Mercado Libre'],
    image: 'assets/meli.png',
    duration: ['2021 (February) - 2025 (December)', '2021 (Febrero) - 2025 (Diciembre)'],
    description: [
      '<p>Almost five years inside Shipping at <a href="https://mercadolibre.com/" target="_blank" rel="noopener noreferrer"><b>Mercado Libre</b></a>. The work was organising the internal processes of Meli\'s huge warehouses.</p><p>Same umbrella, different teams. For a long stretch I was acting tech lead. I built technical interviews and hired entire new teams. Day to day I worked mostly in Go and Java.</p><p>I left in December 2025. I learned a lot — about systems at that scale, and about working in high-performance teams.</p>',
      '<p>Casi cinco años dentro de Shipping en <a href="https://mercadolibre.com/" target="_blank" rel="noopener noreferrer"><b>Mercado Libre</b></a>. El trabajo era ordenar los procesos internos de los enormes depósitos de Meli.</p><p>Misma campana, distintos equipos. Durante un buen tiempo hice acting de líder técnico. Armé entrevistas técnicas y contraté equipos nuevos enteros. En el día a día trabajé sobre todo en Go y Java.</p><p>Me fui en diciembre de 2025. Aprendí muchísimo: de sistemas a esa escala, y de trabajar en equipos de alto desempeño.</p>',
    ],
  },
  {
    id: 2,
    albumId: 3,
    name: ['ChordScript', 'ChordScript'],
    image: 'assets/cs.png',
    duration: ['2020', '2020'],
    description: [
      '<p>Learning + music + programming. Mix those three passions and <a href="https://antiloope.github.io/ChordScriptPage/" target="_blank" rel="noopener noreferrer"><b>ChordScript</b></a> shows up.</p><p>It was my engineering thesis: a language and an IDE for programming music and sound. I designed a language meant for learning to program through music and for composing too (livecoding, algorithmic composition), and I wrote an interpreter and an environment in C++ so the code can play.</p>',
      '<p>Aprendizaje + música + programación. Si mezclás estas tres pasiones, aparece <a href="https://antiloope.github.io/ChordScriptPage/" target="_blank" rel="noopener noreferrer"><b>ChordScript</b></a>.</p><p>Fue mi tesis de ingeniería: un lenguaje y un IDE para programar música y sonoridades. Diseñé un lenguaje pensado para aprender a programar a través de la música y componer también (livecoding, algorithmic composition), y escribí en C++ un intérprete y un entorno para que el código suene.</p>',
    ],
  },
  {
    id: 3,
    albumId: 1,
    name: ['Computer Engineering', 'Ingeniería en computación'],
    image: 'assets/ucc.png',
    duration: ['2017 - 2020', '2017 - 2020'],
    description: [
      '<p>From technical high school I already knew I was heading toward something tied to electronics. Years later I chose <a href="https://www.ucc.edu.ar/facultades/ingenieria/" target="_blank" rel="noopener noreferrer"><b>computer engineering</b></a>.</p><p>I also ended up as a teaching assistant in Algorithms and Data Structures. I graduated with an 8.85 average (out of 10).</p>',
      '<p>Desde el secundario técnico ya sabía que iba por algo ligado a la electrónica. Años después elegí <a href="https://www.ucc.edu.ar/facultades/ingenieria/" target="_blank" rel="noopener noreferrer"><b>ingeniería en computación</b></a>.</p><p>Terminé también como ayudante de cátedra en Algoritmos y Estructuras de Datos. Me recibí con promedio 8.85.</p>',
    ],
  },
  {
    id: 4,
    albumId: 2,
    name: ['Siges', 'Siges'],
    image: 'assets/siges.png',
    duration: ['2019 (July) - 2021 (January)', '2019 (Julio) - 2021 (Enero)'],
    description: [
      '<p>The first real job. <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES</b></a> builds and runs its own management software for service stations: a complex, demanding world.</p><p>I was the developer on the integrations: Mercado Pago, a YPF app, and other C# (.NET) and MSSQL projects that had to live inside a product the company operated.</p><p>I left in January 2021 for Mercado Libre. I didn\'t know yet that this track would get a sequel.</p>',
      '<p>El primer trabajo de verdad. <a href="https://www.linkedin.com/company/sistemasiges/about/" target="_blank" rel="noopener noreferrer"><b>SIGES</b></a> produce y administra su propio software de gestión para estaciones de servicio: un mundo muy complejo y exigente.</p><p>Fui el desarrollador a cargo de las integraciones: Mercado Pago, una app de YPF y otros proyectos en C# (.NET) y MSSQL que tenían que vivir dentro de un producto que la empresa operaba.</p><p>Me fui en enero de 2021 a Mercado Libre. Todavía no sabía que este tema iba a tener una segunda parte.</p>',
    ],
  },
  {
    id: 5,
    albumId: 2,
    name: ['School support classes', 'Clases de apoyo escolar'],
    image: 'assets/school.png',
    duration: ['2018 - 2020', '2018 - 2020'],
    description: [
      '<p>In 2018 I started tutoring a few students in electronics and maths. More people showed up. I kept rearranging the week so classes, work and university could fit on the same calendar.</p><p>I like teaching. Explaining a circuit or a theorem a thousand different ways for a thousand different people, in wildly different learning processes.</p>',
      '<p>En 2018 empecé a dar apoyo a unos pocos alumnos en electrónica y matemáticas. Fueron apareciendo más. Fui acomodando la semana para que las clases, el trabajo y la facultad entraran en el mismo calendario.</p><p>Me gusta enseñar. Explicar un circuito o un teorema de mil formas distintas para mil personas distintas, en procesos de aprendizaje súper distintos.</p>',
    ],
  },
  {
    id: 7,
    albumId: 1,
    name: ['High school', 'Escuela secundaria'],
    image: 'assets/highSchool.png',
    duration: ['2009 - 2016', '2009 - 2016'],
    description: [
      '<p>I went to <a href="https://www.itsv.edu.ar/itsv/index.php" target="_blank" rel="noopener noreferrer"><b>Instituto Técnico Salesiano Villada</b></a>: a technical school with three paths — informatics, electromechanics and electronics.</p><p>In my fourth year I chose electronics. That\'s where I learned a good part of the concepts and tools I later deepened at university.</p>',
      '<p>Hice el secundario en el <a href="https://www.itsv.edu.ar/itsv/index.php" target="_blank" rel="noopener noreferrer"><b>Instituto Técnico Salesiano Villada</b></a>: un técnico con tres caminos — informática, electromecánica y electrónica.</p><p>En cuarto año elegí electrónica. Ahí aprendí buena parte de los conceptos y herramientas que después profundicé en la carrera.</p>',
    ],
  },
  {
    id: 8,
    albumId: 1,
    name: ['Primary school', 'Escuela primaria'],
    image: 'assets/pias.png',
    duration: ['2004 - 2009', '2004 - 2009'],
    description: [
      '<p>I did primary school at <b>Escuelas Pías</b>, a Catholic school with a social-sciences focus.</p>',
      '<p>La primaria la hice en <b>Escuelas Pías</b>, un colegio católico con orientación en ciencias sociales.</p>',
    ],
  },
];

export const albums: Album[] = [
  {
    id: 1,
    image: 'assets/studies.jpg',
    title: ['Studies', 'Estudios'],
  },
  {
    id: 2,
    image: 'assets/working.jpg',
    title: ['Experience', 'Experiencia'],
  },
  {
    id: 3,
    image: 'assets/projects.jpg',
    title: ['Projects vol. 1', 'Proyectos vol. 1'],
  },
  {
    id: 4,
    image: 'assets/art.png',
    title: ['Projects vol. 2', 'Proyectos vol. 2'],
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
    id: 3,
    image: 'assets/playlist3.png',
    title: ['Escena ARG', 'Escena ARG'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '61wBaEIzq3PDu9Ep2AMxKA',
  },
  {
    id: 6,
    image: 'assets/playlist6.png',
    title: ['Ochentas y por ahí', 'Ochentas y por ahí'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '3RaQt14yjXFODngDxcz54w',
  },
  {
    id: 7,
    image: 'assets/playlist7.png',
    title: ['Head Mind Heart', 'Head Mind Heart'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '6brpeCkHEwt2ej5LNbRA2k',
  },
  {
    id: 8,
    image: 'assets/playlist8.png',
    title: ['Clásica 1', 'Clásica 1'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '35XusMnv4JRRmOHUaxgdxU',
  },
  {
    id: 9,
    image: 'assets/playlist9.png',
    title: ['Jazz & ballads', 'Jazz y balada'],
    subtitle: ['Playlist', 'Playlist'],
    spotifyId: '58q1B5kHsRa8WfF69tuPVy',
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

export const popularIds = [9, 1, 2, 3, 4] as const;

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
