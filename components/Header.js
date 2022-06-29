import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, Modal } from 'react-native';
import BurgerMenu from './BurgerMenu';
import Calendar from './Calendar';
import { globalStyles } from '../styles/style';

export default function Header() {

    const [burgerMenu, setBurgerMenu] = useState(false);
    const [calendar, setCalendar] = useState(false);
    
  return (
    <SafeAreaView>
        <View style={styles.header}>
            <Button title='Меню'  onPress={ () => { setBurgerMenu(true) } }/>
            <Button title='Календарь' onPress={ () => { setCalendar(true) } }/>
        </View>



        <Modal visible={burgerMenu}>

            <View style={globalStyles.mainContainer} >
                <Button title="Закрыть"  onPress={ () => { setBurgerMenu(false) } }/>
                <BurgerMenu />
            </View>

        </Modal>


        <Modal visible={calendar}>

            <View style={globalStyles.mainContainer}>
                <Button title="Закрыть" onPress={ () => { setCalendar(false) } }/>
                <Calendar />
            </View>

        </Modal>




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
