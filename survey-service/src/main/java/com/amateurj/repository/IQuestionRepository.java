package com.amateurj.repository;

import com.amateurj.repository.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IQuestionRepository extends JpaRepository<Question,Long> {
    @Override
    Optional<Question> findById(Long aLong);
}
