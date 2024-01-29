package com.example.My_spring_boot_project.repository;

import com.example.My_spring_boot_project.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Long> {

    Optional<Student> findByEmil(String email);
}
