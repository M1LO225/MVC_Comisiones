const hardcodedRules = [
  { id: 1, amount: 5000, rule: 0.10 }, 
  { id: 2, amount: 1000, rule: 0.05 }, 
  { id: 3, amount: 100, rule: 0.02 }, 
];

export class RuleRepository {
  /**

   * @returns {Promise<Array>}
   */
  async getAll() {

    return Promise.resolve(hardcodedRules);
  }
}