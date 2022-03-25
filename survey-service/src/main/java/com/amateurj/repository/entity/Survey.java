package com.amateurj.repository.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="tbl_survey" )
public class Survey implements Serializable {

    private static final long serialVersionUID = -4386512598165629057L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String caption;
    private String className;
    private boolean isDraft;
    private long creatorId;

    private Date updatedDate;
    private Date startDate;
    private Date expirationDate;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;



    @OneToMany(mappedBy = "survey" , orphanRemoval = true)
    private List<Question> questions=new ArrayList<>();

}
