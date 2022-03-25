package com.amateurj.controller;


import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetResponseIdTextResponse;
import com.amateurj.dto.response.GetSurveyResponseDto;
import com.amateurj.mapper.QuestionMapper;

import com.amateurj.mapper.SurveyMapper;
import com.amateurj.repository.entity.Survey;
import com.amateurj.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/survey")
@RequiredArgsConstructor
@CrossOrigin
public class SurveyController {

    private final SurveyService surveyService;
    private final SurveyMapper surveyMapper;
    private final QuestionMapper questionMapper;


    @PostMapping("/saveSurvey")
    public ResponseEntity<Survey> save(@RequestBody CreateSurveyRequestDto dto){

        return ResponseEntity.ok(surveyService.saveSurvey(dto));

    }
    @PutMapping("/updateSurvey/{id}")
    public ResponseEntity<Survey> update(@PathVariable long id, @RequestBody UpdateSurveyRequestDto dto){
        return ResponseEntity.ok(surveyService.updateSurvey(id,dto));
    }


    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteById( @PathVariable long id){
        return ResponseEntity.ok(surveyService.deleteById(id));
    }

    @GetMapping("/findAllSurvey")
    public ResponseEntity<List<GetSurveyResponseDto>> findAllSurvey(){
        return ResponseEntity.ok(surveyService.findAllSurvey());
    }


    @GetMapping("/findSurveyById/{id}")
    public ResponseEntity<Survey> findSurveyById(@PathVariable int id) {
        return ResponseEntity.ok(surveyService.findSurveyById(id));
    }


    @GetMapping("/surveys/{id}/getQuestionList")
    public ResponseEntity<List<GetQuestionResponseDto>> getAllQuestions(@PathVariable long id){
       return ResponseEntity.ok(surveyService.getAllQuestions(id));

    }

    @GetMapping("/surveys_title")
    public ResponseEntity<List<GetResponseIdTextResponse>> getAllSurveyTitle(){
        return ResponseEntity.ok(surveyService.getSurveyAndTitle());

    }

}
