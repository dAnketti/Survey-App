package com.amateurj.repository.entity;



import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name ="tbl_question" )

public class Question{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String questionBody;
    private String subject;
    private String chooseQuestionType;
    private int place;
//    private int order;

//    @OneToMany(mappedBy ="question")
//    private List<Answer> answerGivenByUsers;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;



}
