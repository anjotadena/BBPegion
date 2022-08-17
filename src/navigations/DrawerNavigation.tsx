import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerContent} from '../components';

import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
