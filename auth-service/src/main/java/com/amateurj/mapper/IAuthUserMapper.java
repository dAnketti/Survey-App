package com.amateurj.mapper;

import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.repository.entity.AuthUser;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface IAuthUserMapper {
    AuthUser registerToUser(RegisterRequestDto dto);
    @Mapping(source = "id",target = "authId")
    UserRequestDto toUserRequestDto(AuthUser dto);
    //this is a mapper interface
}
