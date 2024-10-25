
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const LandPage = () => {
    const navigate = useNavigate();
    const nombreUsuario = localStorage.getItem('usuario')?.split(': ')[1];

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('contrasenia');
        navigate('/login');
    };

    return (
        <div className="landpage-container">
            <h1>¡Hola, {nombreUsuario}!</h1>
            <p>Bienvenido a Time Bank.</p>

        </div>
    );
};

export default LandPage;
