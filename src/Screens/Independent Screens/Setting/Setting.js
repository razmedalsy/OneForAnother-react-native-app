/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
import firebaseService from '../../../service/firebase';
import AsyncService from '../../../service/asyncstorage';
export default function Setting({navigation}) {
  const [img, setImg] = useState(
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  );
  const [user, setUser] = useState({});
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      firebaseService.uploadFile(decodeURI(image.path)).then(url => {
        firestore()
          .collection('User')
          .doc(user.email)
          .update({
            imageURL: url,
          })
          .then(() => {
            console.log('image added!');
            user.imageURL = url;
            AsyncService.setUser(user);
          });
      });
      setImg(image.path);
    });
  };

  const logoutUser = () => {
    console.log('logout called');
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          AsyncService.setUser(null);
          navigation.navigate('Welcome');
        },
      },
    ]);
  };
  const getLocalUser = () => {
    AsyncService.getUser().then(user => {
      setUser(user);
      if (user.imageURL) {
        setImg(user.imageURL);
      }
    });
  };
  useEffect(() => {
    getLocalUser();
  }, []);
  return (
    <View style={Styles.containe}>
      <View style={Styles.header}>
        <Back
          name="arrow-back"
          color="white"
          size={30}
          style={{marginTop: hp(1), paddingLeft: 10}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => openGallery()}>
        <Image style={Styles.img} source={{uri: img}} />
      </TouchableOpacity>
      <View style={Styles.details}>
        <Text style={Styles.title}>{user.name}</Text>
        <Text style={Styles.paragrapgh}>{user.email}</Text>
        <Text style={Styles.paragrapgh}>{user.phone}</Text>
      </View>

      <TouchableOpacity
        style={{marginTop: 25}}
        onPress={() => navigation.navigate('ClientChangePassword')}>
        <View style={[gStyle.buttonOuter, {marginTop: hp(3)}]}>
          <Text style={gStyle.buttonInnerText}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logoutUser()}>
        <View style={[gStyle.buttonOuter, {marginTop: hp(3)}]}>
          <Text style={gStyle.buttonInnerText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
