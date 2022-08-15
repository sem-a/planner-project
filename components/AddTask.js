import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



let STORAGE_KEY = '@task_input';

export default function AddTask() {
  
  const [taskInput, setTaskInput] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, task)
      console.log('Data successfully saved')
    } catch(e) {
      console.log('Failed to save the data to the storage')
    }
  };
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        setTaskInput(value);
      }
    } catch(e) {
      console.log('Failed to fetch the input from storage');
    }
  };
  const onChangeText = value => setTaskInput(value);
  const onSubmitEditing = () => {
    if (!taskInput) return;

    saveData(taskInput);
    setTaskInput('');
  };

  
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.addTaskForm} placeholder='Введите задачу...' 
        value={taskInput}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <TextInput style={styles.addSubTaskForm} placeholder='Добавить подзадачу' />
      <Text>{taskInput}</Text>
      <View style={styles.addTaskPanel}>
        <View>
          <Feather name="calendar" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="attach-outline" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="arrow-up-circle" size={30} color="#5F92CF" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    height: '90%',
  },  
  addTaskForm: {
    fontSize: 20,
    marginTop: 40,
  },
  addSubTaskForm: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 14,
  },
  addTaskPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    shadowColor: 'black',

  },
});
