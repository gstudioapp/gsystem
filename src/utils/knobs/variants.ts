import { select } from '@storybook/addon-knobs'

import { IButton } from '@chakra-ui/core'

export const selectVariant = (label: string, groupId?: string) =>
  select<IButton['variant']>(
    label,
    {
      Outline: 'outline',
      Ghost: 'ghost',
      Unstyled: 'unstyled',
      Link: 'link',
      Solid: 'solid'
    },
    'solid',
    groupId
  )
