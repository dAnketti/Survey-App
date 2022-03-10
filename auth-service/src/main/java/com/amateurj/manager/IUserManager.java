package com.amateurj.manager;

import com.amateurj.dto.request.FindByAuthIdDto;
import com.amateurj.dto.request.RegisterRequestDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@FeignClient(url = "localhost:8082", name = "userFeignClient", decode404 = true)
public interface IUserManager {

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody RegisterRequestDto dto);

    @PostMapping("/findByAuthId")
    public ResponseEntity<String> findByAuthId(@RequestBody @Valid FindByAuthIdDto dto);
}
