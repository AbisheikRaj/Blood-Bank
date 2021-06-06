import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blood_Details } from '../add-blood-details/Blood_Details';
import { CredentialServiceService } from '../Service/credential-service.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  blood_details : Blood_Details[] = [];

  constructor(private admin_service : CredentialServiceService, private router : Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("admin_details")) {
      this.router.navigate(["/admin"]);
    }
    this.admin_service.get_blood_details().subscribe(data => {
      this.blood_details = data;
    });
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(["/admin"]);
  }

}
