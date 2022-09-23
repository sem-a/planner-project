import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { rewriteTaskStore } from './db';
import style from '../styles/globalStyle.module.css';
import Ionicons from '@expo/vector-icons';



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
        <TouchableOpacity style={style.task__item} onPress={rewriteTaskButton}>
          <Text style={style.info__text}>{taskName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}