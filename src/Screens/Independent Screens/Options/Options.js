/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';

export default function Options({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={gStyle.headerUpper}>
        <Text style={gStyle.headerUpperText}> Hearing Impaired</Text>
      </View>
      <View>
        <Image
          style={Styles.img}
          source={require('../../../Assets/HelpingHands.png')}
        />
      </View>
      <View style={{marginTop: hp(2)}}>
        <Text style={Styles.text}> Need some help ? </Text>
        <Text style={Styles.paragraph}>Get a help from others</Text>
      </View>

      <View style={Styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('ClientSignIn')}>
          <View style={gStyle.buttonOuter}>
            <Text style={gStyle.buttonInnerText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ClientSignUn')}>
          <View style={[gStyle.buttonOuter, {marginTop: 20}]}>
            <Text style={gStyle.buttonInnerText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
