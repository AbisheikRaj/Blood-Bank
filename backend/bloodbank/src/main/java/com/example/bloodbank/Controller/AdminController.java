package com.example.bloodbank.Controller;

import com.example.bloodbank.Model.Admin;
import com.example.bloodbank.Model.BloodGroup;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@RestController
public class AdminController {

  @PostMapping("/get_admin_data")
  public Admin get_admin_data(@RequestBody Admin admin_details) {
    Admin admin = new Admin();
    Configuration con = new Configuration().configure().addAnnotatedClass(Admin.class);
    SessionFactory sf = con.buildSessionFactory();
    Session session = sf.openSession();
    Transaction transaction = session.beginTransaction();
    admin = session.get(Admin.class, admin_details.getEmail());
    if (admin != null) {
      return admin;
    } else {
      return null;
    }
  }

  @PostMapping("/store_blood_data")
  public String store_blood_data(@RequestBody BloodGroup blood_details) {
    BloodGroup blood = new BloodGroup();
    blood.setName(blood_details.getName());
    blood.setAddress(blood_details.getAddress());
    blood.setBlood_type(blood_details.getBlood_type());
    blood.setGender(blood_details.getGender());
    blood.setMobile_number(blood_details.getMobile_number());
    blood.setAlternate_mobile_number(blood_details.getAlternate_mobile_number());
    blood.setAge(blood_details.getAge());
    blood.setDate(LocalDate.now());
    Configuration con = new Configuration().configure().addAnnotatedClass(BloodGroup.class);
    SessionFactory sf = con.buildSessionFactory();
    Session session = sf.openSession();
    Transaction transaction = session.beginTransaction();
    try {
      session.save(blood);
      transaction.commit();
    } catch(Exception e) {
      return "Data are already Existed";
    }
    return "Data are stored Successfully";
  }

  @GetMapping("/get_blood_data")
  public List<BloodGroup> get_blood_data() {
    Configuration con = new Configuration().configure().addAnnotatedClass(BloodGroup.class);
    SessionFactory sf = con.buildSessionFactory();
    Session session = sf.openSession();
    Transaction transaction = session.beginTransaction();
    List<BloodGroup> blood_group = new ArrayList<>();
    List<BloodGroup> blood_details = session.createQuery("select a from BloodGroup a", BloodGroup.class).getResultList();
    for (BloodGroup blood :blood_details) {
      LocalDate date = blood.getDate();
      LocalDate temp_date = date.plusDays(9);
      if (temp_date.equals(LocalDate.now())) {
        session.delete(blood);
      } else {
          blood_group.add(blood);
      }
    }
    transaction.commit();
    return blood_group;
  }
}
