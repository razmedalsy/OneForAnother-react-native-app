/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import firestore from '@react-native-firebase/firestore';
import {Card} from 'react-native-paper';
import AsyncService from '../../../service/asyncstorage';
import cancelRequestsService from '../../../service/cancelRequestes';

export default function Requests({navigation}) {
  const datal = [];
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myUser, setUser] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const showData = (item, index) => {
    return (
      <Card>
        <View style={Styles.requestContainer}>
          <View style={Styles.requestBody}>
            <View style={{flexDirection: 'row'}}>
              <Text style={Styles.requestTitle}>Name : </Text>
              <Text style={Styles.requestTitle}> {item.name}</Text>
            </View>
            <View style={Styles.reqDetail}>
              <Text style={[Styles.text, {color: 'lightgrey'}]}>
                Requested For :
              </Text>
              <Text style={Styles.text}> {item.category}</Text>
            </View>
            <View style={Styles.buttonCon}>
              <TouchableOpacity onPress={() => update(item, index)}>
                <View style={Styles.buttonStyle}>
                  <Text style={{fontSize: 15, color: 'green'}}>Accept</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => reject(item, index)}>
                <View style={Styles.buttonStyle}>
                  <Text style={{fontSize: 15, color: 'red'}}>Reject</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(0).then(() => setRefreshing(false));
  }, []);

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const getStart = () => {
    AsyncService.getUser().then(user => {
      setUser(user);
      firestore()
        .collection('Request')
        .where('status', '==', 'pending')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            const {name, category, reqId} = documentSnapshot.data();
            if (!cancelRequestsService.isExist(reqId)) {
              datal.push({
                docId: documentSnapshot.id,
                email: documentSnapshot.id.toLowerCase(),
                name,
                category,
                reqId,
              });
            }
          });
          setMyData(datal);
          setIsLoading(false);
        });
    });
  };

  const update = (item, index) => {
    firestore()
      .collection('Request')
      .doc(item.docId)
      .get()
      .then(resp => {
        let d = resp.data();
        if (d.status === 'pending') {
          firestore()
            .collection('Request')
            .doc(item.docId)
            .update({
              vEmail: myUser.email.toLowerCase(),
              status: 'accepted',
            })
            .then(() => {
              setMyData(datal.splice(index, 1));
              navigation.navigate('Messages', {requestData: item});
            });
        } else {
          alert('This request is already accepted by some other volunteer');
          setMyData(datal.splice(index, 1));
        }
      });
  };

  const reject = (item, index) => {
    if (item.reqId) {
      cancelRequestsService.set(item.reqId);
    }
    myData.splice(index, 1);
    onRefresh();
  };
  useEffect(() => {
    cancelRequestsService.getAll();
    getStart();
  }, []);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <TouchableOpacity style={Styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: hp(8),
            backgroundColor: 'mediumpurple',
            alignItems: 'center',
          }}>
          <Back
            name="arrow-back"
            color="white"
            size={30}
            style={{paddingLeft: 10}}
            onPress={() => navigation.navigate('VolunteerHome')}
          />
          <Text style={Styles.headerText}>Requests</Text>
        </View>
        <View>
          <FlatList
            ListEmptyComponent={({}) => (
              <View>
                {isLoading ? (
                  <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Loading Requests.....
                  </Text>
                ) : (
                  <Text style={{textAlign: 'center', paddingTop: 10}}>
                    No pending request
                  </Text>
                )}
              </View>
            )}
            data={myData}
            renderItem={({item, index}) => <View>{showData(item, index)}</View>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
