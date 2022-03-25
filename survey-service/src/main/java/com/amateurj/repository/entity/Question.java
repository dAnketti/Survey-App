package com.amateurj.repository.entity;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name ="tbl_question" )

public class Question implements Serializable {

    private static final long serialVersionUID = -1465536408419343425L;
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

    @OneToMany(mappedBy = "question",orphanRemoval = true)
    private List<Answer> answers=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name="survey_id", referencedColumnName="id")
    @ToString.Exclude
    @JsonIgnore
    private Survey survey;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;



}
