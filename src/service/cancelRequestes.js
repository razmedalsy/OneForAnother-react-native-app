/* eslint-disable handle-callback-err */
import AsyncStorage from '@react-native-async-storage/async-storage';

class CancelRequests {
  allRequestData = [];

  getAll() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('canceledRequests').then(
        resp => {
          if (resp) {
            resp = JSON.parse(resp);
            this.allRequestData = resp ? resp : [];
          }
          resolve(this.allRequestData);
        },
        err => {
          resolve([]);
        },
      );
    });
  }

  set(requestId) {
    let idz = [];
    this.getAll().then(reqIdz => {
      idz = reqIdz ? reqIdz : [];
      idz.push(requestId);
      this.allRequestData = idz;
      AsyncStorage.setItem('canceledRequests', JSON.stringify(idz));
    });
  }

  isExist(requestId) {
    let isCancelled = this.allRequestData.includes(requestId);
    return isCancelled;
  }
}

let cancelRequestsService = new CancelRequests();
export default cancelRequestsService;
