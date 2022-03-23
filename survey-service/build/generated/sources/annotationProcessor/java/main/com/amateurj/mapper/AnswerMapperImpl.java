package com.amateurj.mapper;

import com.amateurj.dto.request.CreateAnswerRequestDto;
import com.amateurj.dto.request.CreateAnswerRequestDto.CreateAnswerRequestDtoBuilder;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Answer.AnswerBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-23T22:44:59+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer toAnswer(CreateAnswerRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.answerOrder( dto.getAnswerOrder() );
        answer.answer( dto.getAnswer() );

        return answer.build();
    }

    @Override
    public CreateAnswerRequestDto toAnswerDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        CreateAnswerRequestDtoBuilder createAnswerRequestDto = CreateAnswerRequestDto.builder();

        createAnswerRequestDto.answerOrder( answer.getAnswerOrder() );
        createAnswerRequestDto.answer( answer.getAnswer() );

        return createAnswerRequestDto.build();
    }
}
