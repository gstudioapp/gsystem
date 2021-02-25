import React, { FC, useEffect, useState } from 'react';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
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

interface MenuSelectOption {
  label: string;
  value: unknown;
}

export interface MenuSelectProps extends ChakraMenuProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  onChange?: (option: MenuSelectOption) => void;
  options?: Array<MenuSelectOption>;
  placeholder?: string;
  size?: MenuSelectSizes;
  value?: MenuSelectOption;
  variant?: MenuSelectVariants;
}

export const MenuSelect: FC<MenuSelectProps> = ({
  colorScheme,
  isDisabled,
  isLoading,
  onChange,
  options,
  placeholder,
  size,
  value,
  variant,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState<MenuSelectOption>();
  const styles = useMultiStyleConfig('MenuSelect', { size, variant, colorScheme });

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    }
  }, []);

  function handleOnChange(selectedOption: MenuSelectOption) {
    setSelectedOption(selectedOption);
    onChange(selectedOption);
  }

  return (
    <>
      <ChakraMenu matchWidth {...props}>
        {({ isOpen }) => (
          <>
            <ChakraMenuButton
              data-testid="menu-select-button"
              as={ChakraButton}
              fontWeight={selectedOption ? 'bold' : 'normal'}
              isDisabled={isDisabled}
              isLoading={isLoading}
              sx={styles['menu-button']}
              rightIcon={
                isOpen ? <TriangleUpIcon boxSize="0.5rem" /> : <TriangleDownIcon boxSize="0.5rem" />
              }
            >
              {selectedOption ? selectedOption.label : placeholder}
            </ChakraMenuButton>
            <ChakraMenuList sx={styles['menu-list']}>
              {options?.length > 0 ? (
                options.map((option, idx) => (
                  <ChakraMenuItem
                    data-testid="menu-select-item"
                    key={idx}
                    sx={styles['menu-item']}
                    onClick={() => handleOnChange(option)}
                  >
                    {option.label}
                  </ChakraMenuItem>
                ))
              ) : (
                <ChakraMenuItem isDisabled data-testid="menu-select-item" sx={styles['menu-item']}>
                  No options.
                </ChakraMenuItem>
              )}
            </ChakraMenuList>
          </>
        )}
      </ChakraMenu>
    </>
  );
};

MenuSelect.displayName = 'MenuSelect';
