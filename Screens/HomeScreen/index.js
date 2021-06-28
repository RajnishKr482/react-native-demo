import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import AgendaScreen from '../TodayAgenda/index';
import {styles} from '../HomeScreen/style';
import Icon from 'react-native-vector-icons/Feather';
import Announcement from '../Announcement/Index';
import Account from '../Accounts/index';
import Reminder from '../Reminder/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import SectionD from '../Section/index';
import Roots from '../Section/index';

const index = ({navigation}) => {
  const MyComponent = () => {
    const _Menu = () => navigation.toggleDrawer();

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
      <Appbar.Header>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Icon
            name="menu"
            onPress={() => navigation.toggleDrawer()}
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
  return (
    <View style={styles.container}>
      <MyComponent />
      <ScrollView>
        <View
          style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <View style={{margin: 3}}>
            <AgendaScreen navigation={navigation} />
            <Announcement navigation={navigation} />
            <Account navigation={navigation} />
            <Reminder />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SectionD {...props} />}>
      <Drawer.Screen name="index" component={index} />
      <Drawer.Screen name="Roots" component={Roots} />
    </Drawer.Navigator>
  );
};
