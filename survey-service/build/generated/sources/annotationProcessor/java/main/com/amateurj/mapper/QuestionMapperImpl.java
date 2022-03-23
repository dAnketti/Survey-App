package com.amateurj.mapper;

import com.amateurj.dto.request.CreateAnswerRequestDto;
import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.dto.request.UpdateAnswerRequestDto;
import com.amateurj.dto.request.UpdateQuestionRequestDto;
import com.amateurj.dto.response.GetQuestionResponseDto;
import com.amateurj.dto.response.GetQuestionResponseDto.GetQuestionResponseDtoBuilder;
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
    date = "2022-03-23T22:44:58+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question fromCreateDto(CreateQuestionRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.questionBody( dto.getQuestionBody() );
        question.subject( dto.getSubject() );
        question.chooseQuestionType( dto.getChooseQuestionType() );
        question.place( dto.getPlace() );
        question.answers( createAnswerRequestDtoListToAnswerList( dto.getAnswers() ) );

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
        question.place( dto.getPlace() );
        question.answers( updateAnswerRequestDtoListToAnswerList( dto.getAnswers() ) );

        return question.build();
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
        List<Answer> list = question.getAnswers();
        if ( list != null ) {
            getQuestionResponseDto.answers( new ArrayList<Answer>( list ) );
        }
        getQuestionResponseDto.place( question.getPlace() );

        return getQuestionResponseDto.build();
    }

    protected Answer createAnswerRequestDtoToAnswer(CreateAnswerRequestDto createAnswerRequestDto) {
        if ( createAnswerRequestDto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.answerOrder( createAnswerRequestDto.getAnswerOrder() );
        answer.answer( createAnswerRequestDto.getAnswer() );

        return answer.build();
    }

    protected List<Answer> createAnswerRequestDtoListToAnswerList(List<CreateAnswerRequestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Answer> list1 = new ArrayList<Answer>( list.size() );
        for ( CreateAnswerRequestDto createAnswerRequestDto : list ) {
            list1.add( createAnswerRequestDtoToAnswer( createAnswerRequestDto ) );
        }

        return list1;
    }

    protected Answer updateAnswerRequestDtoToAnswer(UpdateAnswerRequestDto updateAnswerRequestDto) {
        if ( updateAnswerRequestDto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

        answer.id( updateAnswerRequestDto.getId() );
        answer.answerOrder( updateAnswerRequestDto.getAnswerOrder() );
        answer.answer( updateAnswerRequestDto.getAnswer() );

        return answer.build();
    }

    protected List<Answer> updateAnswerRequestDtoListToAnswerList(List<UpdateAnswerRequestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Answer> list1 = new ArrayList<Answer>( list.size() );
        for ( UpdateAnswerRequestDto updateAnswerRequestDto : list ) {
            list1.add( updateAnswerRequestDtoToAnswer( updateAnswerRequestDto ) );
        }

        return list1;
    }
}
