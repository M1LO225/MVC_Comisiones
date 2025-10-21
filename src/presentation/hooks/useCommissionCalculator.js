import { useState, useCallback } from 'react';
import { CommissionService } from '../../application/CommissionService';


const commissionService = new CommissionService();

export function useCommissionCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [commissions, setCommissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculate = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCommissions([]); // Limpia resultados anteriores

    try {
      // 1. Llama al servicio de aplicación
      const report = await commissionService.getCommissionReport(startDate, endDate);
      setCommissions(report);
    } catch (err) {
      // 2. Muestra el error que vino del servicio
      setError(err.message);
      alert(err.message); // Mantenemos la alerta original
    }
    
    setIsLoading(false);
  }, [startDate, endDate]); // Depende de las fechas

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    commissions,
    isLoading,
    error,
    calculate, // La función para que el botón la llame
  };
}