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
    private String answerBody;
    /**
     * Text = 0
     * MultipleChoice = 1
     * YesNo = 2
     * Numeric = 3
     */
    private String answerType;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "question_id")
    private Question question;

    private long createdDate = System.currentTimeMillis();





}
