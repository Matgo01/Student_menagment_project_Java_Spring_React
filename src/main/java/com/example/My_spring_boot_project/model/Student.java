package com.example.My_spring_boot_project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    // Identificatore univoco generato automaticamente per ogni studente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Nome dello studente
    private String firstName;

    // Cognome dello studente
    private String lastName;

    // Indirizzo email dello studente, con annotazione NaturalId per garantire univocità
    @NaturalId(mutable = true)
    private String email;

    // Dipartimento di appartenenza dello studente
    private String department;
}
