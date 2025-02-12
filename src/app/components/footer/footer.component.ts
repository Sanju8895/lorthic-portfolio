import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sections = [
    { id: 'home', title: 'Home' },
    { id: 'services', title: 'Services' },
    { id: 'projects', title: 'Projects' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
