import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      {/* we bind the data */}
      <Text>{outputText}</Text>
      <Button
        title="Click to change text now"
        onPress={() => setOutputText("The text has changed! This is magic!!!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
// REACT HOOK USES STATE TO MANAGE DATA CHANGE. The useState is imported and an array of
// The takes a useState which is the initial setOutputText
// outputText and setOutputText are state changes. The Second is the initial state
// The First is the state to be changed to.
// When the function is called, it then renders a new state outputText
