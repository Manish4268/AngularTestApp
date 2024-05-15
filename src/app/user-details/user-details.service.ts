import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    }
    city: string;
    street: string;
    number: number;
    zipcode: string;
  }
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  }
  phone: string;
  __v: number;
} 

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor(private router: HttpClient) { }

  fetchData(url: string) {
      return this.router.get<User[]>(url);
  }
}