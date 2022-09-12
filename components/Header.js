import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import BurgerMenu from './BurgerMenu';
import Calendar from './Calendar'
import Modal from 'react-native-modal';


export default function Header() {

  const [modalBurgerMenu, setModalBurgerMenu] = useState(false);
  const [modalCompleteTask, setModalCompleteTask] = useState(false);

    
  return (


    

    <View>


      <Modal isVisible={modalBurgerMenu}
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        onBackdropPress={ () => { setModalBurgerMenu(false) } }
        onSwipeComplete={ () => { setModalBurgerMenu(false) } }
        swipeDirection='left'
        style={{
          backgroundColor: 'white',
          width: '77%',
          height: '100%',
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
        }}
      >
      </Modal>



      <Modal isVisible={modalCompleteTask}
        animationIn='slideInDown'
        animationOut='slideOutUp'
      >
        <Text style={{fontSize: 50}} onPress={ () => { setModalCompleteTask(false) } }>X</Text>
        <Calendar />
      </Modal>



      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.headerPanel}>
            <Ionicons name="ios-menu-outline" size={36} color="white" 
              onPress={ () => { setModalBurgerMenu(true) } }
            />
            <Text style={styles.headerText}>Today</Text>
            <Feather name="check-circle" size={28} color="white" onPress={ () => {setModalCompleteTask(true)}}/>
          </View>
        </View>
      </View>


      


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5F92CF',
  },
  container: {
    width: '90%',
    marginLeft: '5%',
  },
  headerPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 10,
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
