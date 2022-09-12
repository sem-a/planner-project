import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import { saveTaskStore, readTaskStore, clearTaskStorage, showAllKey } from './db';




export default function AddTask() {

  let task = {
    taskName: '',
    isComplete: false,
  };


  const [taskName, setTaskName] = useState('');


  const saveTaskButton = () => {
    task.taskName = taskName;
    console.log(task.taskName);
    saveTaskStore(task);
    setTaskName('');
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
    <View style={styles.container}>
      <TextInput style={styles.addTaskForm} placeholder='Введите задачу...' 
        value={taskName}
        onChangeText={setTaskName}
      />
      
      <View style={styles.addTaskPanel}>
        <View>
          <Feather name="calendar" size={30} color="#D9D9D9" onPress={readTaskButton}/>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={30} color="#D9D9D9" onPress={clearTaskButton}/>
        </View>
        <View>
          <Ionicons name="attach-outline" size={30} color="#D9D9D9" onPress={showAllKey} />
        </View>
        <View>
          <Ionicons name="arrow-up-circle" size={30} color="#5F92CF" onPress={saveTaskButton} />
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
