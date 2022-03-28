package com.amateurj.amateurj.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tbl_auth")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
   private String name;
   private String email;
   private String password;
   private String phoneNumber;
   private String userType;
   private long createdDate;

}
