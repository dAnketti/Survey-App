package com.amateurj.amateurj.dto.response;

import com.amateurj.repository.entity.User;
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
    private String email;
    private String phoneNumber;
    private String userType;

    public UserResponseDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phoneNumber = user.getPhoneNumber();
        this.userType = user.getUserType();
    }
}
