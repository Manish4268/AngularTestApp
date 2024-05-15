import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: 'component1', component: AppComponent },
  { path: 'component2', component: ProductDetailsComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'UserDetails', component: UserDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
