// pages/_app.js
import React from 'react';
import { AuthProvider } from '../components/AuthContext'; // Ajusta la ruta según tu estructura
import Layout from '../components/layout'; // Asegúrate de que esta ruta sea correcta

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
};

export default MyApp;
