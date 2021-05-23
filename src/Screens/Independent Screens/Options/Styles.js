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
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  img: {
    width: 130,
    height: 130,
    resizeMode: 'center',
    marginTop: hp(5),
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'mediumpurple',
  },
  paragraph: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    color: 'grey',
  },
  footer: {
    marginTop: hp(2),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: wp(35),
    height: hp(8),
    marginTop: hp(5),
    borderRadius: 10,
  },
});
