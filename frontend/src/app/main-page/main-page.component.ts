import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blood_Details } from '../add-blood-details/Blood_Details';
import { CredentialServiceService } from '../Service/credential-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  blood_details : Blood_Details[] = [];
  constructor(private service : CredentialServiceService, private router : Router) { 

  }
  ngOnInit() : void {
    if (!localStorage.getItem("profile_data")) {
      this.router.navigate(["/"]);
    }
    this.service.get_blood_details().subscribe(data => {
      this.blood_details = data;
    });
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(["/"]);
  }
}
