package com.example.Wavelength.service;
import com.example.Wavelength.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Wavelength.model.User;
import java.util.List;
import java.util.Optional;

@Service
public class User_Service {
    private final UserRepository userRepository;

    @Autowired
    public User_Service(UserRepository userRepo){
        this.userRepository = userRepo;
    }

    //getters
    public List<User> getUsers() {
        return userRepository.findAll();
    }

//    public String getUserFirstName() {
//        return userRepository.findFirstName();
//    }


    public void addUsers(User user) {
        Optional<User> userOptional= userRepository.findByEmailOptional(user.getEmail());
        if(userOptional.isPresent())
        {
            throw new IllegalStateException("Email taken");
        }
        System.out.println(user.getEmail());
        userRepository.save(user);
    }

    public void getGenre() {
        return userRepository
    }


    public boolean authenticate (String email, String pwd) {
        User user = userRepository.findByEmail(email);
        if(user != null) {
            if (pwd == user.getPassword()) {
                return true;
            }
        }

        return false;
    }

//    public void deleteUsers(String email) {
//        Boolean exist = userRepository.userEmailExists(email);
//        if (!exist)
//        {
//            throw new IllegalStateException("vendor with email" + email + "not found");
//        }
//        else
//        {
//            userRepository.deleteById(userRepository.findUserIdByEmail(email));
//        }
//    }
}