export type Coordinates = { lat: number; lng: number };

export type Geometry = {
  location: Coordinates;
  viewport: {
    northeast: Coordinates;
    southwest: Coordinates;
  };
};

export type MapCoordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
