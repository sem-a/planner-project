import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddTask() {
  
  const [taskInputValue, setTaskInputValue] = useState('');
  const [value, setValue] = useState('');

  const saveValue = () => {
    if(taskInputValue) {
      AsyncStorage.setItem('task_key', taskInputValue)
      setTaskInputValue('');
      alert('Сохранено');
    } else {
      alert('error');
    }
  };

  const getValue = () => {
    AsyncStorage.getItem('task_key').then((value) => {
      setTaskInputValue(value);
    })
  };
  
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.addTaskForm} placeholder='Введите задачу...' 
        value={taskInputValue}
        onChangeText={(data) => setTaskInputValue(data)}
      />
      <TextInput style={styles.addSubTaskForm} placeholder='Добавить подзадачу' />
      
      <Text>{value}</Text>
      
      <View style={styles.addTaskPanel}>
        <View>
          <Feather name="calendar" size={30} color="#D9D9D9" onPress={getValue} />
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="attach-outline" size={30} color="#D9D9D9" />
        </View>
        <View>
          <Ionicons name="arrow-up-circle" size={30} color="#5F92CF" onPress={saveValue}/>
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
