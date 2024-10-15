package com.pvanquochuy.projectmanagementsystem.controller;

import com.pvanquochuy.projectmanagementsystem.repository.UserRepository;
import com.pvanquochuy.projectmanagementsystem.service.CustomUserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsImpl customUserDetails;

}
