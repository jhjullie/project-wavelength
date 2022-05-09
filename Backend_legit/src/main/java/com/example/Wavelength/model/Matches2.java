package com.example.Wavelength.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table (name = "wavelength_Matches")
public class Matches2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "Matches2_ID")
    public Long ID;

    @OneToOne
    @MapsId
    @JoinColumn (name = "User_ID")
    private User user;

    @Column(name ="From")
    private String match2_from;

    @Column(name = "To")
    private String match2_to;

    public Matches2() {

    }

    public Matches2(String from, String to){
        this.match2_from = from;
        this.match2_to = to;
    }


}
