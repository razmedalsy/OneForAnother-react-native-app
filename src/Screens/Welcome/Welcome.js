/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './Styles';
export default function Welcome({navigation}) {
  return (
    <View style={Styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={Styles.header}>One For Another</Text>
        <Image style={Styles.logo} source={require('../../Assets/logo.png')} />
      </View>
      <View style={Styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('ClientOptions')}>
          <View style={Styles.buttonCon}>
            <Text style={Styles.buttonText}>Need for virtual help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('VolunteerOptions')}>
          <View style={Styles.buttonCon}>
            <Text style={Styles.buttonText}>I want to volunteer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
