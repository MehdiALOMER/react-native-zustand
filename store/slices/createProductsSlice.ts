import { SetState, GetState } from 'zustand';
import axios from 'axios';

export interface ProductsSlice {
    products: any[];
    fetchProducts: () => void;
}

const createProductsSlice = (
    set: SetState<ProductsSlice>,
    get: GetState<ProductsSlice>
): ProductsSlice => ({
    products: [],
    fetchProducts: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({ products: response.data });
        } catch (error) {
            console.error('Fetch products error:', error);
        }
    },
});

export default createProductsSlice;
