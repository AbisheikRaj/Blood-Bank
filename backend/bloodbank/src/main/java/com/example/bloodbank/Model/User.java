package com.example.bloodbank.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

  @Id
  private String email;
  private String name;
  private String password;
  private String gender;
  private String address;
  private String mobile_number;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getMobile_number() {
    return mobile_number;
  }

  public void setMobile_number(String mobile_number) {
    this.mobile_number = mobile_number;
  }

  @Override
  public String toString() {
    return "User{" +
      "email='" + email + '\'' +
      ", name='" + name + '\'' +
      ", password='" + password + '\'' +
      ", gender='" + gender + '\'' +
      ", address='" + address + '\'' +
      ", mobile_number='" + mobile_number + '\'' +
      '}';
  }
}
