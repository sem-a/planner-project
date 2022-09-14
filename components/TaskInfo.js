import React, { useState } from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import CheckBox from 'react-native-check-box';

export default function TaskInfo( {item} ) {


  const [toggleIsComplete, setToggleIsComplete] = useState(item.isComplete);


  return (
    <View>
      
      <View>
        
        <CheckBox
          isChecked={toggleIsComplete}
          onClick={ () => { setToggleIsComplete(true) } }
          rightText={item.taskName}
        />

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
});
