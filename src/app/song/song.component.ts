import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,sequence} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {Song, songs, Album, albums, lang} from "../app.component";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
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
export class SongComponent implements OnInit {
  isOpen = false;
  toggle() {
    (document.querySelector('#song') as HTMLElement).style.top = window.pageYOffset+"px";
    setTimeout(()=>{
      this.isOpen = !this.isOpen;
    },1);
    if(this.isOpen){
      document.body.style.overflow = "visible";
      setTimeout(()=>{
        this.router.navigate(['/']);
      },710);
    }else{
      document.body.style.overflow = "hidden";
    }
  }
  constructor(private router: Router,private route:ActivatedRoute) { }

  currentSong;
  langId:number;
  texts:any=[
  ]

  ngOnInit(): void {
    if (lang.split('-')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
    this.toggle();
    this.route.paramMap.subscribe(params => {
      this.currentSong = songs.find(exp => exp.id===+params.get('id'));
      this.currentSong.album = albums.find(al => al.id===this.currentSong.id);
    })
  }
}
