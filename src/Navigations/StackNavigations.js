/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Settings } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '.././Screens/Welcome/Welcome';

import OptionsScreen from '.././Screens/Independent Screens/Options/Options';
import SignIn from '.././Screens/Independent Screens/SignIn/SignIn';
import SignUp from '.././Screens/Independent Screens/SignUp/SignUp';
import HomeScreen from '.././Screens/Independent Screens/Home/HomeScreen';
import Category from '../Screens/Independent Screens/Category/Category';
import Setting from '../Screens/Independent Screens/Setting/Setting';
import ChangePassword from '../Screens/Independent Screens/Change Password/ChangePassword';
import Chat from '../Screens/Independent Screens/Chat/Chat';
import Profile from '../Screens/Independent Screens/Profile/Profile';
import ForgotPassword from '../Screens/Independent Screens/Forgot Password/ForgotPassword';

import VolunteerSignIn from '.././Screens/Volunteer Screens/SignIn/SignIn';
import VolunteerSignUp from '.././Screens/Volunteer Screens/SignUp/SignUp';
import VolunteerHomeScreen from '.././Screens/Volunteer Screens/Home/HomeScreen';
import VolunteerOptions from '../Screens/Volunteer Screens/Options/Options';
import VolunteerRequests from '../Screens/Volunteer Screens/Requests/Requests';
import VolunteerSetting from '../Screens/Volunteer Screens/Setting/Setting';
import VolunteerProfile from '../Screens/Volunteer Screens/Profile/Profile';
import VolunteerForgotPassword from '../Screens/Volunteer Screens/Forgot Password/ForgotPassword';
import Available from '../Screens/Independent Screens/Available/Available';
import Messages from '../Screens/Independent Screens/Messages/Messages';
import Splash from '../Screens/Splash/Splash';
import Home from '../Screens/Admin/Home/Home';
import AddCategory from '../Screens/Admin/Add Category/AddCategory';
import DeleteCategory from '../Screens/Admin/Delete Category/DeleteCategory';
import DeleteUser from '../Screens/Admin/Delete User/DeleteUser';
export default function StackNavigations() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientOptions"
        component={OptionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientSignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientSignUn"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientHome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientCategory"
        component={Category}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClieentAvailable"
        component={Available}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientChat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientSetting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerProfile"
        component={VolunteerProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClientProfile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerOptions"
        component={VolunteerOptions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerSignIn"
        component={VolunteerSignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerForgotPassword"
        component={VolunteerForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerSignUp"
        component={VolunteerSignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerHome"
        component={VolunteerHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerRequests"
        component={VolunteerRequests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VolunteerSetting"
        component={VolunteerSetting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminHome"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminAddCategory"
        component={AddCategory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminDeleteCategory"
        component={DeleteCategory}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminDeleteUser"
        component={DeleteUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
