package com.amateurj.service;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.response.AuthIdDto;
import com.amateurj.dto.response.UserDto;
import com.amateurj.exception.AuthFailedException;
import com.amateurj.manager.IUserManager;
import com.amateurj.mapper.IAuthUserMapper;
import com.amateurj.repository.IAuthUserRepository;
import com.amateurj.repository.entity.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IAuthUserRepository authUserRepository;

    private final IAuthUserMapper authUserMapper;

    private final IUserManager userManager;

    public void save ( AuthUser authUser) {
        authUserRepository.save (authUser);
    }

    public AuthUser saveReturnUser(RegisterRequestDto dto){
        AuthUser authUser = authUserMapper.registerToUser(dto);
        return authUserRepository.save(authUser);
    }

    public void update ( AuthUser authUser) {
        authUserRepository.save (authUser);
    }

    public void delete ( AuthUser authUser) {
        authUserRepository.delete (authUser);
    }

    public List<AuthUser> findAll () {

        return authUserRepository.findAll ();
    }

    public ResponseEntity<UserDto> getUser(LoginRequestDto loginDto){
        Optional<AuthUser> authUser = authUserRepository.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
        if (authUser.isPresent()){
            AuthIdDto authIdDto = new AuthIdDto();
            authIdDto.setAuthId(authUser.get().getId());
            UserDto response = userManager.findUserByAuthId(authIdDto).getBody();
            return ResponseEntity.ok(response);
        }
        else {
            throw new AuthFailedException("Kullanıcı adı veya şifre hatalı");
        }
    }
}
