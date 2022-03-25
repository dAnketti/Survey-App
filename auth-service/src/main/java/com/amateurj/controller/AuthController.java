package com.amateurj.controller;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.response.AuthIdDto;
import com.amateurj.dto.response.UserDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.manager.IUserManager;
import com.amateurj.mapper.IAuthUserMapper;
import com.amateurj.repository.entity.AuthUser;
import com.amateurj.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController  {

    private final AuthService authService;

    private final IUserManager userManager;

    private final IAuthUserMapper userMapper;

    @PostMapping("/register")
    public ResponseEntity<String> saveUser (@RequestBody @Valid RegisterRequestDto registerDto) {
        AuthUser authUser = authService.saveReturnUser (registerDto);
        String id = userManager.save(userMapper.toUserRequestDto(authUser)).getBody();

        return ResponseEntity.ok (id);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> findUser (@RequestBody @Valid LoginRequestDto loginDto) {
        return authService.getUser(loginDto);
    }

}
