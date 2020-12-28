import { Component, OnInit } from '@angular/core';
import {lang} from '../global-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  langId: number;
  texts: any = [
    ['About', 'Sobre mi'],
    ['I was born in Córdoba, Argentina. Since childhood I like music and technology, ' +
     'and I took both passions hand in hand. At present, I\'m a ' +
     'computer engineering and I have listened a lot of music...',

     'Nací en Córdoba, Argentina. Desde chico me gustó siempre la música y la ' +
     'tecnología, y fui llevando ambas pasiones de la mano. Actualmente soy ' +
     'ingeniero en computación y escuché mucha musica...'],
  ];

  ngOnInit(): void {
    if (lang.split('-')[0] === 'es'){
      this.langId = 1;
    }else{
      this.langId = 0;
    }
  }

}
