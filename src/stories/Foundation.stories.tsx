import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';

const meta: Meta = {
  title: 'Foundation/Design Tokens',
};

export default meta;
type Story = StoryObj;

// ─── Shared Styles ──────────────────────────────────────

const sectionStyle: React.CSSProperties = {
  fontFamily: 'var(--cuk-font-family-sans)',
  padding: 32,
  maxWidth: 960,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 'var(--cuk-font-size-2xl)',
  fontWeight: 700,
  color: 'var(--cuk-color-text-primary)',
  margin: '0 0 4px 0',
  letterSpacing: '-0.02em',
};

const sectionDesc: React.CSSProperties = {
  fontSize: 'var(--cuk-font-size-sm)',
  color: 'var(--cuk-color-text-muted)',
  margin: '0 0 32px 0',
};

const groupTitle: React.CSSProperties = {
  fontSize: 'var(--cuk-font-size-sm)',
  fontWeight: 600,
  color: 'var(--cuk-color-text-primary)',
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

// ─── Helpers ─────────────────────────────────────────────

const ColorSwatch: React.FC<{
  name: string;
  token: string;
  wide?: boolean;
}> = ({ name, token, wide }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: wide ? 160 : undefined,
    }}
  >
    <div
      style={{
        width: '100%',
        height: 48,
        borderRadius: 'var(--cuk-radius-lg)',
        backgroundColor: `var(${token})`,
        border: '1px solid var(--cuk-color-border)',
        boxShadow: 'var(--cuk-shadow-xs)',
      }}
    />
    <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--cuk-color-text-primary)',
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: 11,
          color: 'var(--cuk-color-text-muted)',
          fontFamily: 'var(--cuk-font-family-mono)',
        }}
      >
        {token}
      </div>
    </div>
  </div>
);

const colorScales = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

