import { supabase } from '../database/supabaseClient';

export class VendorRepository {
  /**
   * Obtiene todos los vendedores.
   * @returns {Promise<Array>} Lista de vendedores
   */
  async getAll() {
    const { data, error } = await supabase.from('Vendedor').select('*');
    
    if (error) {
      console.error('Error fetching vendors:', error);
      throw new Error('No se pudo obtener la lista de vendedores.');
    }
    
    return data;
  }
}