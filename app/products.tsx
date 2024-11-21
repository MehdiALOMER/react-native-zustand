import useStore from '@/src/store';
import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const ProductsScreen = () => {
    const products = useStore((state) => state.products);
    const fetchProducts = useStore((state) => state.fetchProducts);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default ProductsScreen;
