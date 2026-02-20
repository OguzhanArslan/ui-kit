import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../typography';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Card {...args}>
        <Card.Header>
          <Typography variant="h4" weight="semibold">
            Proje Detayları
          </Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="paragraph" color="secondary">
            Bu kart varsayılan görünümde border ve hafif gölge içerir.
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Typography variant="caption" color="muted">
            Son güncelleme: 2 saat önce
          </Typography>
        </Card.Footer>
      </Card>
    </div>
  ),
  args: { variant: 'default' },
};

export const Outlined: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Card variant="outlined">
        <Card.Header>
          <Typography variant="h4" weight="semibold">
            Bildirimler
          </Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="paragraph" color="secondary">
            Outlined kart gölge kullanmaz, sadece güçlü border ile çerçevelenir.
          </Typography>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const Elevated: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Card variant="elevated">
        <Card.Header>
          <Typography variant="h4" weight="semibold">
            Öne Çıkan
          </Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="paragraph" color="secondary">
            Elevated kart daha belirgin gölgeye sahiptir ve hover'da yükselir.
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Typography variant="caption" color="muted">
            Hover ile deneyin
          </Typography>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        maxWidth: 900,
      }}
    >
      {(['default', 'outlined', 'elevated'] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <Card.Header>
            <Typography variant="small" weight="medium" color="muted">
              {variant.toUpperCase()}
            </Typography>
          </Card.Header>
          <Card.Body>
            <Typography variant="h3" weight="bold">
              2,847
            </Typography>
            <Typography variant="small" color="secondary">
              Toplam işlem sayısı
            </Typography>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const BodyOnly: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Card>
        <Card.Body>
          <Typography variant="paragraph" color="secondary">
            Sadece body içeren minimal kart.
          </Typography>
        </Card.Body>
      </Card>
    </div>
  ),
};
