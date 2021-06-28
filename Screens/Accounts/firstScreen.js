import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// import {widthToDp, heightToDp} from '../assets/HeightNwidth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firstScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [CstId, setCstId] = useState({});
  useEffect(async () => {
    const FetchedData = async () => {
      const Token = await AsyncStorage.getItem('token');
      //   setToken(Token);
      console.log('Rajnikant', Token);

      fetch(
        'http://92.204.135.120:8099/TomAPI/GetClientResidentFinancialAccounts',
        {
          method: 'POST',
          body: JSON.stringify({
            ClientId: 71,
            Closed: false,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Source: '92.204.135.120',
            Authorization: 'bearer ' + Token,
          },
        },
      )
        .then(res => res.json())
        .then(response => {
          console.log('response:', response.ClientResidentFinancialAccounts);
          setData(response.ClientResidentFinancialAccounts);
        });
    };

    FetchedData();
  }, []);
  const CardViewS = ({item}) => {
    // console.log('getItems===', item);
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('AccountDetails', {
            cid: item.ClientResidentFinancialAccountId,
          });
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              padding: 10,
              margin: 15,
              height: 100,
              borderColor: '#999076',
              borderWidth: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, marginLeft: 10, fontSize: 15}}>
                Account Type
              </Text>
              <Text style={{flex: 1, fontSize: 15}}>
                {item.AccountDescription}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1, marginLeft: 10, fontSize: 15}}>
                Current Balance
              </Text>
              <Text style={{flex: 1, fontSize: 15}}>
                ${item.CurrentBalance}.00
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.AccounsContainer}>
        <Text style={styles.accFont}>Accounts</Text>
        <View style={styles.SearchContainer}>
          <Icon name="magnify" size={26} />
          <TextInput style={{flex: 1}} placeholder="Search" />
          <Icon name="close" size={26} />
        </View>
      </View>
      <View style={styles.summaries}>
        <ScrollView>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            //   renderItem={item => <CardViewS />}
            renderItem={({item}) => {
              // console.log('ITEM==    yha hai mera data', item);
              return <CardViewS item={item}></CardViewS>;
            }}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default firstScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  AccounsContainer: {
    height: hp('16%'),
    elevation: 10,
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  summaries: {
    elevation: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    height: hp('64%'),
  },
  SearchContainer: {
    borderRadius: 15,
    elevation: 10,
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  accFont: {
    fontSize: 25,
    // fontWeight: 'bold',
  },
});
