import { ContactDto } from './models/contact.model';
import { IContact, Contact } from './models/contacts.shema';

export class ContactService {
  static async getAll(): Promise<ContactDto[]> {
    try {
      const contacts: IContact[] = await Contact.find();
      return contacts.map((contact: IContact) => ({
        name: contact.name,
        email: contact.email,
        message: contact.message,
      }));
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }

  static async create(contact: ContactDto): Promise<ContactDto> {
    try {
      const newContact: IContact = await Contact.create(contact);
      return {
        name: newContact.name,
        email: newContact.email,
        message: newContact.message,
      };
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }
}
