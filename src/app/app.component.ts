import { Component } from '@angular/core';

export interface Song {
  id: number;
  name: string;
  duration: string;
  image: string;
  album: number;
  description: string;
}

export interface Album {
  id: number;
  image: string;
  route: string;
  title: string;
  subtitle: string;
}

export const albums:Album[] = [
  {
    id:1,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
  {
    id:2,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
  {
    id:3,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
  {
    id:4,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
  {
    id:5,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
  {
    id:6,
    image: "assets/studies.jpg",
    route: "album1",
    title: "Studies",
    subtitle: "All my studies",
  },
]

export const songs:Song[] = [
  {
    id: 1,
    album: 2,
    name: "Siges",
    image: "assets/siges.png",
    duration: "2019 (July) - today",
    description: "I worked in Siges as developer of different solutions. Implementing .NET web APIs, services to manage dispenser controllers, FTP integration solution in C#"
  },
  {
    id: 2,
    album: 2,
    name: "School support classes",
    image: "assets/school.png",
    duration: "2018 - today",
    description: "mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo"
  },
  {
    id: 3,
    album: 2,
    name: "Internship in Pentacom",
    image: "assets/pentacom.png",
    duration: "2016 (3 months)",
    description: "mvapifovmsijn caojina oicaoiwcn ipajcn oiawjciepowicapokcm wap ocmpawock mjco k mcpo"
  },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
