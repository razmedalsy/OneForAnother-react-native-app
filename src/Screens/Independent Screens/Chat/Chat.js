import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput,StyleSheet,Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import Close from 'react-native-vector-icons/AntDesign'
import Send from 'react-native-vector-icons/Feather'
import Dialog from "react-native-dialog";
import StarRating from 'react-native-star-rating'
import Styles from './Styles'
export default function Chat() {
    const [visible, setVisible] = useState( false );
    const [modalVisible, setModalVisible] = useState( false );
    const [starCount, setStarCount] = useState( 0 );
    const showDialog = () => {
        setVisible( true );
    };

    const handleNo = () => {
        setVisible( false );
    };

    const handleYes = () => {
        setVisible( false );
        setModalVisible(true)
    };
    const onStarRatingPress = ( rating ) => {
        console.log( "function called" )
        setStarCount( rating )
        console.log( "rating is", rating )
    }
    return (
        <KeyboardAvoidingScrollView behavior="position">
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={Styles.headerTitle}> David</Text>
                        <Text style={Styles.headerOnline}> Online</Text>
                    </View>
                    <TouchableOpacity>
                        <Close name="closecircleo" size={30} onPress={() => showDialog()} color="red" style={Styles.close} />
                    </TouchableOpacity>
                    <Dialog.Container visible={visible}>
                        <Dialog.Title>Close</Dialog.Title>
                        <Dialog.Description>
                            Are you sure to close this chat.
                            </Dialog.Description>
                        <Dialog.Button label="No" onPress={handleNo} />
                        <Dialog.Button label="Yes" onPress={handleYes} />
                    </Dialog.Container>
                </View>
                <View style={Styles.margin}>
                    <View style={Styles.sendMessage}>
                        <Text style={Styles.messageText}>Hello I'Smith</Text>
                    </View>
                </View>
                <View style={Styles.marginReceived}>
                    <View style={Styles.receivedMessage}>
                        <Text style={Styles.messageText}>Hello I'Smith</Text>
                    </View>
                </View>
                <View style={Styles.marginReceived}>
                    <View style={Styles.sendMessage}>
                        <Text style={Styles.messageText}>Hello I'Smith</Text>
                    </View>
                </View>
                <View style={Styles.marginReceived}>
                    <View style={Styles.receivedMessage}>
                        <Text style={Styles.messageText}>Hello I'Smith</Text>
                    </View>
                </View>
                <View style={Styles.footer}>
                    <View style={Styles.textMargin}>
                        <TextInput placeholder='Enter Message' placeholderTextColor='darkgrey' style={Styles.textInput} />
                    </View>
                    <TouchableOpacity>
                        <View style={Styles.sendButton}>
                            <Send name="send" size={30} color="white" style={Styles.close} />
                        </View>
                    </TouchableOpacity>
                </View>


                <Modal
                    animationType="slide"
                    //transparent={true}
                    visible={modalVisible}
                >
                    <View style={Styles.modalContainer}>
                        <View style={Styles.reviewContainer}>
                            <Text style={Styles.title}>Rate Volunteer  </Text>
                            <View style={Styles.totalWrap}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={starCount}
                                    fullStarColor={'gold'}
                                    emptyStarColor={'black'}
                                    selectedStar={( rating ) => onStarRatingPress( rating )}
                                />
                            </View>
                            <Text style={Styles.textStyle}>
                                {starCount} / 5 </Text>
                            <View style={{ marginTop: wp( 7 ),borderRadius:20, width: wp( 30 ), marginLeft: wp( 27 ) }}>
                                <Button title="Submit" color="mediumpurple" onPress={() => setModalVisible(!modalVisible)} />
                            </View>
                        </View>
                    </View>
                </Modal>


            </View>
        </KeyboardAvoidingScrollView>
    )
}
