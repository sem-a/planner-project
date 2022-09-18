import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import Header from './Header';
import { Ionicons, Entypo } from '@expo/vector-icons';
import AddTask from './AddTask';
import Modal from "react-native-modal";
import TaskInfo from './TaskInfo';
import { readTaskStore, showAllKey } from './db';



export default function Main() {

    const [modalAddTask, setModalAddTask] = useState(false);
    const [toDoList, setToDoList] = useState([]);
    const [toDoComplete, setToDoComplete] = useState([]);
    
    const addHandler = (text) => {
        setToDoList((list) => {
            return [
                { taskName: text, isComplete: false },
                ...list
            ]
        })
    }

    const addComplete = (text, taskId) => {
        setToDoComplete((list) => {
            return [
                { taskName: text, isComplete: true },
                ...list
            ]
        })
        let copyArray = Object.assign([], toDoList);
        copyArray.splice(taskId, 1);
        setToDoList(copyArray);
    }

    useEffect( () => {
        const readDataStorage = async() => {
            let resultUseEffect;
            let toDoListTemp = [];
            let toDoCompleteTemp = [];
            let keys = await showAllKey();
            if(keys != undefined) {
                for (let i = 0; i < keys.length; i++) {
                    resultUseEffect = await readTaskStore(i);
                    console.log(resultUseEffect);
                    if (resultUseEffect == undefined) {
                        console.log('Какого хуя undefined')
                    } else if (resultUseEffect.isComplete == false) {
                        toDoListTemp[i] = resultUseEffect;
                    } else {
                        toDoCompleteTemp[i] = resultUseEffect;
                    }
                }
                setToDoList(toDoListTemp);
                setToDoComplete(toDoCompleteTemp);
                console.log(toDoListTemp); // откуда-то берется undefined 
            }
        };
        readDataStorage();
        console.log(`Хук работает`);
    }, []);

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
                        <AddTask addHandler={addHandler} />
                    </View>
                </View>

            </Modal>

            <Header toDoComplete={toDoComplete} />

            <View style={styles.container}>


                <View>
                    
                    <FlatList data={toDoList} renderItem={ ( {item} ) => (
                        <TaskInfo item={item} taskId={toDoList.indexOf(item)} addComplete={addComplete} />
                    )} />

                </View>

                <Ionicons name="add-circle" size={100} color="#5F92CF" style={styles.addCircle}
                onPress={ () => { setModalAddTask(true) }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '86%',
        marginLeft: '7%',
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
