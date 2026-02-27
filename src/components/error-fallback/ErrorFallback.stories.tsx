import type { Meta, StoryObj } from '@storybook/react';

import { ErrorFallback } from './ErrorFallback';

const meta: Meta<typeof ErrorFallback> = {
  title: 'Components/ErrorFallback',
  component: ErrorFallback,
};

export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {},
};

export const WithDescription: Story = {
  args: {
    title: 'Bir hata oluştu',
    description: 'Veriler yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.',
  },
};

export const WithRetry: Story = {
  args: {
    title: 'Bağlantı hatası',
    description: 'Sunucuya bağlanılamadı.',
    onRetry: () => alert('Tekrar deneniyor...'),
  },
};

export const CustomRetryLabel: Story = {
  args: {
    title: 'Sayfa yüklenemedi',
    description: 'Beklenmeyen bir hata oluştu.',
    onRetry: () => alert('Yenileniyor...'),
    retryLabel: 'Sayfayı Yenile',
  },
};
