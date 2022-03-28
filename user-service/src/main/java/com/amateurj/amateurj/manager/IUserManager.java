package com.amateurj.amateurj.manager;

import com.amateurj.dto.request.RegisterRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@FeignClient(url = "localhost:8080/auth", name = "userFeignClient", decode404 = true)
public interface IUserManager {

    @PostMapping("/save")
    ResponseEntity<Long> save (@RequestBody @Valid RegisterRequestDto registerDto);
}
