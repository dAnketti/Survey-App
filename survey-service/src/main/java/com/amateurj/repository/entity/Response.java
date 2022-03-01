package com.amateurj.repository.entity;

import lombok.*;


import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table(name ="tbl_response" )

public class Response implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String response;
    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "question_id")
    private Question question;
    @Enumerated(EnumType.STRING)
    private QuestionType questionType;
    private long date;


//    private boolean isText;
//    private boolean isNumeric;
//    private boolean isYesNo;
//
//
//    public Response (  String response, Question question, long date ) {
//
//        this.response = response;
//        this.question = question;
//        this.date = date;
//
//        this.isText = false;
//        this.isNumeric = false;
//        this.isYesNo = false;
//
//    }
}
