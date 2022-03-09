package com.amateurj.mapper;

import com.amateurj.dto.request.SurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto;
import com.amateurj.repository.entity.Survey;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.context.annotation.Bean;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface SurveyMapper {

    Survey toSurvey(SurveyDto dto);
    FindAllSurveyDto toFindAllSurvey(Survey survey);

}
