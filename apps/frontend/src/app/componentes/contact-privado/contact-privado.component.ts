import { Component, OnInit } from '@angular/core';
import { ContactDto, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'diannemormont-contact-privado',
  templateUrl: './contact-privado.component.html',
  styleUrls: ['./contact-privado.component.css']
})
export class ContactPrivadoComponent implements OnInit {

  contacts: ContactDto[] = [];

  constructor(private contactService: ContactService) { }
  
  ngOnInit(): void {
    this.contactService.getAll().subscribe((contacts: ContactDto[]) => {
      this.contacts = contacts;
    });
  }
}

