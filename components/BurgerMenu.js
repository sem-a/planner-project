import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';


export default function BurgerMenu() {
  return (
    <View style={styles.burgerMenu}>
      <View style={styles.burgerMenuHeader}>
        <Feather name="settings" size={30} color="#5F92CF" />
      </View>
      <View style={styles.burgerMenuItem}>
        <AntDesign name="home" size={24} color="black" />
        <Text>Главный экран</Text>
      </View>
      
      <View style={styles.burgerMenuItem}>
        <Ionicons name="checkbox-outline" size={24} color="black" />
        <Text>Завершенные задачи</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
    width: '90%',
    marginLeft: '5%',
  },
  burgerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',

  },
});
