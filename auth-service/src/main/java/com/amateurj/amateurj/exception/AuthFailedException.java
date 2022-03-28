package com.amateurj.amateurj.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthFailedException extends RuntimeException{

    public AuthFailedException(String message) {
        super(message);
    }
}
