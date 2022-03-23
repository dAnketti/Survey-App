package com.amateurj.repository;

import com.amateurj.repository.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISurveyRepository extends JpaRepository<Survey,Long> {
    List<Survey> findSurveyByCreatorId(long id);
}
