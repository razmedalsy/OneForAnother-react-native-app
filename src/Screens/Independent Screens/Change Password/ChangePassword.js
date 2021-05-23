/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
import firebaseService from '../../../service/firebase';
import auth from '@react-native-firebase/auth';
import AsyncService from '../../../service/asyncstorage';
export default function ChangePassword( { navigation } ) {
  let [oldPassword, SetOldPassword] = useState( '' );
  let [newPassword, setNewPassword] = useState( '' );
  let [confirmPassword, setConfirmPassword] = useState( '' );
  const updatePassword = () => {
    if ( oldPassword === '' ) {
      alert( 'Please enter old password' );
    } else if ( newPassword.length < 8 ) {
      alert( 'New password length should be 8 characters' );
    } else if ( newPassword !== confirmPassword ) {
      alert( 'Password and confirm password should be same' );
    } else {
      var user = auth().currentUser;
      console.log( "curenet", user )
      var cred = auth.EmailAuthProvider.credential( user.email, oldPassword );
      user.reauthenticateWithCredential( cred ).then( () => {
        user.updatePassword(newPassword).then(()=>{
          alert("Password Changed Successfully")
          navigation.goBack();
        })
      } )
        .catch( error => {
          if ( error.code === 'auth/wrong-password' ) {
            alert( 'Incorrect Old Password!' );
          }
          console.error( error );
        } );
    }
  };
  return (
    <View style={Styles.container}>
      <View style={gStyle.headerUpper}>
        <Text style={gStyle.headerUpperText}> Change Password</Text>
      </View>
      <View style={Styles.margin}>
        <View style={Styles.oldPassCon}>
          <View style={Styles.oldPassBody}>
            <TextInput
              onChangeText={text => SetOldPassword( text )}
              secureTextEntry={true}
              placeholder="Enter Your Previous Password"
              placeholderTextColor="lightgrey"
              style={Styles.textInput}
            />
          </View>
        </View>
        <View style={Styles.newPassCon}>
          <View style={Styles.oldPassBody}>
            <TextInput
              onChangeText={text => setNewPassword( text )}
              secureTextEntry={true}
              placeholder="New Password"
              placeholderTextColor="lightgrey"
              style={Styles.textInput}
            />
          </View>
        </View>
        <View style={Styles.newPassCon}>
          <View style={Styles.oldPassBody}>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword( text )}
              placeholder="Re-Enter New Password"
              placeholderTextColor="lightgrey"
              style={Styles.textInput}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => updatePassword()}
        style={gStyle.buttonOuter}>
        <Text style={gStyle.buttonInnerText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}
