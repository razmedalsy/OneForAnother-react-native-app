import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
export default function AddCategory( { navigation } ) {
    const s = require( '../../../Styles/GlobalStyle' );
    const [Category, setCategory] = useState( '' );
    const submit = () => {
        if ( Category === '' ) {
            alert( "Please enter category name" )
        }
        else {
            console.log( Category.toLowerCase() )
            firestore()
                .collection( 'Category' )
                .where( 'Name', '==', Category.toLowerCase() )
                .get()
                .then( querySnapshot => {
                    if ( querySnapshot.empty ) {
                        firestore()
                            .collection( 'Category' )
                            .doc()
                            .set( {
                                Name: Category.toLowerCase(),
                            } )
                            .then( () => {
                                alert( 'Category added!' );
                            } );
                    } else {
                        alert( "category already exits" )
                    }
                    console.log( querySnapshot.docs )
                } );

        }
    };
    return (
        <View style={Styles.container}>
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
                <Text style={Styles.title}>Add Category</Text>
            </View>
            <View style={Styles.inputCon}>
                <View style={s.border}>
                    <TextInput
                        onChangeText={text => setCategory( text )}
                        placeholder="Category Name"
                        placeholderTextColor="lightgray"
                        style={Styles.textInput}
                    />
                </View>
            </View>
            <View style={[gStyle.buttonOuter]}>
                <TouchableOpacity onPress={() => submit()}>
                    <Text style={gStyle.buttonInnerText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
