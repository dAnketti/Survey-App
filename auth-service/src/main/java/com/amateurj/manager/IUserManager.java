package com.amateurj.manager;

import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.response.AuthIdDto;
import com.amateurj.dto.response.UserDto;
import com.amateurj.dto.response.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;

@FeignClient(url = "localhost:8082/user", name = "userFeignClient", decode404 = true)
public interface IUserManager {

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody UserRequestDto userRequestDto);

    @PostMapping("/finduserbyauthid")
    public ResponseEntity<UserDto> findUserByAuthId(@RequestBody AuthIdDto authIdDto);

}
