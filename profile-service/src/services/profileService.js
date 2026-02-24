class ProfileService {
    constructor() {
        this.axios = require('axios');
        this.userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3000/users';
        this.productServiceUrl = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001/products';
    }

    async fetchUser(userId) {
        try {
            const response = await this.axios.get(`${this.userServiceUrl}/${userId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching user data');
        }
    }

    async fetchProducts(userId) {
        try {
            const response = await this.axios.get(`${this.productServiceUrl}?userId=${userId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching product data');
        }
    }

    async getProfile(userId) {
        try {
            const user = await this.fetchUser(userId);
            const products = await this.fetchProducts(userId);
            return { user, products };
        } catch (error) {
            throw new Error('Error aggregating profile data');
        }
    }
}

module.exports = ProfileService;