import { SetState, GetState } from 'zustand';
import axios from 'axios';

export interface OrderHistorySlice {
    orderHistory: any[];
    fetchOrderHistory: (userId: number) => void;
}

const createOrderHistorySlice = (
    set: SetState<OrderHistorySlice>,
    get: GetState<OrderHistorySlice>
): OrderHistorySlice => ({
    orderHistory: [],
    fetchOrderHistory: async (userId: number) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            set({ orderHistory: response.data });
        } catch (error) {
            console.error('Fetch order history error:', error);
        }
    },
});

export default createOrderHistorySlice;
