package com.example.Wavelength.repository;

import com.example.Wavelength.model.Matches;
import com.example.Wavelength.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MatchesRepository extends JpaRepository<Matches, Long> {

    @Query("SELECT s, u FROM Matches s, Matches2 u WHERE s.match_from=?1 AND s.match_from=u.match2_to AND u.match2_from = s.match_to ")
    List<String> returnMatches(String email);
}
