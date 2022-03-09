package com.amateurj.dto.request;

import com.amateurj.repository.entity.Survey;
import lombok.*;

import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionDto {

    private List<ResponseDto> responseList;
    private String questionBody;
    private String questionType;

}
