import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import Delete from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
export default function DeleteUser({navigation}) {
    const s = require( '../../../Styles/GlobalStyle' );
    const datal = [];
    const [myData, setMyData] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );
    const [refreshing, setRefreshing] = React.useState( false );
    const getData = () => {
        firestore()
            .collection( 'User' )
            .get()
            .then( querySnapshot => {
                querySnapshot.forEach( documentSnapshot => {
                    const { Name } = documentSnapshot.data();
                    console.log( 'documentSnapshot.data():  ', documentSnapshot.data() );
                    datal.push( {
                        name: Name,
                        docId: documentSnapshot.id
                    } );
                } );
                setMyData( datal );
                setIsLoading( false );
            } );
    }
    const showData = ( item, index ) => {
        return (
            <Card>
                <View style={Styles.requestContainer}>
                    <View style={Styles.requestBody}>
                        <View style={Styles.reqDetail}>
                            <Text style={Styles.text}> {item.name}</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: wp( 3 ) }}>
                        <Delete name="delete" size={25} color="red" onPress={() => verify( item, index )} />
                    </View>
                </View>
            </Card>
        );
    };
    const verify = ( item, index ) => {
        Alert.alert( 'Delete', 'Are you sure you want to delete?', [
            {
                text: 'Cancel',
                onPress: () => console.log( 'Cancel Pressed' ),
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => deleteItem( item, index ),
            },
        ] );
    }
    const deleteItem = ( item, index ) => {
        firestore()
            .collection( 'User' )
            .doc( item.docId ).delete().then( () => {
                alert( "User successfully deleted!" );
                myData.splice( index, 1 )
                onRefresh()
            } ).catch( ( error ) => {
                console.error( "Error removing document: ", error );
            } );
    }
    const onRefresh = React.useCallback( () => {
        setRefreshing( true )

        wait( 0 ).then( () => setRefreshing( false ) )
    }, [] )

    const wait = ( timeout ) => {
        return new Promise( ( resolve ) => {
            setTimeout( resolve, timeout )
        } )
    }

    useEffect( () => {
        getData();
    }, [] );
    return ( <View style={Styles.container}>
        <View
            style={{
                flexDirection: 'row',
                height: hp( 8 ),
                backgroundColor: 'mediumpurple',
                alignItems: 'center',
            }}>
            <Back
                name="arrow-back"
                color="white"
                size={30}
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.goBack()}
            />
            <Text style={Styles.title}>Delete User</Text>
        </View>
        <View>
            <FlatList
                data={myData}
                renderItem={( { item, index } ) => <View>{showData( item, index )}</View>}
                keyExtractor={( item, index ) => index.toString()}
            />
        </View>
    </View>
    )
}
