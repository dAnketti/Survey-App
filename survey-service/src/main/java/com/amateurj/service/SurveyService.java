package com.amateurj.service;

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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final ISurveyRepository surveyRepository;

    private final IQuestionRepository questionRepository;

    private final QuestionMapper questionMapper;


    public void save(Survey survey) {
        surveyRepository.save(survey);
    }

    public void update(Survey survey) {
        surveyRepository.save(survey);}

    public void delete(Survey survey) {
        surveyRepository.delete(survey);
    }

    public void deleteById(long id){
        surveyRepository.deleteById(id);
    }

    public List<Survey> findAll(){
        return surveyRepository.findAll();
    }

    public Survey findSurveyById(long id) {
        Optional<Survey> surveyOptional= surveyRepository.findById(id);
        Survey survey = new Survey();
        if (surveyOptional.isPresent()){
            survey = surveyOptional.get();
        }
        return survey;
    }

    public List<QuestionResponseDto> getAllQuestions(long id){
        Optional<Survey> survey = surveyRepository.findById(id);
        List<QuestionResponseDto> responseDtoList = new ArrayList<>();
        for (int i = 0; i < survey.get().getQuestionList().size(); i++) {
            responseDtoList.add(questionMapper.toResponseDto(survey.get().getQuestionList().get(i)));

        }

        return responseDtoList;
    }

    public void addQuestionList (List<Question> qList, long id){
        Survey survey = surveyRepository.findById(id).get();
        survey.setQuestionList(qList);
        for (int i = 0; i < qList.size(); i++) {
           Question question = qList.get(i);
            question.setSurvey(survey);
            questionRepository.save(question);
        }
        surveyRepository.save(survey);
    }

    public void addNewQuestion(long id, Question question){
        Survey survey = surveyRepository.findById(id).get();
//        Optional<Survey> survey = repository.findById(id);
        question.setSurvey(survey);
        survey.getQuestionList().add(question);
        questionRepository.save(question);

    }


}
