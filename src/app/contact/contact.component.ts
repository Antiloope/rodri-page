import { Component, OnInit } from '@angular/core';
import {lang} from "../app.component";

export interface Contact {
  image: string;
  href: string;
  name: string[];
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  langId:number;
  texts:any=[
    ["Contact","Contacto"],
  ]

  ngOnInit(): void {
    if (lang.split('_')[0]==='es'){
      this.langId=1;
    }else{
      this.langId=0;
    }
  }

  contact:Contact[] = [
    {
      image: "assets/email.png",
      name: ["Personal email","Correo personal"],
      href: "#",
    },
    {
      image: "assets/github.png",
      name: ["Github","Github"],
      href: "https://github.com/Antiloope",
    },
    {
      image: "assets/linkedin.png",
      name: ["LinkedIn","LinkedIn"],
      href: "https://www.linkedin.com/in/rodrigo-pizarro-bb7449125/",
    },
  ]
}
