package com.amateurj.repository.entity;



import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
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
//    private int order;

//    @OneToMany(mappedBy ="question")
//    private List<Answer> answerGivenByUsers;

    @ElementCollection
    @CollectionTable(name = "question_answers_mapping",
            joinColumns = {@JoinColumn(name = "question_id", referencedColumnName = "id")})
    @MapKeyColumn(name = "answers_id")
    private Map<Integer,String> answers;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;



}
