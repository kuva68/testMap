import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mapView: {
    width: width,
    height: height,
  },
  map: {
    width: width,
    height: height,
  },
});
export default styles;
