import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICChart, ICHamburger} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({
  text,
  onPressMenu,
  title,
  type,
  onPressAdd,
  onPressChart,
  number,
}) => {
  if (type === 'header-drawer-chart') {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressMenu}>
          <ICHamburger />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressChart}>
          <ICChart />
          {number !== 0 && (
            <View style={styles.bgNum}>
              <Text style={styles.txtNum}>{number}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  if (type === 'header-drawer') {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressMenu}>
          <ICHamburger />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.viewHeader}>
      <Text style={styles.txtHeader}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewHeader: {
    backgroundColor: colors.grey4,
    marginTop: 30,
    width: '65%',
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgNum: {
    backgroundColor: 'red',
    borderRadius: 20,
    height: 20,
    width: 20,
    right: 0,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNum: {color: 'white', fontSize: 10},
});
