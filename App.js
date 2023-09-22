import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header  from './src/Header';
import Detail from './src/Detail';


const Stack = createStackNavigator();
const Appr = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome! </Text>
    </View>
  );
};
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component ={Home}
          name = 'Home'
          options={{
            
            headerTitle: () => <Header name=" Add Notes" />,
            headerStyle:{
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
        <Stack.Screen
        component={Detail}
        name ='Detail'
        options={{
            headerTitle: () => <Header name="Edit Notes" />,
            headerStyle:{
              backgroundColor:'#4c00b0',
              height:120,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
});

