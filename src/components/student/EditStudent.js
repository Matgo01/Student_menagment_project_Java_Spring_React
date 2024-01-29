import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudents] = useState({
        firstName: '',
        lastName: '',
        email: '',
        departement: ''
    });

    const { firstName, lastName, email, departement } = student;

    // Effettua una chiamata al server per ottenere i dettagli dello studente da modificare
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const result = await axios.get(
                `http://localhost:9192/students/student/${id}`
            );
            setStudents(result.data);
        } catch (error) {
            console.error("Error loading student:", error);
        }
    };

    // Funzione per gestire l'input dell'utente e aggiornare lo stato
    const handleInputChange = (e) => {
        setStudents({ ...student, [e.target.name]: e.target.value });
    };

    // Funzione per aggiornare le informazioni dello studente sul server
    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9192/students/update/${id}`, student);
            navigate("/view-students");
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <div className='col-sm-8 py-2 px-5 '>
            <h2 className="mt-5">Edit Student</h2>
            <form onSubmit={(e) => updateStudent(e)}>
                {/* Input per il nome dello studente */}
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>
                        First Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {/* Input per il cognome dello studente */}
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>
                        Last Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {/* Input per l'email dello studente */}
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {/* Input per il dipartimento dello studente */}
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='departement'>
                        Department
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="departement"
                        id="departement"
                        required
                        value={departement}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {/* Pulsante per salvare le modifiche */}
                <div>
                    <button type="submit" className="btn btn-outline-success btn-lg">
                        Save
                    </button>
                </div>
                {/* Link per annullare e tornare alla visualizzazione degli studenti */}
                <div>
                    <Link to={"/view-students"} className="btn btn-outline-warning btn-lg">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default EditStudent;
