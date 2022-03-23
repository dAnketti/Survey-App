package com.amateurj.mapper;

import com.amateurj.dto.request.CreateAnswerRequestDto;
import com.amateurj.repository.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface AnswerMapper {

    Answer toAnswer(CreateAnswerRequestDto dto);
    CreateAnswerRequestDto toAnswerDto(Answer answer);
}
