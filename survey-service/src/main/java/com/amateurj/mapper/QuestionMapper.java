package com.amateurj.mapper;

import com.amateurj.dto.request.QuestionDto;
import com.amateurj.repository.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface QuestionMapper {

    Question toQuestion(QuestionDto dto);
}
