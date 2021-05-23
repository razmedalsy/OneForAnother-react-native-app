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
    height: hp(8),
    backgroundColor: 'mediumpurple',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp(28),
  },
  margin: {
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  requestContainer: {
    borderColor: 'gainsboro',
    borderWidth: 1,
    width: wp(40),
    height: hp(5),
    justifyContent: 'space-between',
    marginTop: wp(8),
    borderRadius: 10,
  },
  reqDetail: {
    marginTop: wp(2),
    marginLeft: wp(3),
  },
  CatText: {
    fontSize: 14,
    color: 'black',
    textTransform: 'capitalize',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
