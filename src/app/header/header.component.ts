import {Component, HostListener, OnInit} from '@angular/core';
import {lang} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  langId:number;
  texts:any=[
    ["MONTHLY LISTENERS","OYENTES MENSUALES"],
    ["FOLLOW","SEGUIR"],
    ["FOLLOWING","SIGUIENDO"],
  ]

  ngOnInit(): void {
    if (lang.split('-')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
  }

  follow(){
    this.following =! this.following;
    if (this.following){
      document.getElementById("follow").innerHTML = this.texts[2][this.langId];
      (document.querySelector('.follow-button') as HTMLElement).style.color = "var(--color-primary)";
    }else{
      document.getElementById("follow").innerHTML = this.texts[1][this.langId];
      (document.querySelector('.follow-button') as HTMLElement).style.color = "var(--color-text)";
    }
  }

  following:boolean = false;

  @HostListener("window:scroll", ['$event'])
  onScroll(event:Event){
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
      if(verticalOffset <= 5){
        (document.querySelector('#image') as HTMLElement).style.backgroundImage =
          'linear-gradient(' +
          '          rgba(16, 16, 16, 0.0) 0%,' +
          '          rgba(16, 16, 16, 0.0) 60%,' +
          '          rgba(16, 16, 16, 0.2) 80%,' +
          '          rgba(16, 16, 16, 0.7) 90%,' +
          '          rgba(16, 16, 16, 0.9) 95%,' +
          '          rgba(16, 16, 16, 1.0) 100%' +
          '      )';
      }else{
        (document.querySelector('#image') as HTMLElement).style.backgroundImage =
          'linear-gradient(' +
          '      rgba(16, 16, 16, 0.0) 0%,' +
          '      rgba(16, 16, 16, 0.0) '+(60-verticalOffset/4)+'%,' +
          '      rgba(16, 16, 16, 0.2) '+(80-verticalOffset/5)+'%,' +
          '      rgba(16, 16, 16, 0.7) '+(90-verticalOffset/6)+'%,' +
          '      rgba(16, 16, 16, 0.9) '+(95-verticalOffset/7)+'%,' +
          '      rgba(16, 16, 16, 1.0) '+(100-verticalOffset/8)+'%' +
          '  )';
      }
  }
}
