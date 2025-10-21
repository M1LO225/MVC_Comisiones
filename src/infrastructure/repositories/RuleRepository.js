import { supabase } from '../database/supabaseClient';

export class RuleRepository {
  /**
   * Obtiene todas las reglas de comisión.
   * @returns {Promise<Array>} Lista de reglas
   */
  async getAll() {
    const { data, error } = await supabase.from('Reglas').select('*');
    
    if (error) {
      console.error('Error fetching rules:', error);
      throw new Error('No se pudo obtener las reglas de comisión.');
    }
    
    return data;
  }
}