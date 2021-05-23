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
    fontSize: 25,
    marginTop: wp(2),
    marginBottom: wp(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: wp(25),
  },
  requestContainer: {
    flexDirection: 'row',
    borderColor: 'gainsboro',
    borderWidth: 1,
    width: wp(90),
    height: hp(17),
    alignSelf: 'center',
    marginTop: wp(8),
    borderRadius: 10,
  },
  requestBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: wp(3),
  },
  requestTitle: {
    fontSize: 20,
    //marginLeft: wp(2),
  },
  reqDetail: {
    flexDirection: 'row',
    marginTop: wp(2),
  },
  text: {
    fontSize: 20,
  },
  buttonCon: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    marginTop: 15,
    //justifyContent:'center',
    marginLeft:wp(30)
  },
  buttonStyle: {
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    width: 90,
    height: hp(4),
    marginTop: wp(2),
    borderRadius: 10,
    margin:5
  },
  buttonText: {
    fontSize: 15,
  },
});
