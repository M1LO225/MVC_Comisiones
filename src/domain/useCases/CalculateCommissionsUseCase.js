export class CalculateCommissionsUseCase {
  /**
   * 
   * @param {Object} params
   * @param {Array} params.sales 
   * @param {Array} params.vendors 
   * @param {Array} params.rules 
   * @returns {Array} 
   */
  execute({ sales, vendors, rules }) {
    

    const sortedRules = [...rules].sort((a, b) => b.amount - a.amount);

    return vendors.map(vendor => {

      const salesForVendor = sales.filter(sale => sale.vendedor_id === vendor.id);
      
      let totalCommission = 0;


      salesForVendor.forEach(sale => {

        const applicableRule = sortedRules.find(rule => sale.monto >= rule.amount);
        
        if (applicableRule) {

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