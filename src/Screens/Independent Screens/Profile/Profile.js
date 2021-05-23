/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
import firebaseService from '../../../service/firebase';
import firestore from '@react-native-firebase/firestore';

export default function Profile({route, navigation}) {
  const [img, setImg] = useState(
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  );
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      firebaseService.uploadFile(decodeURI(image.path)).then(url => {
        console.log('route.params.email: ', route.params.email);
        firestore()
          .collection('User')
          .doc(route.params.email)
          .update({
            imageURL: url,
          })
          .then(() => {
            console.log('image added!');
          });
      });
      setImg(image.path);
    });
  };
  return (
    <View style={Styles.container}>
      <View style={gStyle.headerUpper}>
        <Text style={gStyle.headerUpperText}> Add your Profile</Text>
      </View>
      <TouchableOpacity style={Styles.imgView} onPress={() => openGallery()}>
        <Image source={{uri: img}} style={Styles.img} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          color: 'black',
          fontSize: 12,
        }}>
        Click on Image to change profile image
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ClientHome')}
        style={[gStyle.buttonOuter, {marginTop: hp(15)}]}>
        <Text style={gStyle.buttonInnerText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
