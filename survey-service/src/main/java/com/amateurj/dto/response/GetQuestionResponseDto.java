package com.amateurj.dto.response;

import com.amateurj.dto.request.CreateAnswerRequestDto;
import com.amateurj.repository.entity.Answer;
import com.amateurj.repository.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetQuestionResponseDto {

    private long id;
//    private int order;
    private String questionBody;
    private String subject;
    private String chooseQuestionType;
    private List<Answer> answers;
//    private List<Answer> answerGivenByUsers;

    public GetQuestionResponseDto(Question question) {
        this.id = question.getId();
//        this.order = question.getOrder();
        this.questionBody = question.getQuestionBody();
        this.subject = question.getSubject();
        this.chooseQuestionType = question.getChooseQuestionType();
//        this.answers = question.getAnswers();
//        this.answerGivenByUsers = question.getAnswerGivenByUsers();
    }
}
