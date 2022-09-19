import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { rewriteTaskStore } from './db';

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
          <Text>{taskName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}