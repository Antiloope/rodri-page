import { Component, OnInit } from '@angular/core';
import {albums,Album} from "../app.component";

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

  _albums: Album[] = albums;

}
