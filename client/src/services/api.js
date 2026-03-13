import { mockProducts } from './mockData';

/**
 * A mock API service layer demonstrating how components
 * will interact with a real backend later.
 */
export const apiService = {
  getProducts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 500);
    });
  },

  getProductById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.id === id);
        if (product) resolve(product);
        else reject(new Error('Product not found'));
      }, 500);
    });
  },

  login: async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: 'mock-jwt-token', user: { id: 1, name: 'Jane Doe', email } });
      }, 800);
    });
  }
};
