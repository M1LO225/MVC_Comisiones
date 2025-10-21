// Ya no importamos 'supabase'

// 1. Definimos las reglas quemadas
const hardcodedRules = [
  { id: 1, amount: 5000, rule: 0.10 }, // 10% para ventas >= 5000
  { id: 2, amount: 1000, rule: 0.05 }, // 5% para ventas >= 1000
  { id: 3, amount: 100, rule: 0.02 },  // 2% para ventas >= 100
];

export class RuleRepository {
  /**
   * Obtiene todas las reglas de comisión (datos quemados).
   * @returns {Promise<Array>} Lista de reglas
   */
  async getAll() {
    // 2. Simulamos la respuesta asíncrona
    return Promise.resolve(hardcodedRules);
  }
}