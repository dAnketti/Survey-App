package com.amateurj.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tblauth")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Auth implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
   private String name;
   private String lastName;
   private String email;
   private int status;
   private long createdDate;
   private long updateDate;

}
