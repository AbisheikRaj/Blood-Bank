import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blood_Details } from '../add-blood-details/Blood_Details';
import { Admin } from '../admin-page/Admin';
import { Login_Details } from '../login/Login_Details';
import { Profile_Page } from '../profile-page/profile_page';
import { Register_User } from '../register/Register_User';

@Injectable({
  providedIn: 'root'
})

export class CredentialServiceService {

  constructor(private http : HttpClient) { 

  }

  register_service(register_user : Register_User) : Observable<any> {
    return this.http.post("http://localhost:8080/storeData", register_user, {responseType: 'text'});
  }

  login_service(login : Login_Details) : Observable<any> {
    return this.http.post("http://localhost:8080/getData", login);
  }

  admin_service(admin : Admin) : Observable<any> {
    return this.http.post("http://localhost:8080/get_admin_data", admin);
  }

  blood_details_service(blood_detail : Blood_Details) : Observable<any> {
    return this.http.post("http://localhost:8080/store_blood_data", blood_detail, {responseType : 'text'});
  }

  get_blood_details() : Observable<any> {
    return this.http.get("http://localhost:8080/get_blood_data");
  }

  update_user_details(user_details : Profile_Page) : Observable<any> {
    return this.http.put("http://localhost:8080/updateData", user_details, {responseType : 'text'});
  }
}
