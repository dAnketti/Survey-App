package com.amateurj.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class AnswerDto {

    private long questionId;
    private String answerBody;
    private String answerType;
    private long createdDate = System.currentTimeMillis();


}
