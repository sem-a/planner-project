import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/style';
import { Formik } from 'formik';

let STORAGE_KEY = 'tasks';


export default function AddTask(setTask) {

  const addTask = (task) => {
    setTask((list) => {
        task.key = Math.random().toString();
        return [
            task, 
            ...list
        ]
    });
    //setOpenAddTask(false);
  }

  const onChangeText = value => setTask(value);

  const onSubmitEditing = () => {
  if (!input) return;

    saveData(input);
    setTask('');
  };


  

  return (
    <SafeAreaView>
      <Text>Здесь вы можете добавить задачу</Text>

      <View>
        <Formik initialValues={{nameTask: '', dataTask: '', timeTask: ''}} onSubmit={ (values) => {
          addTask(values);
          console.log(values.nameTask)
        } }>

          {(props) => (
            <View>
              <TextInput
                multiline
                value={props.values.nameTask}
                placeholder='Введите задачу'
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
              />
              <TextInput
                multiline
                value={props.values.dateTask}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
              />
              <TextInput
                multiline
                value={props.values.timeTask}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
              />
              <Button title='Добавить' onPress={props.handleSubmit} />
            </View>
          )}

        </Formik>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
