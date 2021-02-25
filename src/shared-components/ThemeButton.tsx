import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Moon, Sun} from '../utils/images';
import {ThemeButtonProps, TTheme} from '../types';
import {styles} from '../styles';

const ThemeButton = (props: ThemeButtonProps) => {
  const {setTheme, theme} = props;
  const {colors} = useTheme();
  const image = theme === 'dark' ? Moon : Sun;
  return (
    <View style={styles(colors).changeThemeContainer}>
      <TouchableOpacity
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={styles(colors).changeThemeButton}>
        <Image
          resizeMethod={'resize'}
          style={styles(colors).changeThemeImage}
          source={image}
        />
      </TouchableOpacity>
      <Text style={styles(colors).changeThemeText}>Click Me</Text>
    </View>
  );
};
export {ThemeButton};
