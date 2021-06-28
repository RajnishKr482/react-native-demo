import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Accounts/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FlatList } from 'react-native-gesture-handler';

const Index = props => {
  // const [client, setClient] = useState()
  // const [Summaries, setSummries] = useState(null)
  // const AccountSummaries = () => {
  //     return fetch('http://92.204.135.120:8099/TomAPI/GetAccountSummaries',{ClientId:client})
  //       .then((response) => response.json())
  //       .then((json) => {
  //     //    setSummries=
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     };
  const [Token, setToken] = useState('');
  const [Account, setAccount] = useState();
  useEffect(async () => {
    const readData = async () => {
      const Token = await AsyncStorage.getItem('token');
      //   setToken(Token);
      console.log('Rajnikant', Token);

      fetch('http://92.204.135.120:8099/TomAPI/GetAccountSummaries', {
        method: 'POST',
        body: JSON.stringify({
          ClientId: 71,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Source: '92.204.135.120',
          Authorization: 'bearer ' + Token,
        },
      })
        .then(res => res.json())
        .then(response => {
          console.log('response:', response);

          setAccount(response.AccountSummaries);
        });
    };

    readData();
  }, []);
  const RenderItem = ({item, props}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{padding: 15, flexDirection: 'row'}}>
        <View style={{alignItems: 'flex-start', flex: 1}}>
          <Text> {item.Description}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text>${item.Balance}</Text>
          <View
            style={{
              margin: 2,
              borderBottomWidth: 3,
              borderBottomColor: 'grey',
            }}></View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.secondConatiner}>
        <LinearGradient
          start={{x: 0.3, y: 2}}
          end={{x: 0.21, y: 0.5}}
          // angle={50}
          locations={[0, 0.02, 1]}
          style={styles.linerView}
          colors={['#f0750a', '#f58e00', '#1f07f5']}>
          <Icon name="calendar" size={35} color="white" />
          <View style={{flexDirection: 'column', marginLeft: 15}}>
            <Text style={styles.todayText}>Account Summaries</Text>
            <Text style={styles.aprrovedText}>Current balance in your</Text>
            <Text style={styles.aprrovedText}>financial accounts</Text>
          </View>
          <View style={styles.iconStyle}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('MyTabs');
              }}>
              <Icon name="arrow-right" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            data={Account}
            //  vertical={true}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <RenderItem item={item} />}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
