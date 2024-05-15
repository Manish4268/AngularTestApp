import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MainService, ProductDetails } from './product-details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [TableModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  mainService:any;
  num : string| null = '';
  ProductDetails: ProductDetails[] | undefined;

constructor(private route: ActivatedRoute, mainService: MainService){
  this.num = this.route.snapshot.queryParamMap.get('id');
  this.mainService =mainService;
}


  ngOnInit() 
  {
    this.mainService.fetchData("https://fakestoreapi.com/products/" + this.num).subscribe((response: ProductDetails[]) => {
      this.ProductDetails = response;
    });
  }

}
