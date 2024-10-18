package com.pvanquochuy.projectmanagementsystem.repository;

import com.pvanquochuy.projectmanagementsystem.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    Subscription findByUserId(Long userId);
}
