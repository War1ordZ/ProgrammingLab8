package com.labback.controllers;

import com.labback.data.dto.InfoDTO;
import com.labback.services.InformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/info")
@CrossOrigin("*")
public class InformationController {
    private final InformationService infoService;

    @GetMapping("/education")
    public ResponseEntity<?> getFormsOfEducation() {
        InfoDTO info = new InfoDTO(infoService.getAllFormOfEducation());
        return ResponseEntity.ok(info);
    }

    @GetMapping("/semester")
    public ResponseEntity<?> getSemesters() {
        InfoDTO info = new InfoDTO(infoService.getAllSemesters());
        return ResponseEntity.ok(info);
    }

    @GetMapping("/info")
    public ResponseEntity<?> getInformation() {
        InfoDTO info = new InfoDTO(
                infoService.getInfoAboutCollection()
        );
        return ResponseEntity.ok(info);
    }
}
