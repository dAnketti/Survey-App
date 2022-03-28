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
@Table(name = "tbl_teachers")
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long authId;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private String userType;
    private long createdDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "branch_id")
    @JsonIgnoreProperties("trainers")
    private Branch branch;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "trainers_courses",
            joinColumns = {
            @JoinColumn(name = "trainer_id",referencedColumnName = "id", nullable = false)},
            inverseJoinColumns = { @JoinColumn(name = "course_id", referencedColumnName = "id", nullable = false)})
    @JsonIgnoreProperties("trainers")
    private Set<Course> courses;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "trainers_students",
            joinColumns = {
                    @JoinColumn(name = "trainer_id",referencedColumnName = "id", nullable = false)},
            inverseJoinColumns = { @JoinColumn(name = "student_id", referencedColumnName = "id", nullable = false)})
    @JsonIgnoreProperties("trainers")
    private Set<Student> students;


}
