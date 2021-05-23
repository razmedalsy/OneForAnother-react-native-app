import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create( {
  headerUpper: {
    height: 150,
    width: wp( 100 ),
    backgroundColor: 'mediumpurple',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerUpperText: {
    textTransform: 'uppercase',
    fontWeight: '100',
    fontSize: 25,
    color: 'white',
  },
  border: {
    width: wp( 90 ),
    height: 45,
    justifyContent: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: wp( 2 ),
  },
  buttonOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumpurple',
    width: 170,
    height: 50,
    marginTop: hp( 10 ),
    alignSelf: 'center',
    borderRadius: 50,
  },
  buttonInnerText: {
    fontSize: 16,
    color: 'white',
  },
  buttonOuterAdmin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumpurple',
    width: 170,
    height: 50,
    alignSelf: 'center',
    borderRadius: 50,
  }
} );
