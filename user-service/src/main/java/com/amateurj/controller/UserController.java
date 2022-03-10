package com.amateurj.controller;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.mapper.IUserMapper;
import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.repository.entity.User;
import com.amateurj.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    private final IUserMapper iUserMapper;

    @PostMapping("/save")
    public ResponseEntity<String> save (@RequestBody UserRequestDto userDto){
        userService.save(iUserMapper.toUser(userDto));
        return ResponseEntity.ok("Kayıt Başarılı");
    }

    @PostMapping("/update")
    public ResponseEntity<String> update (@RequestBody UserRequestDto userDto){
        userService.save(iUserMapper.toUser(userDto));
        return ResponseEntity.ok("Güncelleme Başarılı");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> delete (@RequestBody UserRequestDto userDto){
        userService.delete(iUserMapper.toUser(userDto));
        return ResponseEntity.ok("Silme İşlemi Başarılı");
    }

    @PostMapping("/finduserbyauthid")
    public ResponseEntity<String> findUserByAuthId(@RequestBody AuthIdDto authIdDto){
        return ResponseEntity.ok(userService.findByAuthId(authIdDto));
    }
}
