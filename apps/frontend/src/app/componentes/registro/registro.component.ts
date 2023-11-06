import { Component } from '@angular/core';
import { AccountDto, AccountResponse, AccountService } from 'src/app/services/account.service';
import { UserDto, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  newUser: UserDto = {
    name: '',
    lastname: '',
    email: '',
    phone: ''
  };

  newAccount: AccountDto = {
    email: '',
    password: '',
    role: 'USER'
  };

  constructor(
    private userService: UserService,
    private accountService: AccountService
  ) {}

  create() {
    if (!this.newUser.name || !this.newUser.lastname || !this.newUser.email || !this.newUser.phone) {
      alert('Nombre, Apellido, Email y Teléfono son campos requeridos');
      return;
    }
    this.userService.create(this.newUser).subscribe(() => {
      const newAccount: AccountDto = {
        email: this.newUser.email,
        password: this.newUser.phone,
        role: 'USER'
      }
      this.accountService.signup(newAccount).subscribe((accountResponse: AccountResponse) => {
        if(accountResponse.status == 201) {
          this.newUser = { name: '', lastname: '', email: '', phone: '' }
          this.newAccount = { email: '', password: '', role: 'USER' }
          alert('El usuario fue creado satisfactoriamente');
        }
        else {
          alert(accountResponse.error?.message);
        }
      });
    });
  }
}