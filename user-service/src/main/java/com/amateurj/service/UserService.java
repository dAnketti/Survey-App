package com.amateurj.service;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.mapper.IUserMapper;
import com.amateurj.repository.IUserRepository;
import com.amateurj.repository.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUserRepository userRepository;

    private final IUserMapper userMapper;

    public void save(User user){
        userRepository.save(user);
    }
    public void update(User user){
        userRepository.save(user);
    }
    public void delete(User user){
        userRepository.delete(user);
    }
    public void findAll(User user){
        userRepository.findAll();
    }

    public User findByAuthId(AuthIdDto authIdDto){
        Optional<User> user = userRepository.findByAuthId(authIdDto.getAuthId());
        if (user.isPresent())
            return user.get();
        else
            throw new EntityNotFoundException("User not found > id:"+authIdDto.getAuthId());
    }

}
