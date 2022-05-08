package com.example.Wavelength.service;

import com.example.Wavelength.repository.MatchesRepository;
import com.example.Wavelength.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Wavelength.model.User;
import java.util.List;
import java.util.Optional;

@Service
public class Matches_Service {
    private final MatchesRepository matchesRepository;

    @Autowired
    public Matches_Service(MatchesRepository matchesRepo) {
        this.matchesRepository = matchesRepo;
    }

//    public List<User> getMatches() {
//    }
}
