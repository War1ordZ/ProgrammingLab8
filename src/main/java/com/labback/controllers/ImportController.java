package com.labback.controllers;

import com.labback.data.domain.ImportHistory;
import com.labback.repositories.ImportHistoryRepository;
import com.labback.services.AuthService;
import com.labback.services.ImportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ImportController {

    private final ImportService importService;
    private final ImportHistoryRepository importHistoryRepository;
    private final AuthService authService;

    @PostMapping
    public ResponseEntity<?> importFile(@RequestParam("file") MultipartFile file,
                                        @RequestHeader("Authorization") String authorizationHeader) {
        String username = getUsernameFromHeader(authorizationHeader);
        try {
            importService.importFile(file, username);
            return ResponseEntity.ok("Файл успешно импортирован.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Ошибка при импорте: " + e.getMessage());
        }
    }

    @GetMapping("/history")
    public ResponseEntity<List<ImportHistory>> getImportHistory(@RequestHeader("Authorization") String authorizationHeader) {
        String username = getUsernameFromHeader(authorizationHeader);
        List<ImportHistory> histories;
        if (username.equalsIgnoreCase("admin")) {
            histories = importHistoryRepository.findAll();
        } else {
            histories = importHistoryRepository.findByUsername(username);
        }
        return ResponseEntity.ok(histories);
    }

    private String getUsernameFromHeader(String authorizationHeader) {
        String jwtToken = authorizationHeader.replace("Bearer ", "");
        return authService.getUsernameFromToken(jwtToken);
    }
}
