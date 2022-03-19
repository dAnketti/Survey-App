package com.amateurj.dto.request;

import lombok.*;

import java.util.List;
import java.util.Map;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionRequestDto {

    private List<AnswerDto> answerList;
    private String questionBody;
    private String questionType;
    private Map<Integer,String> choicesBody;

}
