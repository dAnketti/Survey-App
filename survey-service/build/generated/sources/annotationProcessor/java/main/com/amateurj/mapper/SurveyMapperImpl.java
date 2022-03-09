package com.amateurj.mapper;

import com.amateurj.dto.request.QuestionDto;
import com.amateurj.dto.request.ResponseDto;
import com.amateurj.dto.request.SurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto;
import com.amateurj.dto.response.FindAllSurveyDto.FindAllSurveyDtoBuilder;
import com.amateurj.repository.entity.Question;
import com.amateurj.repository.entity.Question.QuestionBuilder;
import com.amateurj.repository.entity.Response;
import com.amateurj.repository.entity.Response.ResponseBuilder;
import com.amateurj.repository.entity.Survey;
import com.amateurj.repository.entity.Survey.SurveyBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-09T14:20:48+0300",
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
        survey.questionList( questionDtoListToQuestionList( dto.getQuestionList() ) );
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

    protected Question questionDtoToQuestion(QuestionDto questionDto) {
        if ( questionDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.responseList( responseDtoListToResponseList( questionDto.getResponseList() ) );
        question.questionBody( questionDto.getQuestionBody() );
        question.questionType( questionDto.getQuestionType() );

        return question.build();
    }

    protected List<Question> questionDtoListToQuestionList(List<QuestionDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Question> list1 = new ArrayList<Question>( list.size() );
        for ( QuestionDto questionDto : list ) {
            list1.add( questionDtoToQuestion( questionDto ) );
        }

        return list1;
    }
}
