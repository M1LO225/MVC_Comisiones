import React from 'react';
import { useCommissionCalculator } from '../hooks/useCommissionCalculator';
import { CommissionResults } from './CommissionResults';


export function CommissionCalculator() {

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