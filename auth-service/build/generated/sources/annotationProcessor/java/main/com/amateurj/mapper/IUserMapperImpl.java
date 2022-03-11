package com.amateurj.mapper;

import com.amateurj.dto.request.LoginRequestDto;
import com.amateurj.dto.request.RegisterRequestDto;
import com.amateurj.repository.entity.AuthUser;
import com.amateurj.repository.entity.AuthUser.AuthUserBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-11T12:07:32+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class IUserMapperImpl implements IUserMapper {

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
    public AuthUser loginToUser(LoginRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        AuthUserBuilder authUser = AuthUser.builder();

        authUser.email( dto.getEmail() );
        authUser.password( dto.getPassword() );

        return authUser.build();
    }
}
