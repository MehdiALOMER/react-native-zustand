import useStore from '@/src/store';
import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet, View, ActivityIndicator } from 'react-native';

const Posts = () => {
    const posts = useStore((state) => state.posts); // Posts state'ine erişim
    const fetchPosts = useStore((state) => state.fetchPosts); // Posts fetch fonksiyonuna erişim

    useEffect(() => {
        fetchPosts(); // Sayfa yüklendiğinde API çağrısını yap
    }, []);

    if (posts.length === 0) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading posts...</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.postItem}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Posts;
