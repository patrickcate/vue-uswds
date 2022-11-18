import { create } from '@storybook/theming'

export default create({
  brandTitle: 'Vue USWDS',
  brandImage:
    process.env.STORYBOOK_MODE === 'BUILD' ? 'logo.svg' : '../media/logo.svg',
})
