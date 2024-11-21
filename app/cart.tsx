import useStore from '@/src/store';
import React from 'react';
import { FlatList, Text, Button, StyleSheet, View } from 'react-native';

const CartScreen = () => {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);

    return (
        <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                    <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default CartScreen;
