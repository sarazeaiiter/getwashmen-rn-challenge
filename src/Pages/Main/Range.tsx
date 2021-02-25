import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import CustomizedTextInput from '../../shared-components/TextInput';
import {isNumber} from '../../utils/type-guards';
import useSubmit from './useSubmit';
import {styles} from '../../styles';

const Range = () => {
  const {colors} = useTheme();
  const {
    range,
    setRange,
    getData,
    rangeHasError,
    setRangeHasError,
  } = useSubmit();
  function validaRange(value: number | string) {
    const numValue = Number(value);
    if (isNumber(numValue) && numValue > 0) {
      setRangeHasError(false);
      setRange(numValue);
    } else {
      setRangeHasError(true);
      setRange(0);
    }
  }
  return (
    <View>
      <View style={styles(colors).rangeErrorContainer}>
        <Text style={styles(colors).rangeErrorText}>
          {rangeHasError ? 'Range: Please enter a valid number' : 'Range (KM)'}
        </Text>
      </View>
      <CustomizedTextInput
        placeholderText={'Range'}
        placeholderTextColor={colors.text}
        style={[
          styles(colors).textInput,
          rangeHasError ? styles(colors).textInputBorderError : {},
        ]}
        onContentSizeChange={() => {}}
        multiline={false}
        maxLength={20}
        keyName="RANGE"
        keyboardType="numeric"
        secureTextEntry={false}
        autoFocus={true}
        onSubmitEditing={(e) => {
          validaRange(e.nativeEvent.text);
          if (!rangeHasError) {
            getData(range);
          }
        }}
        blurOnSubmit={false}
        onChangeText={(e) => {
          validaRange(e);
        }}
        value={range}
        onKeyboardOpen={() => {}}
        onKeyboardClose={() => {}}
        editable={true}
        caretHidden={true}
      />
    </View>
  );
};
export {Range};
