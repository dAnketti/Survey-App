package com.amateurj.service;

import com.amateurj.repository.ISurveyRepository;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Survey;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final ISurveyRepository repository;

    public void save(Survey survey) {
        repository.save(survey);
    }

    public Optional<Survey> findSurveyById(long id) {
        return repository.findById(id);
    }

    public List<Question> getAllQuestions(long id){
        Optional<Survey> survey;
        survey = repository.findById(id);
        return survey.get().getQuestions();

    }



}
