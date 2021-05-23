import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hp( 15 ),
        width: wp( 100 ),
        backgroundColor: 'mediumpurple',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        marginLeft: wp( 3 )
    },
    headerOnline: {
        fontSize: 20,
        color: 'gainsboro',
        marginLeft: wp( 4 )
    },
    close: {
        marginRight: wp( 3 )
    },
    margin: {
        marginTop: hp( 5 )
    },
    sendMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gainsboro',
        width: wp( 50 ),
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: hp( 6 ),
        alignSelf: 'flex-end',
        marginRight: wp( 5 )
    },
    messageText: {
        fontSize: 20
    },
    marginReceived: {
        marginTop: hp( 2 )
    },
    receivedMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumseagreen',
        width: wp( 50 ),
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: hp( 6 ),
        marginLeft: wp( 5 )
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'gainsboro',
        width: wp( 100 ),
        height: hp( 9 ),
        marginTop: hp( 41 ),
        borderRadius: 20
    },
    textMargin: {
        marginLeft: wp( 3 )
    },
    textInput: {
        width: wp( 80 ),
        color: 'black',
        fontSize: 20
    },
    sendButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumpurple',
        height: hp( 9 ),
        marginRight: ( 3 ),
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        width: wp( 13 )
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }, modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalWrap: {
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: '#F5F8FF',
        borderRadius: 40,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    reviewContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 40,
        minWidth: '80%',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        shadowColor: 'rgba(193, 211, 251, 0.5)',
        elevation: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#323357',
        textAlign: 'center',
        color: 'black'
    }
} )
