package com.amateurj.repository;

import com.amateurj.repository.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISurveyRepository extends JpaRepository<Survey,Long> {
}
