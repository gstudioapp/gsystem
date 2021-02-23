import React, { FC, useState } from 'react';
import {
  Button as ChakraButton,
  Menu as ChakraMenu,
  MenuButton as ChakraMenuButton,
  MenuList as ChakraMenuList,
  MenuItem as ChakraMenuItem,
  MenuProps as ChakraMenuProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { MenuSelectSizes, MenuSelectVariants } from '../../theme';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

interface MenuSelectOption {
  label: string;
  value: unknown;
}

export interface MenuSelectProps extends ChakraMenuProps {
  placeholder?: string;
  size?: MenuSelectSizes;
  variant?: MenuSelectVariants;
  options?: Array<MenuSelectOption>;
  onChange?: (option: MenuSelectOption) => void;
}

export const MenuSelect: FC<MenuSelectProps> = ({
  size,
  variant,
  colorScheme,
  placeholder,
  options,
  onChange,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState<MenuSelectOption>();
  const styles = useMultiStyleConfig('MenuSelect', { size, variant, colorScheme });

  function handleOnChange(option: MenuSelectOption) {
    setSelectedOption(option);
    onChange(option);
  }

  return (
    <>
      <ChakraMenu matchWidth data-testid="menu-select" {...props}>
        {({ isOpen }) => (
          <>
            <ChakraMenuButton
              sx={styles['menu-button']}
              as={ChakraButton}
              fontWeight={selectedOption ? 'bold' : 'normal'}
              rightIcon={
                isOpen ? <TriangleUpIcon boxSize="0.5rem" /> : <TriangleDownIcon boxSize="0.5rem" />
              }
            >
              {selectedOption ? selectedOption.label : placeholder}
            </ChakraMenuButton>
            {options?.length > 0 && (
              <ChakraMenuList sx={styles['menu-list']}>
                {options.map((option, idx) => (
                  <ChakraMenuItem
                    key={idx}
                    sx={styles['menu-item']}
                    onClick={() => handleOnChange(option)}
                  >
                    {option.label}
                  </ChakraMenuItem>
                ))}
              </ChakraMenuList>
            )}
          </>
        )}
      </ChakraMenu>
    </>
  );
};

MenuSelect.displayName = 'MenuSelect';
