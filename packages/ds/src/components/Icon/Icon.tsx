import React, { FC } from 'react';
import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { IconName } from '../../types';
import { IconSizes } from '../../theme/components/icon';

export interface IconProps extends ChakraIconProps {
  name?: IconName;
  size?: IconSizes;
}

export const Icon: FC<IconProps> = () => {
  return <>hello world</>;
};

Icon.displayName = 'Icon';
