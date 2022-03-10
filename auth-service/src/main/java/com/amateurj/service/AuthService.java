package com.amateurj.service;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.mapper.IUserMapper;
import com.amateurj.repository.IAuthUserRepository;
import com.amateurj.repository.entity.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IAuthUserRepository iAuthUserRepository;

    private final IUserMapper iUserMapper;

    public void save ( AuthUser authUser) {
        iAuthUserRepository.save (authUser);
    }

    public AuthUser saveReturnUser(RegisterRequestDto dto){
        AuthUser authUser = iUserMapper.registerToUser(dto);
        return iAuthUserRepository.save(authUser);
    }

    public void update ( AuthUser authUser) {
        iAuthUserRepository.save (authUser);
    }

    public void delete ( AuthUser authUser) {
        iAuthUserRepository.delete (authUser);
    }

    public List<AuthUser> findAll () {

        return iAuthUserRepository.findAll ();
    }

    public void findByEmailAndPassword (LoginRequestDto loginRequestDto){
        iAuthUserRepository.findByEmailAndPassword(loginRequestDto.getEmail(), loginRequestDto.getPassword());
    }


}
