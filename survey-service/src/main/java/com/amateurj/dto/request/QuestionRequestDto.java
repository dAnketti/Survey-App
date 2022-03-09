package com.amateurj.dto.request;

import lombok.*;

import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionRequestDto {

    private List<AnswerDto> answerList;
    private String questionBody;
    private String questionType;

}
