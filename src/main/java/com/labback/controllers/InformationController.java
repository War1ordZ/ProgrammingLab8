package com.labback.controllers;

import com.labback.services.InformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/info")
@CrossOrigin("*")
public class InformationController {
    private final InformationService infoService;

    @GetMapping("/education")
    public ResponseEntity<?> getFormsOfEducation() {
        List<String> forms = infoService.getAllFormOfEducation();
        return ResponseEntity.ok(forms);
    }

    @GetMapping("/info")
    public ResponseEntity<?> getInformation() {
        List<String> info = infoService.getInfoAboutCollection();
        return ResponseEntity.ok(info);
    }
}
