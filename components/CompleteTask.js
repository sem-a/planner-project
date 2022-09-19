import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function CompleteTask( {toDoComplete} ) {
  return (
    <View>
      <FlatList data={toDoComplete} renderItem={ ( {item} ) => (
        <Text>{item.taskName}</Text>
      )} />
    </View>
  );
}
