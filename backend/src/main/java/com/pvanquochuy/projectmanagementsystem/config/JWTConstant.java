package com.pvanquochuy.projectmanagementsystem.config;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Base64;

public class JWTConstant {
//    public static final String SECRET_KEY = "    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Tạo khóa 256-bit\n qwq";
    // Tạo khóa 256-bit cho HS256
        public static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Mã hóa khóa dưới dạng Base64
    public static final String SECRET_KEY = Base64.getEncoder().encodeToString(key.getEncoded());
    public static final String JWT_HEADER = "Authorization";
}
