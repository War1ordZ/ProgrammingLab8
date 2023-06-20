package com.labback.controllers;

import com.labback.data.domain.groups.StudyGroup;
import com.labback.services.StudyGroupService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/groups")
@CrossOrigin("*")
public class StudyGroupController {
    private final StudyGroupService groupService;

    @PostMapping("/add")
    public ResponseEntity<?> addGroup(@Valid @RequestBody StudyGroup group){
        groupService.saveGroup(group);
        return ResponseEntity.ok("Saved");
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getGroupById(@PathVariable Long id){
        var group = groupService.getGroupById(id);
        return ResponseEntity.ok(group);
    }
    @GetMapping("/all")
    public ResponseEntity<?> getAllGroups(){
        return null;
    }

}
