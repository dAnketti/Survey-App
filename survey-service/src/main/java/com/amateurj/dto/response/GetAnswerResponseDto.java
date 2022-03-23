package com.amateurj.dto.response;

import com.amateurj.repository.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetAnswerResponseDto {
    private long id;
    private int answerOrder;
    private String answer;

    public GetAnswerResponseDto(Answer answer) {
        this.id = answer.getId();
        this.answerOrder = answer.getAnswerOrder();
        this.answer = answer.getAnswer();
    }
}
