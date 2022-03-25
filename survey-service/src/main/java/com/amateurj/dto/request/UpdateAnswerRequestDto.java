package com.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateAnswerRequestDto {
    private long id;
    private int answerOrder;
    private String answer;
}
