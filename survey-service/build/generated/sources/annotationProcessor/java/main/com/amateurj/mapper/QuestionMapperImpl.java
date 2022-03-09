package com.amateurj.mapper;

import com.amateurj.dto.request.QuestionDto;
import com.amateurj.dto.request.ResponseDto;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import com.amateurj.repository.entity.Response;
import com.amateurj.repository.entity.Response.ResponseBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-09T14:20:47+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question toQuestion(QuestionDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.responseList( responseDtoListToResponseList( dto.getResponseList() ) );
        question.questionBody( dto.getQuestionBody() );
        question.questionType( dto.getQuestionType() );

        return question.build();
    }

    protected Response responseDtoToResponse(ResponseDto responseDto) {
        if ( responseDto == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.responseBody( responseDto.getResponseBody() );
        response.responseType( responseDto.getResponseType() );
        response.createdDate( responseDto.getCreatedDate() );

        return response.build();
    }

    protected List<Response> responseDtoListToResponseList(List<ResponseDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Response> list1 = new ArrayList<Response>( list.size() );
        for ( ResponseDto responseDto : list ) {
            list1.add( responseDtoToResponse( responseDto ) );
        }

        return list1;
    }
}
