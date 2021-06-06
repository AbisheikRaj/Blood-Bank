import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialServiceService } from '../Service/credential-service.service';
import { Login_Details } from './Login_Details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form : FormGroup = new FormGroup({});
  login : Login_Details = new Login_Details();
  value : string | undefined;
  message : string | undefined;
  constructor(fb : FormBuilder, private login_service : CredentialServiceService, private router : Router) { 
    this.login_form = fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get controls() {
    return this.login_form.controls;
  }

  login_details() {
    if(this.login_form.valid) {
        this.login.email = this.login_form.value["email"];
        this.login.password = this.login_form.value["password"];
        this.login_service.login_service(this.login).subscribe(data => {
          if (this.login.email === data.email && this.login.password === data.password) {
            localStorage.setItem("profile_data", JSON.stringify(data));
            this.router.navigate(['/main']);
          } else {
            this.message = "Invalid Credentials";
          }
        });
      this.login_form.reset();
    } 
  }

  click_notification() {
    this.message = undefined;
  }

}
