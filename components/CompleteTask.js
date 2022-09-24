import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import style from '../styles/globalStyle.module.css';

export default function CompleteTask( {toDoComplete} ) {
  const [isChecked, setChecked] = useState(true);
  const changeChecked = () => {
    setChecked(!isChecked);
  }

  return (
    <View>
      <FlatList data={toDoComplete} renderItem={ ( {item} ) => (
        <View style={style.task__item} >
          <Checkbox
            style={style.checkbox__base}
            value={isChecked}
            color={isChecked ? '#5F92CF' : undefined}
          />
          <Text style={style.info__text}>{item.taskName}</Text>
        </View>
      )} />
    </View>
  );
}
