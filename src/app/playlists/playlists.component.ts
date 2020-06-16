import { Component, OnInit } from '@angular/core';
import {Album, albums, lang} from "../app.component";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  langId:number;
  texts:any=[
    ["Playlists","Playlists"],
  ]

  ngOnInit(): void {
    if (lang.split('-')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
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
