import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

let ID = 0;

export default function AddTask() {
  
  const [task, setTask] = useState('');

  const saveTask = async () => {
    try {
      await AsyncStorage.setItem(`@store1:${ID}`, task);
      console.log('Save!');
      ID = ID + 1;
      let keys = await AsyncStorage.getAllKeys();
      console.log(keys);
    } catch(e) {
      console.log('Error');
    }
  };

  const readTask = async () => {
    try {
      let taskItem = await AsyncStorage.getItem(`@store1:${ID}`);
      console.log(taskItem)
      setTask('');
    } catch (e) {
      console.log('ошибка чтения');
    }
  };

  const clearTask = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Clear done!');
      ID = 0;
    } catch (e) {
      console.log('Clear error');
    }
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.addTaskForm} placeholder='Введите задачу...'
        value={task}
        onChangeText={setTask}
      />
      <TextInput style={styles.addSubTaskForm} placeholder='Дата' />
      
      <View style={styles.addTaskPanel}>
        <View>
          <Feather name="calendar" size={30} color="#D9D9D9" onPress={readTask} />
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="#D9D9D9" onPress={clearTask} />
        </View>
        <View>
          <Ionicons name="attach-outline" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="arrow-up-circle" size={30} color="#5F92CF" onPress={saveTask} />
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
