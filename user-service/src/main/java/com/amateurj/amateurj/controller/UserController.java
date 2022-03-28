package com.amateurj.amateurj.controller;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.dto.request.BranchRequestDto;
import com.amateurj.dto.request.ManagerRequestDto;
import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.mapper.IUserMapper;
import com.amateurj.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/admin")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final IUserMapper userMapper;

    @PostMapping("/save")
    public ResponseEntity<String> save (@RequestBody UserRequestDto userDto){
        userService.save(userMapper.toUser(userDto));
        return ResponseEntity.ok("Kayıt Başarılı");
    }

    @PutMapping("/update")
    public ResponseEntity<String> update (@RequestBody UserRequestDto userDto){
        userService.update(userMapper.toUser(userDto));
        return ResponseEntity.ok("Güncelleme Başarılı");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete (@RequestBody UserRequestDto userDto){ //ToDo UserRequestDto id ile değiştirilecek
        userService.delete(userMapper.toUser(userDto));
        return ResponseEntity.ok("Silme İşlemi Başarılı");
    }

    @PostMapping("/finduserbyauthid")
    public ResponseEntity<String> findUserByAuthId(@RequestBody AuthIdDto authIdDto){
        return ResponseEntity.ok(userService.findByAuthId(authIdDto));
    }

    @PostMapping("/findall")
    public ResponseEntity<List<UserResponseDto>> findAll(){
        return ResponseEntity.ok(userService.findAll());
    }

    @PostMapping("/addmanager")
    public ResponseEntity<String> addNewManager(@RequestBody ManagerRequestDto requestDto){
        return ResponseEntity.ok(userService.addNewManager(requestDto));
    }

    @PostMapping("/addbranch")
    public ResponseEntity<String> addNewBranch(@RequestBody BranchRequestDto requestDto){
        return ResponseEntity.ok(userService.addNewBranch(requestDto));
    }
}
