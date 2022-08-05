import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, Modal, Text } from 'react-native';
import { Ionicons, AntDesign} from '@expo/vector-icons';
 


export default function Header() {


    
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.headerPanel}>
            <Ionicons name="ios-menu-outline" size={36} color="white" />
            <Text style={styles.headerText}>Today</Text>
            <AntDesign name="calendar" size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5F92CF',
  },
  container: {
    width: '90%',
    marginLeft: '5%',
  },
  headerPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 10,
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
