import React from 'react';

export function CommissionResults({ commissions, isLoading, error }) {
  if (isLoading) {
    return <p>Calculando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (commissions.length === 0) {
    return <p>No hay datos para mostrar. Seleccione un rango de fechas y calcule.</p>;
  }

  return (
    <ul>
      {commissions.map((c, index) => (
        <li key={index}>
          {c.name}: ${c.totalCommission.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}