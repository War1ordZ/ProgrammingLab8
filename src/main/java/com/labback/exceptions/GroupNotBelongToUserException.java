package com.labback.exceptions;

public class GroupNotBelongToUserException extends RuntimeException {
    public GroupNotBelongToUserException(String message) {
        super(message);
    }
}

