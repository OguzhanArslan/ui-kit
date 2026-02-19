import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Foundation/Design Tokens',
};

export default meta;
type Story = StoryObj;

// ─── Helpers ─────────────────────────────────────────────

const SwatchGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
    {children}
  </div>
);

const ColorSwatch: React.FC<{ name: string; token: string }> = ({ name, token }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        width: '100%',
        height: 56,
        borderRadius: 8,
        backgroundColor: `var(${token})`,
        border: '1px solid var(--cuk-color-border)',
      }}
    />
    <div style={{ fontSize: 11, marginTop: 6, fontWeight: 500, color: 'var(--cuk-color-text-primary)' }}>{name}</div>
    <div style={{ fontSize: 10, color: 'var(--cuk-color-text-muted)' }}>{token}</div>
  </div>
);

const colorScales = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;

const ColorPalette: React.FC<{ palette: string }> = ({ palette }) => (
  <div style={{ marginBottom: 24 }}>
    <h4 style={{ margin: '0 0 8px', textTransform: 'capitalize' }}>{palette}</h4>
    <SwatchGrid>
      {colorScales.map((scale) => (
        <ColorSwatch key={scale} name={`${palette}-${scale}`} token={`--cuk-color-${palette}-${scale}`} />
      ))}
    </SwatchGrid>
  </div>
);

// ─── Colors Story ────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 16 }}>
      <h2>Color Tokens</h2>

      <h3>Palettes</h3>
      {['primary', 'success', 'warning', 'danger', 'info', 'neutral'].map((palette) => (
        <ColorPalette key={palette} palette={palette} />
      ))}

      <h3>Base Colors</h3>
      <SwatchGrid>
        <ColorSwatch name="white" token="--cuk-color-white" />
        <ColorSwatch name="black" token="--cuk-color-black" />
        <ColorSwatch name="focus" token="--cuk-color-focus" />
      </SwatchGrid>

      <h3 style={{ marginTop: 24 }}>Semantic Colors</h3>
      <SwatchGrid>
        {[
          'background', 'background-subtle', 'background-muted',
          'surface', 'surface-raised', 'surface-overlay',
          'text-primary', 'text-secondary', 'text-muted',
          'border', 'border-strong', 'border-focus',
          'primary', 'primary-hover', 'primary-active', 'primary-subtle',
          'success', 'warning', 'danger', 'info',
        ].map((name) => (
          <ColorSwatch key={name} name={name} token={`--cuk-color-${name}`} />
        ))}
      </SwatchGrid>

      <h3 style={{ marginTop: 24 }}>Chart Colors</h3>
      <SwatchGrid>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ColorSwatch key={i} name={`chart-${i}`} token={`--cuk-color-chart-${i}`} />
        ))}
      </SwatchGrid>
    </div>
  ),
};

// ─── Spacing Story ───────────────────────────────────────

const spacingValues = [
  '0', '0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4',
  '5', '6', '7', '8', '9', '10', '11', '12', '14', '16',
] as const;

export const Spacing: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 16 }}>
      <h2>Spacing Tokens</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {spacingValues.map((value) => (
          <div key={value} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <code style={{ width: 160, fontSize: 12, flexShrink: 0 }}>--cuk-spacing-{value}</code>
            <div
              style={{
                height: 24,
                width: `var(--cuk-spacing-${value})`,
                backgroundColor: 'var(--cuk-color-primary)',
                borderRadius: 4,
                minWidth: 2,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Typography Story ────────────────────────────────────

const typographyPresets = [
  { name: 'heading-xl', size: '3xl', weight: 'bold', lineHeight: 'tight' },
  { name: 'heading-lg', size: '2xl', weight: 'semibold', lineHeight: 'tight' },
  { name: 'heading-md', size: 'xl', weight: 'semibold', lineHeight: 'snug' },
  { name: 'heading-sm', size: 'lg', weight: 'medium', lineHeight: 'snug' },
  { name: 'body-lg', size: 'lg', weight: 'regular', lineHeight: 'normal' },
  { name: 'body-md', size: 'base', weight: 'regular', lineHeight: 'normal' },
  { name: 'body-sm', size: 'sm', weight: 'regular', lineHeight: 'normal' },
  { name: 'caption', size: 'xs', weight: 'regular', lineHeight: 'normal' },
] as const;

export const Typography: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 16 }}>
      <h2>Typography Tokens</h2>

      <h3>Presets</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {typographyPresets.map(({ name, size, weight, lineHeight }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <code style={{ width: 120, fontSize: 12, flexShrink: 0, color: 'var(--cuk-color-text-muted)' }}>
              {name}
            </code>
            <span
              style={{
                fontSize: `var(--cuk-font-size-${size})`,
                fontWeight: `var(--cuk-font-weight-${weight})`,
                lineHeight: `var(--cuk-line-height-${lineHeight})`,
              }}
            >
              The quick brown fox jumps
            </span>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 32 }}>Font Sizes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'].map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <code style={{ width: 180, fontSize: 12, flexShrink: 0 }}>--cuk-font-size-{size}</code>
            <span style={{ fontSize: `var(--cuk-font-size-${size})` }}>Aa</span>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 32 }}>Font Weights</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['regular', 'medium', 'semibold', 'bold'].map((w) => (
          <div key={w} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <code style={{ width: 220, fontSize: 12, flexShrink: 0 }}>--cuk-font-weight-{w}</code>
            <span style={{ fontWeight: `var(--cuk-font-weight-${w})` as unknown as number }}>
              The quick brown fox jumps
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Shadows Story ───────────────────────────────────────

export const Shadows: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 16 }}>
      <h2>Shadow Tokens</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 24 }}>
        {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((level) => (
          <div key={level} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                height: 80,
                borderRadius: 8,
                backgroundColor: 'var(--cuk-color-surface)',
                boxShadow: `var(--cuk-shadow-${level})`,
                border: '1px solid var(--cuk-color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <code style={{ fontSize: 12 }}>{level}</code>
            </div>
            <code style={{ fontSize: 11, marginTop: 8, display: 'block' }}>--cuk-shadow-{level}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Border Radius Story ─────────────────────────────────

export const BorderRadius: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 16 }}>
      <h2>Border Radius Tokens</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 24 }}>
        {['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].map((size) => (
          <div key={size} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                margin: '0 auto',
                backgroundColor: 'var(--cuk-color-primary)',
                borderRadius: `var(--cuk-radius-${size})`,
              }}
            />
            <code style={{ fontSize: 11, marginTop: 8, display: 'block' }}>--cuk-radius-{size}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};
