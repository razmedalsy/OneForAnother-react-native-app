import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Styles from './Styles';
import auth from '@react-native-firebase/auth';
import gStyle from '../../../Styles/GlobalStyle';

export default function ForgotPassword({navigation}) {
  const s = require('../../../Styles/GlobalStyle');
  let [Email, setEmail] = useState('');
  const validateUser = async () => {
    if (Email != '') {
      try {
        await auth().sendPasswordResetEmail(Email);
        Alert.alert(
          'Alert',
          'Reset link sent to provided email',
          [{text: 'OK', onPress: () => navigation.navigate('VolunteerSignIn')}],
          {cancelable: false},
        );
      } catch (error) {
        Alert.alert('Alert', error.toString(), [{text: 'OK'}], {
          cancelable: false,
        });
      }
    } else {
      Alert.alert('Alert', 'Enter email first', [{text: 'OK'}], {
        cancelable: false,
      });
    }
  };
  return (
    <KeyboardAvoidingScrollView behavior="position">
      <View style={Styles.container}>
        <View style={gStyle.headerUpper}>
          <Text style={gStyle.headerUpperText}> Forgot Password</Text>
        </View>
        <View style={Styles.margin}>
          <View style={Styles.emailCon}>
            <View style={s.border}>
              <TextInput
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="lightgray"
                style={Styles.textInput}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => validateUser()}
          style={gStyle.buttonOuter}>
          <Text style={gStyle.buttonInnerText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingScrollView>
  );
}
