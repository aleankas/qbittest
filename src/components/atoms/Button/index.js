import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../../../utils';
import {ICBaygon, ICArrowRightGreen, ICAddCircle} from '../../../assets';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = ({
  text,
  disable,
  onPress,
  type,
  shimmer,
  onPressBack,
  onPressNext,
  textBack,
  textNext,
}) => {
  if (disable) {
    return (
      <View style={styles.btn(disable)}>
        <Text style={styles.txt(disable)}>{text}</Text>
      </View>
    );
  }

  if (type === 'survey-activity') {
    return (
      <TouchableOpacity style={styles.viewBtnSurveyActivity} onPress={onPress}>
        <View style={styles.viewBtnSurveyActivity2}>
          <ICBaygon />
          <Text style={{padding: 10}}>{text}</Text>
        </View>
        <View style={styles.viewBtnSurveyActivity3}>
          <ICArrowRightGreen />
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'start-survey') {
    return (
      <TouchableOpacity style={styles.viewBtnCircle} onPress={onPress}>
        <View style={styles.btnCircle}>
          <View style={styles.btnCircle2}>
            <Text style={styles.txtBtnSurvey}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'btn-add-circle') {
    return (
      <TouchableOpacity style={styles.viewBtnAddCircle} onPress={onPress}>
        <ICAddCircle />
      </TouchableOpacity>
    );
  }

  if (type === 'two-text') {
    return (
      <View style={styles.viewBtnTwoText}>
        <TouchableOpacity style={styles.btnTwoTextA} onPress={onPressBack}>
          <Text style={styles.txt1}>{textBack}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTwoTextB} onPress={onPressNext}>
          <Text style={styles.txt2}>{textNext}</Text>
          <ICArrowRightGreen />
        </TouchableOpacity>
      </View>
    );
  }

  if (type === 'border-white') {
    return (
      <TouchableOpacity
        style={styles.btnBorderWhite(disable)}
        onPress={onPress}>
        <Text style={styles.txt(disable)}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.btn(disable)} onPress={onPress}>
      <Text style={styles.txt(disable)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: (disable) => ({
    height: 50,
    backgroundColor: disable ? colors.grey4 : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
  }),
  btnBorderWhite: (disable) => ({
    height: 80,
    backgroundColor: disable ? colors.grey4 : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80 / 2,
    borderColor: colors.white,
    borderWidth: 1,
    elevation: 3,
  }),
  txt: (disable) => ({
    color: disable ? colors.grey2 : colors.white,
    fontSize: 18,
  }),
  btnAbsen: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  txtBtnAbsen: {
    color: colors.white,
    fontSize: 16,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 80,
    height: 50,
    marginBottom: 2,
    borderRadius: 10,
  },
  viewBtnSurveyActivity: {
    flexDirection: 'row',
    backgroundColor: colors.grey3,
    height: 60,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  viewBtnSurveyActivity2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  viewBtnSurveyActivity3: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  btnCircle: {
    backgroundColor: colors.primary,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCircle2: {
    backgroundColor: colors.secondary,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnSurvey: {
    color: colors.white,
    fontSize: 18,
  },
  viewBtnCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnAddCircle: {
    backgroundColor: 'transparent',
    bottom: 50,
    right: 20,
    position: 'absolute',
  },
  viewBtnTwoText: {
    flexDirection: 'row',
  },
  btnTwoTextA: {
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: windowWidth / 2 - 20,
    borderTopLeftRadius: 60 / 2,
    borderBottomLeftRadius: 60 / 2,
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
  },
  txt1: {
    color: colors.white,
    fontSize: 16,
  },
  btnTwoTextB: {
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: windowWidth / 2 - 20,
    borderTopRightRadius: 60 / 2,
    borderBottomRightRadius: 60 / 2,
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
  },
  txt2: {
    color: colors.secondary,
    fontSize: 16,
  },
});
