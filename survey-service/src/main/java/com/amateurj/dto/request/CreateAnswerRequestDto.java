package com.amateurj.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CreateAnswerRequestDto {

    private int answerOrder;
    private String answer;



}
