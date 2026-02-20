import * as Icons from './index';

export default { title: 'Configuration/Icons' };

export const Catalog = () => {
  const entries = Object.entries(Icons);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        gap: 12,
        fontFamily: 'var(--cuk-font-family-sans)',
      }}
    >
      {entries.map(([name, Comp]) => (
        <div
          key={name}
          style={{
            border: '1px solid var(--cuk-color-border)',
            padding: 12,
            borderRadius: 'var(--cuk-radius-md)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Comp
              width={20}
              height={20}
              style={{ color: 'var(--cuk-color-text-primary)' }}
            />
            <span
              style={{ fontSize: 11, color: 'var(--cuk-color-text-muted)' }}
            >
              {name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
