package com.pvanquochuy.projectmanagementsystem.service;

import com.pvanquochuy.projectmanagementsystem.model.User;
import org.springframework.stereotype.Service;

public interface UserService {

    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProjectSize(User user, int number);


}
