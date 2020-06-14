import { Component, OnInit } from '@angular/core';
import {Album,albums} from "../app.component";

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
  playlists: Album[] = albums;
}
