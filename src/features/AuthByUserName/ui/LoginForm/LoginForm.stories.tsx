import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { userName: 'admin', password: '123' },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        userName: 'admin',
        password: '123',
        error: 'Some auth error',
      },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
    ThemeDecorator(Theme.LIGHT),
  ],
}
