/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import StarRating from 'react-native-star-rating';
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

  const data = [];
  const [starCount, setStarCount] = useState(0);
  const getRating = () => {
    AsyncService.getUser().then(user => {
      console.log('settting user.em: ', user);
      firestore()
        .collection('Rating')
        //.doc( user.email.toLowerCase() )
        .where('volunteer', '==', user.email.toLowerCase())
        .get()
        .then(querySnapshot => {
          //console.log("query snapshot",querySnapshot.data)
          querySnapshot.forEach(documentSnapshot => {
            const {Rating} = documentSnapshot.data();
            data.push(Rating);
          });
          let sum = 0;
          let counter = 0;
          data.forEach(element => {
            sum = sum + element;
            counter = counter + 1;
          });
          setStarCount(sum / counter);
        });
    });
  };

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
      //console.log( 'settting user.em: ', user );
      setUser(user);
      if (user.img) {
        setImg(user.img);
      }
    });
  };
  useEffect(() => {
    getLocalUser();
    getRating();
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
      <View style={[Styles.totalWrap, {alignSelf: 'center'}]}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={starCount}
          fullStarColor={'gold'}
          emptyStarColor={'black'}
        />
      </View>
      <TouchableOpacity
        style={{marginTop: 25}}
        onPress={() => navigation.navigate('ClientChangePassword')}>
        <View style={[gStyle.buttonOuter, {marginTop: hp(3)}]}>
          <Text style={gStyle.buttonInnerText}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logoutUser()}>
        <View style={[gStyle.buttonOuter, {marginTop: hp(8)}]}>
          <Text style={gStyle.buttonInnerText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
