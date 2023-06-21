package com.labback.controllers;

import com.labback.components.WebSocketHandler;
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
    private final WebSocketHandler webSocketHandler;

    @PostMapping("/add")
    public ResponseEntity<?> addGroup(
            @Valid @RequestBody StudyGroup group,
            @RequestHeader("Authorization") String authorizationHeader) {

        String username = getUsernameFromHeader(authorizationHeader);
        group.setOwner(username);
        group.setId(null);
        groupService.saveGroup(group);
        webSocketHandler.sendUpdateToClients();
        return ResponseEntity.ok("Saved");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGroupById(@PathVariable Long id) {
        var group = groupService.getGroupById(id);
        return ResponseEntity.ok(group);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllGroups() {
        var groups = groupService.getAllGroups();
        return ResponseEntity.ok(groups);
    }

    @GetMapping("/page")
    public ResponseEntity<?> getPageGroups(@RequestParam int page,
                                           @RequestParam(defaultValue = "50") int size) {
        Pageable pageable = PageRequest.of(page, size);
        var groupPage = groupService.getPageGroups(pageable);
        return ResponseEntity.ok(groupPage);
    }


    @PostMapping("/{id}")
    public ResponseEntity<?> updateGroupById(@Valid @RequestBody StudyGroup group,
                                             @PathVariable("id") Long id,
                                             @RequestHeader("Authorization") String authorizationHeader) {

        String username = getUsernameFromHeader(authorizationHeader);
        group.setOwner(username);
        group.setId(id);
        groupService.updateGroupById(group, id);
        webSocketHandler.sendUpdateToClients();
        return ResponseEntity.ok(group);
    }

    @GetMapping("/filter/{semester}")
    public ResponseEntity<?> getAllBySemester(@PathVariable("semester") String semester) {
        var filteredGroups = groupService.getAllBySemester(semester);
        return ResponseEntity.ok(filteredGroups);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGroupById(@PathVariable("id") Long id,
                                             @RequestHeader("Authorization") String authorizationHeader) {
        String username = getUsernameFromHeader(authorizationHeader);
        groupService.deleteGroupById(id, username);
        webSocketHandler.sendUpdateToClients();
        return ResponseEntity.ok("Deleted");
    }
    @DeleteMapping("/all")
    public ResponseEntity<?> deleteAllByOwner(@RequestHeader("Authorization") String authorizationHeader){
        String owner = getUsernameFromHeader(authorizationHeader);
        groupService.deleteAllByOwner(owner);
        webSocketHandler.sendUpdateToClients();
        return ResponseEntity.ok("Deleted");
    }
    private String getUsernameFromHeader(String authorizationHeader) {
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        return authService.getUsernameFromToken(jwtToken);
    }
}
