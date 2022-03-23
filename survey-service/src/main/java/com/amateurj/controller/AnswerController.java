package com.amateurj.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/response")
@RequiredArgsConstructor
public class AnswerController {

//    private final AnswerService answerService;
//    private final SurveyService surveyService;
//    private final AnswerMapper answerMapper;
//    private final QuestionMapper questionMapper;
//
//
//    @PostMapping("/submitAnswerList")
//    public ResponseEntity<String> submitAnswerList(@RequestBody List<CreateAnswerRequestDto>answerDtoList, long id){
//        for (int i = 0; i < surveyService.getAllQuestions(id).size(); i++) {
//            QuestionResponseDto question = surveyService.getAllQuestions(id).get(i);
//            for (int j = 0; j <answerDtoList.size(); j++) {
//                answerDtoList.get(j);
//                if( answerDtoList.get(j).getQuestionId()==question.getId()){
//                    Answer answer = answerMapper.toAnswer(answerDtoList.get(j));
//                    answer.setQuestion(questionMapper.toQuestion(question));
//                    answerService.save(answer);
//                }
//            }
//        }
//        return ResponseEntity.ok("Anketimize katıldığınız için teşekkür ederiz.");
//    }



}
