package com.amateurj.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class FindAllSurveyDto {
    private long id;
    private String title;
    private String subjects;
    private String className;
}
