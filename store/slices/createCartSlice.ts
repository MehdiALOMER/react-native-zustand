import { SetState, GetState } from 'zustand';

export interface CartSlice {
    cart: any[];
    addToCart: (product: any) => void;
    removeFromCart: (productId: number) => void;
    updateCartQuantity: (productId: number, quantity: number) => void;
}

const createCartSlice = (
    set: SetState<CartSlice>,
    get: GetState<CartSlice>
): CartSlice => ({
    cart: [],
    addToCart: (product: any) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
    }),
    removeFromCart: (productId: number) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId),
    })),
    updateCartQuantity: (productId: number, quantity: number) => set((state) => ({
        cart: state.cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ),
    })),
});

export default createCartSlice;
