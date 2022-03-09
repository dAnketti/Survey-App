package com.amateurj.controller;


import com.amateurj.dto.request.QuestionDto;
import com.amateurj.dto.request.SurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto;
import com.amateurj.mapper.QuestionMapper;

import com.amateurj.mapper.ResponseMapper;
import com.amateurj.mapper.SurveyMapper;
import com.amateurj.repository.ISurveyRepository;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Survey;
import com.amateurj.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/survey")
@RequiredArgsConstructor
@CrossOrigin
public class SurveyController {

    private final SurveyService surveyService;
    private final SurveyMapper surveyMapper;
    private final QuestionMapper questionMapper;
    private final ResponseMapper responseMapper;

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
    public ResponseEntity<Void> addNewQuestion(@RequestBody QuestionDto questionDto, long id){
        surveyService.addNewQuestion(id,questionMapper.toQuestion(questionDto));
        return ResponseEntity.ok().build();

    }
    @PostMapping("/surveys/{id}/addNewQuestionList")
    public ResponseEntity<String> addNewQuestionList(@RequestBody List<QuestionDto> questionDtoList, @PathVariable long id) {

        List<Question> qList = new ArrayList<>();

        for (int i = 0; i < questionDtoList.size(); i++) {
            qList.add(questionMapper.toQuestion(questionDtoList.get(i)));
        }
        surveyService.addQuestionList(qList,id);

        return ResponseEntity.ok("List ekleme başarılı oldu");

    }

    @PostMapping("/surveys/{id}/getQuestionList")
    public ResponseEntity<List<Question>> getAllQuestions(@RequestBody @PathVariable long id){

       return ResponseEntity.ok(surveyService.getAllQuestions(id));

    }







}
