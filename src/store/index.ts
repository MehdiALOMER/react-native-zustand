import create from 'zustand';
import { persist } from 'zustand/middleware';

// Slice importları
import createAuthSlice, { AuthSlice } from './slices/authSlice';
import createProductsSlice, { ProductsSlice } from './slices/productsSlice';
import createCartSlice, { CartSlice } from './slices/cartSlice';
import createOrderHistorySlice, { OrderHistorySlice } from './slices/orderHistorySlice';
import createPostsSlice, { PostsSlice } from './slices/postsSlice';

// StoreState: Tüm slice türlerini birleştirir
export type StoreState = AuthSlice & ProductsSlice & CartSlice & OrderHistorySlice & PostsSlice;

// Zustand store
const useStore = create<StoreState>(
    persist(
        (set, get) => ({
            ...createAuthSlice(set, get),
            ...createProductsSlice(set, get),
            ...createCartSlice(set, get),
            ...createOrderHistorySlice(set, get),
            ...createPostsSlice(set, get), // PostsSlice'ı ekledik
        }),
        {
            name: 'zustand-storage', // LocalStorage key
        }
    )
);

export default useStore;
