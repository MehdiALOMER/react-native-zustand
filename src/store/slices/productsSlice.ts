import { StoreSlice } from '../';

export type ProductsSlice = {
    products: { id: number; name: string }[];
    fetchProducts: () => Promise<void>;
};

const createProductsSlice: StoreSlice<ProductsSlice> = (set) => ({
    products: [],
    fetchProducts: async () => {
        const mockProducts = [
            { id: 1, name: 'Product A' },
            { id: 2, name: 'Product B' },
        ];
        set({ products: mockProducts });
    },
});

export default createProductsSlice;
