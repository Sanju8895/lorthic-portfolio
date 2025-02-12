import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
