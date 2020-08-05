import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
var address = {};

function addressChange(la, lo) {
  /*const [regionAdd, setRegion] = useState({latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,});
  setRegion({latitude: lat,
    longitude: lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,});*/
  return {
    latitude: la,
    longitude: lo,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
}

function getAddress(la, lo) {
  return fetch("http://photon.komoot.de/reverse?lon=" + lo + "&lat=" + la)
    .then((response) => response.json())
    .then((json) => (address = json.features[0].properties))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}

const MapScreen = (props) => {
  var lat = 0.0;
  var lon = 0.0;
  //var address = {};
  const [address, setAddress] = useState({});

  var regionAdd;
  //const [address, setAddress] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [regionAdd, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    lat = location.coords.latitude;
    lon = location.coords.longitude;
    getAddress();
    setRegion({
      latitude: lat,
      longitude: lon,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    getAddress(lat, lon);
    regionAdd = addressChange(lat, lon);
  }

  /*useEffect(() => {
  fetch('http://photon.komoot.de/reverse?lon=' + lon + '&lat=' + lat)
      .then((response) => response.json())
      .then((json) => setAddress(json.features[0].properties))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
*/
  /*var xhttp = new XMLHttpRequest();
  address = xhttp.open("GET", "https://nominatim.openstreetmap.org/reverse?lat=50&lon=20",
  true);
*/

  function getAddress() {
    return fetch("http://photon.komoot.de/reverse?lon=" + lon + "&lat=" + lat)
      .then((response) => response.json())
      .then((json) => setAddress(json.features[0].properties))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  /*Geocoder.init("AIzaSyCayTHyL1xQnF5mDVim2Q5ou_zUVdAMEWg");
  Geocoder.from(41.89, 12.49)
		.then(json => {
        		var addressComponent = json.results[0].address_components[0];
      console.log(addressComponent);
      address = addressComponent;
		})
		.catch(error => console.warn(error.origin));*/
  /*
    if(address == null)
    {
      return(<View></View>);
    }*/
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        region={regionAdd}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lon,
          }}
          title={"JavaTpoint"}
          description={"Java Training Institute"}
        />
      </MapView>
      <Text>{lat}</Text>
      <Text>{lon}</Text>
      <Text>
        {(typeof address.name === "undefined" ? "" : address.name + ", ") +
          (typeof address.street === "undefined" ? "" : address.street + ", ") +
          (typeof address.city === "undefined"
            ? ""
            : address.city + "-" + address.postcode) +
          (typeof address.state === "undefined" ? "" : address.state + ", ") +
          (typeof address.country === "undefined" ? "" : address.country)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MapScreen;
