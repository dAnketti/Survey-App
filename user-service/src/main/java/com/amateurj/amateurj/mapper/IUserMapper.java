package com.amateurj.amateurj.mapper;

import com.amateurj.dto.request.ManagerRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.repository.entity.Manager;
import com.amateurj.repository.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface IUserMapper {
    User toUser(UserRequestDto userRequestDto);
    Manager toManager (ManagerRequestDto requestDto);
    RegisterRequestDto toRegisterDto (ManagerRequestDto requestDto);
}
