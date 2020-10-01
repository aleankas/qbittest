import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICAccount,
  ICAccountActive,
  ICHome,
  ICHomeActive,
  ICLove,
  ICLoveActive,
} from '../../../assets';
import Gap from '../Gap';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    if (title === 'Account') {
      return active ? <ICAccountActive /> : <ICAccount />;
    }
    if (title === 'Love') {
      return active ? <ICLoveActive /> : <ICLove />;
    }
    return <ICHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={5} />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: (active) => ({
    color: active ? 'black' : 'white',
    fontSize: 17,
    marginTop: 5,
  }),
  midMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 70,
    width: 70,
    top: -30,
    borderRadius: 70 / 2,
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 10,
  },
});
