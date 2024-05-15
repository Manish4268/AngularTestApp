import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from "./products/products.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MainService } from './appService';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenubarModule, TabMenuModule, UserDetailsComponent, ProductsComponent],
    providers: [MainService]
})
export class AppComponent implements OnInit{
  [x: string]: any;
  title = 'Manish';
  items: MenuItem[] | undefined;
  userDetailsUrl: string ='';
  producturl: string ='';
  productVisible: boolean =true;
  ngOnInit() {
    this.items = [
        {
           label: 'Dashboard', 
           icon: 'pi pi-home',
           command: event => {
            this.activateDashboard(event);
          }
          },
        { label: 'Products',
         icon: 'pi pi-list',
         command: event => {
          this.activateProducts(event);
        }}
    ]
}

constructor(private mainService: MainService,private router: Router) { }

activateDashboard(event: MenuItemCommandEvent) 
{

    this.userDetailsUrl = 'https://fakestoreapi.com/users';
    this.router.navigate(['/UserDetails'],{ queryParams: { id: this.userDetailsUrl } });
}
activateProducts(event: MenuItemCommandEvent) 
{

  this.producturl = 'https://fakestoreapi.com/products';
  this.router.navigate(['/Products'],{ queryParams: { id: this.producturl } });
}

}
