import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {styles} from '../TodayAgenda/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
  const [Data, setData] = useState();
  useEffect(async () => {
    const FetchedData = async () => {
      const Token = await AsyncStorage.getItem('token');

      fetch('http://92.204.135.120:8099/TomAPI/GetTodaysAgendas', {
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
          setData(response.TodaysAgendas);
          console.log('here Data container');
        });
    };

    FetchedData();
  }, []);
  const CardView = ({item}) => {
    // console.log(item);
    return (
      <View style={{height: 25, width: '100%'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{item.Id}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondConatiner}>
        <LinearGradient
          start={{x: 0.5, y: 0.25}}
          end={{x: 2, y: 0.25}}
          locations={[0, 0.5, 0.6]}
          style={styles.linerView}
          colors={['#ff00cc', '#3b5998', '#333399']}>
          <Icon name="calendar" size={35} color="white" />
          <View style={{flexDirection: 'column', marginLeft: 15}}>
            <Text style={styles.todayText}>Today's Agenda</Text>
            <Text style={styles.aprrovedText}>Approved agendas for Today</Text>
          </View>
          <View style={styles.iconStyle}>
            <Icon name="arrow-right" size={35} color="white" />
          </View>
        </LinearGradient>
      </View>
      <View>
        <FlatList
          data={Data}
          keyExtractor={item => item.Id}
          renderItem={item => <CardView item={item} />}
        />
      </View>
    </View>
  );
};

export default index;
