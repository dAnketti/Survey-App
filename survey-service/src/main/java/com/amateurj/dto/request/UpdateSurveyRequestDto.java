package com.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateSurveyRequestDto {

    private long id;
    private String title;
    private String caption;
    private String className;
    private boolean isDraft;
    private List<UpdateQuestionRequestDto> questionList;
    private Date startDate;
    private Date expirationDate;
    private Date updatedDate;


}
