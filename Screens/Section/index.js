import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLinkProps} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Accounts from '../Drawwer/Account/index';
import Announcement from '../Announcement/Announcement';
const stack = createStackNavigator();
const Roots = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Accounts" component={Accounts} />
    </stack.Navigator>
  );
};

const index = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: 'dodgerblue',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              TOMREX
            </Text>
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Drawer.Section>
              <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate('index')}
                icon={({color, size}) => (
                  <Icon name="home-outline" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Accounts"
                onPress={() => props.navigation.navigate('MyTabs')}
                icon={({color, size}) => (
                  <Icon name="home-outline" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Agendas"
                icon={({color, size}) => (
                  <Icon name="calendar" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Announcements"
                icon={({color, size}) => (
                  <Icon name="bullhorn" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Helpful links"
                icon={({color, size}) => (
                  <Icon name="web" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Messages"
                icon={({color, size}) => (
                  <Icon name="message" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Positive Incidents"
                icon={({color, size}) => (
                  <Icon name="thumb-up" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Reminders"
                icon={({color, size}) => (
                  <Icon name="checkbox-marked" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="Resource Library"
                icon={({color, size}) => (
                  <Icon name="file-outline" color="black" size={26} />
                )}
              />
              <DrawerItem
                label="LogOut"
                icon={({color, size}) => (
                  <Icon name="logout" color="black" size={26} />
                )}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
