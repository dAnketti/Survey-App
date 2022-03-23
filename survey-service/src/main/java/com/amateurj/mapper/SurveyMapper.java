package com.amateurj.mapper;

import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.repository.entity.Survey;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface SurveyMapper {

    Survey fromCreateDto(CreateSurveyRequestDto dto);
    Survey fromUpdateDto(UpdateSurveyRequestDto dto);


}
