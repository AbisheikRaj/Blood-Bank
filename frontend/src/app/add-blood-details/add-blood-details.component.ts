import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialServiceService } from '../Service/credential-service.service';
import { Blood_Details } from './Blood_Details';

@Component({
  selector: 'app-add-blood-details',
  templateUrl: './add-blood-details.component.html',
  styleUrls: ['./add-blood-details.component.css']
})
export class AddBloodDetailsComponent implements OnInit {

  message : string | undefined;
  blood_details_form : FormGroup = new FormGroup({});
  blood_detail : Blood_Details = new Blood_Details();

  constructor(fb : FormBuilder, private blood_service : CredentialServiceService) { 
    this.blood_details_form = fb.group({
        name : ["", Validators.required],
        age : ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
        blood_group : ["", Validators.required],
        gender : ["", Validators.required],
        address : ["", Validators.required],
        mobile_number : ["", [Validators.required, Validators.pattern("^([0-9]){10}$")]],
        alternate_mobile_number : ["", [Validators.required, Validators.pattern("^([0-9]){10}$")]]
    });
  }

  get controls() {
    return this.blood_details_form.controls;
  }

  ngOnInit(): void {
    
  }

  blood_details() {
    this.blood_detail = new Blood_Details();
    this.blood_detail.name = this.blood_details_form.value["name"];
    this.blood_detail.age = this.blood_details_form.value["age"];
    this.blood_detail.address = this.blood_details_form.value["address"];
    this.blood_detail.blood_type = this.blood_details_form.value["blood_group"];
    this.blood_detail.gender = this.blood_details_form.value["gender"];
    this.blood_detail.mobile_number = this.blood_details_form.value["mobile_number"];
    this.blood_detail.alternate_mobile_number = this.blood_details_form.value["alternate_mobile_number"];
    this.blood_service.blood_details_service(this.blood_detail).subscribe(data => this.message = data);
    this.blood_details_form.reset();
  }

  click_notification() {
    this.message = undefined;
  }
}
