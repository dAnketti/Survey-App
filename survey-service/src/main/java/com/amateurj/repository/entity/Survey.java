package com.amateurj.repository.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="tbl_survey" )
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String subjects;
    private String className;
    private boolean isDraft;
//    private long creatorId;

    @OneToMany(mappedBy = "survey")
    @JsonIgnoreProperties("survey")
    private List<Question> questionList;


    private long createdDate = System.currentTimeMillis();

}
