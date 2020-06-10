import { Component, OnInit } from '@angular/core';

export interface Album {
  image: string;
  route: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mySlideOptions={
    autoWidth:true,
    dots: false,
    nav: false,
    lazyLoad: true,
    margin:20,
  };
  albums: Album[] = [
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
    {
      image: "assets/studies.jpg",
      route: "album1",
      title: "Studies",
      subtitle: "All my studies",
    },
  ]

}
