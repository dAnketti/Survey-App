package com.amateurj.mapper;

import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.dto.request.UpdateQuestionRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.repository.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface QuestionMapper {

    Question fromCreateDto(CreateQuestionRequestDto dto);
    Question fromUpdateDto(UpdateQuestionRequestDto dto);
    GetQuestionResponseDto fromQuestion(Question question);
}
