package com.amateurj.amateurj.repository.entity;

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
@Table(name = "tbl_user")
public class User {
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

    //private int status;
    //private long updateDate;

}
