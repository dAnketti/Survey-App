package com.amateurj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AuthServiceSpring {
    public static void main ( String[] args ) {
        SpringApplication.run ( AuthServiceSpring.class,args );
    }
}
