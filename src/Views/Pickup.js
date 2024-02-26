import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const image = {
  uri: "https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif",
};

function Pickup() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: 6,
          distanceInterval: 1,
          timeInterval: 1000,
        },
        (location) => {
          // console.log("location ",location)
          setLocation(location)
        })
    })();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }
    if (!location) {
      return (
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
        </View>
      );
    }
  return (
    <View  style={styles.container}>
      
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        }}
        style={styles.map}>
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={"Your location"}
          description={"Jatoi house"}
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensures the image covers the entire space
  },
});

export default Pickup;
