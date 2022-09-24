import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveTaskStore } from './db';
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

  return (
    <View style={style.addtask__container}>
      <TextInput style={style.addTaskForm} placeholder='Введите задачу...' 
        value={taskName}
        onChangeText={setTaskName}
      />
      <View style={style.addTaskPanel}>
        <View>
          <Ionicons name="arrow-up-circle" size={60} color="#5F92CF" onPress={saveTaskButton} />
        </View>
      </View>
    </View>
  );
}