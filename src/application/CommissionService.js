import { CalculateCommissionsUseCase } from '../domain/useCases/CalculateCommissionsUseCase';
import { VendorRepository } from '../infrastructure/repositories/VendorRepository';
import { SaleRepository } from '../infrastructure/repositories/SaleRepository';
import { RuleRepository } from '../infrastructure/repositories/RuleRepository';

export class CommissionService {
  constructor() {
    // Inicializa las dependencias
    this.vendorRepo = new VendorRepository();
    this.saleRepo = new SaleRepository();
    this.ruleRepo = new RuleRepository();
    this.calculateUseCase = new CalculateCommissionsUseCase();
  }

  /**
   * 
   * @param {string} startDate 
   * @param {string} endDate 
   * @returns {Promise<Array>} 
   */
  async getCommissionReport(startDate, endDate) {
    try {
      // 3. Obtiene todos los datos en paralelo
      const [vendors, sales, rules] = await Promise.all([
        this.vendorRepo.getAll(),
        this.saleRepo.getByDateRange(startDate, endDate),
        this.ruleRepo.getAll()
      ]);

      // 4. Llama al caso de uso (dominio) con los datos
      const commissionReport = this.calculateUseCase.execute({ sales, vendors, rules });
      
      return commissionReport;

    } catch (error) {
      // 5. Maneja cualquier error de los repositorios
      console.error('Error generating commission report:', error);
      // Relanza el error para que la UI pueda manejarlo
      throw new Error('Error al generar el reporte: ' + error.message);
    }
  }
}