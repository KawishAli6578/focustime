import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RoundedButton from '../../components/RoundButton';

export default function Timing({onChangeTime}) {
  return (
    <>
      <View style={styles.timingbutton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingbutton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingbutton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  timingbutton: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
});
