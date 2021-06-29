import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import Feather from 'react-native-vector-icons/Feather';
// import { NavigationContainer } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextes, setSecureTexes] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [token, setToken] = useState();

  const InputTextss = () => {
    if (!inputText.trim() && !password.trim()) {
      ToastAndroid.show('Please Enter Email and Password', ToastAndroid.SHORT);
      setSpinner(false);
      return false;
    } else if (!inputText.trim()) {
      ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
      setSpinner(false);
      return false;
    } else if (!password.trim()) {
      ToastAndroid.show('Please enter your password', ToastAndroid.SHORT);
      setSpinner(false);
      return false;
    }
    //  logInHandler();
    // alert("success")
    logInHandler();
  };
  const saveData = async token => {
    try {
      let abc = await AsyncStorage.setItem('token', token);
      console.log('=abcData', abc);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const logInHandler = async () => {
    const URL = 'http://92.204.135.120:8099/AuthAPI/UserLogin';

    fetch(URL, {
      method: 'post',
      body: JSON.stringify({
        username: inputText,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Source: '92.204.135.120',
      },
    })
      .then(res => res.json())
      .then(res => {
        // console.log('response:', res.ClientId);
        // saveData(res.Token)
        const SetData = async () => {
          try {
            let abc = await AsyncStorage.setItem('token', res.Token);
          } catch (e) {
            alert('Failed to save the data to the storage');
          }
          try {
            await AsyncStorage.setItem('ClientId', res.ClientId);
            console.log('client id is here ', ClientId);
          } catch (e) {
            alert('failed to save the data to the storage');
          }
        };
        if (res.StatusCode === 200) {
          setSpinner(false);
        } else setSpinner(true);
        if (res.Success) {
          navigation.navigate('Home');
        } else {
          ToastAndroid.show('Email or password incorrect', ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        if (username.trim() && password.trim()) {
          ToastAndroid.show('Email or password incorrect', ToastAndroid.SHORT);
        }
        setSpinner(false);
        console.log({error});
      });
  };

  //     const logInHandler = () => {
  //         const req = {
  //             // "UserName": "jt71",
  //   "Password": "123456"};
  //         fetch('http://92.204.135.120:8099/AuthAPI/ChangeUserPassword',{

  //             method: 'POST',
  //             body: JSON.stringify(req),

  // headers: {

  //     'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Source: '92.204.135.120',

  //         }
  //     })
  //           .then((response) =>{
  //               response.json();
  //             console.log({response})
  //          }
  //           )

  //       };
  // const logInHandler = () => {
  // const req = {
  //     email: inputText,
  //     password: password,

  //     };
  //     fetch("http://92.204.135.120:8099/AuthAPI/UserLogin", {

  // method: 'POST',
  // headers: {
  //     body: JSON.stringify(req),
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     source: "92.204.135.120"
  //         },
  //     }).then(response => {
  //         console.log({ response });
  //         if (response==200) {
  //             navigation.navigate("HomeScreen")
  //             setSpinner(false);
  //         } else false;

  //     })
  //         .catch(error => {
  //             if (inputText.trim() && password.trim()) {
  //                 ToastAndroid.show('Email or password incorrect', ToastAndroid.SHORT);
  //             }
  //             console.log({ error });
  //             setSpinner(false);
  //         });
  // };
  const spinnerControl = () => {
    setTimeout(() => {
      setSpinner(false);
    });
  };

  return (
    <View style={styles.conatiner}>
      <Spinner
        visible={spinner}
        size="large"
        customIndicator={
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={'orange'} style={{}} />
          </View>
        }
      />
      <ImageBackground source={require('./back.png')} style={styles.imageBack}>
        <View style={styles.secondaryView}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text style={styles.tomrexStyle}>TOMREX</Text>
          </View>
          <View style={styles.signView}>
            <View style={styles.signV}>
              <Text style={styles.signIn}>Sign In</Text>
            </View>
            <View>
              <View style={styles.firstUseInput}>
                <TextInput
                  placeholder="User Name"
                  value={inputText}
                  onChangeText={val => setInputText(val)}
                  style={styles.usertext}
                />
              </View>

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Password"
                  style={styles.passwordText}
                  value={password}
                  secureTextEntry={secureTextes ? true : false}
                  onChangeText={val => setPassword(val)}
                />
                <TouchableOpacity
                  style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    padding: 5,
                  }}
                  onPress={() => setSecureTexes(!secureTextes)}>
                  {secureTextes ? (
                    <Feather
                      name="eye-off"
                      color="black"
                      size={20}
                      style={styles.iconstyle}
                    />
                  ) : (
                    <Feather
                      name="eye"
                      color="black"
                      size={20}
                      style={styles.iconstyle}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  InputTextss();

                  if (inputText.trim() && password.trim()) {
                    spinnerControl();
                    setSpinner(true);
                  } else {
                  }
                }}>
                <View style={styles.touchView}>
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;
