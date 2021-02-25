import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import useSubmit from './useSubmit';
import {styles} from '../../styles';

const AreAllText = () => {
  const {colors} = useTheme();
  const {areAll, partners, serverTextError} = useSubmit();
  const isEmpty = partners.length === 0;
  return (
    <Text
      style={[
        styles(colors).errorText,
        serverTextError ? styles(colors).errorBackgroundColor : {},
      ]}>
      {serverTextError
        ? serverTextError
        : areAll
        ? 'Data Not Filtered'
        : isEmpty
        ? 'No partners in this range'
        : 'Data Filtered'}
    </Text>
  );
};
export {AreAllText};
