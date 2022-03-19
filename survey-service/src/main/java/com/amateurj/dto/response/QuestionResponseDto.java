package com.amateurj.dto.response;

import com.amateurj.dto.request.AnswerDto;
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
public class QuestionResponseDto {

    private long id;
    private List<AnswerDto> answerList;
    private String questionBody;
    private String questionType;
    private Map<Integer,String> choicesBody;
}
