package com.pvanquochuy.projectmanagementsystem.service;

import com.pvanquochuy.projectmanagementsystem.model.PlanType;
import com.pvanquochuy.projectmanagementsystem.model.Subscription;
import com.pvanquochuy.projectmanagementsystem.model.User;

public interface SubscriptionService {
    Subscription createSubcription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);

}
