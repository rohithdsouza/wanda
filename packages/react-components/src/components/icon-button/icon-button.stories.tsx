import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconButton } from './icon-button'

export default {
  title: 'Components/Actions/IconButton',
  component: IconButton,
  args: {
    dimension: 'regular',
    kind: 'primary',
    icon: 'bell',
    busy: false
  },
  argTypes: {
    onClick: { action: 'clicked' },
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    busy: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    kind: {
      options: ['primary', 'secondary', 'flat'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false
}