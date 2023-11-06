import { Component, OnInit } from '@angular/core';
import { UserDto, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'diannemormont-usuario-privado',
  templateUrl: './usuario-privado.component.html',
  styleUrls: ['./usuario-privado.component.css']
})
export class UsuarioPrivadoComponent implements OnInit {

  users: UserDto[] = [];

  user: UserDto = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
  };

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAll().subscribe((user: UserDto[]) => {
      this.users = user;
    });
  }

  update(updateUser: UserDto) {
    this.userService.update(updateUser).subscribe((response: UserDto) => {
      if (response?.email != null) {
        alert('El usuario se actualizó correctamente...');
      } else {
        alert('El usuario no se encontró o ocurrió un error');
      }
    })
  }

  delete(email?: string) {
    if (!email) {
      return;
    }
    if (window.confirm('Esta seguro de eliminar el usuario...')) {
      this.userService.delete(email).subscribe((response: boolean) => {
        if (response) {
          this.users = this.users.filter((user: UserDto) => user.email != email);
        } else {
          alert('Oops... Something wrong happened...');
        }
      });
    }
  }
}
