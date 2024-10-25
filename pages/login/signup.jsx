// pages/login/signup.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../components/AuthContext'; // Asegúrate de que la ruta sea correcta
import styles from './login.module.css'

const Signup = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const router = useRouter();
    const { register } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.nombreUsuario === nombreUsuario);

        if (userExists) {
            setMensajeError('El nombre de usuario ya existe');
        } else {
            register(nombreUsuario, contrasenia);
            router.push('/login'); // Redirige al login
        }
    };

    return (
        <div className={styles.container}>
            <h1>Crear una cuenta</h1>
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
                        onChange={(e) => setNombreUsuario(e.target.value)}
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
                        onChange={(e) => setContrasenia(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    );
};

export default Signup;
