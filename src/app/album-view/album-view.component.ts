import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {albums, lang, songs} from "../app.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
  animations:[
    trigger('openClose', [
      state('open', style({
        transform: 'translateY(0%)',
        visibility:'visible',
      })),
      state('closed',
        style({
          transform: 'translateY(150%)',
        })),
      transition('open => closed', [
        animate("0.7s cubic-bezier(0,0,.42,1.02)")
      ]),
      transition('closed => open', [
        animate('0.7s cubic-bezier(0,0,.42,1.02)')
      ]),
    ]),
  ],
})
export class AlbumViewComponent implements OnInit {
  langId:number;
  texts:any = [];
  currentAlbum:any;
  isOpen = false;
  toggle() {
    (document.querySelector('#album') as HTMLElement).style.top = window.pageYOffset+"px";
    if(this.isOpen){
      document.body.style.overflow = "visible";
      setTimeout(()=>{
        this.router.navigate(['/']);
      },700);
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
      this.currentAlbum.songs = songs.find(song => song.album ===+this.currentAlbum.id);
    })
  }

}
