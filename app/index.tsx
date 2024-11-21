import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Button title="Go to Posts" onPress={() => router.push('/posts')} />
            <Button title="Login" onPress={() => router.push('/login')} />
            <Button title="Products" onPress={() => router.push('/products')} />
            <Button title="Cart" onPress={() => router.push('/cart')} />
            <Button title="Order History" onPress={() => router.push('/order-history')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Home;
