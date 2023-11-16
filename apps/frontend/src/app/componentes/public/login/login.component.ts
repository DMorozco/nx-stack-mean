/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDto, AccountService } from 'src/app/services/account.service';
import { UserDto, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    account: AccountDto = {
      username: '',
      password: '',
      role: '',
      email: ''
    };
    

  constructor(private accountService: AccountService, private router: Router) {}

  login() {
    if (!this.account.username || !this.account.password) {
      alert('email, password son requeridos');
      return;
    }

    this.accountService.login(this.account).subscribe((response: { status: number; data: AccountDto; }) => {
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
          username: '',
          email:'',
          password: '',
          role: '',
        };

      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}
