import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    // Kullanıcı durumu
    user: null,
    login: async (username, password) => {
        try {
            // Sahte login
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            set({ user: response.data });
        } catch (error) {
            console.error('Login error:', error);
        }
    },
    logout: () => set({ user: null }),

    // Ürünler durumu
    products: [],
    fetchProducts: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({ products: response.data });
        } catch (error) {
            console.error('Fetch products error:', error);
        }
    },

    // Sepet durumu
    cart: [],
    addToCart: (product) => set((state) => {
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
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId),
    })),
    updateCartQuantity: (productId, quantity) => set((state) => ({
        cart: state.cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ),
    })),

    // Sipariş geçmişi durumu
    orderHistory: [],
    fetchOrderHistory: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
            set({ orderHistory: response.data });
        } catch (error) {
            console.error('Fetch order history error:', error);
        }
    },
}));

export default useStore;
