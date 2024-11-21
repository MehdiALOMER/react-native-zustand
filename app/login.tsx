import useStore from '@/src/store';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const user = useStore((state) => state.user);
    const login = useStore((state) => state.login);
    const logout = useStore((state) => state.logout);

    return (
        <View style={styles.container}>
            {user ? (
                <>
                    <Text>Welcome, {user.username}</Text>
                    <Button title="Logout" onPress={logout} />
                </>
            ) : (
                <Button title="Login" onPress={() => login('testuser', 'password')} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;
