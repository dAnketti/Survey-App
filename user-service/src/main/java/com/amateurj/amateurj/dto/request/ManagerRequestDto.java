package com.amateurj.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ManagerRequestDto {
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private long branchId;
}
