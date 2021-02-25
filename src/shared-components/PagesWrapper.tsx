import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AppWrapperProps} from '../types';
import {ThemeButton} from './ThemeButton';
import {styles} from '../styles';

const PagesWrapper = (props: AppWrapperProps) => {
  const {theme, setTheme, children} = props;
  const {colors} = useTheme();
  return (
    <View style={styles(colors).appContainer}>
      <ThemeButton theme={theme} setTheme={setTheme} />
      {children}
    </View>
  );
};
export {PagesWrapper};
