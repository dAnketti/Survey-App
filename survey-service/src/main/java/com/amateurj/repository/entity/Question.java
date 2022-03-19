package com.amateurj.repository.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;


import javax.persistence.*;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @ElementCollection
    @CollectionTable(name = "question_choices_mapping",
            joinColumns = {@JoinColumn(name = "question_id", referencedColumnName = "id")})
    @MapKeyColumn(name = "choices_id")
    private Map<Integer,String> choicesBody;

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
