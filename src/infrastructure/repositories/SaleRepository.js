const hardcodedSales = [

  { id: 101, fecha_venta: '2025-10-19', monto: 1500, vendedor_id: 1 },
  { id: 102, fecha_venta: '2025-10-20', monto: 800, vendedor_id: 1 },
  { id: 103, fecha_venta: '2025-10-21', monto: 5500, vendedor_id: 1 },
  

  { id: 201, fecha_venta: '2025-10-19', monto: 6000, vendedor_id: 2 },
  { id: 202, fecha_venta: '2025-10-20', monto: 120, vendedor_id: 2 },
  

  { id: 301, fecha_venta: '2025-10-21', monto: 1100, vendedor_id: 3 },
  

  { id: 401, fecha_venta: '2025-01-01', monto: 1000, vendedor_id: 1 },
];

export class SaleRepository {
  /**
   * 
   * @param {string} startDate 
   * @param {string} endDate 
   * @returns {Promise<Array>} 
   */
  async getByDateRange(startDate, endDate) {
    const start = new Date(startDate + 'T00:00:00');
    const end = new Date(endDate + 'T00:00:00');


    const filteredSales = hardcodedSales.filter(sale => {
      const saleDate = new Date(sale.fecha_venta + 'T00:00:00');
      return saleDate >= start && saleDate <= end;
    });

    return Promise.resolve(filteredSales);
  }
}