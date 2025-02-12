import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lorthic-portfolio';

  sections = [
    { id: 'home', title: 'Welcome to Lorthic Technologies', content: 'Innovative solutions for modern businesses.', bg: 'bg-white' },
    { id: 'services', title: 'Our Services', content: 'Providing cutting-edge technology services for growth.', bg: 'bg-gray-100' },
    { id: 'projects', title: 'Our Projects', content: 'Showcasing our work and achievements.', bg: 'bg-white' },
    { id: 'about', title: 'About Us', content: 'Lorthic Technologies delivers innovative digital solutions.', bg: 'bg-gray-100' },
    { id: 'contact', title: 'Contact Us', content: 'Get in touch with us for more details.', bg: 'bg-white' }
  ];

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }
}
