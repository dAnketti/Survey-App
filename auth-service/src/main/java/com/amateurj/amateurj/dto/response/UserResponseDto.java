package com.amateurj.amateurj.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserResponseDto {
    private long id;
    private String name;
    private String phoneNumber;
    private String className;
    private String branch;
    private int userType;
}
