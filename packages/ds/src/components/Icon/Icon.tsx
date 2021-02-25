import React, { FC } from 'react';
import { IconProps as ChakraIconProps, useStyleConfig } from '@chakra-ui/react';

import { merge } from 'lodash';

import { IconName } from '../../types';
import { IconSizes, IconVariants } from '../../theme';

import { coreIcons } from './CoreIcons';

export interface IconProps extends ChakraIconProps {
  name?: IconName;
  size?: IconSizes;
  variant?: IconVariants;
}

export const Icon: FC<IconProps> = ({ name, size, variant, ...props }) => {
  const styles = useStyleConfig('Icon', { size, variant });
  const icons = merge(coreIcons);

  const RenderedIcon = icons[name] ?? icons['question-outline'];

  return <RenderedIcon sx={styles} {...props} />;
};

Icon.displayName = 'Icon';
