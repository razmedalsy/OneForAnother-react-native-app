/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(3),
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: hp(6),
  },
  welcome: {
    marginTop: hp(2),
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  text: {
    fontSize: 25,
    marginTop: wp(2),
    marginBottom: wp(2),
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
