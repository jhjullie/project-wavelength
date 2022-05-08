package com.example.Wavelength.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table (name = "wavelength_Matches")
@ToString
public class Matches {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    public Long ID;

    @Column(name = "From_user_id")
    private Long From_user_id;

    @Column(name = "To_user_id")
    private Long To_user_id;

//    @ManyToOne(cascade = CascadeType.ALL)
//    private User user;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "fk_user")
//    private User user;

}
