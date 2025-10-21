const hardcodedVendors = [
  { id: 1, nombre: 'Ana García', created_at: '2025-10-01T10:00:00Z' },
  { id: 2, nombre: 'Juan Pérez', created_at: '2025-10-01T10:01:00Z' },
  { id: 3, nombre: 'María López', created_at: '2025-10-01T10:02:00Z' },
];

export class VendorRepository {
  /**
   * 
   * @returns {Promise<Array>} 
   */
  async getAll() {

    return Promise.resolve(hardcodedVendors);
  }
}