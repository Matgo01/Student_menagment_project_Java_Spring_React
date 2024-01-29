import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {
    let navigate = useNavigate();

    // State per memorizzare i dati dello studente
    const [student, setStudents] = useState({
        firstName: '',
        lastName: '',
        email: '',
        departement: ''
    });

    const { firstName, lastName, email, departement } = student;

    // Funzione per gestire l'input dell'utente e aggiornare lo stato
    const handleInputChange = (e) => {
        setStudents({ ...student, [e.target.name]: e.target.value });
    };

    // Funzione per salvare uno studente sul server
    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/students", student);
        navigate("/view-students");
    };

    return (
        <div className='col-sm-8 py-2 px-5 '>
            <h2 className="mt-5">Add Student</h2>
            <form onSubmit={(e) => saveStudent(e)}>
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
                {/* Pulsante per salvare */}
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

export default AddStudent;
