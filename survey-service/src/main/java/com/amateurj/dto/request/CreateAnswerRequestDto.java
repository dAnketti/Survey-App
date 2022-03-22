package com.amateurj.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CreateAnswerRequestDto {

    private long questionId;
    private String answerBody;
    private String answerType;



}
