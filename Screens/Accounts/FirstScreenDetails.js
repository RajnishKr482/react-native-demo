import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import moment from 'moment';

const FirstScreenDetails = ({route, navigation}) => {
  const CstId = route.params.cid;
  const [Result, setResult] = useState();
  const [Clicked, setClicked] = useState();
  const [Compliance, setCompliance] = useState(false);
  const [visible, setvisible] = useState(false);
  const [ModalData, setModalData] = useState();
  const [modeData, setmodeData] = useState([]);
  useEffect(async () => {
    const FetchedData = async () => {
      const Token = await AsyncStorage.getItem('token');
      // const Token = await AsyncStorage.getItem('token');
      //   setToken(Token);
      //   console.log('Rajnikant', Token);

      fetch(
        'http://92.204.135.120:8099/TomAPI/GetClientResidentFinancialAccountDetails',
        {
          method: 'POST',
          body: JSON.stringify({
            ClientResidentFinancialAccountId: CstId,
            Id: -1,
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
          console.log('response:', response);
          setResult(response.ClientResidentFinancialAccountDetails);
        });
    };

    FetchedData();
  }, []);

  const IndividualData = item => {
    console.log('here is my data', item);
    setCompliance(!Compliance);
    setmodeData(item);
    //   console.log('1111111111111111111111111', item);
  };
  const CardView = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 5,
          padding: 15,
          borderColor: '#999076',
          borderWidth: 2,
          flexDirection: 'row',
        }}>
        <Modals ModifiedData={modeData} />
        <View style={{padding: 5}}>
          <Text style={styles.fontsize}>Transaction Date</Text>
          <Text style={styles.fontsize}>Transaction Amount</Text>
          <Text style={styles.fontsize}>Transaction Type</Text>
          <Text style={styles.fontsize}>Comments</Text>
          <Text style={styles.fontsize}>Details</Text>
        </View>
        <View style={{padding: 5}}>
          <Text style={styles.fontsize}>
            {moment(item.TransactionDate).format('DD/MM/YYYY')}
          </Text>
          <Text style={styles.fontsize}>${item.TransactionAmount}.00</Text>
          <Text style={styles.fontsize}>{item.TransactionType}</Text>
          <Text>{}</Text>
          <TouchableOpacity
            onPress={() => {
              // Modals();
              IndividualData(item);
            }}>
            <View style={{padding: 5}}>
              <Icon name="information-variant" size={20} color={'dodgerblue'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Modals = ({ModifiedData}) => {
    // console.log('here is my data',);
    console.log('===123ModifiedData=', ModifiedData);
    console.log('===12visibility=', Compliance);

    return (
      <Modal visible={Compliance} animationType="fade" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.primaryView}>
            <View
              style={{
                backgroundColor: 'dodgerblue',
                justifyContent: 'space-between',
                height: hp('10%'),
                padding: 10,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                Transaction Details
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCompliance(false)}>
                <View
                  style={{
                    marginRight: 15,
                    // backgroundColor: '#857e6b',
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Icon name="close" size={26} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: hp('50%'),
                flexDirection: 'row',
                padding: 10,
              }}>
              <View>
                <Text style={styles.fontsize}>Transaction Type:</Text>
                <Text style={styles.fontsize}>Transaction Date:</Text>
                <Text style={styles.fontsize}>Transaction Amount:</Text>
              </View>
              <View>
                <Text style={styles.fontsize}>
                  {ModifiedData.TransactionType}
                </Text>
                <Text style={styles.fontsize}>
                  {moment(ModifiedData.TransactionDate).format('MM/DD/YYYY')}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: hp('10%'),
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCompliance(false)}>
                <View
                  style={{
                    marginRight: 15,
                    backgroundColor: '#857e6b',
                    padding: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
        {/* {modeData !== null && ( */}

        {/* )} */}
        <ScrollView>
          <FlatList
            data={Result}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CardView item={item} />}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default FirstScreenDetails;

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
    height: hp('70%'),
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
  fontsize: {
    fontSize: 16,
    marginTop: 5,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  primaryView: {
    flex: 1,
    marginHorizontal: hp('5%'),
    marginVertical: hp('15%'),
  },
});
