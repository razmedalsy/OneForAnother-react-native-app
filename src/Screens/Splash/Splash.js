/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

import { useIsFocused } from '@react-navigation/native';
import AsyncService from '../../service/asyncstorage';
export default function Splash( { navigation } ) {
  const [user, setUser] = useState( {} );
  const isFocused = useIsFocused();

  useEffect( async () => {
    AsyncService.getUser().then( item => {
      console.log( 'item from storage: ', item );
      if ( item ) {
        setUser( item );
        if ( item.userType === 'independent' ) {
          navigation.navigate( 'ClientHome' );
        }
        if ( item.userType === 'admin' ) {
          navigation.navigate( 'AdminHome' );
        }
        if ( item.userType === 'volunteer' ) {
          navigation.navigate( 'VolunteerHome' );
        }
      } else {
        navigation.navigate( 'Welcome' );
      }
    } );
  }, [isFocused] );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ActivityIndicator animating={true} color={'pink'} />
      </View>
    </SafeAreaView>
  );
}
