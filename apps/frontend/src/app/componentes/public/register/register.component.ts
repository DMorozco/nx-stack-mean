import { Component } from '@angular/core';
import {
  AccountDto,
  AccountResponse,
  AccountService,
} from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newAccount: AccountDto = {
    username: '',
    email: '',
    password: '',
    role: 'USER',
  };

  constructor(private accountService: AccountService) {}

  public async create() {
    if (
      !this.newAccount.username ||
      !this.newAccount.email ||
      !this.newAccount.password
    ) {
      alert('Nombre de usuario, email y password son campos requeridos');
      return;
    }
    await this.accountService
      .signup(this.newAccount)
      .then((accountResponse: AccountResponse) => {
        if (accountResponse.status == 201) {
          this.newAccount = { username: '', email: '', password: '', role: 'USER' };
          alert('El usuario fue creado satisfactoriamente');
        } else {
          alert(accountResponse.error?.message);
        }
      });
  }
}