import { createContext, useContext, useState } from 'react';

// Crea el contexto
const AuthContext = createContext();

// Proveedor de contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (nombreUsuario) => {
        setUser(nombreUsuario);
        // Otras acciones de inicio de sesión
    };

    const register = (nombreUsuario, contrasenia) => {
        // Lógica para registrar el usuario, como guardar en localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ nombreUsuario, contrasenia });
        localStorage.setItem('users', JSON.stringify(users));
    };

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
