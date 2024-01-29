package com.example.My_spring_boot_project.service;

import com.example.My_spring_boot_project.model.Student;

import java.util.List;

public interface IStudentService {
    Student addStudent(Student student);

    List<Student> getStudent();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);
}
