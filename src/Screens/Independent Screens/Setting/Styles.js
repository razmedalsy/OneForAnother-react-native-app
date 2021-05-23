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
    backgroundColor: 'mediumpurple',
    width: wp(100),
    height: hp(8),
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginTop: hp(5),
    borderWidth: 0.4,
    borderColor: 'white',
  },
  details: {
    marginTop: hp(4),
    alignItems: 'center',
  },
  title: {
    marginTop: 0,
    fontSize: 22,
    fontWeight: 'bold',
  },
  paragrapgh: {
    fontSize: 14,
    color: 'dimgray',
    marginTop: wp(2),
  },
  totalWrap: {
    marginTop: wp(2),
    marginBottom: 5,
    //backgroundColor: '#F5F8FF',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonStyle: {
    backgroundColor: 'mediumpurple',
    width: wp(70),
    height: hp(7),
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
