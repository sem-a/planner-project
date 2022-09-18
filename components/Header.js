import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons ,Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Settings from './settings';
import CompleteTask from './completeTask';
import style from '../styles/globalStyle.module.css';

export default function Header( {toDoComplete} ) {
  const [modalSettings, setModalSettings] = useState(false);
  const [modalCompleteTask, setModalCompleteTask] = useState(false);

  return (
    <View>
      <Modal isVisible={modalSettings}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        style={style.modalHeader}
      >
        <View style={style.modalFlex}>
          <Ionicons name="chevron-back" size={30} color="#5F92CF" onPress={ () => { setModalSettings(false) } } />
          <Settings />
        </View>
      </Modal>
      <Modal isVisible={modalCompleteTask}
        animationIn='slideInRight'
        animationOut='slideOutRight'
        style={style.modalHeader}
      >
        <View style={style.modalFlex}>
          <Ionicons name="chevron-back" size={30} color="#5F92CF" onPress={ () => { setModalCompleteTask(false) } }/>
          <CompleteTask toDoComplete={toDoComplete} />
        </View>
      </Modal>
      <View style={style.header}>
        <View style={style.container}>
          <View style={style.headerPanel}>
          <Feather name="settings" size={30} color="white" onPress={ () => { setModalSettings(true) } } />
            <Text style={style.headerText}>Today</Text>
            <Feather name="check-circle" size={28} color="white" onPress={ () => {setModalCompleteTask(true)}}/>
          </View>
        </View>
      </View>
    </View>
  );
}

