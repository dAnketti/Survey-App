package com.amateurj.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="tbl_answer" )

public class Answer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int answerOrder;
    private String answer;

    @ManyToOne
    @JoinColumn(name="question_id", referencedColumnName="id")
    @ToString.Exclude
    @JsonIgnore
    private Question question;


//    @ManyToOne(fetch = FetchType.LAZY )
//    @JoinColumn(name = "question_id")
//    private Question question;




}
