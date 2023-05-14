import { mocks } from "./mock";
import camelize from "camelize";
import { mockImages } from "./mock";

export function restaurantRequest(location) {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    console.log(mock);
    if (!mock) {
      reject("no information found");
    }
    resolve(mock);
  });
}

export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResult);
};
