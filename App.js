import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform, AsyncStorage } from "react-native";
import { fontSizes, spacing } from "./src/utils/sizes";
import Focus from "./src/features/focus/Focus";
import FocusHistory from "./src/features/focus/FocusHistory";
import { LogBox } from "react-native";

LogBox.ignoreLogs;

import Timer from "./src/features/timer/Timer";
const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState("");
  const [focusHistory, setFocusHistory] = useState([]);
  const addFocusHistoySubjectithStatus = (subject, status) => {
    console.log(subject, status);
    setFocusHistory((state) => [
      ...state,
      { key: focusHistory.length + 1, subject, status },
    ]);
    setFocusSubject(null);
    console.log(...focusHistory, "app.js");
  };

  const onClear = () => {
    setFocusHistory([]);
  };
  const saveFocusHistory = (async) => {
    try {
      AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadFocusHistory();
  }, []);
  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistoySubjectithStatus(focusSubject, STATUSES.COMPLETE);
          }}
          clearSubject={() => {
            addFocusHistoySubjectithStatus(focusSubject, STATUSES.CANCELLED);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          {focusHistory && (
            <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "purple",
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
  },
});
