import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import useStore from '../../store/todos';

export default function Todos() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add new todo"
        />
        <Button title="Add" onPress={() => {
          addTodo(newTodo);
          setNewTodo('');
        }} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Text style={[styles.todoText, item.completed && styles.completedTodo]}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
