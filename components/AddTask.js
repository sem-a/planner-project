import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { saveTaskStore, readTaskStore, clearTaskStorage, showAllKey } from './db';
import style from '../styles/globalStyle.module.css';

export default function AddTask( {addHandler} ) {
  let task = {
    taskName: '',
    isComplete: false,
  };
  const [taskName, setTaskName] = useState('');
  const saveTaskButton = () => {
    task.taskName = taskName;
    saveTaskStore(task);
    setTaskName('');
    addHandler(taskName);
  };
  const readTaskButton = async () => {
    let readResult = await readTaskStore(0);
    console.log(readResult);
    return readResult;
  };
  const clearTaskButton = () => {
    clearTaskStorage();
  }

  return (
    <View style={style.addtask__container}>
      <TextInput style={style.addTaskForm} placeholder='Введите задачу...' 
        value={taskName}
        onChangeText={setTaskName}
      />
      
      <View style={style.addTaskPanel}>
        <View>
          <Feather name="calendar" size={30} color="#D9D9D9" onPress={readTaskButton}/>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="#D9D9D9" onPress={clearTaskButton}/>
        </View>
        <View>
          <Ionicons name="attach-outline" size={30} color="#D9D9D9" onPress={ async() => {
              keys = await showAllKey();
              console.log(keys);
            } } />
        </View>
        <View>
          <Ionicons name="arrow-up-circle" size={30} color="#5F92CF" onPress={saveTaskButton} />
        </View>
      </View>
    </View>
  );
}