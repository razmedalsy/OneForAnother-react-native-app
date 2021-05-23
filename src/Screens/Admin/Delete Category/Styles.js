/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp( 3 ),
  },
  requestContainer: {
    flexDirection: 'row',
    borderColor: 'gainsboro',
    borderWidth: 1,
    width: wp( 90 ),
    height: hp( 8 ),
    alignSelf: 'center',
    marginTop: wp( 5 ),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  requestBody: {
    flexDirection: 'row',
    marginLeft: wp( 3 ),
    justifyContent: 'space-around'
  },
  reqDetail: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  buttonCon: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    //justifyContent:'center',
    marginLeft: wp( 10 )
  },
  buttonStyle: {
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    width: 90,
    height: hp( 4 ),
    marginTop: wp( 2 ),
    borderRadius: 10,
    margin: 5
  },
  buttonText: {
    fontSize: 15,
  },
} );
