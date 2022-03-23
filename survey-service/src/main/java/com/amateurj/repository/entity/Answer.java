package com.amateurj.repository.entity;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "question_id")
    private Question question;


//    @ManyToOne(fetch = FetchType.LAZY )
//    @JoinColumn(name = "question_id")
//    private Question question;




}
