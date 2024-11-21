import { SetState, GetState } from 'zustand';
import axios from 'axios';

export interface AuthSlice {
    user: any;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const createAuthSlice = (
    set: SetState<AuthSlice>,
    get: GetState<AuthSlice>
): AuthSlice => ({
    user: null,
    login: async (username: string, password: string) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            set({ user: response.data });
        } catch (error) {
            console.error('Login error:', error);
        }
    },
    logout: () => set({ user: null }),
});

export default createAuthSlice;
