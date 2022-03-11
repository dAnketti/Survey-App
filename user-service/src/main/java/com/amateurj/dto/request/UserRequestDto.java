package com.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserRequestDto {
    private long authId;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    /*private String className;
    private String branch;
    private int userType;*/
    private long createdDate;
}
