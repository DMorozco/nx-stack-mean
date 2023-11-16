import { Component } from '@angular/core';
import { AccountDto, AccountResponse, AccountService } from 'src/app/services/account.service';
import { UserDto, UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser: UserDto = {
    username: '',
    password: '',
    email: '',
    name: '',
    lastname: '',
    city: '',
    address: '',
    phone: 0

  };

  newAccount: AccountDto = {
    username: '',
    email: '',
    password: '',
    role: 'USER',
    
  }

  constructor(
    private userService: UserService,
    private accountService: AccountService,
  ){}

  create() {
    if (!this.newUser.email || !this.newUser.password ) {
      alert('Nombre, Apellido, Email y Teléfono son campos requeridos');
      return;
    }
    this.userService.create(this.newUser).subscribe(() => {
      const newAccount: AccountDto = {
        email: this.newUser.email,
        password: this.newUser.password,
        role: 'USER',
        username: ''
      }
      this.accountService.signup(newAccount).subscribe((accountResponse: AccountResponse) => {
        if(accountResponse.status == 201) {
          this.newUser = { username: '', password: '', email: '', name: '', lastname: '',  city: '',address: '', phone: 0}
          this.newAccount = { username: '', email: '', password: '', role: 'USER' }
          alert('El usuario fue creado satisfactoriamente');
        }
        else {
          alert(accountResponse.error?.message);
        }
      });
    });
  }
}
  

// Footer style


