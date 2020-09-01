import { Density } from './density';
import { Space } from './types';
import compactSpace from './compact';
import defaultSpace from './default';

export function getTargetSpace(target: Density = Density.DEFAULT): Space {
  return {
    [Density.COMPACT]: compactSpace,
    [Density.DEFAULT]: defaultSpace,
  }[target];
}
