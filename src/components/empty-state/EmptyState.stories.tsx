import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/Button';
import { SearchIcon, UsersIcon } from '../icons';

import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'Veri bulunamadı',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Veri bulunamadı',
    description: 'Arama kriterlerinizi değiştirmeyi veya filtrelerinizi temizlemeyi deneyin.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Henüz kayıt yok',
    description: 'Başlamak için yeni bir kayıt ekleyin.',
    action: <Button label="Yeni Ekle" size="sm" />,
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <UsersIcon />,
    title: 'Kullanıcı bulunamadı',
    description: 'Arama kriterlerinizi değiştirmeyi deneyin.',
  },
};

export const SearchEmpty: Story = {
  name: 'Arama Sonucu Boş',
  args: {
    icon: <SearchIcon />,
    title: 'Sonuç bulunamadı',
    description: 'Farklı anahtar kelimelerle tekrar arayın.',
    action: <Button label="Filtreleri Temizle" color="tertiary" size="sm" />,
  },
};
