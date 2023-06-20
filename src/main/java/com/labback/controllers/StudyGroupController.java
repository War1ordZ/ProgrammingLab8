package com.labback.controllers;

import com.labback.data.domain.groups.StudyGroup;
import com.labback.services.AuthService;
import com.labback.services.StudyGroupService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/groups")
@CrossOrigin("*")
public class StudyGroupController {
    private final StudyGroupService groupService;
    private final AuthService authService;
    @PostMapping("/add")
    public ResponseEntity<?> addGroup(
            @Valid @RequestBody StudyGroup group,
            @RequestHeader("Authorization") String authorizationHeader){

        String jwtToken = authorizationHeader.replace("Bearer ", "");
        String username = authService.getUsernameFromToken(jwtToken);
        group.setOwner(username);

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
        var groups = groupService.getAllGroups();
        return ResponseEntity.ok(groups);
    }

    @GetMapping("/page")
    public ResponseEntity<?> getPageGroups(@RequestParam int page, @RequestParam int size){
        Pageable pageable = PageRequest.of(page, size);
        var groupPage = groupService.getPageGroups(pageable);
        return ResponseEntity.ok(groupPage);
    }


    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateGroupById(@Valid @RequestBody StudyGroup group,
                                             @PathVariable("id") Long id,
                                             @RequestHeader("Authorization") String authorizationHeader){

        String jwtToken = authorizationHeader.replace("Bearer ", "");
        String username = authService.getUsernameFromToken(jwtToken);
        group.setOwner(username);
        group.setId(id);
        groupService.updateGroupById(group, id);
        return ResponseEntity.ok(group);
    }

}
