import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, FlatList } from 'react-native';
import TaskInfo from './TaskInfo';

export default function CompleteTask( {toDoComplete} ) {
  return (
    <View>
      <FlatList data={toDoComplete} renderItem={ ( {item} ) => (
        <Text>{item.taskName}</Text>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
});
