import React from 'react';
import { Link } from 'react-router-dom';

// NavBar component
const NavBar = () => {
    return (
        // Navbar using Bootstrap styling
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                {/* Brand link to home */}
                <Link className="navbar-brand" to={"/"}>SBR Demo</Link>
                
                {/* Toggle button for responsive design */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Navbar content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Link to view all students */}
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/view-students"}>View All Students</Link>
                        </li>
                        
                        {/* Link to add a new student */}
                        <li className="nav-item">
                            <Link className="nav-link" to={"/add-student"}>Add New Student</Link>
                            {/* Fixed typo in the "to" attribute */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
