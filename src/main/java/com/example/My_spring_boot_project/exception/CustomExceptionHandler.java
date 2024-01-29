package com.example.My_spring_boot_project.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class CustomExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
   public Map<String,String> handleException(MethodArgumentNotValidException ex){
       Map<String,String> errors = new HashMap<>();
       //ex.getBindingResult().getFieldError().forEach(error->errors.put(error.getField(),error.getDefualtMessagge()));
       return errors;
   }
   @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(StudentNotFoundException.class)
    public Map<String,String> userNotFound(StudentNotFoundException ex){
        Map<String,String> error=new HashMap<>();
        error.put("error", ex.getMessage());
        return error;
   }
   @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(StudentAlreadyExistsException.class)
    public Map<String,String> userNotFound(StudentAlreadyExistsException ex){
        Map<String,String> error=new HashMap<>();
        error.put("error",ex.getMessage());
        return error;
   }
}
