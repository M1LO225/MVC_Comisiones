// Ya no importamos 'supabase'

// 1. Definimos las ventas quemadas
// Usamos strings 'YYYY-MM-DD' para que coincida con lo que
// la base de datos y el <input type="date"> manejan.
const hardcodedSales = [
  // Ventas de Ana (id: 1)
  { id: 101, fecha_venta: '2025-10-19', monto: 1500, vendedor_id: 1 },
  { id: 102, fecha_venta: '2025-10-20', monto: 800, vendedor_id: 1 },
  { id: 103, fecha_venta: '2025-10-21', monto: 5500, vendedor_id: 1 },
  
  // Ventas de Juan (id: 2)
  { id: 201, fecha_venta: '2025-10-19', monto: 6000, vendedor_id: 2 },
  { id: 202, fecha_venta: '2025-10-20', monto: 120, vendedor_id: 2 },
  
  // Ventas de María (id: 3)
  { id: 301, fecha_venta: '2025-10-21', monto: 1100, vendedor_id: 3 },
  
  // Venta fuera de rango para probar
  { id: 401, fecha_venta: '2025-01-01', monto: 1000, vendedor_id: 1 },
];

export class SaleRepository {
  /**
   * Obtiene las ventas dentro de un rango de fechas (datos quemados).
   * @param {string} startDate - Fecha de inicio (YYYY-MM-DD)
   * @param {string} endDate - Fecha de fin (YYYY-MM-DD)
   * @returns {Promise<Array>} Lista de ventas filtradas
   */
  async getByDateRange(startDate, endDate) {
    
    // 2. Convertimos las fechas string del input a objetos Date para poder comparar.
    // Usamos 'T00:00:00' para asegurarnos de que se interpreten en la zona horaria local
    // y evitar problemas de un día más/menos (UTC).
    const start = new Date(startDate + 'T00:00:00');
    const end = new Date(endDate + 'T00:00:00');

    // 3. Filtramos el array local en lugar de consultar Supabase
    const filteredSales = hardcodedSales.filter(sale => {
      const saleDate = new Date(sale.fecha_venta + 'T00:00:00');
      return saleDate >= start && saleDate <= end;
    });

    // 4. Simulamos la respuesta asíncrona
    return Promise.resolve(filteredSales);
  }
}