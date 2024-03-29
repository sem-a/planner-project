import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { rewriteTaskStore } from './db';
import Checkbox from 'expo-checkbox';
import style from '../styles/globalStyle.module.css';

export default function TaskInfo( {item, addComplete} ) {
  let taskName;
  if (item != undefined) {
    taskName = item.taskName;
  } else {
    taskName = '';
  };
  const rewriteTask = {
    taskId: item.taskId,
    taskName: taskName,
    isComplete: true,
  };
  const rewriteTaskButton = () => {
    rewriteTaskStore(rewriteTask, item.taskId);
    addComplete(rewriteTask.taskName, item.taskId);
  };
  const [isChecked, setChecked] = useState(false);
  const changeChecked = () => {
    setChecked(!isChecked);
  }

  return (
    <View>      
      <View>
        <TouchableOpacity style={style.task__item} onPress={ ()=> {
          rewriteTaskButton();
          changeChecked();
        } }>
          <Checkbox
            style={style.checkbox__base}
            value={isChecked}
            color={isChecked ? '#5F92CF' : undefined}
          />
          <Text style={style.info__text}>{taskName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}