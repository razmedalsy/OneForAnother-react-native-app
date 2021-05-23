/* eslint-disable no-lone-blocks */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, Button, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import Styles from './Styles';
import Dialog from 'react-native-dialog';
import StarRating from 'react-native-star-rating';
import Close from 'react-native-vector-icons/AntDesign';
import AsyncService from '../../../service/asyncstorage';
import moment from 'moment';
import _ from 'lodash';

export default function Messages({route, navigation}) {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const [userType, setUserType] = useState('i');
  const [volunteerData, setVoluntterData] = useState({});
  const [independentData, setindependentData] = useState({});
  const [img, setImg] = useState(
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  );

  const handleSend = data => {
    console.log('on send: ', data);
    let message = {
      time: moment().format('x'),
      text: data[0].text,
      _id: data[0]._id,
      // createdAt: data[0].createdAt,
      user: {
        // _id: userType === 'i' ? requestData.email : volunteerData.Email,
        name: userType === 'i' ? requestData.name : volunteerData.Name,
        avatar:
          userType === 'i'
            ? independentData.imageURL
              ? independentData.imageURL
              : 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            : volunteerData.imageURL
            ? volunteerData.imageURL
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU',
      },
    };
    setMessages(GiftedChat.append(messages, [message]));

    let newMessage = [];
    newMessage = messages.push(message);
    console.log('messages here: ', newMessage);

    setTimeout(() => {
      firestore().collection('Chat').doc(requestData.email).update({
        messages: messages,
      });
    }, 2000);
  };

  useEffect(() => {
    let requestData =
      route.params && route.params ? route.params.requestData : {};
    if (requestData && requestData.email) {
      setRequestData(requestData);
      setUserType('v');
      // this chat is created by volunteer

      console.log('i am here  2 s: ', requestData);

      firestore()
        .collection('User')
        .doc(requestData.email)
        .get()
        .then(resp => {
          let iData = resp.data();
          console.log('indepenedent user: ', iData);
          if (iData && iData.imageURL) {
            setImg(iData.imageURL);
          }
          setindependentData(iData);
        });

      AsyncService.getUser().then(user => {
        setVoluntterData(user);
        firestore()
          .collection('Chat')
          .doc(requestData.email.toLowerCase())
          .set({
            requestData: requestData,
            volunteerData: user,
            independentData: {
              name: requestData.name,
              email: requestData.email,
            },
            volunteerEmail: user.email,
            independentEmail: requestData.email,
            dateAdded: moment().format('x'),
            messages: [],
            chatStatus: 'opened',
          });
      });

      console.log('i am here : ', requestData);

      let _snapshoot = firestore()
        .collection('Chat')
        .doc(requestData.email)
        .onSnapshot(snapshot => {
          let source = snapshot.metadata.hasPendingWrites ? 'Local' : 'Server';
          console.log('source: ', source);
          if (source === 'Local' || snapshot.empty) {
            return;
          }
          if (snapshot._exists) {
            console.log('on snap shot: ', snapshot._data);
            firestore()
              .collection('Chat')
              .doc(requestData.email)
              .get()
              .then(res => {
                let data = res.data();
                if (data) {
                  console.log(
                    'on snap shot data.chatStatus in if: ',
                    data.chatStatus,
                  );
                  if (data.chatStatus === 'resolved') {
                    if (_snapshoot) {
                      console.log('yes i have snapshot');
                      _snapshoot && _snapshoot();
                      navigation.navigate('VolunteerHome');
                      return;
                    }
                  }
                  // GiftedChat.append([], data.messages.reverse());

                  let _msg = _.sortBy(data.messages, ['time']).reverse();
                  setMessages(_msg);
                }
              });
          }
        });
    } else {
      let requestData = route.params.fromIndepended;
      setRequestData(route.params.fromIndepended);

      firestore()
        .collection('User')
        .doc(route.params.fromIndepended.vEmail)
        .get()
        .then(resp => {
          let vData = resp.data();
          console.log('vData: ', vData);
          if (vData && vData.imageURL) {
            setImg(vData.imageURL);
          }
          setVoluntterData(vData);
        });

      let _snapshoot = firestore()
        .collection('Chat')
        .doc(requestData.email)
        .onSnapshot(snapshot => {
          let source = snapshot.metadata.hasPendingWrites ? 'Local' : 'Server';
          if (source === 'Local' || snapshot.empty) {
            return;
          }
          if (snapshot._exists) {
            let data = snapshot._data;
            if (data) {
              console.log(
                'on snap shot data.chatStatus in else: ',
                data.chatStatus,
              );
              if (data.chatStatus === 'resolved') {
                if (_snapshoot) {
                  console.log('yes i have snapshot');
                  _snapshoot && _snapshoot();
                  navigation.goBack();
                  return;
                }
              }
              // GiftedChat.append([], data.messages.reverse());
              if (!data.messages) {
                data.message = [];
              }
              let _msg = _.sortBy(data.messages, ['time']).reverse();
              setMessages(_msg);
            }
          }
        });
    }
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  const handleNo = () => {
    setVisible(false);
  };

  const handleYes = () => {
    setVisible(false);
    setModalVisible(true);
  };

  const onStarRatingPress = rating => {
    console.log('function called');
    setStarCount(rating);
    console.log('rating is', rating);
  };

  const submitRating = () => {
    firestore()
      .collection('Rating')
      .doc(volunteerData.Email)
      .set({
        client: independentData.Email,
        Rating: starCount,
        volunteer: volunteerData.Email,
      })
      .then(() => {
        console.log('Rating submitted');
        firestore().collection('Chat').doc(requestData.email).update({
          chatStatus: 'resolved',
        });
        setTimeout(() => {
          firestore().collection('Chat').doc(requestData.email).delete();
          firestore().collection('Request').doc(requestData.email).update({
            vEmail: '',
            status: 'completed',
          });

          setTimeout(() => {
            firestore().collection('Request').doc(requestData.email).delete();
          }, 1000);
        }, 1000);
        setModalVisible(!modalVisible);
        navigation.navigate('ClientHome');
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={Styles.header}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <View>
            <Image style={Styles.img} source={{uri: img}} />
          </View>
          <View>
            <View style={{flexDirection: 'column'}}>
              <Text style={Styles.headerTitle}>
                {userType === 'i' ? volunteerData.Name : independentData.Name}
              </Text>
              <Text style={[Styles.headerTitle, {fontSize: 12, marginTop: -5}]}>
                {userType === 'i' ? volunteerData.Email : independentData.Email}
              </Text>
            </View>
          </View>
        </View>
        {userType === 'i' ? (
          <TouchableOpacity onPress={() => showDialog()}>
            <Close
              name="closecircleo"
              size={25}
              color="red"
              style={Styles.close}
            />
          </TouchableOpacity>
        ) : null}
        <Dialog.Container visible={visible}>
          <Dialog.Title>Close</Dialog.Title>
          <Dialog.Description>
            Are you sure to close this chat.
          </Dialog.Description>
          <Dialog.Button label="No" onPress={handleNo} />
          <Dialog.Button label="Yes" onPress={handleYes} />
        </Dialog.Container>
      </View>

      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        // renderMessage={renderBubble()}
      />

      <Modal
        animationType="slide"
        //transparent={true}
        visible={modalVisible}>
        <View style={Styles.modalContainer}>
          <View style={Styles.reviewContainer}>
            <Text style={Styles.title}>Rate Volunteer </Text>
            <View style={Styles.totalWrap}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={starCount}
                fullStarColor={'gold'}
                emptyStarColor={'black'}
                selectedStar={rating => onStarRatingPress(rating)}
              />
            </View>
            <Text style={Styles.textStyle}>{starCount} / 5 </Text>
            <View
              style={{
                marginTop: wp(7),
                borderRadius: 20,
                width: wp(30),
                marginLeft: wp(27),
              }}>
              <Button
                title="Submit"
                color="mediumpurple"
                onPress={() => submitRating()}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
