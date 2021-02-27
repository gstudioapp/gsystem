import React, { FC } from 'react';
import { Image as ChakraImage, ImageProps as ChakraImageProps } from '@chakra-ui/react';

import gStudioLogo from '../../assets/images/logo.png';
import gStudioLogoSymbol from '../../assets/images/logo-symbol.png';

type LogoType = 'normal' | 'minimal';

export interface LogoProps extends ChakraImageProps {
  type: LogoType;
}

export const Logo: FC<LogoProps> = ({ type = 'normal', ...props }) => {
  const logoTypes: Record<LogoType, string> = {
    normal: gStudioLogo,
    minimal: gStudioLogoSymbol,
  };

  return (
    <ChakraImage
      width={type === 'normal' ? '7.5rem' : '2.03rem'}
      src={logoTypes[type]}
      {...props}
    />
  );
};

Logo.displayName = 'Logo';
