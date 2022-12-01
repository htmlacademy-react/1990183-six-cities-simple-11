enum LayoutSelector {
  Page = '.page',
  Main = '.page__main',
}

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
