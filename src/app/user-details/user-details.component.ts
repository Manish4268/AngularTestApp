import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainService, User } from './user-details.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})


export class UserDetailsComponent implements OnInit {

  url:string| null = '';

  listOfUsers: User[] = [];
  mainService: MainService;
  
  constructor(private route: ActivatedRoute, mainService: MainService){
    this.url = this.route.snapshot.queryParamMap.get('id');
    this.mainService =mainService;
  }

  ngOnInit(): void {
    if(this.url != null)
    {
      this.mainService.fetchData(this.url).subscribe((response: User[]) => {
        this.listOfUsers = response;
      });
    }
  }

}
