/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Shopping from 'react-native-vector-icons/AntDesign';
import Food from 'react-native-vector-icons/MaterialCommunityIcons';
import Money from 'react-native-vector-icons/FontAwesome5';
import Bill from 'react-native-vector-icons/Entypo';
import Other from 'react-native-vector-icons/Feather';
import Back from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import Styles from './Styles';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

export default function Category({navigation}) {
  const datal = [];
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getStart = () => {
    firestore()
      .collection('Category')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const {Name} = documentSnapshot.data();
          console.log('documentSnapshot.data():  ', documentSnapshot.data());
          datal.push({
            name: Name,
          });
        });
        setMyData(datal);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getStart();
  }, []);
  const showData = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ClieentAvailable', {category: item.name})
        }>
        <Card>
          <View style={Styles.requestContainer}>
            <View style={Styles.reqDetail}>
              <Text style={[Styles.CatText, {alignSelf: 'center'}]}>
                {item.name}
              </Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Back
          name="arrow-back"
          color="white"
          size={30}
          style={{paddingLeft: 10}}
          onPress={() => navigation.navigate('ClientHome')}
        />
        <Text style={Styles.headerText}>Category</Text>
      </View>
      <View style={Styles.margin}>
        <Text style={Styles.text}>Select Your Category</Text>
      </View>
      <FlatList
        ListEmptyComponent={({}) => (
          <View>
            {isLoading ? (
              <Text style={{textAlign: 'center', paddingTop: 10}}>
                Loading Category.....
              </Text>
            ) : (
              <Text style={{textAlign: 'center', paddingTop: 10}}>
                No pending request
              </Text>
            )}
          </View>
        )}
        data={myData}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={{marginLeft: 25}}>{showData(item, index)}</View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
