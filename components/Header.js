import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons ,Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Settings from './settings';
import CompleteTask from './completeTask';

export default function Header( {toDoComplete} ) {
  const [modalSettings, setModalSettings] = useState(false);
  const [modalCompleteTask, setModalCompleteTask] = useState(false);

  return (
    <View>
      <Modal isVisible={modalSettings}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        style={styles.modalHeader}
      >
        <View style={styles.modalFlex}>
          <Ionicons name="chevron-back" size={30} color="#5F92CF" onPress={ () => { setModalSettings(false) } } />
          <Settings />
        </View>
      </Modal>
      <Modal isVisible={modalCompleteTask}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        style={styles.modalHeader}
      >
        <View style={styles.modalFlex}>
          <Ionicons name="chevron-back" size={30} color="#5F92CF" onPress={ () => { setModalCompleteTask(false) } }/>
          <CompleteTask toDoComplete={toDoComplete} />
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.headerPanel}>
          <Feather name="settings" size={30} color="white" onPress={ () => { setModalSettings(true) } } />
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
    width: '86%',
    marginLeft: '7%',
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
  modalHeader: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: 0,
    marginLeft: 0,
  },
  modalFlex: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    marginLeft: '5%',
    marginTop: 50,
  },
});
