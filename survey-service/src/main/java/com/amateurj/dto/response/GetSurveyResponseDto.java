package com.amateurj.dto.response;

import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Survey;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetSurveyResponseDto {

    private long id;
    private String title;
    private String caption;
    private String className;
    private boolean isDraft;
    private List<GetQuestionResponseDto> questionList;
    private Date startDate;
    private Date expirationDate;
    private Date updatedDate;

    public GetSurveyResponseDto(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.caption = survey.getCaption();
        this.className = survey.getClassName();
        this.isDraft = survey.isDraft();
        this.questionList = survey.getQuestions().stream().map(GetQuestionResponseDto::new).collect(Collectors.toList());
        this.startDate = survey.getStartDate();
        this.expirationDate = survey.getExpirationDate();
        this.updatedDate = survey.getUpdatedDate();
    }
}
