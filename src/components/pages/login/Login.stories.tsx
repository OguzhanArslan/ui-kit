import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoginPage } from './LoginPage';

const meta = {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hoş Geldiniz',
    subtitle: 'Hesabınıza giriş yapın',
    footerText: '© 2026 Tüm hakları saklıdır.',
  },
};

export const Loading: Story = {
  args: {
    title: 'Hoş Geldiniz',
    subtitle: 'Hesabınıza giriş yapın',
    isLoading: true,
  },
};

export const CustomBranding: Story = {
  args: {
    title: 'Tekrar Hoş Geldiniz',
    subtitle: 'Yönetim panelinize erişin',
    footerText: '© 2026 Şirket Adı. Tüm hakları saklıdır.',
  },
};
