package com.amateurj.service;

import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetSurveyResponseDto;
import com.amateurj.dto.response.QuestionResponseDto;
import com.amateurj.mapper.AnswerMapper;
import com.amateurj.mapper.QuestionMapper;
import com.amateurj.mapper.SurveyMapper;
import com.amateurj.repository.IQuestionRepository;
import com.amateurj.repository.ISurveyRepository;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Survey;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final ISurveyRepository surveyRepository;
    private final IQuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final SurveyMapper surveyMapper;


    public String deleteById(long id){
        surveyRepository.delete(findSurveyById(id));
        return "Selected item has been deleted successfully";
    }

    public List<GetSurveyResponseDto> findAllSurvey(){

        return surveyRepository.findAll().stream().map(GetSurveyResponseDto::new).collect(Collectors.toList());

    }

    public Survey findSurveyById(long id) {
        Optional<Survey> surveyOptional= surveyRepository.findById(id);
        if (surveyOptional.isEmpty()){
           throw new EntityNotFoundException("Unable to find survey by given "+ id);
        }
        return surveyOptional.get();
    }

    public List<GetQuestionResponseDto> getAllQuestions(long id){
        Survey survey = findSurveyById(id);
        return survey.getQuestions().stream().map(questionMapper::fromQuestion).collect(Collectors.toList());
    }

    public Survey saveSurvey (CreateSurveyRequestDto dto){
        Survey survey = surveyRepository.save(surveyMapper.fromCreateDto(dto));

        List<Question> qList = dto.getQuestionList().stream().map(questionMapper::toQuestion).collect(Collectors.toList());
        qList.forEach((question)->{
            question.setSurvey(survey);
            questionRepository.save(question);
        });
        survey.setQuestions(qList);
        return survey;

    }

    public Survey updateSurvey(UpdateSurveyRequestDto dto){
        Survey survey = findSurveyById(dto.getId());
        survey = surveyMapper.fromUpdateDto(dto);
        List<Question> qList = dto.getQuestionList().stream().map(questionMapper::fromUpdateDto).collect(Collectors.toList());
        Survey finalSurvey = survey;
        qList.stream().map((question)->{
            question.setSurvey(finalSurvey);
            return questionRepository.save(question);
        }).collect(Collectors.toList());
        finalSurvey.setQuestions(qList);
        return surveyRepository.save(finalSurvey);


    }


}
