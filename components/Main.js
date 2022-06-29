import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, TouchableOpacity, Modal, CheckBox } from 'react-native';
import { globalStyles } from '../styles/style';
import AddTask from './AddTask';
import Header from './Header';

export default function Main() {


    const [openAddTask, setOpenAddTask] = useState(false);

    const [todayTask, addTodayTask] = useState([
        {nameTask: 'Сделать зарядку', dateTask: '21.06.2022', timeTask: '9:00', doneTask: false, key: '1'},
        {nameTask: 'Приготовить завтрак', dateTask: '21.06.2022', timeTask: '10:00', doneTask: false, key: '2'},
        {nameTask: 'Встретиться с друзьями', dateTask: '21.06.2022', timeTask: '14:00', doneTask: false, key: '3'},
    ]);
    // const [otherTask, addOtherTommorow] = useState([
    //     {nameTask: 'Сделать зарядку', dateTask: '22.06.2022', timeTask: '9:00', doneTask: false},
    //     {nameTask: 'Приготовить завтрак', dateTask: '22.06.2022', timeTask: '10:00', doneTask: false},
    //     {nameTask: 'Встретиться с друзьями', dateTask: '22.06.2022', timeTask: '14:00', doneTask: false},
    // ]);

    const addTask = (task) => {
        addTodayTask((list) => {
            task.key = Math.random().toString();
            return [
                task, 
                ...list
            ]
        });
        setOpenAddTask(false);
    }




    return (
        <SafeAreaView style={globalStyles.mainContainer}>
            <Header />
            
            <Modal visible={openAddTask}>

                <View style={globalStyles.mainContainer}>
                    <Button title="Закрыть"  onPress={ () => { setOpenAddTask(false) } }/>
                    <AddTask addTask={addTask} />
                </View>

            </Modal>


            <View style={globalStyles.mainTaskContainer}>
                <Text style={globalStyles.mainTitle}>TODAY</Text>

                <View>

                    <FlatList 
                        data={todayTask}
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


            {/* <View>
                <Text style={styles.title}>TODAY</Text>
                <View>
                    <FlatList data={itemTask} 
                        renderItem={ ( {item} ) => (
                            <TouchableOpacity>
                                <View style={[styles.flexTask, styles.paddingTask]}>
                                    <Text>{item.nameTask}</Text>
                                    <Text>{item.timeTask}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View> */}
            

            <Button title='Добавить задачу' onPress={ () => { setOpenAddTask(true) } }/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
