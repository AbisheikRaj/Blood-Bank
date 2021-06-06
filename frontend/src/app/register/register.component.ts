import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialServiceService } from '../Service/credential-service.service';
import { Register_User } from './Register_User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message : string | undefined;
  checked : boolean = false;
  register_form : FormGroup = new FormGroup({});

  register_user : Register_User = new Register_User();
  
  constructor(fb : FormBuilder, private register_service : CredentialServiceService) {
    this.register_form = fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      gender : ["", Validators.required],
      address : ["", Validators.required],
      mobile_number : ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      terms_condition : ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get controls() {
    return this.register_form.controls;
  }

  submit_register_form() {
    this.register_user.name = this.register_form.value["name"];
    this.register_user.email = this.register_form.value["email"];
    this.register_user.password = this.register_form.value["password"];
    this.register_user.gender = this.register_form.value["gender"];
    this.register_user.address = this.register_form.value["address"];
    this.register_user.mobile_number = this.register_form.value["mobile_number"];

    this.register_service.register_service(this.register_user).subscribe(data => {    
      this.message = data;
    });
    this.register_form.reset();
  }

  click_notification() {
    this.message = undefined;
  }
}
