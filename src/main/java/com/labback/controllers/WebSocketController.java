package com.labback.controllers;

import com.labback.data.domain.groups.StudyGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public WebSocketController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/studyGroup")
    public void updateStudyGroup(StudyGroup studyGroup) {

        messagingTemplate.convertAndSend("/topic/studyGroup", studyGroup);
    }
}

