// class ProfileService {
//     constructor() {
//         this.axios = require('axios');
//         this.userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3000';
//         this.productServiceUrl = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001';
//     }

//     async fetchUser(userId) {
//         try {
//             const response = await this.axios.get(`${this.userServiceUrl}/${userId}`);
//             return response.data;
//         } catch (error) {
//             console.log('Error fetching user data:', error.message);
//             throw new Error('Error fetching user data');
//         }
//     }

//     async fetchProducts(userId) {
//         try {
//             const response = await this.axios.get(`${this.productServiceUrl}?userId=${userId}`);
//             return response.data;
//         } catch (error) {
//             console.log('Error fetching product data:', error.message);
//             throw new Error('Error fetching product data');
//         }
//     }

//     async getProfile(userId) {
//         try {
//             const user = await this.fetchUser(userId);
//             const products = await this.fetchProducts(userId);
//             return { user, products };
//         } catch (error) {
//             console.log('Error fetching profile data:', error.message);

//             throw new Error('Error aggregating profile data');
//         }
//     }
// }


class ProfileService {
    constructor() {
        this.axios = require('axios');
        // this.userServiceUrl = 'http://localhost:3000';
        // this.productServiceUrl = 'http://localhost:3001';
        //console.log('User service url', process.env.USER_SERVICE_URL);
        //console.log('Product service url', process.env.PRODUCT_SERVICE_URL);
        this.userServiceUrl = process.env.USER_SERVICE_URL
        this.productServiceUrl = process.env.PRODUCT_SERVICE_URL
    }

    async fetchUser(userId) {
        const response = await this.axios.get(
            `${this.userServiceUrl}/${userId}`
        );
        return response.data;
    }

    async fetchProducts() {
        const response = await this.axios.get(
            `${this.productServiceUrl}`
        );
        return response.data;
    }

    async getProfile(userId) {
        const user = await this.fetchUser(userId);
        const products = await this.fetchProducts();
        return { user, products };
    }
}


module.exports = ProfileService;