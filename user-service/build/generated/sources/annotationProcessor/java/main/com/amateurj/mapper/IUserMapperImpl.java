package com.amateurj.mapper;

import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.response.UserResponseDto;
import com.amateurj.dto.response.UserResponseDto.UserResponseDtoBuilder;
import com.amateurj.repository.entity.User;
import com.amateurj.repository.entity.User.UserBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-11T12:51:38+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class IUserMapperImpl implements IUserMapper {

    @Override
    public User toUser(UserRequestDto userRequestDto) {
        if ( userRequestDto == null ) {
            return null;
        }

        UserBuilder user = User.builder();

        user.authId( userRequestDto.getAuthId() );
        user.name( userRequestDto.getName() );
        user.email( userRequestDto.getEmail() );
        user.password( userRequestDto.getPassword() );
        user.phoneNumber( userRequestDto.getPhoneNumber() );
        user.createdDate( userRequestDto.getCreatedDate() );

        return user.build();
    }

    @Override
    public UserResponseDto toUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDtoBuilder userResponseDto = UserResponseDto.builder();

        userResponseDto.id( user.getId() );
        userResponseDto.name( user.getName() );
        userResponseDto.phoneNumber( user.getPhoneNumber() );
        userResponseDto.className( user.getClassName() );
        userResponseDto.branch( user.getBranch() );
        userResponseDto.userType( user.getUserType() );

        return userResponseDto.build();
    }
}
