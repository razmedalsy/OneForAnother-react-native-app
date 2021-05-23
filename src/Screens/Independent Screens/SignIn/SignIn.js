/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Styles from './Styles';
import auth from '@react-native-firebase/auth';
import AsyncService from '../../../service/asyncstorage';
import gStyle from '../../../Styles/GlobalStyle';
import firestore from '@react-native-firebase/firestore';

export default function SignIn({navigation}) {
  const s = require('../../../Styles/GlobalStyle');
  let [Email, setEmail] = useState('');
  let [Password, setPassword] = useState('');
  const validateUser = async () => {
    if (Email == '' || Password == '') {
      alert('Please provide both Email and Password');
    } else {
      auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {
          firestore()
            .collection('User')
            .doc(Email.toLowerCase())
            .get()
            .then(resp => {
              if (resp.exists) {
                const {Name, userType, Phone, imageURL} = resp.data();
                console.log('i am here : ', Name);
                console.log('response data: ', resp.data());
                if (userType === 'independent') {
                  AsyncService.setUser({
                    name: Name,
                    email: Email,
                    phone: Phone,
                    img: imageURL,
                    password: Password,
                    userType: 'independent',
                  });
                  alert('LOGIN SUCCESSFULL ');
                  navigation.navigate('ClientHome');
                } else if (userType === 'admin') {
                  AsyncService.setUser({
                    name: Name,
                    email: Email,
                    password: Password,
                    userType: 'admin',
                  });
                  alert('admin login');
                  navigation.navigate('AdminHome');
                } else {
                  alert('No independent with this email exist');
                }
              } else {
                alert('No independent with this email exist');
              }
            });
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            alert('Invalid email');
          }
          if (error.code === 'auth/user-not-found') {
            alert('There is no user with this credantials');
          }
          if (error.code === 'auth/wrong-password') {
            alert('Incorrect Password!');
          }
          // console.error(error);
        });
    }
  };

  return (
    <KeyboardAvoidingScrollView behavior="position">
      <View style={Styles.container}>
        <View style={gStyle.headerUpper}>
          <Text style={gStyle.headerUpperText}>Sign In</Text>
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
          <View style={Styles.passwordCon}>
            <View style={s.border}>
              <TextInput
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="lightgray"
                style={Styles.textInput}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={Styles.forgotCon}
          onPress={() => navigation.navigate('ClientForgotPassword')}>
          <Text style={Styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => validateUser()}
          style={gStyle.buttonOuter}>
          <Text style={gStyle.buttonInnerText}>Sign In </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingScrollView>
  );
}
