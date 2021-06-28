import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const Announcement = () => {
  const [Result, setResult] = useState();
  useEffect(async () => {
    const FetchedData = async () => {
      const Token = await AsyncStorage.getItem('token');
      //   const CompanyId = await AsyncStorage.getItem('CompanyId');
      //   console.log('kjjdvdvf vfvfvh', CompanyId);
      //   setToken(Token);
      //   console.log('Rajnikant', Token);

      fetch('http://92.204.135.120:8099/TomAPI/GetAnnouncementDetails', {
        method: 'POST',
        body: JSON.stringify({
          Id: -1,
          Expired: true,
          CompanyId: 1,
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
          setResult(response.announcementLists);
        });
    };

    FetchedData();
  }, []);
  const RenderItem = ({item}) => {
    var htmlString = item.Announcement;
    var plainString = htmlString.replace(/<[^>]+>/g, '');
    return (
      <View style={{margin: 10}}>
        <LinearGradient
          start={{x: 0.5, y: 0.25}}
          end={{x: 2, y: 0.25}}
          locations={[0, 0.5, 0.6]}
          style={styles.linerView}
          colors={['#89253e', '#3b5998', '#3a6186']}>
          <Text>{item.Headline}</Text>
        </LinearGradient>
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text>{plainString}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.aContainer}></View>
      <View style={styles.fullConatiner}>
        <ScrollView>
          <FlatList
            data={Result}
            keyExtractor={(item, index) => index + item.toString()}
            renderItem={({item}) => <RenderItem item={item} />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aContainer: {
    height: hp('5%'),
    backgroundColor: 'white',
  },
  fullConatiner: {
    height: hp('90%'),
  },
  linerView: {
    flexDirection: 'row',

    height: 75,
  },
});
