import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: hp(100),
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
  textInput: {
    marginLeft: wp(3),
    fontSize: 19,
    color: 'black',
  },
  margin: {
    marginTop: hp(15),
  },
  emailCon: {
    marginLeft: wp(3),
  },
  passwordCon: {
    marginLeft: wp(3),
    marginTop: hp(5),
  },
  forgotCon: {
    marginTop: hp(2),
    alignSelf: 'flex-end',
    marginRight: wp(6),
  },
  forgotText: {
    color: 'black',
    fontSize: 20,
  },
  buttonCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumpurple',
    width: wp(40),
    height: hp(7),
    marginTop: hp(13),
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
