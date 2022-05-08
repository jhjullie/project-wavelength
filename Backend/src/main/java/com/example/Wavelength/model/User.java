package com.example.Wavelength.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table (name = "wavelength_User")
@ToString
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private static Long ID;

    @Column(name = "User_firstname")
    private String first_name;

//    @Column(name = "User_lastname")
//    private String last_name;

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

//    @OneToMany(mappedBy = "user")
//    private List<Matches> items = new ArrayList<>();

//    @OneToMany(mappedBy="user")
//    private Set<Matches> matches;

//    @OneToMany(targetEntity=Matches.class,cascade = CascadeType.ALL,
//            fetch = FetchType.LAZY, orphanRemoval = true)
//    @JoinColumn(name = "userId", referencedColumnName = "ID")
//    private List<Matches> matches = new ArrayList<>();

    public User(){

    }

    public User(String first_name, String gender, String phonenum,
                String email, Integer age, String password, String genre) {
        this.first_name = first_name;
        this.gender = gender;
        this.phonenum = phonenum;
        this.email = email;
        this.age = age;
        this.password = password;
        this.genre = genre;
    }


}
