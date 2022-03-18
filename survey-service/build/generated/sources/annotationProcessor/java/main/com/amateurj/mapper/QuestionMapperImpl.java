package com.amateurj.mapper;

import com.amateurj.dto.request.AnswerDto;
import com.amateurj.dto.request.AnswerDto.AnswerDtoBuilder;
import com.amateurj.dto.request.QuestionRequestDto;
import com.amateurj.dto.response.QuestionResponseDto;
import com.amateurj.dto.response.QuestionResponseDto.QuestionResponseDtoBuilder;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Answer.AnswerBuilder;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-09T17:44:29+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question toQuestion(QuestionRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.answerList( answerDtoListToAnswerList( dto.getAnswerList() ) );
        question.questionBody( dto.getQuestionBody() );
        question.questionType( dto.getQuestionType() );

        return question.build();
    }

    @Override
    public Question toQuestion(QuestionResponseDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.id( dto.getId() );
        question.answerList( answerDtoListToAnswerList( dto.getAnswerList() ) );
        question.questionBody( dto.getQuestionBody() );
        question.questionType( dto.getQuestionType() );

        return question.build();
    }

    @Override
    public QuestionResponseDto toResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        questionResponseDto.id( question.getId() );
        questionResponseDto.answerList( answerListToAnswerDtoList( question.getAnswerList() ) );
        questionResponseDto.questionBody( question.getQuestionBody() );
        questionResponseDto.questionType( question.getQuestionType() );

        return questionResponseDto.build();
    }

    protected Answer answerDtoToAnswer(AnswerDto answerDto) {
        if ( answerDto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.answerBody( answerDto.getAnswerBody() );
        answer.answerType( answerDto.getAnswerType() );
        answer.createdDate( answerDto.getCreatedDate() );

        return answer.build();
    }

    protected List<Answer> answerDtoListToAnswerList(List<AnswerDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Answer> list1 = new ArrayList<Answer>( list.size() );
        for ( AnswerDto answerDto : list ) {
            list1.add( answerDtoToAnswer( answerDto ) );
        }

        return list1;
    }

    protected AnswerDto answerToAnswerDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDtoBuilder answerDto = AnswerDto.builder();

        answerDto.answerBody( answer.getAnswerBody() );
        answerDto.answerType( answer.getAnswerType() );
        answerDto.createdDate( answer.getCreatedDate() );

        return answerDto.build();
    }

    protected List<AnswerDto> answerListToAnswerDtoList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerDto> list1 = new ArrayList<AnswerDto>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToAnswerDto( answer ) );
        }

        return list1;
    }
}
