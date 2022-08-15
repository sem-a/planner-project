import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import Header from './Header';
import { Ionicons, Entypo } from '@expo/vector-icons';
import AddTask from './AddTask';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Main() {

    const [modalAddTask, setModalAddTask] = useState(false);


    return (
        <View>

            <Modal isVisible={modalAddTask}
                animationIn='slideInUp'
                animationOut='slideOutDown'
                avoidKeyboard={true}
                onBackdropPress={ () => { setModalAddTask(false) } }
                onSwipeComplete={ () => { setModalAddTask(false) } }
                swipeDirection='down'
                style={{width: '100%',
                    marginBottom: 0,
                    marginLeft: 0,
                }}
            >
                <View style={styles.addTaskStyles}>
                    <View style={styles.modalAddTask}>
                        <Entypo name="chevron-small-down" size={30} color="black" style={styles.closeButtonAddTask} 
                            onPress={ () => setModalAddTask(false)}
                        />
                        <AddTask />
                    </View>
                </View>

            </Modal>



        


            <Header />

            <View style={styles.container}>


                <View>

                </View>


                <Ionicons name="add-circle" size={100} color="#5F92CF" style={styles.addCircle}
                onPress={ () => { setModalAddTask(true) }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        height: '100%',
    },
    addCircle: {
        position: 'absolute',
        right: -15,
        bottom: 350,
    },
    closeButtonAddTask: {
        textAlign: 'center',
        color: '#D9D9D9',
    },
    addTaskStyles: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center', 
    },
    modalAddTask: {
        width: '100%',
        height: '85%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
    },
    
});
