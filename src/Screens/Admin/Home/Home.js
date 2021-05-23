import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styles from './Styles';
import gStyle from '../../../Styles/GlobalStyle';
import AsyncService from '../../../service/asyncstorage';
import auth from '@react-native-firebase/auth';
import Logout from 'react-native-vector-icons/AntDesign'
export default function Home( { navigation } ) {
    const logout = () => {
        AsyncService.setUser( null );
        navigation.navigate( 'Welcome' );
    }
    return (
        <View style={Styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    height: hp( 8 ),
                    justifyContent: 'space-between',
                    backgroundColor: 'mediumpurple',
                    alignItems: 'center',
                }}>
                <Text style={Styles.title}>Home</Text>
                <Logout onPress={()=>logout()} name="logout" size={25} color="white" style={{marginRight:wp(3)}}/>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Image
                    style={Styles.img}
                    source={require( '../../../Assets/home.jpg' )}
                />
            </View>
            <View style={Styles.welcome}>
                <Text style={Styles.text}>Welcome</Text>
                <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 10, lineHeight: 20, }}>
                    Manage your network</Text>
            </View>
            <View style={{ marginTop: hp( 10 ) }}>
                <View style={[gStyle.buttonOuterAdmin]}>
                    <TouchableOpacity onPress={() => navigation.navigate( "AdminAddCategory" )}>
                        <Text style={gStyle.buttonInnerText}>Add Category</Text>
                    </TouchableOpacity>
                </View>
                <View style={[gStyle.buttonOuterAdmin, { marginTop: hp( 3 ) }]}>
                    <TouchableOpacity onPress={() => navigation.navigate( "AdminDeleteCategory" )}>
                        <Text style={gStyle.buttonInnerText}>Delete Category</Text>
                    </TouchableOpacity>
                </View>
                <View style={[gStyle.buttonOuterAdmin, { marginTop: hp( 3 ) }]}>
                    <TouchableOpacity onPress={() => navigation.navigate("AdminDeleteUser")}>
                        <Text style={gStyle.buttonInnerText}>Delete User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
