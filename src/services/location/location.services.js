import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      return reject("NOT FOUND");
    }
    return resolve(location);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
