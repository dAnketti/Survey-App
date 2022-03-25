package com.amateurj.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserDto {
    private long id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private String className;
    private String branch;
    private int userType;
    private long createdDate;


}
