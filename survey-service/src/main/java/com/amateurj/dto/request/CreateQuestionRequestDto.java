package com.amateurj.dto.request;

import lombok.*;

import java.util.List;
import java.util.Map;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateQuestionRequestDto {


//    private int order;
    private String questionBody;
    private String subject;
    private String chooseQuestionType;
    private Map<Integer,String> answers;
//    private List<CreateAnswerRequestDto> answerGivenByUsers;


}
