package com.amateurj.mapper;

import com.amateurj.dto.request.ResponseDto;
import com.amateurj.repository.entity.Response;
import com.amateurj.repository.entity.Response.ResponseBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-09T14:17:28+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class ResponseMapperImpl implements ResponseMapper {

    @Override
    public Response toResponse(ResponseDto dto) {
        if ( dto == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.responseBody( dto.getResponseBody() );
        response.responseType( dto.getResponseType() );
        response.createdDate( dto.getCreatedDate() );

        return response.build();
    }
}
