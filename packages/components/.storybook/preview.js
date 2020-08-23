import { addDecorator, addParameters } from '@storybook/react'

import { ThemeProviderDecorator } from './decorators'

addDecorator(ThemeProviderDecorator)

addParameters({
  info: {
    styles: {
      infoBody: {
        backgroundColor: 'transparent',
        color: 'inherit'
      }
    }
  },
  darkMode: {
    stylePreview: true
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
