package com.amateurj.service;

import com.amateurj.repository.IUserRepository;
import com.amateurj.repository.entity.Auth;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IUserRepository iUserRepository ;

    public void save ( Auth auth) {
        iUserRepository.save ( auth );
    }

    public void update ( Auth auth) {
        iUserRepository.save ( auth );
    }

    public void delete ( Auth auth) {
        iUserRepository.delete ( auth );
    }

    public List<Auth> findAll () {

        return iUserRepository.findAll ();
    }


}
