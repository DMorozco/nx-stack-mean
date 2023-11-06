/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { AccountDto, AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'diannemormont-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  account: AccountDto = {
    email: '',
    password: '',
    role: '',
  };

  constructor(private accountService: AccountService, private router: Router) {}

  login() {
    if (!this.account.email || !this.account.password) {
      alert('email, password son requeridos');
      return;
    }

    this.accountService.login(this.account).subscribe((response) => {
      console.log(response);
      if (response.status == 200) {
        alert('Bienvenido');

        const account = response.data as AccountDto;

        if(account.role == 'USER') {
          this.router.navigate(['/pagina-privada']);
        }
        else {
          this.router.navigate(['/usuario-privado']);
        }
        
        this.account = {
          email: '',
          password: '',
          role: '',
        };

      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}
