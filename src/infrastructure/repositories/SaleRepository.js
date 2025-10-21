import { supabase } from '../database/supabaseClient';

export class SaleRepository {
  /**
   * Obtiene las ventas dentro de un rango de fechas.
   * @param {string} startDate - Fecha de inicio (YYYY-MM-DD)
   * @param {string} endDate - Fecha de fin (YYYY-MM-DD)
   * @returns {Promise<Array>} Lista de ventas
   */
  async getByDateRange(startDate, endDate) {
    const { data, error } = await supabase
      .from('Ventas')
      .select('*')
      .gte('fecha_venta', startDate) // gte = Greater Than or Equal
      .lte('fecha_venta', endDate);  // lte = Less Than or Equal
    
    if (error) {
      console.error('Error fetching sales:', error);
      throw new Error('No se pudo obtener el historial de ventas.');
    }
    
    return data;
  }
}