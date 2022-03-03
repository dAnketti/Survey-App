package com.amateurj.repository.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="tbl_survey" )
public class Survey implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @OneToMany(mappedBy = "survey")
    private List<Question> questions;
//    private String subjects;

    private long createdDate = System.currentTimeMillis();

}
