import { PixelRatio } from 'react-native';
// @ts-ignore
import { isIOS } from './PlatformUtils';
import { screenWidth, screenHeight } from './DimensionUtil';

const baseWidth = 375;
const baseHeight = 667;

/**
 * adjust scalesize
 * @param size
 * @returns
 */
export const scaleSize = (size: number) => {
  const scaledWidth = (screenWidth / baseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.round(scaledWidth);
};

/**
 * get screen width
 * @param size
 * @returns
 */
export const scaleSizeWidth = (size: number) =>
  Math.round((screenWidth / baseWidth) * size);

/**
 * get screen height
 * @param size
 * @returns
 */
export const scaleSizeHeight = (size: number) =>
  Math.round((screenHeight / baseHeight) * size);

/**
 * adjust the size of the fonts
 * @param size
 * @returns
 */
export const scaleFontSize = (size: number) => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
