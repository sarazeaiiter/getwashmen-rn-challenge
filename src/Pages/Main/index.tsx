import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {styles} from '../../styles';
import {AreAllText} from './AreAllText';
import {PartnersList} from './PartnersList';
import {Range} from './Range';
import {SubmitButton} from './SubmitButton';
import {SubmitProvider} from './useSubmit';

const Main = () => {
  const {colors} = useTheme();
  return (
    <SubmitProvider>
      <View style={styles(colors).mainPageContainer}>
        <AreAllText />
        <Range />
        <SubmitButton />
        <PartnersList />
      </View>
    </SubmitProvider>
  );
};
export {Main};
