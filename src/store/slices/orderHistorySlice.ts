import { StoreSlice } from '../';

export type OrderHistorySlice = {
    orderHistory: { id: number; name: string; date: string }[];
    fetchOrderHistory: () => Promise<void>;
};

const createOrderHistorySlice: StoreSlice<OrderHistorySlice> = (set) => ({
    orderHistory: [],
    fetchOrderHistory: async () => {
        const mockOrderHistory = [
            { id: 1, name: 'Order 1', date: '2023-11-20' },
            { id: 2, name: 'Order 2', date: '2023-11-21' },
        ];
        set({ orderHistory: mockOrderHistory });
    },
});

export default createOrderHistorySlice;
