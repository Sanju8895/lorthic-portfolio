import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert(`Message sent!\nName: ${this.contact.name}\nEmail: ${this.contact.email}\nMessage: ${this.contact.message}`);
    this.contact = { name: '', email: '', message: '' };
  }
}
