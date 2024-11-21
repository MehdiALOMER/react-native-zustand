import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import useStore from '../../store/auth'; // Zustand mağazasını import edin

export default function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {
        user, login, logout,
        products, fetchProducts,
        cart, addToCart, removeFromCart, updateCartQuantity,
        orderHistory, fetchOrderHistory,
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
                    <TextInput placeholder="Username" onChangeText={(text) => setUsername(text)} />
                    <TextInput placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
                    <Button title="Login" onPress={() => login(username, password)} />
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={[{ flex: 1 }]}>
                        <Text>Welcome, {user.name}</Text>
                        <Button title="Logout" onPress={logout} />
                    </View>
                    <View style={[{ flex: 2 }]}>
                        <Text>Products</Text>
                        <FlatList
                            data={products}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>{item.name}</Text>
                                    <Button title="Add to Cart" onPress={() => addToCart(item)} />
                                </View>
                            )}
                        />
                    </View>
                    <View style={[{ flex: 2 }]}>
                        <Text>Cart</Text>
                        <FlatList
                            data={cart}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>{item.name}</Text>
                                    <Text>Quantity: {item.quantity}</Text>
                                    <Button title="Remove" onPress={() => removeFromCart(item.id)} />
                                    <Button title="Increase" onPress={() => updateCartQuantity(item.id, item.quantity + 1)} />
                                    <Button title="Decrease" onPress={() => updateCartQuantity(item.id, item.quantity - 1)} />
                                </View>
                            )}
                        />
                    </View>
                    <View style={[{ flex: 2 }]}>
                        <Text>Order History</Text>
                        <FlatList
                            data={orderHistory}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>Order ID: {item.id}</Text>
                                    <Text>Total: ${item.total}</Text>
                                </View>
                            )}
                        />
                    </View>

                </View>
            )
            }
        </View >
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
});
