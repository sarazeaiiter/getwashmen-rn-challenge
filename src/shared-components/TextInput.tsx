import * as React from 'react';
import {Keyboard, TextInput} from 'react-native';
import {CustomizedTextInputProps} from '../types';
import {isNumber} from '../utils/type-guards';

const CustomizedTextInput = (props: CustomizedTextInputProps) => {
  const {
    onKeyboardOpen,
    caretHidden,
    editable,
    onKeyboardClose,
    multiline,
    onContentSizeChange,
    style,
    value,
    onChangeText,
    maxLength,
    placeholderTextColor,
    placeholderText,
    onSubmitEditing,
    keyboardType,
    autoFocus,
    secureTextEntry,
    keyName,
    blurOnSubmit,
    inputReference = null,
  } = props;
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardOpen);
    Keyboard.addListener('keyboardDidHide', onKeyboardClose);
    return () => {
      Keyboard.removeListener('keyboardDidShow', () => {});
      Keyboard.removeListener('keyboardDidHide', () => {});
    };
  }, []);

  return (
    <TextInput
      allowFontScaling={false}
      key={keyName}
      underlineColorAndroid={'transparent'}
      placeholder={placeholderText}
      multiline={multiline}
      autoFocus={autoFocus}
      onContentSizeChange={onContentSizeChange}
      style={style}
      blurOnSubmit={blurOnSubmit}
      value={isNumber(value) ? value.toString() : value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      caretHidden={caretHidden}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      autoCapitalize="none"
      ref={inputReference}
    />
  );
};

export default CustomizedTextInput;
