package com.amateurj.dto.request;

import lombok.*;

import java.util.Date;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateSurveyRequestDto {

    private String title;
    private String caption;
    private String className;
    private boolean isDraft;
    private List<CreateQuestionRequestDto> questionList;
    private Date startDate;
    private Date expirationDate;


}
