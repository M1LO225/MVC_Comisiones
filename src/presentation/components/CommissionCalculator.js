import React from 'react';
import { useCommissionCalculator } from '../hooks/useCommissionCalculator';
import { CommissionResults } from './CommissionResults';
// (Aquí podrías importar un CSS específico para este componente, ej: './CommissionCalculator.css')

export function CommissionCalculator() {
  // 1. Usa el Hook para obtener el estado y las funciones
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    commissions,
    isLoading,
    error,
    calculate,
  } = useCommissionCalculator();

  // 2. Renderiza la UI
  return (
    <div className="app-container">
      <h1>Calcular Comisión de Ventas</h1>
      <div className="date-pickers">
        <label>
          Fecha Inicio:
          <input 
            type="date" 
            value={startDate} 
            onChange={e => setStartDate(e.target.value)} 
            disabled={isLoading}
          />
        </label>
        <label>
          Fecha Fin:
          <input 
            type="date" 
            value={endDate} 
            onChange={e => setEndDate(e.target.value)} 
            disabled={isLoading}
          />
        </label>
      </div>
      
      <button onClick={calculate} disabled={isLoading || !startDate || !endDate}>
        {isLoading ? 'Calculando...' : 'Calcular'}
      </button>
      
      <h2>Resultados</h2>
      <CommissionResults 
        commissions={commissions} 
        isLoading={isLoading} 
        error={error} 
      />
    </div>
  );
}