/* eslint-disable no-dupe-keys */
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
    textAlign: 'center',
    width: '100%',
  },
  margin: {
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  text: {
    fontSize: 25,
  },
  requestContainer: {
    flexDirection: 'row',
    borderColor: 'gainsboro',
    borderWidth: 1,
    width: wp(90),
    height: hp(10),
    alignSelf: 'center',
    marginTop: wp(3),
    borderRadius: 10,
  },
  requestBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: wp(3),
  },
  requestTitle: {
    fontSize: 25,
    marginLeft: wp(2),
  },
  reqDetail: {
    flexDirection: 'row',
    marginTop: wp(2),
  },
  text: {
    fontSize: 25,
  },
  buttonCon: {
    marginLeft: wp(45),
  },
  button: {
    borderColor: 'mediumpurple',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(55),
    height: 50,
    marginTop: hp(15),
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'mediumpurple',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});
