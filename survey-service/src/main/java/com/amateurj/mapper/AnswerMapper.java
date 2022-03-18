package com.amateurj.mapper;

import com.amateurj.dto.request.AnswerDto;
import com.amateurj.repository.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface AnswerMapper {

    Answer toAnswer(AnswerDto dto);
    AnswerDto toAnswerDto(Answer answer);
}
