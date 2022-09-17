import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function TaskInfo( {item} ) {

  const [taskNameTemp, setTaskNameTemp] = useState('');

  return (
    <View>
      
      <View>
    
        <TouchableOpacity onPress={ () => {
            setTaskNameTemp(item.taskName);
            console.log(taskNameTemp);
          } }>
          <Text>{item.taskName}</Text>
        </TouchableOpacity>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
});
