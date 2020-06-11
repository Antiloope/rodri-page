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
      if(verticalOffset <= 10){
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
          '      rgba(16, 16, 16, '+(0.8 - 2/verticalOffset)+') '+(60-(verticalOffset-20)/2)+'%,' +
          '      rgba(16, 16, 16, '+(0.9 - 1/verticalOffset)+') 70%,' +
          '      rgba(16, 16, 16, '+(0.95 - 1/verticalOffset)+') 80%,' +
          '      rgba(16, 16, 16, '+(1 - 1/verticalOffset)+') 95%,' +
          '      rgba(16, 16, 16, 1.0) 100%' +
          '  )';
      }
  }
}
