package com.pvanquochuy.projectmanagementsystem.service;

import com.pvanquochuy.projectmanagementsystem.model.PlanType;
import com.pvanquochuy.projectmanagementsystem.model.Subscription;
import com.pvanquochuy.projectmanagementsystem.model.User;
import com.pvanquochuy.projectmanagementsystem.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{

    @Autowired
    private UserService userService;
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Override
    public Subscription createSubcription(User user) {
        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setUser(user);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
        subscription.setValid(true);
        subscription.setPlanType(PlanType.FREE);

        return  subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription getUserSubscription(Long userId) throws Exception {
        Subscription subscription =  subscriptionRepository.findByUserId(userId);
        if(!isValid(subscription)){
            subscription.setPlanType(PlanType.FREE);
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
            subscription.setSubscriptionStartDate(LocalDate.now());
        }
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription upgradeSubscription(Long userId, PlanType planType) {
        Subscription subscription = subscriptionRepository.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setSubscriptionEndDate(LocalDate.now());
        if(planType.equals(planType.ANNUALLY)){
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
        }else{
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(1));
        }
        return subscriptionRepository.save(subscription);
    }

    @Override
    public boolean isValid(Subscription subscription) {
        if(subscription.getPlanType().equals(PlanType.FREE)){
            return true;
        }
        LocalDate endDate = subscription.getSubscriptionEndDate();
        LocalDate currentDate = LocalDate.now();

        return endDate.isAfter(currentDate) || endDate.isEqual(currentDate);
    }
}
