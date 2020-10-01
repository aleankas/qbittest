import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICAdd} from '../../../assets';
import {Gap} from '../../atoms';

const CatalogItem = ({onPress, img, title}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={img} />
      <View style={styles.wrapperDesc}>
        <TouchableOpacity style={styles.icAdd} onPress={onPress}>
          <ICAdd />
          <Gap width={7} />
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CatalogItem;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 10,
  },
  img: {
    height: 170,
    width: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperDesc: {
    backgroundColor: '#747474',
    height: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {color: 'white'},
  icAdd: {flexDirection: 'row', alignItems: 'center'},
});
