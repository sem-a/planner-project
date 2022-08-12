import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';

export default function BurgerMenu() {
  return (
    <View style={styles.burgerMenu}>
      <View style={styles.burgerMenuHeader}>

      </View>
      <View style={styles.burgerMenuItem}>

        <Text>Главный экран</Text>
      </View>
      
      <View style={styles.burgerMenuItem}>

        <Text>Завершенные задачи</Text>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
  },

});
