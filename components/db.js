import AsyncStorage from "@react-native-async-storage/async-storage";

let ID = 0;

export async function showAllKey() {
    // получение всех ключей хранилища
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
        return keys;
    } catch(e) {
        console.log('Error key');
    }
};

export async function saveTaskStore(task) {
    // сохранение данных в хранилище
    try {
        const getId = async() => {
            let keys = await showAllKey()
            return keys.length
        }
        ID = await getId();
        const jsonTaskItem = JSON.stringify(task);
        await AsyncStorage.setItem(`@store1:${ID}`, jsonTaskItem);
        ID += 1;
    } catch(e) {
        console.log('Error save!');
    }    
};

export async function rewriteTaskStore(task, taskId) {
    // перезаписать данные в хранилище
    try {
        const jsonTaskItem = JSON.stringify(task);
        await AsyncStorage.setItem(`@store1:${taskId}`, jsonTaskItem);
    } catch(e) {
        console.log('Error rewrite');
    }
}

export async function readTaskStore(ID) {
    // чтение данных из хранилища
    try {

        const jsonTaskItem = await AsyncStorage.getItem(`@store1:${ID}`);
        if(jsonTaskItem != null) {
            jsonTask = JSON.parse(jsonTaskItem);
            return jsonTask;
        } else {
            console.log('Error read');
        }
    } catch(e) { 
        console.log('Фатальная ошибка! Все потеряно!');
    }  
};

export async function removeTaskItem(ID) {
    // удалить элемент из хранилища
    try {
        await AsyncStorage.removeItem(`@store1:${ID}`);
        console.log('Remove done!'); 
    } catch(e) {
        console.log('Error remove!');
    }
};

export async function clearTaskStorage() {
    // очистить хранилище полностью
    try {
        await AsyncStorage.clear();
        ID = 0;
        console.log('Clear done!');
    } catch(e) {
        console.log('Erorr clear');
    }
};