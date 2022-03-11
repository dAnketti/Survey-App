package com.amateurj.mapper;

import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.dto.request.UserRequestDto;
import com.amateurj.dto.request.UserRequestDto.UserRequestDtoBuilder;
import com.amateurj.repository.entity.AuthUser;
import com.amateurj.repository.entity.AuthUser.AuthUserBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-11T12:51:23+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class IAuthUserMapperImpl implements IAuthUserMapper {

    @Override
    public AuthUser registerToUser(RegisterRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        AuthUserBuilder authUser = AuthUser.builder();

        authUser.name( dto.getName() );
        authUser.email( dto.getEmail() );
        authUser.password( dto.getPassword() );
        authUser.phoneNumber( dto.getPhoneNumber() );
        authUser.createdDate( dto.getCreatedDate() );

        return authUser.build();
    }

    @Override
    public UserRequestDto toUserRequestDto(AuthUser dto) {
        if ( dto == null ) {
            return null;
        }

        UserRequestDtoBuilder userRequestDto = UserRequestDto.builder();

        userRequestDto.authId( dto.getId() );
        userRequestDto.name( dto.getName() );
        userRequestDto.email( dto.getEmail() );
        userRequestDto.password( dto.getPassword() );
        userRequestDto.phoneNumber( dto.getPhoneNumber() );
        userRequestDto.createdDate( dto.getCreatedDate() );

        return userRequestDto.build();
    }
}
