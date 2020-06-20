import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {albums, lang, Song, songs, upDownAnimation} from "../app.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
  animations: upDownAnimation,
})
export class AlbumViewComponent implements OnInit {
  langId:number;
  texts:any = [
    ["Nothing to show here","Nada para mostrar por aca"]
  ];
  currentAlbum:any;
  songs: Song[] = [];
  isOpen = false;
  toggle() {
    (document.querySelector('#album') as HTMLElement).style.top = window.pageYOffset+"px";
    if(this.isOpen){
      document.body.style.overflow = "visible";
      setTimeout(()=>{
        this.router.navigate(['/']);
      },400);
      setTimeout(()=>{
        this.isOpen = false;
      },1);
    }else{
      document.body.style.overflow = "hidden";
      setTimeout(()=>{
        this.isOpen = true;
      },1);
    }
  }
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (lang.split('-')[0]==='es')this.langId=1;
    else this.langId=0;
    this.toggle();
    this.route.paramMap.subscribe(params => {
      this.currentAlbum = albums.find(album => album.id===+params.get('id'));
      this.songs = songs.filter(song => song.album ===+this.currentAlbum.id);
    })
  }

}
