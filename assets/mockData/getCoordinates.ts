import { Geometry, MapCoordinates } from 'src/location/types/Location';

const getCoordinates = (geometry: Geometry | null): MapCoordinates => {
  const { location, viewport } = geometry || {};
  const northeastLat = viewport?.northeast?.lat || 0;
  const southwestLat = viewport?.southwest?.lat || 0;
  return {
    latitude: location?.lat || 0,
    longitude: location?.lng || 0,
    latitudeDelta: northeastLat - southwestLat,
    longitudeDelta: 0.02,
  };
};

export default getCoordinates;
