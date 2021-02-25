import {useTheme} from '@react-navigation/native';
import {get} from 'lodash';
import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../../styles';
import {Partner} from '../../types';
import Row from './Row';
import useSubmit from './useSubmit';

const PartnersList = () => {
  const {colors} = useTheme();
  const {partners} = useSubmit();
  return (
    <View style={styles(colors).flex1}>
      <FlatList
        scrollEnabled={true}
        data={partners}
        renderItem={({item}: {item: Partner}) => {
          const key = get(item, 'organization', '');
          return <Row key={key} {...item} />;
        }}
        keyExtractor={(item: Partner) => `${item.organization}`}
      />
    </View>
  );
};
export {PartnersList};
