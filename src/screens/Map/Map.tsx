import React, {FC, useRef, useState} from 'react';
import {View} from 'react-native';
import MapView, {LatLng, LongPressEvent} from 'react-native-maps';
import styles from './styles';
import {SCREENS} from '../../types';
import {RootStackScreenProps} from '../../navigation/types';
import InfoModal from '../../components/Modal';

const Map: FC<RootStackScreenProps<SCREENS.MAP>> = () => {
  const [visible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);

  const close = () => setIsVisible(false);
  const sendData = (uris: string[]) => {
    console.log(
      'date :',
      new Date().toISOString(),
      'coords :',
      selectedLocation,
      'files :',
      uris,
    );
    close();
  };
  const map = useRef(null);
  const onLongPress = (coords: LongPressEvent) => {
    setSelectedLocation(coords.nativeEvent.coordinate);
    setIsVisible(true);
  };
  return (
    <View style={styles.mapView}>
      <MapView
        onLongPress={onLongPress}
        ref={map}
        showsCompass={false}
        showsUserLocation={true}
        followsUserLocation={true}
        mapType={'standard'}
        showsMyLocationButton={false}
        style={styles.map}
        initialRegion={{
          latitude: 48.61667,
          longitude: 22.3,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
      />
      <InfoModal close={close} isVisible={visible} sendData={sendData} />
    </View>
  );
};

export default Map;
