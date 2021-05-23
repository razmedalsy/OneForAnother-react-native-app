/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumpurple',
  },
  header: {
    fontSize: 40,
    color: 'white',
    marginTop: hp(20),
  },
  logo: {
    width: 155,
    height: 150,
    resizeMode: 'center',
    marginTop: hp(10),
  },
  footer: {
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'white',
    height: hp(40),
    width: wp(100),
    marginTop: hp(15),
  },
  buttonCon: {
    alignItems: 'center',
    width: wp(60),
    height: hp(8),
    alignSelf: 'center',
    borderColor: 'mediumpurple',
    borderWidth: 0.3,
    borderRadius: 30,
    marginTop: hp(3),
  },
  buttonText: {
    marginTop: hp(2.5),
    fontSize: 15,
    color: 'mediumpurple',
    fontWeight: 'bold',
  },
});
