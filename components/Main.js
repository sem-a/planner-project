import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, TouchableOpacity, Modal, CheckBox } from 'react-native';
import { globalStyles } from '../styles/style';
import AddTask from './AddTask';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Main() {


    const [openAddTask, setOpenAddTask] = useState(false);

    const [task, setTask] = useState('');




    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, task)
            console.log('Сохранение успешно')
        } catch(e) {
            console.log('Ошибка!')
        }
    };
    
    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
    
            if (value !== null) {
                setTask(value);
            }
        } catch (e) {
            console.log('Ошибка чтения хранилища')
        }
    };
    
    useEffect(() => {
        readData();
    }, [])

    return (
        <SafeAreaView style={globalStyles.mainContainer}>
            <Header />
            
            <Modal visible={openAddTask}>

                <View style={globalStyles.mainContainer}>
                    <Button title="Закрыть"  onPress={ () => { setOpenAddTask(false) } }/>
                    <AddTask addTask={setTask} />
                </View>

            </Modal>


            <View style={globalStyles.mainTaskContainer}>
                <Text style={globalStyles.mainTitle}>TODAY</Text>

                <View>

                    <FlatList 
                        data={task}
                        renderItem={ ({item}) => (
                            <TouchableOpacity>
                                <View style={globalStyles.mainTask}>
                                    <Text>{item.nameTask}</Text>
                                    <Text>{item.dateTask}</Text>
                                    <Text>{item.timeTask}</Text>
                                </View>
                            </TouchableOpacity>
                        ) }

                    />

                </View>


            </View>

            <Button title='Добавить задачу' onPress={ () => { setOpenAddTask(true) } }/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});

