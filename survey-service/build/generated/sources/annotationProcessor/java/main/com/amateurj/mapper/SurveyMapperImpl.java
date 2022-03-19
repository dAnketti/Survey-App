package com.amateurj.mapper;

import com.amateurj.dto.request.AnswerDto;
import com.amateurj.dto.request.QuestionRequestDto;
import com.amateurj.dto.request.SurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto.FindAllSurveyDtoBuilder;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Answer.AnswerBuilder;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import com.amateurj.repository.entity.Survey;
import com.amateurj.repository.entity.Survey.SurveyBuilder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-19T15:16:09+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class SurveyMapperImpl implements SurveyMapper {

    @Override
    public Survey toSurvey(SurveyDto dto) {
        if ( dto == null ) {
            return null;
        }

        SurveyBuilder survey = Survey.builder();

        survey.title( dto.getTitle() );
        survey.subjects( dto.getSubjects() );
        survey.className( dto.getClassName() );
        survey.questionList( questionRequestDtoListToQuestionList( dto.getQuestionList() ) );
        survey.createdDate( dto.getCreatedDate() );

        return survey.build();
    }

    @Override
    public FindAllSurveyDto toFindAllSurvey(Survey survey) {
        if ( survey == null ) {
            return null;
        }

        FindAllSurveyDtoBuilder findAllSurveyDto = FindAllSurveyDto.builder();

        findAllSurveyDto.id( survey.getId() );
        findAllSurveyDto.title( survey.getTitle() );
        findAllSurveyDto.subjects( survey.getSubjects() );
        findAllSurveyDto.className( survey.getClassName() );

        return findAllSurveyDto.build();
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

    protected Question questionRequestDtoToQuestion(QuestionRequestDto questionRequestDto) {
        if ( questionRequestDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.answerList( answerDtoListToAnswerList( questionRequestDto.getAnswerList() ) );
        question.questionBody( questionRequestDto.getQuestionBody() );
        Map<Integer, String> map = questionRequestDto.getChoicesBody();
        if ( map != null ) {
            question.choicesBody( new HashMap<Integer, String>( map ) );
        }
        question.questionType( questionRequestDto.getQuestionType() );

        return question.build();
    }

    protected List<Question> questionRequestDtoListToQuestionList(List<QuestionRequestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Question> list1 = new ArrayList<Question>( list.size() );
        for ( QuestionRequestDto questionRequestDto : list ) {
            list1.add( questionRequestDtoToQuestion( questionRequestDto ) );
        }

        return list1;
    }
}
