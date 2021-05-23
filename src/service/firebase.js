/* eslint-disable handle-callback-err */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

class FirebaseService {
  resetPassword = email => {
    return new Promise((resolve, reject) => {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => resolve('done'))
        .catch(err => reject(err));
    });
  };

  updatePassword = (newPassword, currentPassword) => {
    return new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          var user = auth().currentUser;
          user
            .updatePassword(newPassword)
            .then(() => {
              resolve('updated');
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  uploadFile(fileUrl) {
    return new Promise((resolve, reject) => {
      let date = new Date();
      let name = date.getTime();
      const reference = storage().ref(`/images/${name}`);
      const task = reference.putFile(fileUrl);
      task.on('state_changed', taskSnapshot => {
        // const prog = parseInt((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100);
        // const progressBar =taskSnapshot.bytesTransferred / taskSnapshot.totalBytes;
      });
      task
        .then(async () => {
          const url = await storage().ref(`/images/${name}`).getDownloadURL();
          resolve(url);
        })
        .catch(err => {
          alert('Upload image Failed try again later');
        });
    });
  }

  ValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

let firebaseService = new FirebaseService();
export default firebaseService;
