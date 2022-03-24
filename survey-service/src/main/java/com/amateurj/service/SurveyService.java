package com.amateurj.service;

import com.amateurj.dto.request.*;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetResponseIdTextResponse;
import com.amateurj.dto.response.GetSurveyResponseDto;
import com.amateurj.mapper.QuestionMapper;
import com.amateurj.mapper.SurveyMapper;
import com.amateurj.repository.IAnswerRepository;
import com.amateurj.repository.IQuestionRepository;
import com.amateurj.repository.ISurveyRepository;
import com.amateurj.repository.entity.Answer;
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
    private final IAnswerRepository answerRepository;

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
        Survey survey = surveyRepository.save(Survey.builder()
                        .title(dto.getTitle())
                        .caption(dto.getCaption())
                        .className(dto.getClassName())
                        .isDraft(false)
                .build());
        for (CreateQuestionRequestDto q:dto.getQuestions()
             ) {
            Question dbQuestion=questionMapper.fromCreateDto(q);
            dbQuestion.setSurvey(survey);
            questionRepository.save(dbQuestion);
            if(q.getAnswers().size()>0){
                for (CreateAnswerRequestDto a:q.getAnswers()
                     ) {
                    Answer dbAnswer= Answer.builder()
                            .answerOrder(a.getAnswerOrder())
                            .answer(a.getAnswer())
                            .question(dbQuestion)
                            .build();
                    answerRepository.save(dbAnswer);
                }
            }
        }


        return survey;

    }

    public Survey updateSurvey(UpdateSurveyRequestDto dto){
        Survey survey = surveyMapper.fromUpdateDto(dto);
        List<Question> qList = dto.getQuestions().stream().map(questionMapper::fromUpdateDto).collect(Collectors.toList());
        surveyRepository.save(survey);
        qList.stream().map((question)->{
            question.setSurvey(survey);
            return questionRepository.save(question);
        }).collect(Collectors.toList());
        survey.setQuestions(qList);
        return survey;
    }

    public List<GetResponseIdTextResponse> getSurveyAndTitle(){
        return surveyRepository.getTitleAndId();
    }
}
