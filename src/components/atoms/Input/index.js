import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({
  label,
  secureTextEntry,
  type,
  icon,
  placeholder,
  value,
  onChangeText,
  onPress,
  shimmer,
  disable,
  select,
  onValueChange,
  selectItem,
  selectedValue,
  text,
}) => {
  const [border, setBorder] = useState(colors.grey2);
  const onFocusForm = () => {
    setBorder(colors.indigo);
  };
  const onBlurFrom = () => {
    setBorder(colors.grey2);
  };

  if (type === 'textarea') {
    return (
      <View>
        <Text style={styles.label(border)}>{label}</Text>
        <TextInput
          onFocus={onFocusForm}
          style={styles.textarea(border)}
          placeholder={placeholder}
          numberOfLines={5}
          multiline={true}
          onBlur={onBlurFrom}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
        />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label(border)}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        style={styles.input(border)}
        onBlur={onBlurFrom}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: (border) => ({
    color: colors.black,
    fontSize: 15,
  }),
  input: (border) => ({
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
  }),
  textarea: (border) => ({
    // backgroundColor: 'red',
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  }),
});
