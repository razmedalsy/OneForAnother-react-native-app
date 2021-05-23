/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Eye from 'react-native-vector-icons/AntDesign';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Styles from './Styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncService from '../../../service/asyncstorage';
import gStyle from '../../../Styles/GlobalStyle';
import firebaseService from '../../../service/firebase';

export default function SignUp( { navigation } ) {
  const s = require( '../../../Styles/GlobalStyle' );
  const [Name, setName] = useState( '' );
  const [Email, setEmail] = useState( '' );
  const [Phone, setPhone] = useState( '' );
  const [Password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState( '' );
  const [selectedValue, setSelectedValue] = useState( 'Shopping' );
  const [flag, setflag] = useState( false );
  const updateSecureTextEntry = () => {
    setPassword( {
      ...Password,
      secureTextEntry: !Password.secureTextEntry,
    } );
  };
  const submit = () => {
    AsyncService.setUser( {
      name: Name,
      email: Email.toLowerCase(),
      password: Password,
      userType: 'volunteer',
    } );
    firestore()
      .collection( 'User' )
      .doc( Email )
      .set( {
        userType: 'volunteer',
        Name: Name,
        Email: Email.toLowerCase(),
        Phone: Phone,
        Category: selectedValue,
      } )
      .then( () => {
        console.log( 'User added!' );
      } );
  };

  const creatAccount = async () => {
    if ( Name === '' ) {
      alert( 'Enter your name' );
    } else if ( !firebaseService.ValidateEmail( Email ) ) {
      alert( 'Enter valid email' );
    }
    else if ( Phone === '' ) {
      alert( "Please enter Phone Number" )

    }
    else if ( Phone.length < 10 ) {
      alert( "Invalid Number" )

    }
    else if ( flag === false ) {
      console.log( "flag is ", flag )
      alert( "Number must start with 05" )

    }
    else if ( Password === '' ) {
      alert( 'Invalid Password' );
    }
    else if ( confirmPassword === '' ) {
      alert( 'Invalid Password' );
    } else if ( confirmPassword !== Password ) {
      alert( 'Password And Confirm Password does not match' );
    } else if ( Password.length < 8 ) {
      alert( "password must be 8 characters" )
      console.log( Password.length )
    }
    else {
      await auth()
        .createUserWithEmailAndPassword( Email, Password )
        .then( () => {
          console.log( 'User account created' );
          submit();
          navigation.navigate( 'VolunteerProfile', { email: Email } );
        } )
        .catch( error => {
          if ( error.code === 'auth/email-already-in-use' ) {
            alert( 'That email address is already in use!' );
          }

          if ( error.code === 'auth/invalid-email' ) {
            alert( 'That email address is invalid!' );
          }

          console.error( error );
        } );
    }
  };
  const validateNumber = ( text ) => {
    console.log( "this is number", text )
    setflag( text.startsWith( '05' ) )
    console.log( "value of flag", flag )
    setPhone( text )
  }
  return (
    <ScrollView>
      <KeyboardAvoidingScrollView behavior="position">
        <View style={Styles.container}>
          <View style={gStyle.headerUpper}>
            <Text style={gStyle.headerUpperText}> Sign Up</Text>
          </View>
          <View style={Styles.margin}>
            <View style={Styles.nameCon}>
              <View style={s.border}>
                <TextInput
                  onChangeText={text => setName( text )}
                  placeholder="Name"
                  placeholderTextColor="lightgrey"
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.otherCon}>
              <View style={s.border}>
                <TextInput
                  onChangeText={text => setEmail( text.toLowerCase() )}
                  placeholder="Email"
                  placeholderTextColor="lightgrey"
                  style={Styles.textInput}
                />
              </View>
            </View>

            <View style={Styles.otherCon}>
              <View style={s.border}>
                <TextInput
                  onChangeText={text => validateNumber( text )}
                  placeholder="Phone Number"
                  placeholderTextColor="lightgrey"
                  style={Styles.textInput}
                  maxLength={10}
                />
              </View>
            </View>
            <View style={Styles.otherCon}>
              <View style={[s.border, { flexDirection: 'row' }]}>
                <TextInput
                  onChangeText={text => setPassword( text )}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="lightgrey"
                  style={Styles.textInput}
                />
              </View>
            </View>
            <View style={Styles.otherCon}>
              <View style={[s.border, { flexDirection: 'row' }]}>
                <TextInput
                  onChangeText={text => setConfirmPassword( text )}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="lightgrey"
                  style={Styles.textInput}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => creatAccount()}
            style={[gStyle.buttonOuter, { marginTop: 25 }]}>
            <Text style={gStyle.buttonInnerText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingScrollView>
    </ScrollView>
  );
}
