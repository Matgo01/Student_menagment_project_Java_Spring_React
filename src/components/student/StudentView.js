import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const StudentView = () => {
    // State per memorizzare la lista degli studenti e la stringa di ricerca
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    // Effettua una chiamata al server per ottenere la lista degli studenti
    useEffect(() => {
        loadStudents();
    }, []);

    // Funzione per caricare gli studenti dal server
    const loadStudents = async () => {
        try {
            // Effettua una richiesta GET al server per ottenere gli studenti
            const result = await axios.get(
                "http://localhost:9192/students",
                {
                    validateStatus: () => {
                        return true;
                    },
                }
            );

            // Controlla lo status della risposta e imposta lo stato degli studenti se la richiesta ha successo
            if (result.status === 302) {
                setStudents(result.data);
            }
        } catch (error) {
            console.error("Error loading students:", error);
        }
    };

    // Funzione per gestire l'eliminazione di uno studente
    const handleDelete = async (id) => {
        try {
            // Effettua una richiesta DELETE al server per eliminare lo studente
            await axios.delete(`http://localhost:9192/students/delete/${id}`);
            // Ricarica la lista degli studenti dopo l'eliminazione
            loadStudents();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <section>
            {/* Componente di ricerca */}
            <Search search={search} setSearch={setSearch} />

            {/* Tabella per visualizzare gli studenti */}
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {/* Mappa sugli studenti e visualizzazione nelle righe della tabella */}
                    {students
                        .filter((st) => st.firstName.toLowerCase().includes(search))
                        .map((student, index) => (
                            <tr key={student.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.departement}</td>
                                {/* Link alla visualizzazione del profilo studente */}
                                <td className="mx-2">
                                    <Link to={`/student-profile/${student.id}`} className="btn btn-info">
                                        <FaEye />
                                    </Link>
                                </td>
                                {/* Link alla modifica dello studente */}
                                <td className="mx-2">
                                    <Link to={`/edit-students/${student.id}`} className="btn btn-warning">
                                        <FaEdit />
                                    </Link>
                                </td>
                                {/* Pulsante per eliminare lo studente */}
                                <td className="mx-2">
                                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
}

export default StudentView;
