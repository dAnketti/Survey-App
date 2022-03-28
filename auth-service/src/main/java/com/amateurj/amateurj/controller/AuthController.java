package com.amateurj.amateurj.controller;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.manager.IUserManager;
import com.amateurj.mapper.IAuthUserMapper;
import com.amateurj.repository.entity.AuthUser;
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
public class AuthController  {

    private final AuthService authService;

    private final IUserManager userManager;

    private final IAuthUserMapper userMapper;

    @PostMapping("/register")
    public ResponseEntity<String> register (@RequestBody @Valid RegisterRequestDto registerDto) {
        AuthUser authUser = authService.saveReturnUser (registerDto);
        String id = userManager.save(userMapper.toUserRequestDto(authUser)).getBody();
        return ResponseEntity.ok (id);
    }

    @PostMapping("/login")
    public ResponseEntity<String > findUser (@RequestBody @Valid LoginRequestDto loginDto) {
        return authService.getUser(loginDto);
    }

    @PostMapping("/save")
    public ResponseEntity<Long > save (@RequestBody @Valid RegisterRequestDto registerDto) {
        AuthUser authUser = authService.saveReturnUser(registerDto);
        return ResponseEntity.ok (authUser.getId());
    }

}
