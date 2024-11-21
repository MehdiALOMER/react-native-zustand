import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';

import createAuthSlice, { AuthSlice } from './slices/createAuthSlice';
import createProductsSlice, { ProductsSlice } from './slices/createProductsSlice';
import createCartSlice, { CartSlice } from './slices/createCartSlice';
import createOrderHistorySlice, { OrderHistorySlice } from './slices/createOrderHistorySlice';

export type StoreState = AuthSlice & ProductsSlice & CartSlice & OrderHistorySlice;

export type StoreSlice<T> = (
    set: SetState<StoreState>,
    get: GetState<StoreState>,
) => T;

const useStoreBase = create(
    persist<StoreState>(
        (set, get) => ({
            ...createAuthSlice(set, get),
            ...createProductsSlice(set, get),
            ...createCartSlice(set, get),
            ...createOrderHistorySlice(set, get),
        }),
        {
            name: 'ecommerce-storage',
            getStorage: () => localStorage,
        }
    )
);

export const useStore = createSelectors(useStoreBase);

function createSelectors(store: any) {
    const selectors: any = {};

    Object.keys(store.getState()).forEach(key => {
        const selector = (state: StoreState) => state[key as keyof StoreState];
        selectors[key] = () => store(selector);
    });

    return { ...store, use: selectors };
}
