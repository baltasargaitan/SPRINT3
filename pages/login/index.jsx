import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../components/AuthContext'; // Ajusta la ruta según tu estructura
import styles from './Login.module.css'

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.nombreUsuario === nombreUsuario && user.contrasenia === contrasenia);

        if (user) {
            login(nombreUsuario);
            router.push('/');
        } else {
            setMensajeError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div className={styles.container}>
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
                <div className="Crear">
                    <button type="submit">Iniciar sesión</button>
                    <p>
                        ¿No tienes cuenta? <Link href="/login/signup">Crea una cuenta</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
