import React from 'react';
import {View} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
// import LogInScreen from '../screens/LogIn/Index'
import LogScreen from './Screens/logInScreen/Index';
import Home from './Screens/HomeScreen/index';
import OpenAccount from './Screens/OpenAccount/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import indexA from './Screens/Accounts/index';
// import secondScreen from './Screens/Accounts/secondScreen'
import MyTabs from './Screens/Accounts/topNavigation';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import AccountDetails from './Screens/Accounts/FirstScreenDetails';
import Announcement from './Screens/Announcement/Announcement';

const stack = createStackNavigator();
// const stackNavigation=()=>{
//   return(

//   )
// }

const MyComponent = () => {
  const _Menu = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor: 'dodgerblue'}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Icon
          name=""
          onPress={() => {}}
          color="white"
          size={28}
          style={{marginLeft: 10}}
        />
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="mail"
            color="white"
            size={28}
            style={{marginHorizontal: 10}}
          />
          <Icon
            name="bell"
            color="white"
            size={28}
            style={{marginHorizontal: 10}}
          />
        </View>
      </View>
    </Appbar.Header>
  );
};

const routes = props => {
  return (
    <stack.Navigator>
      {/* <stack.Screen name='LogInScreen' component={LogInScreen} options={{headerShown:false}}/> */}
      <stack.Screen
        name="LogScreen"
        component={LogScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <stack.Screen name="indexA" component={indexA}/> */}
      {/* <stack.Screen name="index" options={index}/> */}
      {/* <stack.Screen name="Root" component={Root}/> */}
      <stack.Screen
        name="MyTabs"
        options={{
          headerBackground: props => <MyComponent {...props} />,
        }}
        component={MyTabs}
      />
      <stack.Screen name="AccountDetails" component={AccountDetails} />
      <stack.Screen name="Announcement" component={Announcement} />
    </stack.Navigator>
  );
};

export default routes;
