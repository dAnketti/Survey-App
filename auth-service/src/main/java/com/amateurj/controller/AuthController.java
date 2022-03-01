package com.amateurj.controller;

import com.amateurj.repository.entity.Auth;
import com.amateurj.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController  {

    private final AuthService authService ;

    @PostMapping("/register")
    public ResponseEntity<Void> saveAuth (Auth auth) {

        authService.save ( auth );
        return ResponseEntity.ok (  ).build ();
    }

}
