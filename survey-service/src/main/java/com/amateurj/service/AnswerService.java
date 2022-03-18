package com.amateurj.service;

import com.amateurj.repository.IAnswerRepository;
import com.amateurj.repository.entity.Answer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnswerService {

    private final IAnswerRepository answerRepository;

    public void save(Answer answer){
        answerRepository.save(answer);
    }

    public List<Answer> findAll(){
        return answerRepository.findAll();
    }

}
