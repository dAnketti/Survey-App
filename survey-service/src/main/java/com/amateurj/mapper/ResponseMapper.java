package com.amateurj.mapper;

import com.amateurj.dto.request.ResponseDto;
import com.amateurj.repository.entity.Response;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface ResponseMapper {

    Response toResponse(ResponseDto dto);
}
