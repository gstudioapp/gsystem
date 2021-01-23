import { extendTheme, Theme } from '@chakra-ui/react';
import { isEmpty, isObject } from 'lodash';

type ThemeBlock = any;

export const mergedTheme = (newTheme: any): Theme => extendTheme(newTheme);

export const variantColor = (theme: ThemeBlock | undefined) =>
  theme?.refs?.reduce((acc, curr) => {
    if (curr.type === 'color') {
      acc = {
        ...acc,
        [curr.displayName]: curr.colors,
      };
    }
    return acc;
  }, {});

export const fontsVariants = (theme: ThemeBlock | undefined) =>
  theme?.refs?.reduce((acc, curr) => {
    if (curr.type === 'text') {
      acc = {
        ...acc,
        [curr.displayName]: curr.props,
      };
    }
    return acc;
  }, {});

export const customTheme = (theme: ThemeBlock | undefined): Theme | null => {
  if (!isObject(theme) || isEmpty(theme)) return null;

  return mergedTheme({
    colors: variantColor(theme),
    components: { Text: { variants: fontsVariants(theme) }, ...componentsVariant(theme) },
  });
};

export const componentsVariant = (theme: ThemeBlock | undefined) =>
  theme?.blocks?.reduce((acc, curr) => {
    if (acc[curr.type]) {
      return {
        ...acc,
        [curr.type]: {
          variants: {
            ...acc[curr.type].variants,
            [curr.displayName]: {
              ...curr.props,
            },
          },
        },
      };
    }
    return { ...acc, [curr.type]: { variants: { [curr.displayName]: { ...curr.props } } } };
  }, {});
