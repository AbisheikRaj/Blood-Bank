package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.Login_User;
import com.example.bloodbank.Model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

  @PostMapping("/storeData")
  public String store_data(@RequestBody User user_details) {
    Configuration con = new Configuration().configure().addAnnotatedClass(User.class);
    SessionFactory sf = con.buildSessionFactory();
    Session session = sf.openSession();
    Transaction transaction = session.beginTransaction();
    session.save(user_details);
    transaction.commit();
    return "User Details are registered Successfully.";
  }

  @PostMapping("/getData")
  public User get_data(@RequestBody Login_User login_user) {
      User user = new User();
      String email = login_user.getEmail();
      Configuration con = new Configuration().configure().addAnnotatedClass(User.class);
      SessionFactory sf = con.buildSessionFactory();
      Session session = sf.openSession();
      Transaction transaction = session.beginTransaction();
      user = session.get(User.class, email);
      if (user != null) {
          return user;
      } else {
        return null;
      }
  }

  @PutMapping("/updateData")
  public String update_data(@RequestBody User user_details) {
    User user = new User();
    Configuration con = new Configuration().configure().addAnnotatedClass(User.class);
    SessionFactory sf = con.buildSessionFactory();
    Session session = sf.openSession();
    Transaction transaction = session.beginTransaction();
    try {
      session.update(user_details);
    } catch(Exception e) {
      return null;
    }
    transaction.commit();
    return "Data are updated successfully";
  }
}
