package com.amateurj.mapper;

import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.repository.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface IUserMapper {
    User toUser(UserRequestDto userRequestDto);
    UserResponseDto toUserResponseDto(User user);
}
