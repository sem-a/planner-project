import AsyncStorage from "@react-native-async-storage/async-storage";



export async function saveTaskStore(task, ID) {
    // сохранение данных в хранилище
    try {
        const jsonTaskItem = JSON.stringify(task);
        await AsyncStorage.setItem(`@store1:${ID}`, jsonTaskItem);
        console.log('Save done!');
    } catch(e) {
        console.log('Error save!');
    }    
};

export async function readTaskStore(STORAGE_KEY) {
    // чтение данных из хранилища
    try {
        const jsonTaskItem = await AsyncStorage.getItem(STORAGE_KEY);
        console.log(STORAGE_KEY);
        if(jsonTaskItem != null) {
            jsonTask = JSON.parse(jsonTaskItem);
            console.log('Read done!');
            return jsonTask;
        } else {
            console.log('Error read');
            return 18
        }
    } catch(e) {
        console.log('Фатальная ошибка! Все потеряно!');
    }  
};

export async function showAllKey() {
    // получение всех ключей хранилища
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
        console.log(keys);
        return keys;
    } catch(e) {
        console.log('Error key');
    }
};

export async function removeTaskItem(STOREGE_KEY) {
    // удалить элемент из хранилища
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        console.log('Remove done!');
    } catch(e) {
        console.log('Error remove!');
    }
};

export async function clearTaskStorage() {
    // очистить хранилище полностью
    try {
        await AsyncStorage.clear();
        console.log('Clear done!');
    } catch(e) {
        console.log('Erorr clear');
    }
};