package com.amateurj.repository;

import com.amateurj.dto.response.GetResponseIdTextResponse;
import com.amateurj.repository.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISurveyRepository extends JpaRepository<Survey,Long> {

    List<Survey> findSurveyByCreatorId(long id);

    @Query("select s.id as id, s.title as title from Survey s")
    List<GetResponseIdTextResponse> getTitleAndId();




}
