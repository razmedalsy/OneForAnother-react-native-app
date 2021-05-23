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
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(15),
    width: wp(100),
    backgroundColor: 'mediumpurple',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    marginLeft: wp(20),
  },
  margin: {
    marginTop: hp(10),
  },
  oldPassCon: {
    marginLeft: wp(3),
  },
  oldPassBody: {
    width: wp(90),
    height: hp(8),
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: wp(2),
  },
  textInput: {
    width: wp(70),
    marginLeft: wp(3),
    fontSize: 15,
    color: 'black',
  },
  newPassCon: {
    marginLeft: wp(3),
    marginTop: hp(5),
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
