package com.amateurj.mapper;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.repository.entity.AuthUser;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface IUserMapper {
    AuthUser registerToUser(RegisterRequestDto dto);
    AuthUser loginToUser(LoginRequestDto dto);
}
