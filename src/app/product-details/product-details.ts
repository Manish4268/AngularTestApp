import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface ProductDetails {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

@Injectable({
    providedIn: "root"
  })
  export class MainService {
    constructor(private router: HttpClient) { }
  
    fetchData(url: string) {
        return this.router.get<ProductDetails[]>(url);
    }
  }