package com.amateurj.amateurj.controller;

import com.amateurj.dto.request.AuthIdDto;
import com.amateurj.repository.entity.Trainer;
import com.amateurj.service.TrainerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/trainer")
@RequiredArgsConstructor
public class TrainerController {

    private final TrainerService trainerService;

    @PostMapping("/save")
    public ResponseEntity<String> save (@RequestBody Trainer trainer){
        trainerService.save(trainer);
        return ResponseEntity.ok("Kayıt Başarılı");
    }

    @PutMapping("/update")
    public ResponseEntity<String> update (@RequestBody Trainer trainer){
        trainerService.update(trainer);
        return ResponseEntity.ok("Güncelleme Başarılı");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete (@RequestBody Trainer trainer){
        trainerService.delete(trainer);
        return ResponseEntity.ok("Silme İşlemi Başarılı");
    }

    @PostMapping("/finduserbyauthid")
    public ResponseEntity<String> findUserByAuthId(@RequestBody AuthIdDto authIdDto){
        return ResponseEntity.ok(trainerService.findByAuthId(authIdDto));
    }

    @PostMapping("/findall")
    public ResponseEntity<List<Trainer>> findAll(@RequestBody AuthIdDto authIdDto){
        return ResponseEntity.ok(trainerService.findAll());
    }
}
