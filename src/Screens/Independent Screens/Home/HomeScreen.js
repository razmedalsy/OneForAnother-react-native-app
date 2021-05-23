/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Setting from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: hp(8),
          justifyContent: 'space-between',
          backgroundColor: 'mediumpurple',
          alignItems: 'center',
        }}>
        <Text style={Styles.title}>Home</Text>
        <Setting
          name="setting"
          size={25}
          color="white"
          onPress={() => navigation.navigate('ClientSetting')}
          style={{marginRight: wp(3)}}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image
          style={Styles.img}
          source={require('../../../Assets/home.jpg')}
        />
      </View>
      <View style={Styles.welcome}>
        <Text style={Styles.text}>Welcome</Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 10,
            lineHeight: 20,
          }}>
          Do you need some help right now? You can click the button below and
          start chat with a volunteer.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ClientCategory')}>
        <View style={Styles.button}>
          <Text style={Styles.buttonText}>
            Start chat with the first available volunteer
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
