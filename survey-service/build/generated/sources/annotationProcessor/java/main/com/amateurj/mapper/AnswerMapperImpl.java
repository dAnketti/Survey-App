package com.amateurj.mapper;

import com.amateurj.dto.request.AnswerDto;
import com.amateurj.dto.request.AnswerDto.AnswerDtoBuilder;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Answer.AnswerBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-19T15:14:47+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer toAnswer(AnswerDto dto) {
        if ( dto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.answerBody( dto.getAnswerBody() );
        answer.answerType( dto.getAnswerType() );
        answer.createdDate( dto.getCreatedDate() );

        return answer.build();
    }

    @Override
    public AnswerDto toAnswerDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDtoBuilder answerDto = AnswerDto.builder();

        answerDto.answerBody( answer.getAnswerBody() );
        answerDto.answerType( answer.getAnswerType() );
        answerDto.createdDate( answer.getCreatedDate() );

        return answerDto.build();
    }
}
