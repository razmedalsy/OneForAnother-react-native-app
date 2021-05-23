/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';

export default function Options({navigation}) {
  return (
    <View style={Styles.container}>
      <View style={gStyle.headerUpper}>
        <Text style={gStyle.headerUpperText}> Volunteer</Text>
      </View>
      <View>
        <Image
          style={Styles.img}
          source={require('../../../Assets/HelpingHands.png')}
        />
      </View>
      <View style={{marginTop: hp(2)}}>
        <Text style={Styles.text}> want to start helping ? </Text>
        <Text style={Styles.paragraph}>help people who need it</Text>
      </View>
      <View style={Styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('VolunteerSignIn')}>
          <View style={gStyle.buttonOuter}>
            <Text style={gStyle.buttonInnerText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('VolunteerSignUp')}>
          <View style={[gStyle.buttonOuter, {marginTop: 20}]}>
            <Text style={gStyle.buttonInnerText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
