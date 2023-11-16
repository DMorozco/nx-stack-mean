import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsAdminComponent } from '../componentes/internal/ingredientsadmin/ingredientsadmin.component';
import { ProductsAdminComponent } from '../componentes/internal/productsadmin/productsadmin.component';
import { CartComponent } from '../componentes/public/cart/cart.component';
import { CheckoutComponent } from '../componentes/public/checkout/checkout.component';
import { HomeComponent } from '../componentes/public/home/home.component';
import { LoginComponent } from '../componentes/public/login/login.component';
import { RegisterComponent } from '../componentes/public/register/register.component';
import { MenuOrderComponent } from '../componentes/public/menu-order/menu-order.component';

const routes: Routes = [
  {path: "",component:HomeComponent, pathMatch:'full'},
  {path: "login",component:LoginComponent, pathMatch:'full'},
  {path: "register",component:RegisterComponent,pathMatch:'full'},
  {path: "cart",component:CartComponent,pathMatch:'full'},
  {path: "checkout",component:CheckoutComponent,pathMatch:'full'},
  {path: "products",component:ProductsAdminComponent,pathMatch:'full'},
  {path: "ingredients",component:IngredientsAdminComponent,pathMatch:'full'},
  {path: "menu-order/:id",component:MenuOrderComponent,pathMatch:'full'},
  {path: "**",component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }