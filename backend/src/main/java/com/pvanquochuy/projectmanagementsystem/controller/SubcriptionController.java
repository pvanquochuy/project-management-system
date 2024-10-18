package com.pvanquochuy.projectmanagementsystem.controller;

import com.pvanquochuy.projectmanagementsystem.model.PlanType;
import com.pvanquochuy.projectmanagementsystem.model.Subscription;
import com.pvanquochuy.projectmanagementsystem.model.User;
import com.pvanquochuy.projectmanagementsystem.service.SubscriptionService;
import com.pvanquochuy.projectmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubcriptionController {
    @Autowired
    private SubscriptionService subscriptionService;
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<Subscription> getUserSubscriptions(
            @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);

        Subscription subscription = subscriptionService.getUserSubscription(user.getId());

        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

    @GetMapping("/upgrade")
    public ResponseEntity<Subscription> upgradeSubscriptions(
            @RequestHeader("Authorization") String jwt,
            @RequestParam PlanType planType) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);

        Subscription subscription = subscriptionService.upgradeSubscription(user.getId(), planType);

        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

}
