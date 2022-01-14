import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import RoundedButton from "../../components/RoundButton";
const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};
export default function FocusHistory({ focusHistory, onClear }) {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}> Things we are focusing on </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={({ item, index }) => {
                <Text
                  key={item.subject}
                  style={styles.historyItem(item.status)}
                >
                  {item.subject}
                </Text>;
              }}
              keyExtractor={(item) => {
                return item.subject;
              }}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: "white",
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing.md,
  },
});
