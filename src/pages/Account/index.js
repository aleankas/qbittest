import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/atoms';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Account = ({navigation}) => {
  const toggleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.pages}>
      <View style={styles.wrapper}>
        <Header type="header-drawer" onPressMenu={() => toggleDrawer()} />
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Account Page</Text>
        </View>
        {/*  */}
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#DDDADA',
    borderTopRightRadius: (windowWidth / 2) * 1.5,
  },
  viewTitle: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
