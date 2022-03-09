package com.amateurj.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResponseDto {

    private String responseBody;
    private String responseType;
    private long createdDate = System.currentTimeMillis();

}
