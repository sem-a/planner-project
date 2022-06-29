import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 20,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    mainTaskContainer: {
        marginTop: 50,
    },
    mainTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
