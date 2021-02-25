import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../../styles';
import useSubmit from './useSubmit';

const SubmitButton = () => {
  const {colors} = useTheme();
  const {getData, setRangeHasError, range} = useSubmit();
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          if (!range) {
            setRangeHasError(true);
          }
          await getData(range);
        }}
        style={styles(colors).submitButton}>
        <Text style={styles(colors).rowText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export {SubmitButton};
