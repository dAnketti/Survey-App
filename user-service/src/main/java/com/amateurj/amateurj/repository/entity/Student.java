package com.amateurj.amateurj.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "tbl_students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long authId;
    private long turkishIdentityNumber;
    private String name;
    private String email;
    private String phoneNumber;
    private long createdDate;

    @ManyToMany(mappedBy = "students", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("students")
    private Set<Trainer> trainers;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "branch_id")
    @JsonIgnoreProperties("student")
    private Branch branch;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "classroom_id")
    @JsonIgnoreProperties("student")
    private Course course;

}
