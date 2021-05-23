import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  setUser(user) {
    AsyncStorage.setItem('user', JSON.stringify(user)).then(() => {
      console.log('user saved in staorage');
    });
  }

  getUser() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('user').then(
        item => {
          resolve(JSON.parse(item));
        },
        () => {
          resolve(null);
        },
      );
    });
  }
}

let AsyncService = new StorageService();
export default AsyncService;
