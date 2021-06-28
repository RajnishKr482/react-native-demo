import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import secondScreen from './secondScreen';
import firstScreen from './firstScreen';

const Tab = createMaterialTopTabNavigator();

const MyTabs =()=> {
  return (
    <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 15, fontWeight:"bold" },
        style: { backgroundColor: 'dodgerblue' },
      }}>
      <Tab.Screen name="firstScreen" component={firstScreen}  options={{ tabBarLabel: 'OPEN ACCOUNTS' }}/>
      <Tab.Screen name="secondScreen" component={secondScreen}  options={{ tabBarLabel: 'CLOSED ACCOUNTS' }}/>
    </Tab.Navigator>
  );
}

export default MyTabs;