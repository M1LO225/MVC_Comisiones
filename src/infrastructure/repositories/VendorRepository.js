// 1. Definimos los datos quemados
const hardcodedVendors = [
  { id: 1, nombre: 'Ana García', created_at: '2025-10-01T10:00:00Z' },
  { id: 2, nombre: 'Juan Pérez', created_at: '2025-10-01T10:01:00Z' },
  { id: 3, nombre: 'María López', created_at: '2025-10-01T10:02:00Z' },
];

export class VendorRepository {
  /**
   * Obtiene todos los vendedores (datos quemados).
   * @returns {Promise<Array>} Lista de vendedores
   */
  async getAll() {
    // 2. Simulamos una llamada asíncrona usando Promise.resolve
    // Esto asegura que la interfaz (el método "async") no cambie.
    return Promise.resolve(hardcodedVendors);
  }
}