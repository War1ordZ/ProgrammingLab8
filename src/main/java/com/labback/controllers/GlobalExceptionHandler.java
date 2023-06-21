package com.labback.controllers;

import com.labback.data.dto.ErrorResponseDTO;
import com.labback.exceptions.GroupNotBelongToUserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GroupNotBelongToUserException.class)
    public ResponseEntity<?> handleJwtIncorrectException(GroupNotBelongToUserException e) {
        String errorMessage = "Aces denied. Different owner";
        ErrorResponseDTO error = ErrorResponseDTO.builder()
                .message(errorMessage)
                .build();
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(error);
    }

}
