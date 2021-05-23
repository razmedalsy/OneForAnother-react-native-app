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
    width: wp(80),
    marginLeft: wp(3),
    fontSize: 15,
    color: 'black',
  },
  dropDown: {
    width: wp(85),
    marginLeft: wp(3),
    fontSize: 20,
    color: 'lightgray',
  },
  margin: {
    marginTop: hp(5),
  },
  nameCon: {
    marginLeft: wp(3),
  },
  otherCon: {
    marginLeft: wp(3),
    marginTop: hp(4),
  },
  buttonCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumpurple',
    width: wp(40),
    height: hp(7),
    marginTop: hp(4),
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
