import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles';
import {Partner} from '../../types';
import {isDefinedArray} from '../../utils/type-guards';

const Row = (props: Partner) => {
  const {colors} = useTheme();
  const {organization, offices} = props;
  return (
    <View style={styles(colors).row}>
      <Text style={styles(colors).rowText}>
        <Text style={styles(colors).rowTitle}>Organization:</Text>{' '}
        {organization}
      </Text>
      {isDefinedArray(offices) &&
        offices.map((office, index) => (
          <Text key={office.coordinates} style={styles(colors).rowText}>
            <Text style={styles(colors).rowTitle}>
              Office{offices.length > 1 ? index + 1 : ''}:
            </Text>{' '}
            {office.address}
          </Text>
        ))}
    </View>
  );
};

export default Row;
