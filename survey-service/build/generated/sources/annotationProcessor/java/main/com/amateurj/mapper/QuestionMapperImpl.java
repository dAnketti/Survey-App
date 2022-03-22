package com.amateurj.mapper;

import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.dto.request.UpdateQuestionRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetQuestionResponseDto.GetQuestionResponseDtoBuilder;
import com.amateurj.dto.response.QuestionResponseDto;
import com.amateurj.dto.response.QuestionResponseDto.QuestionResponseDtoBuilder;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-22T18:19:45+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question toQuestion(CreateQuestionRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.questionBody( dto.getQuestionBody() );
        question.subject( dto.getSubject() );
        question.chooseQuestionType( dto.getChooseQuestionType() );
        Map<Integer, String> map = dto.getAnswers();
        if ( map != null ) {
            question.answers( new HashMap<Integer, String>( map ) );
        }

        return question.build();
    }

    @Override
    public Question fromUpdateDto(UpdateQuestionRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.id( dto.getId() );
        question.questionBody( dto.getQuestionBody() );
        question.subject( dto.getSubject() );
        question.chooseQuestionType( dto.getChooseQuestionType() );
        Map<Integer, String> map = dto.getAnswers();
        if ( map != null ) {
            question.answers( new HashMap<Integer, String>( map ) );
        }

        return question.build();
    }

    @Override
    public Question toQuestion(QuestionResponseDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.id( dto.getId() );
        question.questionBody( dto.getQuestionBody() );

        return question.build();
    }

    @Override
    public QuestionResponseDto toResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        questionResponseDto.id( question.getId() );
        questionResponseDto.questionBody( question.getQuestionBody() );

        return questionResponseDto.build();
    }

    @Override
    public GetQuestionResponseDto fromQuestion(Question question) {
        if ( question == null ) {
            return null;
        }

        GetQuestionResponseDtoBuilder getQuestionResponseDto = GetQuestionResponseDto.builder();

        getQuestionResponseDto.id( question.getId() );
        getQuestionResponseDto.questionBody( question.getQuestionBody() );
        getQuestionResponseDto.subject( question.getSubject() );
        getQuestionResponseDto.chooseQuestionType( question.getChooseQuestionType() );
        Map<Integer, String> map = question.getAnswers();
        if ( map != null ) {
            getQuestionResponseDto.answers( new HashMap<Integer, String>( map ) );
        }

        return getQuestionResponseDto.build();
    }
}
