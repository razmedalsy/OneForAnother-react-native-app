/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import firestore from '@react-native-firebase/firestore';
import AsyncService from '../../../service/asyncstorage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';

export default function Available({route, navigation}) {
  const [_snapshot, setSnapShot] = useState();

  const user = async () => {
    AsyncService.getUser().then(user => {
      console.log('user from storage: ', user);
      firestore()
        .collection('Request')
        .doc(user.email.toLowerCase())
        .set({
          name: user.name,
          email: user.email.toLowerCase(),
          status: 'pending',
          category: route.params.category,
          reqId: `id-${moment().format('x')}`,
        })
        .then(() => {
          console.log('request sent');
          firestore()
            .collection('Request')
            .doc(user.email.toLowerCase())
            .onSnapshot(snapshot => {
              let source = snapshot.metadata.hasPendingWrites
                ? 'Local'
                : 'Server';
              if (source === 'Local' || snapshot.empty) {
                return;
              }

              console.log('snapshot._exists: ', snapshot._exists);
              if (snapshot._exists) {
                console.log('on snap shot: ', snapshot._data);
                let data = snapshot._data;
                console.log('snapshot: ', data);
                if (data.status === 'accepted') {
                  navigation.navigate('Messages', {fromIndepended: data});
                }
              }
            });
        });
    });

    // Send Push Notification
    // firestore()
    //   .collection('User')
    //   .where('Category', '==', route.params.category)
    //   .get()
    //   .then(querySnapshot => {
    //     console.log('Total users: ', querySnapshot.size);
    //     querySnapshot.forEach(documentSnapshot => {
    //       const {Name, Email} = documentSnapshot.data();
    //       //Send push here
    //     });
    //   });
  };

  const goHome = () => {
    if (_snapshot) {
      _snapshot && _snapshot();
    }
    navigation.navigate('ClientHome');
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>Searching Volunteers</Text>
      </View>

      <View style={{padding: 20, marginTop: 20}}>
        <Text style={{textAlign: 'center', fontSize: 22, marginBottom: 20}}>
          Searching...
        </Text>
        <Text style={{textAlign: 'center'}}>
          Please wait, We are searching volunteer who is available to help with
          category <Text>{route.params.category}</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={() => goHome()}>
        <View style={Styles.button}>
          <Text style={Styles.buttonText}>Go to Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
