import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute, Router} from "@angular/router";
import {albums, lang, Playlist, playlists} from "../app.component";

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss'],
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
export class PlaylistViewComponent implements OnInit {
  langId:number;
  texts:any = [];
  isOpen = false;
  currentPlaylist:Playlist;
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
      this.currentPlaylist = playlists.find(play => play.id===+params.get('id'));
      document.getElementById('playlist-div').innerHTML = this.currentPlaylist.embedded;
    })
  }

}
