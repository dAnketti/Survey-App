package com.amateurj.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class BranchRequestDto {
    private String name;
    private String country;
    private String city;
    private String address;
    private String phoneNumber;
    private String email;
}
