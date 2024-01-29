package com.example.My_spring_boot_project.Controller;

import com.example.My_spring_boot_project.model.Student;
import com.example.My_spring_boot_project.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Abilita il supporto CORS per consentire le richieste provenienti da http://localhost:3000
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService studentService;

    // Gestisce le richieste GET per ottenere tutti gli studenti
    @GetMapping
    public ResponseEntity<List<Student>> getStudent() {
        // Restituisce una risposta HTTP con la lista degli studenti e lo stato "FOUND" (200)
        return new ResponseEntity<>(studentService.getStudent(), HttpStatus.FOUND);
    }

    // Gestisce le richieste POST per aggiungere uno studente
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        // Restituisce lo studente appena aggiunto
        return studentService.addStudent(student);
    }

    // Gestisce le richieste PUT per aggiornare uno studente
    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id) {
        // Restituisce lo studente aggiornato
        return studentService.updateStudent(student, id);
    }

    // Gestisce le richieste DELETE per eliminare uno studente
    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id) {
        // Elimina lo studente con l'ID specificato
        studentService.deleteStudent(id);
    }

    // Gestisce le richieste GET per ottenere uno studente in base all'ID
    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable Long id) {
        // Restituisce lo studente con l'ID specificato
        return studentService.getStudentById(id);
    }
}
