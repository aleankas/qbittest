import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {IMGSlider01, IMGSlider03} from '../../../assets';

const Slider = () => {
  const [slider, setSlider] = useState([IMGSlider03, IMGSlider01, IMGSlider03]);

  return (
    <SliderBox
      // ImageComponent={FastImage}
      images={slider}
      sliderBoxHeight={120}
      onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
      dotColor="#2AAAF2"
      inactiveDotColor="#747474"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={styles.paginBox}
      dotStyle={styles.dotStyle}
      ImageComponentStyle={styles.imgComp}
      imageLoadingColor="#2196F3"
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  paginBox: {
    position: 'relative',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
  },
  imgComp: {borderRadius: 15, width: '97%', marginTop: 5},
});
