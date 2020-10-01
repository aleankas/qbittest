import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ICHomeActive} from '../assets';
import {BottomNavigator} from '../components';
import {CustomSidebar} from '../components/moleculs';
import {Account, Home, Love} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Love" component={Love} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Routers = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomSidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={MainApp}
        options={{
          drawerIcon: ({focused, color, size}) => <ICHomeActive />,
        }}
      />
    </Drawer.Navigator>

    // <Stack.Navigator initialRouteName="Splash">
    //   <Stack.Screen
    //     name="MainApp"
    //     component={MainApp}
    //     options={{headerShown: false}}
    //   />
    //   <Stack.Screen
    //     name="Splash"
    //     component={Splash}
    //     options={{headerShown: false}}
    //   />

    //   <Stack.Screen
    //     name="Home"
    //     component={Home}
    //     options={{headerShown: false}}
    //   />
    // </Stack.Navigator>
  );
};
export default Routers;
