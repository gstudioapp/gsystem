import { select } from '@storybook/addon-knobs'

import { Colors } from '../../theme/colors/colors'

export const selectVariantColor = (label: string, groupId?: string) =>
  select<Colors>(
    label,
    {
      Primary: 'brand.primary',
      Danger: 'support.danger',
      Info: 'support.info',
      Success: 'support.success',
      Warning: 'support.warning'
    },
    'brand.primary',
    groupId
  )
