import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {albums, lang, songs, upDownAnimation} from "../global-content";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  animations: upDownAnimation,
})
export class SongComponent implements OnInit {
  isOpen = false;
  isPlaying = false;
  nextSong = 0;
  toggle() {
    (document.querySelector('#song') as HTMLElement).style.top = window.pageYOffset+"px";
    if(this.isOpen){
      document.body.style.overflow = "visible";
      if(this.nextSong){
        setTimeout(()=>{
          this.router.navigate(['/song/'+this.nextSong]);
        },401);
        setTimeout(()=>{
          this.router.navigate(['/']);
        },400);
      }else{
        setTimeout(()=>{
          this.router.navigate(['/']);
        },400);
      }
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

  currentSong;
  langId:number;
  texts:any=[]
  cursor:number = 0;
  newCursor:number = 0;
  async setCursor(range){
    this.isPlaying=false;
    this.newCursor = range.value;
    this.cursor = range.value;
    document.getElementById('myRange').style.background = 'linear-gradient(to right, var(--color-text) calc('+range.value+'*1%), var(--color-secondary) 0)';
  }

  goBack(){
    let tmp = songs.find(song=>song.album===this.currentSong.album && song.id === this.currentSong.id-1);
    if(tmp)
      this.nextSong = tmp.id;
    else
      this.nextSong = 1;

    this.isPlaying = false;
    this.toggle();
  }

  goNext(){
    let tmp = songs.find(song => song.album===this.currentSong.album && song.id === this.currentSong.id+1);
    if(tmp)
      this.nextSong = tmp.id;
    else
      this.nextSong = Math.floor(Math.random() * songs.length) + 1;

    this.isPlaying = false;
    this.toggle();
  }

  async startPlaying(range){
    this.isPlaying=!this.isPlaying;
    range.value = this.cursor;
    let rangeElement = document.getElementById('myRange');
    while (this.isPlaying && this.isOpen){
      if(this.newCursor){
        this.cursor = this.newCursor;
        this.newCursor = 0;
      }
      this.cursor = +this.cursor+0.3;
      rangeElement.style.background = 'linear-gradient(to right, var(--color-text) calc('+range.value+'*1%), var(--color-secondary) 0)';
      range.value = this.cursor;
      await new Promise(r => setTimeout(r, 50));
      if( this.cursor >= 100){
        let tmp = songs.find(song=>song.album===this.currentSong.album && song.id === this.currentSong.id+1);

        if(tmp) this.nextSong = tmp.id;
        else this.nextSong = this.nextSong = Math.floor(Math.random() * songs.length) + 1;

        this.isPlaying = false;
        this.toggle();
      }
    }
  }

  ngOnInit(): void {
    if (lang.split('-')[0]==='es')this.langId=1;
    else this.langId=0;
    this.toggle();
    this.route.paramMap.subscribe(params => {
      this.currentSong = songs.find(exp => exp.id===+params.get('id'));
      this.currentSong.al = albums.find(al => al.id===this.currentSong.album);
      document.getElementById('description').innerHTML = this.currentSong.description[this.langId];
    })
  }
}
