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
@Table(name = "tbl_branch")
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String country;
    private String city;
    private String address;
    private String phoneNumber;
    private String email;

    @OneToMany(mappedBy = "branch")
    @JsonIgnoreProperties("branch")
    private Set<Course> courses;

    @OneToOne
    @JoinColumn(name = "manager_id")
    @JsonIgnoreProperties("branch")
    private Manager manager;

    @OneToMany(mappedBy = "branch")
    @JsonIgnoreProperties("branch")
    private Set<Trainer> trainers;

    @OneToMany(mappedBy = "branch")
    @JsonIgnoreProperties("branch")
    private Set<Student> students;
}
