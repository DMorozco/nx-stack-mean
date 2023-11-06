import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../componentes/home/home.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { ProductComponent } from '../componentes/producto/product.component';
import { ContactenosComponent } from '../componentes/contactenos/contactenos.component';
import { MisionComponent } from '../componentes/mision/mision.component';
import { VisionComponent } from '../componentes/vision/vision.component';
import { LoginComponent } from '../componentes/login/login.component';
import { PaginaPrivadaComponent} from '../componentes/pagina-privada/pagina-privada.component';
import { UsuarioPrivadoComponent} from '../componentes/usuario-privado/usuario-privado.component';
import { ContactPrivadoComponent} from '../componentes/contact-privado/contact-privado.component';

const routes: Routes = [
  {path: "",component:HomeComponent, pathMatch:'full'},
  {path: "mision",component:MisionComponent, pathMatch:'full'},
  {path: "vision",component:VisionComponent, pathMatch:'full'},
  {path: "registro",component:RegistroComponent, pathMatch:'full'},
  {path: "producto",component:ProductComponent, pathMatch:'full'},
  {path: "contactenos",component:ContactenosComponent, pathMatch:'full'},
  {path: "login",component:LoginComponent, pathMatch:'full'},
  {path: "pagina-privada",component:PaginaPrivadaComponent, pathMatch:'full'},
  {path: "usuario-privado",component:UsuarioPrivadoComponent, pathMatch:'full'},
  {path: "contact-privado",component:ContactPrivadoComponent, pathMatch:'full'},
  {path: "**",component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }