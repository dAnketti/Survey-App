package com.amateurj.repository.entity;

import lombok.*;


import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="tbl_response" )

public class Response implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String responseBody;
    /**
     * Text = 0
     * MultipleChoice = 1
     * YesNo = 2
     * Numeric = 3
     */
    private String responseType;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "question_id")
    private Question question;

    private long createdDate = System.currentTimeMillis();





}
