import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [location, setLocation] = useState(null)

  const handleGet = () => {
    console.log("🚀 ~ file: App.js ~ line 37 ~ handleGet ~ handleGet")
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLocation(location)
      })
      .catch(error => {
        console.log("🚀 ~ file: App.js ~ line 34 ~ handleGet ~ error", error)
      })
  }

  return (
    <View style={{ marginTop: 30, alignItems: 'center' }}>



      {!!location &&
        <MapView style={{ width: "100%", height: "80%", margin: 10, }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            key={location.key}
            enableZoomControl={true}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            zoomEnabled = {true}
            pinColor='#000000'
            title='Muzammil'
            description='front end developer'>

          </Marker>

        </MapView>
      }



      <Button
        title='Get Location'
        onPress={handleGet}
      />


    </View>
  )

}

export default App;