import React from "react";
import { StyleSheet, Button, View, Text, ImageBackground } from "react-native";

const image = {
  uri: "https://t3.ftcdn.net/jpg/05/54/54/86/360_F_554548673_mDspJw6PUnXKWemMnbv7YZIHRq3XPel2.jpg",
};

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonContainer}>
          <Button
            title="Pick up"
            onPress={() => navigation.navigate("Pickup")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f242d",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    width: 300,
    titleStyle: 80,
    borderRadius: 100,
    alignSelf: "center",
  },
});

export default Dashboard;
