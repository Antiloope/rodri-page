import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

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
