import { Component } from '@angular/core';

export interface Song {
  id: number;
  name: string[];
  duration: string[];
  image: string;
  album: number;
  description: string[];
}

export interface Album {
  id: number;
  image: string;
  route: string;
  title: string[];
  subtitle: string[];
}

export const albums:Album[] = [
  {
    id:1,
    image: "assets/studies.jpg",
    route: "album1",
    title: ["Studies","Estudios"],
    subtitle: ["All my studies","Todos mis estudios"],
  },
  {
    id:2,
    image: "assets/working.jpg",
    route: "album2",
    title: ["Working","Trabajo"],
    subtitle: ["My working experiences","Mis experiencias laborales"],
  },
  {
    id:3,
    image: "assets/projects.jpg",
    route: "album3",
    title: ["Personal projects","Proyectos personales"],
    subtitle: ["Ideas, prototypes...","Ideas, prototipos..."],
  },
  {
    id:4,
    image: "assets/art.png",
    route: "album4",
    title: ["Art","Arte"],
    subtitle: ["Artistic expressions","Expresiones artísticas"],
  },
  {
    id:5,
    image: "assets/studies.jpg",
    route: "album1",
    title: ["Studies","Estudios"],
    subtitle: ["All my studies","Todos mis estudios"],
  },
  {
    id:6,
    image: "assets/studies.jpg",
    route: "album1",
    title: ["Studies","Estudios"],
    subtitle: ["All my studies","Todos mis estudios"],
  },
]

export const songs:Song[] = [
  {
    id: 1,
    album: 2,
    name: ["Siges","Siges"],
    image: "assets/siges.png",
    duration: ["2019 (July) - today","2019 (Julio) - actualidad"],
    description: [
      "English pafvjivoerpakm cka sdckal dk alkd cakd cka sdkhas kdaksjdfh lkjasdk hjsadlc añdlkja ñcsdlkjca lskdj akljewpij caij cpij epivj fdjivsp rjvp9idjf pvi jvpf vmsdocainvwo ckeldlcwdnibaumir wonckelmad kelcms",
      "Trabajo en Siges desarrollando diferentes soluciones. Implementando pafvjivoerpa kvmsdocainvwockel dlcwdnibaumirwonckelmad kelcms"],
  },
  {
    id: 2,
    album: 2,
    name: ["School support classes","Clases de apoyo escolar"],
    image: "assets/school.png",
    duration: ["2018 - today","2018 - actualidad"],
    description: [
      "English mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo",
      "Español mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo"],
  },
  {
    id: 3,
    album: 2,
    name: ["Internship in Pentacom","Pasantía en Pentacom"],
    image: "assets/pentacom.png",
    duration: ["2016 (3 months)","2016 (3 meses)"],
    description: [
      "English mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo",
      "Español mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo cakjf aoejf apij oiau jpoiaj fpoakm paokrcpoadcpm ao osmcposkdpo aij paoid"],
  },
  {
    id: 4,
    album: 1,
    name: ["Computer Engineering","Ingeniería en computación"],
    image: "assets/ucc.png",
    duration: ["2017 - today","2017 - actualidad"],
    description: [
      "English mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo",
      "Español mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo cakjf aoejf apij oiau jpoiaj fpoakm paokrcpoadcpm ao osmcposkdpo aij paoid"],
  },
  {
    id: 5,
    album: 1,
    name: ["High school","Escuela secundaria"],
    image: "assets/highSchool.png",
    duration: ["2009 - 2016","2009 - 2016"],
    description: [
      "English mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo",
      "Español mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo cakjf aoejf apij oiau jpoiaj fpoakm paokrcpoadcpm ao osmcposkdpo aij paoid"],
  },
  {
    id: 6,
    album: 1,
    name: ["Primary school","Escuela primaria"],
    image: "assets/pias.png",
    duration: ["2004 - 2009","2004 - 2009"],
    description: [
      "English mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo",
      "Español mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo cakjf aoejf apij oiau jpoiaj fpoakm paokrcpoadcpm ao osmcposkdpo aij paoid"],
  },
]

export const lang:string = navigator.language;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
