package com.pvanquochuy.projectmanagementsystem.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthResponse {
    private String jwt;
    private String message;
}
