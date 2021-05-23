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
  header: {
    height: hp(15),
    width: wp(100),
    backgroundColor: 'mediumpurple',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  imgView: {
    backgroundColor: 'gainsboro',
    borderColor: 'darkgrey',
    borderWidth: 1,
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    alignSelf: 'center',
    marginTop: hp(5),
  },
  img: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
  },
  button: {
    borderColor: 'mediumpurple',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(85),
    height: hp(8),
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'mediumpurple',
  },
});
