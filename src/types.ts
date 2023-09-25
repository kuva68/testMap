export enum SCREENS {
  MAP = 'MAP',
}
export enum EnMessagePreset {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  ERROR = 'ERROR',
}
type LatLng = {
  latitude: number;
  longitude: number;
};
type Point = {
  x: number;
  y: number;
};
export interface ICoords {
  coordinate: LatLng;
  position: Point;
}
