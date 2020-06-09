import { Component, OnInit } from '@angular/core';

export interface Contact {
  image: string;
  href: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact:Contact[] = [
    {
      image: "assets/email.png",
      name: "Personal email",
      href: "#",
    },
    {
      image: "assets/github.png",
      name: "Github",
      href: "https://github.com/Antiloope",
    },
    {
      image: "assets/linkedin.png",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rodrigo-pizarro-bb7449125/",
    },
  ]
}
