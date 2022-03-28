package com.amateurj.amateurj.manager;

import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.response.AuthIdDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(url = "localhost:8082/users/admin", name = "userFeignClient", decode404 = true)
public interface IUserManager {

    @PostMapping("/save")
    ResponseEntity<String> save(@RequestBody UserRequestDto userRequestDto);

    @PostMapping("/finduserbyauthid")
    ResponseEntity<String> findUserByAuthId(@RequestBody AuthIdDto authIdDto);

}
