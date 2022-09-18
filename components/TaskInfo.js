import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { rewriteTaskStore } from './db';


export default function TaskInfo( {item, taskId, addComplete} ) {

  const rewriteTask = {
    taskName: item.taskName,
    isComplete: true,
  };

  const rewriteTaskButton = () => {
    rewriteTaskStore(rewriteTask, taskId);
    addComplete(rewriteTask.taskName, taskId);
  }



  return (
    <View>
      
      <View>
    
        <TouchableOpacity onPress={rewriteTaskButton}>
          <Text>{item.taskName}</Text>
        </TouchableOpacity>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
});
