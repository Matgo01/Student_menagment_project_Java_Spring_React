
// Import dei fogli di stile e script di Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// Import del file CSS personalizzato
import './App.css';

// Import dei componenti React
import Home from './Home';  
import StudentView from './components/student/StudentView';
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import StudentProfile from "./components/student/StudentProfile";

function App() {
  return (
    // Utilizzo del componente Router per gestire le rotte
    <main className="container mt-5">
      <Router>
        {/* Inclusione del componente NavBar per la navigazione */}
        <NavBar />
        <Routes>
          {/* Definizione delle rotte con i relativi componenti */}
          <Route exact path="/" element={<Home />} />  {/* Aggiunto un percorso assoluto */}
          <Route exact path="/view-students" element={<StudentView />} />
          <Route exact path="/add-students" element={<AddStudent />} />
          <Route exact path="/edit-students/:id" element={<EditStudent />} />
          <Route exact path="/student-profile/:id" element={<StudentProfile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
