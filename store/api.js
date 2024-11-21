import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchData: async () => {
        set({ loading: true });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({ data: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useStore;
