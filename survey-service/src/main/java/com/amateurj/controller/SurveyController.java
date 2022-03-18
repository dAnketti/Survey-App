package com.amateurj.controller;


import com.amateurj.dto.request.QuestionRequestDto;
import com.amateurj.dto.request.SurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto;
import com.amateurj.dto.response.QuestionResponseDto;
import com.amateurj.mapper.QuestionMapper;

import com.amateurj.mapper.SurveyMapper;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Survey;
import com.amateurj.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public ResponseEntity<Void> save(@RequestBody SurveyDto dto){
        System.out.println(dto.toString());
        surveyService.save(surveyMapper.toSurvey(dto));
        return ResponseEntity.ok().build();

    }
    @PostMapping("/updateSurvey")
    public ResponseEntity<Void> update(@RequestBody SurveyDto dto){
        surveyService.save(surveyMapper.toSurvey(dto));
        return ResponseEntity.ok().build();
    }
//    @PostMapping("/deleteSurvey")
//    public ResponseEntity<Void> delete(@RequestBody SurveyDto dto){
//        surveyService.delete(surveyMapper.toSurvey(dto));
//        return ResponseEntity.ok().build();
//    }

    @PostMapping("/deleteById")
    public ResponseEntity<Void> deleteById(@RequestBody long id){
        surveyService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/findAllSurvey")
    public ResponseEntity<List<FindAllSurveyDto>> findAll(){
        List<FindAllSurveyDto> fList = new ArrayList<>();
        for (int i = 0; i < surveyService.findAll().size() ; i++) {
            fList.add(surveyMapper.toFindAllSurvey(surveyService.findAll().get(i)));
        }

        return ResponseEntity.ok(fList);
    }


    @GetMapping("/findSurveyById/{id}")
    public ResponseEntity<Survey> findSurveyById(@PathVariable int id) {
        return ResponseEntity.ok(surveyService.findSurveyById(id));
    }

    @PostMapping("/addNewQuestion")
    public ResponseEntity<Void> addNewQuestion(@RequestBody QuestionRequestDto questionRequestDto, long id){
        surveyService.addNewQuestion(id,questionMapper.toQuestion(questionRequestDto));
        return ResponseEntity.ok().build();

    }
    @PostMapping("/surveys/{id}/addNewQuestionList")
    public ResponseEntity<String> addNewQuestionList(@RequestBody List<QuestionRequestDto> questionRequestDtoList, @PathVariable long id) {

        List<Question> qList = new ArrayList<>();

        for (int i = 0; i < questionRequestDtoList.size(); i++) {
            qList.add(questionMapper.toQuestion(questionRequestDtoList.get(i)));
        }
        surveyService.addQuestionList(qList,id);

        return ResponseEntity.ok("List ekleme başarılı oldu");

    }

    @GetMapping("/surveys/{id}/getQuestionList")
    public ResponseEntity<List<QuestionResponseDto>> getAllQuestions(@PathVariable long id){

       return ResponseEntity.ok(surveyService.getAllQuestions(id));

    }







}
