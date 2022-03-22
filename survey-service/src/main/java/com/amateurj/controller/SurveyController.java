package com.amateurj.controller;


import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetSurveyResponseDto;
import com.amateurj.mapper.QuestionMapper;

import com.amateurj.mapper.SurveyMapper;
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
    public ResponseEntity<GetSurveyResponseDto> save(@RequestBody CreateSurveyRequestDto dto){
        return ResponseEntity.ok(new GetSurveyResponseDto(surveyService.saveSurvey(dto)));

    }
    @PutMapping("/updateSurvey/{id}")
    public ResponseEntity<GetSurveyResponseDto> update(@RequestParam @RequestBody UpdateSurveyRequestDto dto){
        return ResponseEntity.ok(new GetSurveyResponseDto(surveyService.updateSurvey(dto)));
    }
//

    @DeleteMapping("/deleteById/{id}/")
    public ResponseEntity<String> deleteById(@RequestBody @PathVariable long id){
        return ResponseEntity.ok(surveyService.deleteById(id));
    }

    @GetMapping("/findAllSurvey")
    public ResponseEntity<List<GetSurveyResponseDto>> findAllSurvey(){
        return ResponseEntity.ok(surveyService.findAllSurvey());
    }


    @GetMapping("/findSurveyById/{id}")
    public ResponseEntity<GetSurveyResponseDto> findSurveyById(@PathVariable int id) {
        return ResponseEntity.ok(new GetSurveyResponseDto(surveyService.findSurveyById(id)));
    }


    @GetMapping("/surveys/{id}/getQuestionList")
    public ResponseEntity<List<GetQuestionResponseDto>> getAllQuestions(@PathVariable long id){
       return ResponseEntity.ok(surveyService.getAllQuestions(id));

    }

}
