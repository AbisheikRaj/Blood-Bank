package com.example.bloodbank.Model;

public class Login_User {

  private String email;
  private String password;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return "Login_User{" +
      "email='" + email + '\'' +
      ", password='" + password + '\'' +
      '}';
  }
}
