/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDto, AccountResponse, AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  account: AccountDto = {
    username: '',
    password: '',
  };

  constructor(private accountService: AccountService, private router: Router) {}

  public async login() {
    if (!this.account.username || !this.account.password) {
      alert('email, password son requeridos');
      return;
    }

    await this.accountService
      .login(this.account)
      .then((accountResponse: AccountResponse) => {
        if (accountResponse.status == 200) {
          alert(`Bienvenido ${accountResponse.data.username}`);
          this.account = {username: '', password: ''};
        }
        if (accountResponse.status == 400)
          alert('Credenciales inválidas');
      });
  }
}
