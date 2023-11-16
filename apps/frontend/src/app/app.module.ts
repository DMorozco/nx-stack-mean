import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IngredientsAdminComponent } from './componentes/internal/ingredientsadmin/ingredientsadmin.component';
import { IngredientscontentComponent } from './componentes/internal/ingredientsadmin/ingredientscontent/ingredientscontent.component';
import { ProductsAdminComponent } from './componentes/internal/productsadmin/productsadmin.component';
import { ProductscontentComponent } from './componentes/internal/productsadmin/productscontent/productscontent.component';
import { CartComponent } from './componentes/public/cart/cart.component';
import { CartContentComponent } from './componentes/public/cart/content/cartcontent.component';
import { CheckoutComponent } from './componentes/public/checkout/checkout.component';
import { CheckoutContentComponent } from './componentes/public/checkout/content/checkoutcontent.component';
import { AboutComponent } from './componentes/public/home/about/about.component';
import { BannerComponent } from './componentes/public/home/banner/banner.component';
import { CategoriesComponent } from './componentes/public/home/categories/categories.component';
import { CtaComponent } from './componentes/public/home/cta/cta.component';
import { HomeComponent } from './componentes/public/home/home.component';
import { InstagramComponent } from './componentes/public/home/instagram/instagram.component';
import { ProductsComponent } from './componentes/public/home/products/products.component';
import { LoginComponent } from './componentes/public/login/login.component';
import { RegisterComponent } from './componentes/public/register/register.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './routing/app.component';
import { AccountService } from './services/account.service';
import { ContactService } from './services/contact.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { CartlistComponent } from './shared/cartlist/cartlist.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MobilemenuComponent } from './shared/mobilemenu/mobilemenu.component';
import { SearchComponent } from './shared/search/search.component';
import { SeparatorComponent } from './shared/separator/separator.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MenuOrderComponent } from './componentes/public/menu-order/menu-order.component';
import { MenuOrderContentComponent } from './componentes/public/menu-order/menu-order-content/menu-order-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    MenuComponent,
    MobilemenuComponent,
    SearchComponent,
    CartlistComponent,
    AboutComponent,
    BannerComponent,
    CategoriesComponent,
    CtaComponent,
    InstagramComponent,
    ProductsComponent,
    ProductsAdminComponent,
    CartContentComponent,
    CheckoutContentComponent,
    SeparatorComponent,
    ProductscontentComponent,
    IngredientsAdminComponent,
    IngredientscontentComponent,
    MenuOrderComponent,
    MenuOrderContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    CommonModule,
    RouterModule,
    NgbModule,
    ScrollingModule
  ],
  providers: [
    UserService, 
    AccountService, 
    ProductService, 
    ContactService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
