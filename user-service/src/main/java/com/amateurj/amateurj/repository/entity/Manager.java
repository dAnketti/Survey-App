package com.amateurj.amateurj.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "tbl_managers")
public class Manager {
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


    @OneToOne
    @JoinColumn(name = "branch_id")
    @JsonIgnoreProperties("manager")
    private Branch branch;
}
