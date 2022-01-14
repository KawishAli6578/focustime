import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../../components/RoundButton';
import { fontSizes, spacing } from '../../utils/sizes';
export default function Focus({ addSubject }) {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> what would you like to focus on? </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1 }}
            onChangeText={(text) => {
              setSubject(text);
            }}
          />
          <RoundedButton    style= {{marginLeft:spacing.sm,marginRight:spacing.xsm}}

            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
              //  console.log(tempItem,"innner state")
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    padding: spacing.md,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.mmd,
    marginTop: spacing.xxl,
    marginRight: spacing.xxsm,
  },
  inputContainer: {
    justifyContent:"center",
    alignItems:"center",
    display: 'flex',
    flexDirection: 'row',
    marginRight: spacing.xxsm,
    marginTop: spacing.mm,
  },
});
