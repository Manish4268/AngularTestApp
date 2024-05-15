import { Component, Input } from '@angular/core';
import { MainService, Product } from './products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  url: string | null = '';

  listOfProduct: Product[] = [];
  


  constructor(private mainService: MainService,private route: ActivatedRoute,private router: Router) 
  {
    this.url = this.route.snapshot.queryParamMap.get('id');
    this.mainService =mainService;

  }

  ngOnInit(): void 
  {
    if(this.url != null)
    {
      this.mainService.fetchData(this.url).subscribe((response: Product[]) => {
          this.listOfProduct = response;
      });

    }
    
  }
  showdetails(value : number)
  {
    this.router.navigate(['/component2'],{ queryParams: { id: value } });
  }

  







}
