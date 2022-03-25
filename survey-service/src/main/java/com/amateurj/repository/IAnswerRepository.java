package com.amateurj.repository;

import com.amateurj.repository.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IAnswerRepository extends JpaRepository<Answer,Long> {
    @Override
    Optional<Answer> findById(Long aLong);
}
