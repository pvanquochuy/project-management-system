package com.pvanquochuy.projectmanagementsystem.repository;

import com.pvanquochuy.projectmanagementsystem.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
