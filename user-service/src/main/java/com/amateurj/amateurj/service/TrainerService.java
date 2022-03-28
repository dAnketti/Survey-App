package com.amateurj.amateurj.service;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.repository.ITrainerRepository;
import com.amateurj.repository.entity.Trainer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TrainerService {

    private final ITrainerRepository masterITrainerRepository;

    public void save(Trainer trainer){
        masterITrainerRepository.save(trainer);
    }

    public void update(Trainer trainer){
        masterITrainerRepository.save(trainer);
    }

    public void delete(Trainer trainer){
        masterITrainerRepository.delete(trainer);
    }

    public List<Trainer> findAll(){
        return masterITrainerRepository.findAll();
    }

    public String findByAuthId(AuthIdDto authIdDto){
        Optional<Trainer> masterTrainer = masterITrainerRepository.findByAuthId(authIdDto.getAuthId());
        if (masterTrainer.isPresent())
            return String.valueOf(masterTrainer.get().getId());
        else
            return "Kullanıcı Bulunamadı";
    }
}
