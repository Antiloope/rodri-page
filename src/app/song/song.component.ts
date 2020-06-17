import {Component, DoCheck, OnInit} from '@angular/core';
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

  currentSong;
  langId:number;
  texts:any=[]

  copyToClipboard():void{
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = "http://rodri-page.herokuapp.com/song/" + this.currentSong.id;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
  }

  ngOnInit(): void {
    if (lang.split('-')[0]==='es')this.langId=1;
    else this.langId=0;
    this.toggle();
    this.route.paramMap.subscribe(params => {
      this.currentSong = songs.find(exp => exp.id===+params.get('id'));
      this.currentSong.al = albums.find(al => al.id===this.currentSong.album);
    })
  }
}
