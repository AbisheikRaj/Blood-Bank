import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register_User } from '../register/Register_User';
import { CredentialServiceService } from '../Service/credential-service.service';
import { Profile_Page } from './profile_page';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  message : string | undefined;
  checked : boolean = false;
  profile_form : FormGroup = new FormGroup({});
  profile_name : string | undefined;
  profile_email : string | undefined;
  profile_address : string | undefined;
  profile_gender : string | undefined;
  profile_password : string | undefined;
  profile_mobile_number : string | undefined;

  profile_user : Profile_Page = new Profile_Page();

  user_details : Register_User | undefined;

  constructor(fb : FormBuilder, private service : CredentialServiceService) {
    this.user_details = JSON.parse(localStorage.getItem("profile_data") || '{}');

    this.profile_name = this.user_details?.name;
    this.profile_email = this.user_details?.email
    this.profile_address = this.user_details?.address;
    this.profile_gender = this.user_details?.gender
    this.profile_mobile_number = this.user_details?.mobile_number;
    this.profile_password = this.user_details?.password;


    this.profile_form = fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      gender : ["", Validators.required],
      address : ["", Validators.required],
      mobile_number : ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    });
 }

  get controls() {
    return this.profile_form.controls;
  }

  ngOnInit(): void {
  }

  submit_profile_form() {
      this.profile_user.name = this.profile_form.value["name"];
      this.profile_user.email = this.profile_form.value["email"];
      this.profile_user.gender = this.profile_form.value["gender"];
      this.profile_user.password = this.profile_form.value["password"];
      this.profile_user.address = this.profile_form.value["address"];
      this.profile_user.mobile_number = this.profile_form.value["mobile_number"];
      this.service.update_user_details(this.profile_user).subscribe(data => this.message = data);
  } 

  click_notification() {
    this.message = undefined;
  }
}
