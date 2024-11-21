import { StoreSlice } from '../';

export type CartSlice = {
    cart: { id: number; name: string; quantity: number }[];
    addToCart: (product: { id: number; name: string }) => void;
    removeFromCart: (id: number) => void;
};

const createCartSlice: StoreSlice<CartSlice> = (set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
});

export default createCartSlice;