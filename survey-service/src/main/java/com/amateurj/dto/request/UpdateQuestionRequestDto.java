package com.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateQuestionRequestDto {

    private long id;
//    private int order;
    private String questionBody;
    private String subject;
    private String chooseQuestionType;
    private Map<Integer,String> answers;
//    private List<CreateAnswerRequestDto> answerGivenByUsers;


}
