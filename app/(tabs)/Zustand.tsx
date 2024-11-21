import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { useStore } from '../../store/index';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {
        user,
        login,
        logout,
        products,
        fetchProducts,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        orderHistory,
        fetchOrderHistory,
    } = useStore();

    useEffect(() => {
        fetchProducts();
        if (user) {
            fetchOrderHistory(user.id);
        }
    }, [user]);

    return (
        <View style={styles.container}>
            {!user ? (
                <View>
                    <Text>Login</Text>
                    <TextInput placeholder="Username" onChangeText={setUsername} style={styles.input} />
                    <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
                    <Button title="Login" onPress={() => login(username, password)} />
                </View>
            ) : (
                <View>
                    <Text>Welcome, {user.name}</Text>
                    <Button title="Logout" onPress={logout} />
                    <Text>Products</Text>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>{item.title}</Text>
                                <Button title="Add to Cart" onPress={() => addToCart(item)} />
                            </View>
                        )}
                    />
                    <Text>Cart</Text>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>{item.title}</Text>
                                <Text>Quantity: {item.quantity}</Text>
                                <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                                <Button title="Increase" onPress={() => updateCartQuantity(item.id, item.quantity + 1)} />
                                <Button title="Decrease" onPress={() => updateCartQuantity(item.id, item.quantity - 1)} />
                            </View>
                        )}
                    />
                    <Text>Order History</Text>
                    <FlatList
                        data={orderHistory}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>Order ID: {item.id}</Text>
                                <Text>Title: {item.title}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
    },
});
