package com.example.Wavelength.model;

import com.example.Wavelength.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Configuration
public class UserExample {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
//        Optional<Vendor> vendorOptional = modelRepository.findVendorByName("example");
        return args -> {
            User newEntry = new User(
                    "Tiffany",
                    "Female",
                    "510-990-7502",
                    "tiffanyyu@usc.edu",
                    18,
                    "tiffanyPassword",
                    "RnB"
            );
            User updatedEntry = new User(
                    "pete",
                    "Male",
                    "520-990-7502",
                    "pete@usc.edu",
                    18,
                    "petePassword",
                    "Pop"
            );
            userRepository.saveAll(
                    List.of(newEntry, updatedEntry)
            );
        };
    }
}