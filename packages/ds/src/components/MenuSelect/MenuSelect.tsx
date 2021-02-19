import React, { FC } from 'react';
import {
  Menu as ChakraMenu,
  MenuProps as ChakraMenuProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { MenuSelectSizes, MenuSelectVariants } from '../../theme';

export interface MenuSelectProps {
  size?: MenuSelectSizes;
  variant?: MenuSelectVariants | ChakraMenuProps['variant'];
}

export const MenuSelect: FC<MenuSelectProps> = ({ size, variant, ...props }) => {
  const styles = useMultiStyleConfig('MenuSelect', { size, variant });

  return (
    <ChakraMenu data-testid="menu-select" {...props}>
      aaa
    </ChakraMenu>
  );
};

MenuSelect.displayName = 'MenuSelect';
