package com.amateurj.amateurj.service;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.repository.IManagerRepository;
import com.amateurj.repository.entity.Manager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ManagerService {

    private final IManagerRepository managerRepository;

    public void save(Manager manager){
        managerRepository.save(manager);
    }

    public void update(Manager manager){
        managerRepository.save(manager);
    }

    public void delete(Manager manager){
        managerRepository.delete(manager);
    }

    public void findAll(){
        managerRepository.findAll();
    }

    public String findByAuthId(AuthIdDto authIdDto){
        Optional<Manager> manager = managerRepository.findByAuthId(authIdDto.getAuthId());
        if (manager.isPresent())
            return String.valueOf(manager.get().getId());
        else
            return "Kullanıcı Bulunamadı";
    }
}
