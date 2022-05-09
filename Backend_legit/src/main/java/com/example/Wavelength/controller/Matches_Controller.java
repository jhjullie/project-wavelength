package com.example.Wavelength.controller;

import com.example.Wavelength.service.Matches_Service;
import com.example.Wavelength.service.User_Service;
import com.example.Wavelength.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Wavelength.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api/v1/Matches")
public class Matches_Controller {
    private final Matches_Service matchesService;

    @Autowired
    public Matches_Controller (Matches_Service matchesservice){
        this.matchesService= matchesservice;
    }
}
