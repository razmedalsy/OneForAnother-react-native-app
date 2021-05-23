import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex:1,
        height:hp(100),
        width:wp(100),
       justifyContent:'center',
       alignItems:'center'
    },
    container2:{
      
        height:hp(100),
        width:wp(100),
        backgroundColor:'#E0978B',
        justifyContent:'center',
        alignItems:'center'
    },
    Topview:{
        flexDirection:'row',
        marginTop:hp(2),
        width:wp(100),
        height:hp(5),
        justifyContent:'space-between'
    },
    QRIcon:{
        width:wp(10),
    },
    text:{
        alignSelf:'center',
        color:'white',
        fontSize:wp(7)
    },
    arrowIcon:{
        width:wp(10),
    },
    image:{
        
        height:hp(50),
        width:wp(90),
        marginTop:hp(20),
        alignSelf:'center',
    },
    modelstyle:{backgroundColor:'white',borderRadius:10,justifyContent:'flex-start',height:hp(40)},
    passText:{color:'black',padding:10},
    addbutton:{
        width:wp(70),
        backgroundColor:'#E0978B',
        borderRadius:50,
        alignSelf:'center',
        height:hp(7),
        marginTop:hp(2),
        justifyContent:'center',
    },
    addtext:{
        color:'white',
        alignSelf:'center',
        fontSize:wp(6)
    },
    camera:{ width: '100%', height: '100%' },
});