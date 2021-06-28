import 'react-native-gesture-handler'
import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import RootScreen from './Screens/RootsScreen/RootScreen';

const App =()=>{
  return(
    <NavigationContainer>
     <Routes/>
    </NavigationContainer>
  )
}
export default App;