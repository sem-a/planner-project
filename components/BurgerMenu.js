import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';

export default function BurgerMenu() {
  return (
    <SafeAreaView>
      <Button title='Настройки'/>
      <Text>Главный экран</Text>
      <Text>Все задачи</Text>
      <Text>Выполненные задачи</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
