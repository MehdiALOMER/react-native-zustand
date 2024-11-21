import { StoreSlice } from '../';
import axios from 'axios';

type Post = {
    id: number;
    title: string;
    body: string;
};

export type PostsSlice = {
    posts: Post[];
    fetchPosts: () => Promise<void>;
};

const createPostsSlice: StoreSlice<PostsSlice> = (set) => ({
    posts: [],
    fetchPosts: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({ posts: response.data });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    },
});

export default createPostsSlice;
