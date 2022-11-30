import { RoomTypeLabel, RoomType } from './const';

import { OfferType } from './types/offer';

type RoomTypeKey = keyof typeof RoomType;
type RoomTypeLabelKey = keyof typeof RoomTypeLabel;

enum LayoutSelector {
  Page = '.page',
  Main = '.page__main',
}

export const getLabelByOfferType = (type: OfferType): string => {
  const keys = Object.keys(RoomType);
  const key = keys.find((item) =>
    (RoomType[item as RoomTypeKey] === type));

  return RoomTypeLabel[key as RoomTypeLabelKey];
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

const toggleCssClassTo = (classNames: string[] | string, selector: string, removeFlag = false) => {
  const element = document.querySelector(selector);

  if (element === null) {
    return;
  }

  if (typeof classNames === 'string') {
    classNames = [classNames];
    // console.log(classNames);
  }

  if (removeFlag) {
    element.classList.remove(...classNames);
    return;
  }

  element.classList.add(...classNames);
};

const createLayoutCss = (selector: LayoutSelector) => ({
  add(classNames: string[] | string) {
    toggleCssClassTo(classNames, selector);
  },
  remove(classNames: string[] | string) {
    toggleCssClassTo(classNames, selector, true);
  },
});

export const pageLayoutCss = createLayoutCss(LayoutSelector.Page);
export const mainLayoutCss = createLayoutCss(LayoutSelector.Main);
