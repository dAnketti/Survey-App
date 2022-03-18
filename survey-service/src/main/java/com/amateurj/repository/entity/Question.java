package com.amateurj.repository.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name ="tbl_question" )

public class Question{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(mappedBy ="question")
    private List<Answer> answerList;

    private String questionBody;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "survey_id")
    @JsonIgnoreProperties("questionList")
    private Survey survey;
    /**
     * Text = 0
     * MultipleChoice = 1
     * YesNo = 2
     * Numeric = 3
     */
    private String questionType;
    private long createdDate = System.currentTimeMillis();



}
