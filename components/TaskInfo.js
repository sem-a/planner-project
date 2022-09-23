import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { rewriteTaskStore } from './db';
import style from '../styles/globalStyle.module.css';
import Ionicons from '@expo/vector-icons';

function MyCheckBox( {checked, onChange} ) {
  function onCheckmarkPress() {
    onChange(!checked);
  }
  return (
    <Pressable 
      style={[style.checkboxBase, checked && style.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export default function TaskInfo( {item, taskId, addComplete} ) {

  const [checked, onChange] = useState(false);

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
        <TouchableOpacity style={style.task__item} onPress={rewriteTaskButton}>
          <MyCheckBox
            checked={checked}
            onChange={onChange}
          />
          <Text style={style.info__text}>{taskName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}