import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICAccountActive, ICClose, ICLoveActive} from '../../../assets';

const CustomSidebar = ({navigation, ...props}) => {
  const toggleDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => toggleDrawer()}
        style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
        <ICClose />
      </TouchableOpacity>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Love"
          icon={({color, size}) => <ICLoveActive />}
          onPress={() => navigation.navigate('Love')}
        />
        <DrawerItem
          label="Account"
          icon={({color, size}) => <ICAccountActive />}
          onPress={() => navigation.navigate('Account')}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