const ColorScale: React.FC<{ palette: string; label: string }> = ({
  palette,
  label,
}) => (
  <div style={{ marginBottom: 32 }}>
    <p style={groupTitle}>{label}</p>
    <div
      style={{
        display: 'flex',
        gap: 2,
        borderRadius: 'var(--cuk-radius-lg)',
        overflow: 'hidden',
      }}
    >
      {colorScales.map((scale) => (
        <div
          key={scale}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              height: 56,
              backgroundColor: `var(--cuk-color-${palette}-${scale})`,
            }}
          />
          <div
            style={{
              padding: '6px 4px',
              fontSize: 10,
              textAlign: 'center',
              color: 'var(--cuk-color-text-muted)',
              fontFamily: 'var(--cuk-font-family-mono)',
            }}
          >
            {scale}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Colors Story ────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div style={sectionStyle}>
      <h2 style={sectionTitle}>Colors</h2>
      <p style={sectionDesc}>
        Token-based color system with semantic mappings for light and dark
        themes.
      </p>

      <ColorScale palette="neutral" label="Neutral (Zinc)" />
      <ColorScale palette="primary" label="Primary (Indigo)" />
      <ColorScale palette="success" label="Success (Emerald)" />
      <ColorScale palette="warning" label="Warning (Amber)" />
      <ColorScale palette="danger" label="Danger (Red)" />
      <ColorScale palette="info" label="Info (Blue)" />

      <div style={{ marginTop: 40 }}>
        <p style={groupTitle}>Semantic Tokens</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {[
            ['background', '--cuk-color-background'],
            ['bg-subtle', '--cuk-color-background-subtle'],
            ['bg-muted', '--cuk-color-background-muted'],
            ['surface', '--cuk-color-surface'],
            ['text-primary', '--cuk-color-text-primary'],
            ['text-secondary', '--cuk-color-text-secondary'],
            ['text-muted', '--cuk-color-text-muted'],
            ['border', '--cuk-color-border'],
            ['border-strong', '--cuk-color-border-strong'],
            ['primary', '--cuk-color-primary'],
            ['primary-hover', '--cuk-color-primary-hover'],
            ['success', '--cuk-color-success'],
            ['warning', '--cuk-color-warning'],
            ['danger', '--cuk-color-danger'],
            ['info', '--cuk-color-info'],
            ['focus', '--cuk-color-focus'],
          ].map(([name, token]) => (
            <ColorSwatch key={name} name={name} token={token} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <p style={groupTitle}>Chart Colors</p>
        <div
          style={{
            display: 'flex',
            gap: 2,
            borderRadius: 'var(--cuk-radius-lg)',
            overflow: 'hidden',
            maxWidth: 480,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 48,
                backgroundColor: `var(--cuk-color-chart-${i})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Spacing Story ───────────────────────────────────────

const spacingValues = [
  '0',
  '0-5',
  '1',
  '1-5',
  '2',
  '2-5',
  '3',
  '3-5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
] as const;

export const Spacing: Story = {
  render: () => (
    <div style={sectionStyle}>
      <h2 style={sectionTitle}>Spacing</h2>
      <p style={sectionDesc}>
        Consistent spacing scale used for padding, margin, and gap throughout
        the system.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {spacingValues.map((value) => (
          <div
            key={value}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              height: 28,
            }}
          >
            <code
              style={{
                width: 160,
                fontSize: 11,
                flexShrink: 0,
                color: 'var(--cuk-color-text-muted)',
                fontFamily: 'var(--cuk-font-family-mono)',
              }}
            >
              --cuk-spacing-{value}
            </code>
            <div
              style={{
                height: 20,
                width: `var(--cuk-spacing-${value})`,
                backgroundColor: 'var(--cuk-color-primary)',
                borderRadius: 'var(--cuk-radius-sm)',
                minWidth: 2,
                opacity: 0.85,
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
  {
    name: 'Heading XL',
    size: '3xl',
    weight: 'bold',
    lineHeight: 'tight',
    tracking: '-0.025em',
  },
  {
    name: 'Heading LG',
    size: '2xl',
    weight: 'semibold',
    lineHeight: 'tight',
    tracking: '-0.02em',
  },
  {
    name: 'Heading MD',
    size: 'xl',
    weight: 'semibold',
    lineHeight: 'snug',
    tracking: '-0.01em',
  },
  {
    name: 'Heading SM',
    size: 'lg',
    weight: 'medium',
    lineHeight: 'snug',
    tracking: '-0.01em',
  },
  {
    name: 'Body LG',
    size: 'lg',
    weight: 'regular',
    lineHeight: 'normal',
    tracking: '0',
  },
  {
    name: 'Body MD',
    size: 'base',
    weight: 'regular',
    lineHeight: 'normal',
    tracking: '0',
  },
  {
    name: 'Body SM',
    size: 'sm',
    weight: 'regular',
    lineHeight: 'normal',
    tracking: '0',
  },
  {
    name: 'Caption',
    size: 'xs',
    weight: 'regular',
    lineHeight: 'normal',
    tracking: '0',
  },
] as const;

export const Typography: Story = {
  render: () => (
    <div style={sectionStyle}>
      <h2 style={sectionTitle}>Typography</h2>
      <p style={sectionDesc}>
        Inter font family with a refined type scale for headings, body text, and
        captions.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          borderRadius: 'var(--cuk-radius-lg)',
          border: '1px solid var(--cuk-color-border)',
          overflow: 'hidden',
        }}
      >
        {typographyPresets.map(
          ({ name, size, weight, lineHeight, tracking }, idx) => (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom:
                  idx < typographyPresets.length - 1
                    ? '1px solid var(--cuk-color-border)'
                    : 'none',
              }}
            >
              <span
                style={{
                  fontSize: `var(--cuk-font-size-${size})`,
                  fontWeight: `var(--cuk-font-weight-${weight})`,
                  lineHeight: `var(--cuk-line-height-${lineHeight})`,
                  letterSpacing: tracking,
                  color: 'var(--cuk-color-text-primary)',
                }}
              >
                {name}
              </span>
              <code
                style={{
                  fontSize: 11,
                  color: 'var(--cuk-color-text-muted)',
                  fontFamily: 'var(--cuk-font-family-mono)',
                }}
              >
                {size} / {weight}
              </code>
            </div>
          ),
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <p style={groupTitle}>Font Weights</p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {(['regular', 'medium', 'semibold', 'bold'] as const).map((w) => (
            <div
              key={w}
              style={{
                padding: '16px 24px',
                border: '1px solid var(--cuk-color-border)',
                borderRadius: 'var(--cuk-radius-lg)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--cuk-font-size-2xl)',
                  fontWeight:
                    `var(--cuk-font-weight-${w})` as unknown as number,
                  color: 'var(--cuk-color-text-primary)',
                  marginBottom: 4,
                }}
              >
                Ag
              </div>
              <code
                style={{
                  fontSize: 11,
                  color: 'var(--cuk-color-text-muted)',
                  fontFamily: 'var(--cuk-font-family-mono)',
                }}
              >
                {w}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Shadows Story ───────────────────────────────────────

export const Shadows: Story = {
  render: () => (
    <div style={sectionStyle}>
      <h2 style={sectionTitle}>Shadows</h2>
      <p style={sectionDesc}>
        Elevation scale for depth hierarchy. Used on cards, dropdowns, modals,
        and tooltips.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((level) => (
          <div
            key={level}
            style={{
              padding: 24,
              borderRadius: 'var(--cuk-radius-lg)',
              backgroundColor: 'var(--cuk-color-surface)',
              boxShadow: `var(--cuk-shadow-${level})`,
              border: '1px solid var(--cuk-color-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              minHeight: 100,
            }}
          >
            <span
              style={{
                fontSize: 'var(--cuk-font-size-lg)',
                fontWeight: 600,
                color: 'var(--cuk-color-text-primary)',
              }}
            >
              {level}
            </span>
            <code
              style={{
                fontSize: 11,
                color: 'var(--cuk-color-text-muted)',
                fontFamily: 'var(--cuk-font-family-mono)',
              }}
            >
              --cuk-shadow-{level}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Border Radius Story ─────────────────────────────────

export const BorderRadius: Story = {
  render: () => (
    <div style={sectionStyle}>
      <h2 style={sectionTitle}>Border Radius</h2>
      <p style={sectionDesc}>
        Radius tokens following Shadcn convention with calc-based md derived
        from lg.
      </p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {(['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map(
          (size) => (
            <div key={size} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  backgroundColor: 'var(--cuk-color-primary)',
                  borderRadius: `var(--cuk-radius-${size})`,
                  boxShadow: 'var(--cuk-shadow-sm)',
                }}
              />
              <code
                style={{
                  fontSize: 11,
                  marginTop: 8,
                  display: 'block',
                  color: 'var(--cuk-color-text-muted)',
                  fontFamily: 'var(--cuk-font-family-mono)',
                }}
              >
                {size}
              </code>
            </div>
          ),
        )}
      </div>
    </div>
  ),
};
