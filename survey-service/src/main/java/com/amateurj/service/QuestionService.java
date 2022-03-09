package com.amateurj.service;

import com.amateurj.repository.IQuestionRepository;
import com.amateurj.repository.ISurveyRepository;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Response;
import com.amateurj.repository.entity.Survey;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final IQuestionRepository repository;

    public void update(Question question){
        repository.save(question);
    }

    public List<Question> findAll(){

        return repository.findAll();
    }

//    public List<Response> getAllResponses(long id){
//        Optional<Question> question;
//        question = repository.findById(id);
//        return question.get().getResponseList();
//
//    }

}
