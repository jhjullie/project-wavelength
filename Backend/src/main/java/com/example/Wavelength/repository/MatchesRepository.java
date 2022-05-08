package com.example.Wavelength.repository;

import com.example.Wavelength.model.Matches;
import com.example.Wavelength.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatchesRepository extends JpaRepository<Matches, Long> {

    @Query("SELECT s.first_name, s.last_name FROM User s WHERE  ")
    String findxmatches(String name);
}
