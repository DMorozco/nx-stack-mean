import { Component } from '@angular/core';
import { ContactDto, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'diannemormont-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css'],
})
export class ContactenosComponent {
  newContact: ContactDto = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

  create() {
    if (
      !this.newContact.name ||
      !this.newContact.email ||
      !this.newContact.message
    ) {
      alert('Nombre, Email y Mensaje son campos requeridos');
      return;
    }

    this.contactService.create(this.newContact).subscribe((response) => {
      if (response) {
        this.clearForm();
        alert('Contacto creado exitosamente.');
      } else {
        alert('Error al crear el contacto. Por favor, inténtalo de nuevo.');
      }
    });
  }
  clearForm() {
    this.newContact = {
      name: '',
      email: '',
      message: '',
    };
  }
}
