package com.pvanquochuy.projectmanagementsystem.service;

import com.pvanquochuy.projectmanagementsystem.model.Chat;
import com.pvanquochuy.projectmanagementsystem.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService{

    private ChatRepository chatRepository;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
