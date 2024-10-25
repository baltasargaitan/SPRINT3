import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonTop, setButtonTop] = useState(window.innerHeight / 2 - 20); // Posición inicial del botón
  const [isDragging, setIsDragging] = useState(false); // Estado para saber si estamos arrastrando
  const [buttonOffsetY, setButtonOffsetY] = useState(0); // Offset para el arrastre
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setButtonTop(e.clientY - buttonOffsetY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setButtonOffsetY(e.clientY - buttonTop);
    };

    const buttonElement = document.querySelector('.sidebar-toggle');
    if (buttonElement) {
      buttonElement.addEventListener('mousedown', handleMouseDown);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (buttonElement) {
        buttonElement.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [isDragging, buttonTop, buttonOffsetY]);

  return (
    <div className="sidebar-container">
        <button
          className={`sidebar-toggle ${isOpen ? 'open' :''}`}
          onClick={toggleSidebar}
          style={{ top: buttonTop }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`sidebar ${isOpen ? 'open' :''}`}>
            <ul>
              <li><Link to="/inicio">Inicio</Link></li>
              <li><Link to="/prestamos">Préstamos</Link></li>
              <li><Link to="/Transferencias">Transferencias</Link></li>
              <li><Link to="/cuentas">Cuentas</Link></li>
              <li><Link to="/tarjetas">Tarjetas</Link></li>
              <li><Link to="/convertidor">Conversor de moneda</Link></li>
              <li><Link to="/helpcenter">Centro de ayuda</Link></li>
              <li><Link to="/">Cerrar Sesión</Link></li>
            </ul>
            </div>

      </div>
  );
};

export default Sidebar;
