package com.example.bloodbank.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class BloodGroup {

  private String name;
  private String age;
  private String gender;
  private String address;
  private String blood_type;

  @Id
  private String mobile_number;
  private String alternate_mobile_number;
  private LocalDate date;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAge() {
    return age;
  }

  public void setAge(String age) {
    this.age = age;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getBlood_type() {
    return blood_type;
  }

  public void setBlood_type(String blood_type) {
    this.blood_type = blood_type;
  }

  public String getMobile_number() {
    return mobile_number;
  }

  public void setMobile_number(String mobile_number) {
    this.mobile_number = mobile_number;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getAlternate_mobile_number() {
    return alternate_mobile_number;
  }

  public void setAlternate_mobile_number(String alternate_mobile_number) {
    this.alternate_mobile_number = alternate_mobile_number;
  }

  @Override
  public String toString() {
    return "BloodGroup{" +
      ", name='" + name + '\'' +
      ", age='" + age + '\'' +
      ", gender='" + gender + '\'' +
      ", address='" + address + '\'' +
      ", blood_type='" + blood_type + '\'' +
      ", mobile_number='" + mobile_number + '\'' +
      ", alternate_mobile_number='" + alternate_mobile_number + '\'' +
      ", date='" + date + '\'' +
      '}';
  }
}
