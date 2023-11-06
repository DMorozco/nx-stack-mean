import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { ProductComponent } from './componentes/producto/product.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './routing/app.component';
import { UserService } from './services/user.service';
import { PaginaPrivadaComponent } from './componentes/pagina-privada/pagina-privada.component';
import { UsuarioPrivadoComponent } from './componentes/usuario-privado/usuario-privado.component';
import { AccountService } from './services/account.service';
import { ProductService } from './services/product.service';
import { ContactPrivadoComponent } from './componentes/contact-privado/contact-privado.component';
import { ContactService } from './services/contact.service';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MobilemenuComponent } from './shared/mobilemenu/mobilemenu.component';
import { SearchComponent } from './shared/search/search.component';
import { CartlistComponent } from './shared/cartlist/cartlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderAdminComponent,
    FooterComponent,
    MisionComponent,
    VisionComponent,
    ContactenosComponent,
    HomeComponent,
    RegistroComponent,
    ProductComponent,
    LoginComponent,
    PaginaPrivadaComponent,
    UsuarioPrivadoComponent,
    ContactPrivadoComponent,
    MenuComponent,
    MobilemenuComponent,
    SearchComponent,
    CartlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AccountService, ProductService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
