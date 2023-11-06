import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductComponent } from './componentes/producto/product.component';
import { RegistroComponent } from './componentes/registro/registro.component';
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
import { HomeComponent } from './componentes/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AboutComponent } from './componentes/home/about/about.component';
import { BannerComponent } from './componentes/home/banner/banner.component';
import { CategoriesComponent } from './componentes/home/categories/categories.component';
import { CtaComponent } from './componentes/home/cta/cta.component';
import { InstagramComponent } from './componentes/home/instagram/instagram.component';
import { ProductsComponent } from './componentes/home/products/products.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderAdminComponent,
    FooterComponent,
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
    CartlistComponent,
    AboutComponent,
    BannerComponent,
    CategoriesComponent,
    CtaComponent,
    InstagramComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [
    UserService, 
    AccountService, 
    ProductService, 
    ContactService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
