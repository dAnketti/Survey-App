package com.amateurj.mapper;

import com.amateurj.dto.request.CreateSurveyRequestDto;
import com.amateurj.dto.request.UpdateSurveyRequestDto;
import com.amateurj.repository.entity.Survey;
import com.amateurj.repository.entity.Survey.SurveyBuilder;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-23T22:17:22+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 17.0.2 (Oracle Corporation)"
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

        return survey.build();
    }
}
