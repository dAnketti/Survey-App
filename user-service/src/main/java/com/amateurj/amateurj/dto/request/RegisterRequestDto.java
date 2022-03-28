package com.amateurj.amateurj.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RegisterRequestDto {
    @NotNull(message = "İsim boş geçilemez!")
    @Size(min = 2)
    private String name;
    @Email(message = "Lütfen geçerli bir mail adresi giriniz!")
    @NotNull(message = "Email adresi boş geçilemez!")
    private String email;
    @NotNull(message = "Şifre boş geçilemez")
    @Size(min = 8, max = 16, message = "Şifreniz en az 8, en fazla 16 karakter uzunluğunda olmalıdır.")
    private String password;
    private String phoneNumber;
    //private int status;
    private long createdDate = System.currentTimeMillis();
    //private long updateDate;
}
