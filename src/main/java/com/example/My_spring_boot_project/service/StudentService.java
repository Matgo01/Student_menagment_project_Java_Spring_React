package com.example.My_spring_boot_project.service;

import com.example.My_spring_boot_project.exception.StudentAlreadyExistsException;
import com.example.My_spring_boot_project.exception.StudentNotFoundException;
import com.example.My_spring_boot_project.model.Student;
import com.example.My_spring_boot_project.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository studentRepository;

    // Aggiunge uno studente, lanciando un'eccezione se lo studente è già presente
    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())) {
            throw new StudentAlreadyExistsException(student.getEmail() + " already exists");
        }
        return studentRepository.save(student);
    }

    // Restituisce tutti gli studenti
    @Override
    public List<Student> getStudent() {
        return studentRepository.findAll();
    }

    // Aggiorna uno studente in base all'ID fornito
    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(std1 -> {
            std1.setFirstName(student.getFirstName());
            std1.setLastName(student.getLastName());
            std1.setEmail(student.getEmail());
            std1.setDepartment(student.getDepartment());
            return studentRepository.save(std1);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found"));
    }

    // Verifica se uno studente con l'email specificata è già presente
    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmil(email).isPresent();
    }

    // Restituisce uno studente in base all'ID fornito, lanciando un'eccezione se non trovato
    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException("Sorry, student with this id not found: " + id));
    }

    // Elimina uno studente in base all'ID fornito, lanciando un'eccezione se non trovato
    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException("Sorry, student not found");
        }
    }
}

