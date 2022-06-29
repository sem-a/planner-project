import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/style';
import { Formik } from 'formik';

export default function AddTask({ addTask }) {
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
                onChangeText={props.handleChange('nameTask')}
              />
              <TextInput
                multiline
                value={props.values.dateTask}
                placeholder='Введите дату'
                onChangeText={props.handleChange('dateTask')}
              />
              <TextInput
                multiline
                value={props.values.timeTask}
                placeholder='Введите время'
                onChangeText={props.handleChange('timeTask')}
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
