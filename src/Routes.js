/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LivePhotoScreen from './Screens/LivePhotoScreen';
import {colors} from './utils';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LiveVideoScreen from './Screens/LiveVideoScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const headerOptions = {
    title: 'CAMS',
    headerShadowVisible: false,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
      color: colors.primary,
    },
    headerBackVisible: false,
    gestureEnabled: false,
    headerRight: () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.rightHeader}>SECURE</Text>
          <Icon name="lock" size={10} color={colors.grey} />
        </View>
      );
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LivePhotoScreen"
          component={LivePhotoScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name="LiveVideoScreen"
          component={LiveVideoScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  rightHeader: {
    color: colors.grey,
    fontSize: 10,
    letterSpacing: 1,
    marginRight: 5,
  },
});

export default Routes;
