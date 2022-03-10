package com.amateurj.controller;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController  {

    private final AuthService authService ;

    @PostMapping("/register")
    public ResponseEntity<String> saveUser (@RequestBody @Valid RegisterRequestDto registerDto) {

        authService.saveReturnUser (registerDto);
        return ResponseEntity.ok ( "Kayıt Başarılı" );
    }

    @PostMapping("/login")
    public ResponseEntity<String> findUser (@RequestBody @Valid LoginRequestDto loginDto) {
        authService.findByEmailAndPassword (loginDto);
        return ResponseEntity.ok ( "Giriş Başarılı" );
    }

}
