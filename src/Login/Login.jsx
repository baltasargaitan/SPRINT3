import "./Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta

function Login() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const manejoNombreUsuarioCambio = (event) => setNombreUsuario(event.target.value);
    const manejoContraseniaCambio = (event) => setContrasenia(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const NombreUsuarioGuardado = localStorage.getItem('usuario')?.split(': ')[1];
        const ContraseniaGuardado = localStorage.getItem('contrasenia')?.split(': ')[1];

        if (!NombreUsuarioGuardado || !ContraseniaGuardado) {
            setMensajeError('Cuenta no encontrada, proba creando tu cuenta');
            return;
        }

        if (nombreUsuario === NombreUsuarioGuardado && contrasenia === ContraseniaGuardado) {
            login();
            navigate('/inicio'); // Redirige a la página principal después de iniciar sesión
        } else {
            setMensajeError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='inicioSesion'>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                {mensajeError && <p>{mensajeError}</p>}
                <div>
                    <label htmlFor="nombreUsuario"></label>
                    <input
                        type="text"
                        id="nombreUsuario"
                        name="nombreUsuario"
                        value={nombreUsuario}
                        placeholder="Nombre de usuario:"
                        onChange={manejoNombreUsuarioCambio}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contrasenia"></label>
                    <input
                        type="password"
                        id="contrasenia"
                        name="contrasenia"
                        value={contrasenia}
                        placeholder="Ingrese su contraseña:"
                        onChange={manejoContraseniaCambio}
                        required
                    />
                </div>
                <div className="Crear">
                <button type="submit">Iniciar sesión</button>
                <p>¿No tienes cuenta? <a href="/signup">Crea una cuenta</a></p>
                </div>

            </form>
        </div>
    );
}

export default Login;
