import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialServiceService } from '../Service/credential-service.service';
import { Admin } from './Admin';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  message : string | undefined;
  admin_form : FormGroup = new FormGroup({});
  admin_user : Admin = new Admin();
  constructor(fb : FormBuilder, private admin_service : CredentialServiceService, private router : Router) { 
    this.admin_form = fb.group({
      email : ["", Validators.required],
      password : ["", Validators.required]
    });
  }

  ngOnInit(): void {
      localStorage.clear();
  }

  admin_form_details() {
    this.admin_user.email = this.admin_form.value["email"];
    this.admin_user.password = this.admin_form.value["password"];
    this.admin_service.admin_service(this.admin_user).subscribe(data => {
      if (this.admin_user.email === data.email && this.admin_user.password === data.password) {
        localStorage.setItem("admin_details", data);
        this.router.navigate(["/admin_page"]);
      } else {
        this.message = "Invalid Credentials";
      }
    });

    this.admin_form.reset();
  }

  click_notification() {
    this.message = undefined;
  }

}
