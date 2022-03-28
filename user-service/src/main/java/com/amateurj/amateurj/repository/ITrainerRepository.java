package com.amateurj.amateurj.repository;

import com.amateurj.repository.entity.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITrainerRepository extends JpaRepository<Trainer,Long> {
    Optional<Trainer> findByAuthId(Long id);
}
