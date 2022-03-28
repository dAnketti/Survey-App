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
@Table(name = "tbl_classroom")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long authId;
    private String className;
    private long startDate;
    private long endDate;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    @JsonIgnoreProperties("classroom")
    private Branch branch;

    @ManyToMany(mappedBy = "courses", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("classroom")
    private Set<Trainer> trainers;


    @OneToMany(mappedBy = "course")
    @JsonIgnoreProperties("classroom")
    private Set<Student> students;
}
