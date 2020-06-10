import { Component, OnInit } from '@angular/core';
import {Album} from "../albums/albums.component";

export interface Playlist {
  image: string;
  route: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

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
  playlists: Playlist[] = [
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
