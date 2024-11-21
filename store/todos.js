import create from 'zustand';

// Mağaza oluşturma
const useStore = create((set) => ({
    todos: [],
    addTodo: (title) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
    })),
}));

export default useStore;
