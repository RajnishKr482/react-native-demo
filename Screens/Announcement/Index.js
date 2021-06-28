import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {styles} from '../Announcement/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondConatiner}>
        <LinearGradient
          start={{x: 0.5, y: 0.25}}
          end={{x: 2, y: 0.25}}
          locations={[0, 0.5, 0.6]}
          style={styles.linerView}
          colors={['#89253e', '#3b5998', '#3a6186']}>
          <Icon name="bullhorn" size={35} color="white" />
          <View style={{flexDirection: 'column', marginLeft: 15}}>
            <Text style={styles.todayText}>Announcement</Text>
            <Text style={styles.aprrovedText}>
              Recently posted important information
            </Text>
          </View>
          <View style={styles.iconStyle}>
            <Icon
              name="arrow-right"
              onPress={() => navigation.navigate('Announcement')}
              size={35}
              color="white"
            />
          </View>
        </LinearGradient>
        <View>
          <Text>No Announcement</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
