import React from 'react';
import { View, Text, Button } from 'react-native';
import style from '../styles/globalStyle.module.css';
import { clearTaskStorage } from './db';

export default function Settings() {
  return (
    <View style={style.settings}>
      <View style={style.warning__settings}>
        <Text style={style.warning__text}>Приносим прощения за предоствленные неудобства, настройки находятся в стадии разработки!</Text>
      </View>

      <Button title='Очистить хранилище' onPress={clearTaskStorage} />
    </View>
  );
}
