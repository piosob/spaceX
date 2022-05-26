import * as BG from '../../img';

export const getSlide = (step) => {
  switch (step) {
    case 1:
      return BG.img1;
    case 2:
      return BG.img2;
    case 3:
      return BG.img3;
    default:
      return BG.img1;
  }
}