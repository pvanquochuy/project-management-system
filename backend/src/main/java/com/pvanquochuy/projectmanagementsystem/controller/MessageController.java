package com.pvanquochuy.projectmanagementsystem.controller;

import com.pvanquochuy.projectmanagementsystem.model.Chat;
import com.pvanquochuy.projectmanagementsystem.model.Message;
import com.pvanquochuy.projectmanagementsystem.model.User;
import com.pvanquochuy.projectmanagementsystem.request.CreateMessageRequest;
import com.pvanquochuy.projectmanagementsystem.service.MessageService;
import com.pvanquochuy.projectmanagementsystem.service.ProjectService;
import com.pvanquochuy.projectmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request) throws Exception{
        User user = userService.findUserById(request.getSenderId());
        Chat chats = projectService.getProjectById(request.getProjectId()).getChat();
        if(chats == null) throw new Exception("Chat not found");
        Message sentMessage = messageService.sendMessage(request.getSenderId(),
                request.getProjectId(), request.getContent());
        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId) throws Exception {
        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }
}
