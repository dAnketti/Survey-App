package com.amateurj.controller;


import com.amateurj.repository.ISurveyRepository;
import com.amateurj.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class SurveyController {

    private final SurveyService surveyService;

}
