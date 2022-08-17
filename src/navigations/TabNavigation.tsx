import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeIcon, ProfileIcon} from '../components';

import theme from '../core/theme';
import {HomeScreen, ProfileScreen} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.orange,
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}): JSX.Element => <HomeIcon fill={color} />,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}): JSX.Element => <ProfileIcon fill={color} />,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
