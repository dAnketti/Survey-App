package com.amateurj.mapper;

import com.amateurj.dto.request.CreateAnswerRequestDto;
import com.amateurj.dto.request.CreateQuestionRequestDto;
import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateAnswerRequestDto;
import com.amateurj.dto.request.UpdateQuestionRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Answer.AnswerBuilder;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import com.amateurj.repository.entity.Survey;
import com.amateurj.repository.entity.Survey.SurveyBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-24T19:29:27+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class SurveyMapperImpl implements SurveyMapper {

    @Override
    public Survey fromCreateDto(CreateSurveyRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        SurveyBuilder survey = Survey.builder();

        survey.title( dto.getTitle() );
        survey.caption( dto.getCaption() );
        survey.className( dto.getClassName() );
        survey.startDate( dto.getStartDate() );
        survey.expirationDate( dto.getExpirationDate() );
        survey.questions( createQuestionRequestDtoListToQuestionList( dto.getQuestions() ) );

        return survey.build();
    }

    @Override
    public Survey fromUpdateDto(UpdateSurveyRequestDto dto) {
        if ( dto == null ) {
            return null;
        }

        SurveyBuilder survey = Survey.builder();

        survey.id( dto.getId() );
        survey.title( dto.getTitle() );
        survey.caption( dto.getCaption() );
        survey.className( dto.getClassName() );
        survey.updatedDate( dto.getUpdatedDate() );
        survey.startDate( dto.getStartDate() );
        survey.expirationDate( dto.getExpirationDate() );
        survey.questions( updateQuestionRequestDtoListToQuestionList( dto.getQuestions() ) );

        return survey.build();
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

    protected Question createQuestionRequestDtoToQuestion(CreateQuestionRequestDto createQuestionRequestDto) {
        if ( createQuestionRequestDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.questionBody( createQuestionRequestDto.getQuestionBody() );
        question.subject( createQuestionRequestDto.getSubject() );
        question.chooseQuestionType( createQuestionRequestDto.getChooseQuestionType() );
        question.place( createQuestionRequestDto.getPlace() );
        question.answers( createAnswerRequestDtoListToAnswerList( createQuestionRequestDto.getAnswers() ) );

        return question.build();
    }

    protected List<Question> createQuestionRequestDtoListToQuestionList(List<CreateQuestionRequestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Question> list1 = new ArrayList<Question>( list.size() );
        for ( CreateQuestionRequestDto createQuestionRequestDto : list ) {
            list1.add( createQuestionRequestDtoToQuestion( createQuestionRequestDto ) );
        }

        return list1;
    }

    protected Answer updateAnswerRequestDtoToAnswer(UpdateAnswerRequestDto updateAnswerRequestDto) {
        if ( updateAnswerRequestDto == null ) {
            return null;
        }

        AnswerBuilder answer = Answer.builder();

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

    protected Question updateQuestionRequestDtoToQuestion(UpdateQuestionRequestDto updateQuestionRequestDto) {
        if ( updateQuestionRequestDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.id( updateQuestionRequestDto.getId() );
        question.questionBody( updateQuestionRequestDto.getQuestionBody() );
        question.subject( updateQuestionRequestDto.getSubject() );
        question.chooseQuestionType( updateQuestionRequestDto.getChooseQuestionType() );
        question.place( updateQuestionRequestDto.getPlace() );
        question.answers( updateAnswerRequestDtoListToAnswerList( updateQuestionRequestDto.getAnswers() ) );

        return question.build();
    }

    protected List<Question> updateQuestionRequestDtoListToQuestionList(List<UpdateQuestionRequestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Question> list1 = new ArrayList<Question>( list.size() );
        for ( UpdateQuestionRequestDto updateQuestionRequestDto : list ) {
            list1.add( updateQuestionRequestDtoToQuestion( updateQuestionRequestDto ) );
        }

        return list1;
    }
}
