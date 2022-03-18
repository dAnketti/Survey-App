package com.amateurj.dto.request;

import lombok.*;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SurveyDto {

    private String title;
    private String subjects;
    private String className;
    private boolean isDraft;
    private List<QuestionRequestDto> questionList;
    private long createdDate = System.currentTimeMillis();

}
