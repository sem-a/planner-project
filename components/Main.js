import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from './header';
import { Ionicons, Entypo } from '@expo/vector-icons';
import AddTask from './addTask';
import Modal from "react-native-modal";
import TaskInfo from './taskInfo';
import { readTaskStore, showAllKey } from './db';
import style from '../styles/globalStyle.module.css';

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
                console.log(toDoListTemp);
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
                <View style={style.addTaskStyles}>
                    <View style={style.modalAddTask}>
                        <Entypo name="chevron-small-down" size={30} color="black" style={style.closeButtonAddTask} 
                            onPress={ () => setModalAddTask(false)}
                        />
                        <AddTask addHandler={addHandler} />
                    </View>
                </View>
            </Modal>
            <Header toDoComplete={toDoComplete} />
            <View style={style.container}>
                <View>
                    <FlatList data={toDoList} renderItem={ ( {item} ) => (
                        <TaskInfo item={item} taskId={toDoList.indexOf(item)} addComplete={addComplete} />
                    )} />
                </View>
                <Ionicons name="add-circle" size={100} color="#5F92CF" style={style.addCircle}
                onPress={ () => { setModalAddTask(true) }} />
            </View>
        </View>
    );
}
