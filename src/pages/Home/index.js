import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {IMGCatalog01, IMGCatalog02, IMGCatalog03} from '../../assets';
import {Gap, Header} from '../../components/atoms';
import {CatalogItem, Slider} from '../../components/moleculs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

const Home = ({navigation}) => {
  const [number, setNumber] = useState(0);
  const toggleDrawer = () => {
    navigation.openDrawer();
  };
  const addChart = (brand) => {
    ToastAndroid.show(brand + ' was added to chart', ToastAndroid.SHORT);
    const num = number + 1;
    setNumber(num);
  };

  return (
    <View style={styles.pages}>
      <View style={styles.wrapper}>
        <Header
          type="header-drawer-chart"
          onPressMenu={() => toggleDrawer()}
          number={number}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>Nike App Store</Text>
        </View>
        <Slider />
        <Gap height={25} />
        <ScrollView
          horizontal
          style={styles.scrollviewCatalog}
          showsHorizontalScrollIndicator={false}>
          <CatalogItem
            img={IMGCatalog01}
            title="Nike Vapormax"
            onPress={() => addChart('Nike Vapormax')}
          />
          <CatalogItem
            img={IMGCatalog02}
            title="Nike Airmax"
            onPress={() => addChart('Nike Airmax')}
          />
          <CatalogItem
            img={IMGCatalog03}
            title="Nike Flyknit"
            onPress={() => addChart('Nike Flyknit')}
          />
          <Gap width={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

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
    fontSize: 20,
  },
  scrollviewCatalog: {flexDirection: 'row', padding: 20},
});
