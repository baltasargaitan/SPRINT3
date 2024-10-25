// Cuentas.js
import React from 'react';
import './cuentas.css';
import { useDinero } from './DineroContext'; // Importa el hook para acceder al contexto

const Cuenta = ({ title, amount, currency }) => {
  return (
    <div className="cuenta">
      <h2>{title}</h2>
      <p className="saldo">{amount} {currency}</p>
    </div>
  );
};

const Cuentas = () => {
  const { dinero } = useDinero(); // Obtén el dinero del contexto

  return (
    <div className="cuentas-container">
        <Cuenta title="Cuenta en Pesos" amount={dinero} currency="ARS" />
    </div>
  );
};

export default Cuentas;
