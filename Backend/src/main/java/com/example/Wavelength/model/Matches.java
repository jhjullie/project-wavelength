package com.example.Wavelength.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table (name = "wavelength_Matches")
public class Matches {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "Matches_ID")
    public Long ID;

//    @OneToOne
//    @JoinColumn (name = "User_ID", nullable = false)
//    @MapsId
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "ID")
    private User user;

    @Column(name ="From")
    private String match_from;

    @Column(name = "To")
    private String match_to;

    public Matches() {

    }

    public Matches(String from, String to){
        this.match_from = from;
        this.match_to = to;
    }


}
