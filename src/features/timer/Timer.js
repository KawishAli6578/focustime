import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { ProgressBar } from 'react-native-paper';
import Countdown from '../../components/Countdown';
import RoundedButton from '../../components/RoundButton';
import Timing from './Timing';
const DEFAULT_TIME = 0.05;
export default function Timer({ focusSubject, onTimerEnd, clearSubject }) {
  const interval = React.useRef(null);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(true);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View>
        <Text style={styles.title}> Focusing on</Text>
        <Text style={styles.task}> {focusSubject} </Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(true)} />
        )}
      </View>
        <View style={styles.clearSubject}>
          <RoundedButton
           
            icon={"minus"}
            size={50}
            onPress={() => clearSubject()}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    paddingTop: spacing.xl,
    fontSize: fontSizes.md,
  },
  task: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    flex: 0.5,
    flexDirection: 'row',
  },
  clearSubject: {},
});
