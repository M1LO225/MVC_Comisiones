export class CalculateCommissionsUseCase {
  /**
   * Ejecuta el cálculo de comisiones.
   * @param {Object} params
   * @param {Array} params.sales - Lista de ventas
   * @param {Array} params.vendors - Lista de vendedores
   * @param {Array} params.rules - Lista de reglas
   * @returns {Array} Lista de comisiones calculadas por vendedor
   */
  execute({ sales, vendors, rules }) {
    
    // Es una buena práctica ordenar las reglas de mayor a menor
    // para asegurar que se aplique la regla correcta (la más alta).
    const sortedRules = [...rules].sort((a, b) => b.amount - a.amount);

    return vendors.map(vendor => {
      // 1. Filtrar las ventas solo para este vendedor
      const salesForVendor = sales.filter(sale => sale.vendedor_id === vendor.id);
      
      let totalCommission = 0;

      // 2. Calcular la comisión para cada venta
      salesForVendor.forEach(sale => {
        // 3. Encontrar la regla aplicable para el monto de esta venta
        // Usamos .find() en las reglas ordenadas. La primera que cumpla
        // (venta.monto >= regla.amount) será la correcta.
        const applicableRule = sortedRules.find(rule => sale.monto >= rule.amount);
        
        if (applicableRule) {
          // 4. Acumular la comisión
          totalCommission += sale.monto * applicableRule.rule;
        }
      });

      return {
        name: vendor.nombre,
        totalCommission,
      };
    });
  }
}