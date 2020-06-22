import { Component, OnInit } from '@angular/core';
import {lang} from "../global-content";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  langId:number;
  texts:any=[
    ["About","Sobre mi"],
    ["I was born in Córdoba, Argentina. Since childhood I like music and technology, and I took both passions hand in hand. At present, I'm studying last year of computer engineering and having listened a lot of music..",
     "Nací en Córdoba, Argentina. Desde chico me gustó siempre la música y la tecnología, y fui llevando ambas pasiones de la mano. Actualmente estoy cursando el ultimo año de ingeniería en computación y habiendo escuchado mucha musica.."],
  ]

  ngOnInit(): void {
    if (lang.split('-')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
  }

}
