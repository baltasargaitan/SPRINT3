
import '../styles/Inicio.module.css';

const Inicio = () => {

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('contrasenia');
        navigate('/login');
    };

    return (
        
        <div className="inicio">
            <h1>¡Hola!</h1>
            <p>Bienvenido a Time Bank.</p>

        </div>
    );
};

export default Inicio;
