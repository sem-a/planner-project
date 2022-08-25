import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal'
import Settings from './Settings';

export default function BurgerMenu() {

  const [modalSettings, setModalSettings] = useState(false);


  return (
    <View>

      <Modal isVisible={modalSettings}>

      </Modal>
      
      <View style={styles.burgerMenu}>
        <View style={styles.burgerMenuHeader} >
          <Feather name="settings" size={30} color="#5F92CF" />
        </View>

        <View style={styles.burgerMenuContainer}>
          <View style={styles.burgerMenuItem} onPress={ () => { setModalSettings(true) } }>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.burgerMenuText}>Главный экран</Text>
          </View>
          
          <View style={styles.burgerMenuItem}>
            <Ionicons name="checkbox-outline" size={24} color="black" />
            <Text style={styles.burgerMenuText}>Завершенные задачи</Text>
          </View>
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
    width: '90%',
    height: '100%',
    marginTop: 100,
    marginLeft: '5%',
  },
  burgerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  burgerMenuHeader: {
    position: 'absolute',
  },
  burgerMenuContainer: {
    marginTop: 100,
  }, 
  burgerMenuText: {
    fontSize: 16,
    paddingLeft: 10,
  },
});
