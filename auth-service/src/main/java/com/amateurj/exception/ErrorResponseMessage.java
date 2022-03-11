package com.amateurj.exception;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponseMessage {
    private int status;

    private String message;

    private String path;

    private long timestamp = new Date().getTime();

    private Map<String, String> validationErrors;

    public ErrorResponseMessage(int status, String message, String path) {
        this.status = status;
        this.message = message;
        this.path = path;
    }
}
