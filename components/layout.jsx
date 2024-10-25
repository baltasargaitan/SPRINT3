// components/Layout.jsx
import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/accounts">Cuentas</Link></li>
                        <li><Link href="/money">Dinero</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/cards">Tarjetas</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 TimeBank. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Layout;
