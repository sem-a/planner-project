import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { rewriteTaskStore } from './db';
import style from '../styles/globalStyle.module.css';
import Ionicons from '@expo/vector-icons';

function TaskCheckBox() {
  const [checkedCheckBox, setCheckedCheckBox] = useState(false);
  function changeChecked() {
    setCheckedCheckBox(!checkedCheckBox);
  };
  return (
    <Pressable
      style={[style.checkboxBase, checkedCheckBox && style.checkboxChecked]}
      onPress={changeChecked}>
      {checkedCheckBox && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}



export default function TaskInfo( {item, taskId, addComplete} ) {
  let taskName;
  if (item != undefined) {
    taskName = item.taskName;
  } else {
    taskName = '';
  };
  const rewriteTask = {
    taskName: taskName,
    isComplete: true,
  };
  const rewriteTaskButton = () => {
    rewriteTaskStore(rewriteTask, taskId);
    addComplete(rewriteTask.taskName, taskId);
  };

  return (
    <View>      
      <View>
        <TouchableOpacity onPress={rewriteTaskButton}>
          <TaskCheckBox />
          <Text style={style.info__text}>{taskName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}