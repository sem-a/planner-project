import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveTaskStore, showAllKey } from './db';
import style from '../styles/globalStyle.module.css';

export default function AddTask( {addHandler} ) {
  let task = {
    taskId: 0,
    taskName: '',
    isComplete: false,
  };
  const [taskName, setTaskName] = useState('');
  const saveTaskButton = async() => {
    const getId = async() => {
      let keys = await showAllKey();
      return keys.length;
    }
    let taskId = await getId();
    task.taskId = taskId;
    task.taskName = taskName;
    saveTaskStore(task);
    setTaskName('');
    addHandler(taskName, taskId);
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