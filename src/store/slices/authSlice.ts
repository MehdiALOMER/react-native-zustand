import { StoreSlice } from "../";

export type AuthSlice = {
    user: any | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
};

const createAuthSlice: StoreSlice<AuthSlice> = (set) => ({
    user: null,
    login: async (username, password) => {
        const mockUser = { id: 1, username }; // Fake user for demo
        set({ user: mockUser });
    },
    logout: () => set({ user: null }),
});

export default createAuthSlice;
