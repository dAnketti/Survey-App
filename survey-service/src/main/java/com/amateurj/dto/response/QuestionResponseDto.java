package com.amateurj.dto.response;

import com.amateurj.dto.request.AnswerDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionResponseDto {

    private long id;
    private List<AnswerDto> answerList;
    private String questionBody;
    private String questionType;

}
