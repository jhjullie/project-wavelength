package com.example.Wavelength.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
@Table (name = "wavelength_User")
@ToString
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    public Long ID;

    @Column(name = "User_name")
    private String name;

    @Column(name = "User_gender")
    private String gender;

    @Column(name = "User_phonenum")
    private String phonenum;

    @Column(name = "User_email")
    private String email;

    @Column(name = "User_age")
    private Integer age;

    @Column(name = "User_password")
    private String password;

    @Column(name = "User_genre")
    private String genre;


    public User(){

    }

    public User(String first_name, String gender, String phonenum, String email, Integer age, String password, String genre) {
        this.name = first_name;
        this.gender = gender;
        this.phonenum = phonenum;
        this.email = email;
        this.age = age;
        this.password = password;
        this.genre = genre;
    }


}
