# cari-ui-kit — Kullanim Dokumantasyonu

React projelerinde `cari-ui-kit` kuulumu, tema ayarlari ve component kullanimi.

---

## Kurulum

```bash
npm install cari-ui-kit
# veya
yarn add cari-ui-kit
```

### Peer Dependencies

Asagidaki paketlerin projenizde yuklu olmasi gerekir:

```bash
npm install react react-dom classnames react-select apexcharts react-apexcharts
```

| Paket | Versiyon |
|-------|----------|
| `react` | >=18 <20 |
| `react-dom` | >=18 <20 |
| `classnames` | >=2.3.0 |
| `react-select` | >=5 |
| `apexcharts` | ^5.3.6 |
| `react-apexcharts` | ^1.9.0 |

---

## Baslangic Ayarlari

### 1. CSS Import

Uygulamanizin giris dosyasinda (orn. `main.tsx` veya `App.tsx`) CSS'i import edin:

```tsx
import 'cari-ui-kit/dist/cari-ui-kit.css';
```

### 2. Scope Wrapper

Component'lerin dogru stil alabilmesi icin kok elementi `.scope` class'i ile sarin:

```tsx
function App() {
  return (
    <div className="scope">
      {/* Uygulamaniz */}
    </div>
  );
}
```

### 3. Toast Provider

Toast bildirimleri kullanacaksaniz, uygulamanizi `ToastProvider` ile sarin:

```tsx
import { ToastProvider } from 'cari-ui-kit';

function App() {
  return (
    <div className="scope">
      <ToastProvider>
        {/* Uygulamaniz */}
      </ToastProvider>
    </div>
  );
}
```

### 4. Dark Mode

Dark mode icin root elemente `data-theme="dark"` attribute'u ekleyin:

```tsx
// Acmak icin
document.documentElement.setAttribute('data-theme', 'dark');

// Kapatmak icin
document.documentElement.removeAttribute('data-theme');
```

---

## Component'ler

### Button

```tsx
import { Button } from 'cari-ui-kit';

// Temel kullanim
<Button label="Kaydet" color="primary" onClick={handleSave} />

// Boyutlar: xs, sm, md (default), lg
<Button label="Kucuk" size="xs" color="primary" />
<Button label="Buyuk" size="lg" color="primary" />

// Renkler: primary, secondary, tertiary, muted, menu, success, warning, error
<Button label="Sil" color="error" />
<Button label="Iptal" color="tertiary" />

// Icon ile
<Button label="Ekle" prefix={<PlusIcon />} color="primary" />
<Button label="Indir" suffix={<DownloadIcon />} color="secondary" />

// Durumlar
<Button label="Yukleniyor..." isLoading color="primary" />
<Button label="Pasif" disabled color="primary" />

// Tam genislik
<Button label="Devam Et" isFullWidth color="primary" />
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `label` | `string` | — | Buton metni |
| `color` | `COLORS` | `'primary'` | `primary`, `secondary`, `tertiary`, `muted`, `menu`, `success`, `warning`, `error` |
| `size` | `SIZES` | `'md'` | `xs`, `sm`, `md`, `lg` |
| `disabled` | `boolean` | `false` | Pasif durumu |
| `isLoading` | `boolean` | `false` | Yukleniyor durumu |
| `isFullWidth` | `boolean` | `false` | Tam genislik |
| `isCircle` | `boolean` | `false` | Daire seklinde |
| `isActive` | `boolean` | `false` | Aktif durumu (menu icin) |
| `prefix` | `ReactNode` | — | Sol taraf icon/element |
| `suffix` | `ReactNode` | — | Sag taraf icon/element |
| `onClick` | `() => void` | — | Tiklama handler |

---

### Input

```tsx
import { Input } from 'cari-ui-kit';

// Temel
<Input name="email" placeholder="E-posta adresiniz" />

// Deger kontrolu
<Input
  name="search"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Ara..."
/>

// Icon ile
<Input name="search" prefix={<SearchIcon />} placeholder="Ara..." />
<Input name="password" suffix={<EyeIcon />} type="password" />

// Hata durumu
<Input name="email" isError placeholder="E-posta" />

// Yukleniyor
<Input name="search" isLoading placeholder="Aranıyor..." />
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `name` | `string` | **zorunlu** | Input adi |
| `type` | `string` | `'text'` | HTML input tipi |
| `placeholder` | `string` | — | Placeholder metni |
| `value` | `string` | — | Deger |
| `onChange` | `ChangeEventHandler` | — | Degisiklik handler |
| `disabled` | `boolean` | `false` | Pasif durumu |
| `isError` | `boolean` | `false` | Hata durumu |
| `isLoading` | `boolean` | `false` | Yukleniyor durumu |
| `prefix` | `ReactNode` | — | Sol element |
| `suffix` | `ReactNode` | — | Sag element |

---

### Textarea

```tsx
import { Textarea } from 'cari-ui-kit';

<Textarea name="notes" placeholder="Notlarinizi yazin..." />
<Textarea name="bio" isError />
```

---

### Select

`react-select` uzerine kurulu, tema ile uyumlu select component'i.

```tsx
import { Select } from 'cari-ui-kit';

const options = [
  { value: 'tr', label: 'Turkiye' },
  { value: 'us', label: 'ABD' },
  { value: 'de', label: 'Almanya' },
];

// Tekli secim
<Select name="country" options={options} placeholder="Ulke secin" />

// Coklu secim
<Select name="tags" options={options} isMulti placeholder="Etiket secin" />

// Hata durumu
<Select name="role" options={options} isError />
```

**Props:** `react-select` Props'larina ek olarak:

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `name` | `string` | **zorunlu** | Select adi |
| `isError` | `boolean` | `false` | Hata durumu |
| `isLoading` | `boolean` | `false` | Yukleniyor |
| `isMulti` | `boolean` | `false` | Coklu secim |
| `disabled` | `boolean` | `false` | Pasif durumu |

---

### Checkbox

```tsx
import { Checkbox } from 'cari-ui-kit';

<Checkbox name="terms" label="Kosullari kabul ediyorum" />
<Checkbox name="terms" label="Kosullar" isError />
<Checkbox name="agree" label="Onayla" checked disabled />
```

---

### Switch

```tsx
import { Switch } from 'cari-ui-kit';

<Switch label="Bildirimleri ac" checked={enabled} onChange={setEnabled} />
<Switch label="Pasif" disabled />
```

---

### Card

Compound component yapisi: `Card`, `Card.Header`, `Card.Body`, `Card.Footer`.

```tsx
import { Card } from 'cari-ui-kit';

// Basit card
<Card>
  <Card.Body>
    <p>Icerik burada</p>
  </Card.Body>
</Card>

// Header + Body + Footer
<Card variant="default">
  <Card.Header>
    <h3>Baslik</h3>
  </Card.Header>
  <Card.Body>
    <p>Detaylar...</p>
  </Card.Body>
  <Card.Footer>
    <Button label="Kaydet" color="primary" />
  </Card.Footer>
</Card>

// Varyantlar: default, outlined, elevated
<Card variant="elevated">
  <Card.Body>Golge efektli kart</Card.Body>
</Card>
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `variant` | `CardVariant` | `'default'` | `default`, `outlined`, `elevated` |

---

### StatCard

Istatistik gosterimi icin ozel kart.

```tsx
import { StatCard } from 'cari-ui-kit';

<StatCard
  title="Toplam Gelir"
  value="₺128.430"
  trend="up"
  trendValue="+12.5%"
  icon={<TrendUpIcon />}
/>

<StatCard
  title="Aktif Kullanici"
  value={1284}
  trend="down"
  trendValue="-3.2%"
/>

<StatCard
  title="Siparis"
  value={42}
  trend="neutral"
  trendValue="Degisim yok"
/>
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `title` | `string` | **zorunlu** | Baslik |
| `value` | `string \| number` | **zorunlu** | Ana deger |
| `trend` | `TrendDirection` | — | `up`, `down`, `neutral` |
| `trendValue` | `string` | — | Trend aciklamasi |
| `icon` | `ReactNode` | — | Sag ust ikon |
| `variant` | `CardVariant` | `'default'` | Kart varyanti |

---

### Modal

Portal-tabanli, focus trap destekli dialog.

```tsx
import { Modal } from 'cari-ui-kit';

const [open, setOpen] = useState(false);

<Button label="Ac" onClick={() => setOpen(true)} color="primary" />

<Modal open={open} onClose={() => setOpen(false)} size="md">
  <Modal.Header
    title="Silme Onayı"
    description="Bu islem geri alinamaz."
    onClose={() => setOpen(false)}
  />
  <Modal.Body>
    <p>Bu kaydi silmek istediginizden emin misiniz?</p>
  </Modal.Body>
  <Modal.Footer>
    <Button label="Iptal" color="tertiary" onClick={() => setOpen(false)} />
    <Button label="Sil" color="error" onClick={handleDelete} />
  </Modal.Footer>
</Modal>
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `open` | `boolean` | **zorunlu** | Gorunurluk |
| `onClose` | `() => void` | **zorunlu** | Kapatma handler |
| `size` | `ModalSize` | `'md'` | `sm` (384px), `md` (520px), `lg` (680px) |

**Modal.Header Props:**

| Prop | Tip | Aciklama |
|------|-----|----------|
| `title` | `string` | Dialog basligi |
| `description` | `string` | Alt aciklama |
| `onClose` | `() => void` | X butonu handler |

---

### Badge

```tsx
import { Badge } from 'cari-ui-kit';

// Varyantlar
<Badge variant="default">Varsayilan</Badge>
<Badge variant="success">Basarili</Badge>
<Badge variant="warning">Uyari</Badge>
<Badge variant="danger">Hata</Badge>
<Badge variant="info">Bilgi</Badge>

// Nokta gostergesi ile
<Badge variant="success" dot>Aktif</Badge>

// Kaldirilabilir
<Badge variant="info" onRemove={() => handleRemove()}>Etiket</Badge>

// Boyutlar
<Badge size="sm" variant="default">Kucuk</Badge>
<Badge size="md" variant="default">Normal</Badge>
```

---

### Alert

```tsx
import { Alert } from 'cari-ui-kit';

<Alert variant="info" title="Bilgi" message="Islem tamamlandi." />
<Alert variant="success" title="Basarili" message="Kayit olusturuldu." />
<Alert variant="warning" title="Uyari" message="Limit yaklasti." />
<Alert variant="danger" title="Hata" message="Islem basarisiz." dismissible onDismiss={handleDismiss} />
```

---

### Tabs

```tsx
import { Tabs } from 'cari-ui-kit';

<Tabs
  tabs={[
    { id: 'genel', label: 'Genel' },
    { id: 'ayarlar', label: 'Ayarlar' },
    { id: 'bildirimler', label: 'Bildirimler' },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

---

### Table

Siralama, filtreleme ve sayfalama destekli tablo.

```tsx
import { Table } from 'cari-ui-kit';

const columns = [
  { key: 'name', header: 'Ad', sortable: true },
  { key: 'email', header: 'E-posta' },
  { key: 'role', header: 'Rol', sortable: true },
  {
    key: 'status',
    header: 'Durum',
    render: (value) => <Badge variant={value === 'active' ? 'success' : 'danger'}>{value}</Badge>,
  },
];

const data = [
  { name: 'Ahmet Yilmaz', email: 'ahmet@example.com', role: 'Admin', status: 'active' },
  { name: 'Ayse Demir', email: 'ayse@example.com', role: 'Editor', status: 'inactive' },
];

<Table
  columns={columns}
  data={data}
  filterable
  filterPlaceholder="Kullanici ara..."
  pagination
  pageSize={10}
  pageSizeOptions={[10, 25, 50]}
/>
```

**Props:**

| Prop | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `columns` | `ColumnDef<T>[]` | **zorunlu** | Sutun tanimlari |
| `data` | `T[]` | **zorunlu** | Veri dizisi |
| `loading` | `boolean` | `false` | Yukleniyor durumu |
| `emptyText` | `string` | — | Bos durum metni |
| `filterable` | `boolean` | `false` | Filtreleme aktif |
| `filterPlaceholder` | `string` | — | Filtre placeholder |
| `pagination` | `boolean` | `false` | Sayfalama aktif |
| `pageSize` | `number` | — | Sayfa basi satir |
| `pageSizeOptions` | `number[]` | — | Sayfa boyutu secenekleri |
| `onSort` | `(key, direction) => void` | — | Sunucu tarafli siralama |
| `onFilter` | `(value) => void` | — | Sunucu tarafli filtreleme |

---

### Toast

Provider + hook deseni ile bildirim sistemi.

```tsx
// 1. App seviyesinde ToastProvider eklenmis olmali (bkz. Baslangic Ayarlari)

// 2. Component icinde kullanim
import { useToast } from 'cari-ui-kit';

function MyComponent() {
  const toast = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast.success('Kaydedildi', { description: 'Degisiklikler basariyla kaydedildi.' });
    } catch {
      toast.error('Hata', { description: 'Kayit sirasinda bir sorun olustu.' });
    }
  };

  // Uyari ve bilgi
  toast.warning('Dikkat', { description: 'Oturum 5 dk icinde sona erecek.' });
  toast.info('Guncelleme', { description: 'Yeni versiyon mevcut.' });

  // Ozel sure (ms) — varsayilan 5000ms
  toast.success('Hizli', { duration: 2000 });

  // Aksiyon butonu ile
  toast.error('Silindi', {
    description: 'Kayit silindi.',
    action: { label: 'Geri Al', onClick: handleUndo },
  });
}
```

**Toast API:**

| Metod | Parametreler | Aciklama |
|-------|-------------|----------|
| `toast.success(title, options?)` | `title: string` | Basari bildirimi |
| `toast.error(title, options?)` | `title: string` | Hata bildirimi |
| `toast.warning(title, options?)` | `title: string` | Uyari bildirimi |
| `toast.info(title, options?)` | `title: string` | Bilgi bildirimi |

**Options:**

| Alan | Tip | Default | Aciklama |
|------|-----|---------|----------|
| `description` | `string` | — | Detay metni |
| `duration` | `number` | `5000` | Gorunme suresi (ms) |
| `action` | `{ label, onClick }` | — | Aksiyon butonu |

---

### Tooltip

```tsx
import { Tooltip } from 'cari-ui-kit';

<Tooltip content="Aciklama metni">
  <Button label="Hover et" color="secondary" />
</Tooltip>
```

---

### Typography

```tsx
import { Typography } from 'cari-ui-kit';

<Typography variant="h1">Baslik 1</Typography>
<Typography variant="h2">Baslik 2</Typography>
<Typography variant="paragraph">Normal metin</Typography>
<Typography variant="small">Kucuk metin</Typography>
<Typography variant="caption" weight="medium">Altyazi</Typography>
```

**Variants:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `paragraph`, `small`, `caption`
**Weights:** `light`, `regular`, `medium`, `semibold`, `bold`

---

### FormGroup

Label, input ve hata mesajini gruplayici component.

```tsx
import { FormGroup, Input, Label } from 'cari-ui-kit';

<FormGroup>
  <Label htmlFor="email">E-posta</Label>
  <Input id="email" name="email" placeholder="ornek@mail.com" />
</FormGroup>
```

---

### Grid & Box

Layout yardimci component'leri.

```tsx
import { Grid, Box } from 'cari-ui-kit';

<Grid columns={3} gap={16}>
  <Box>Kolon 1</Box>
  <Box>Kolon 2</Box>
  <Box>Kolon 3</Box>
</Grid>
```

---

### Loader

```tsx
import { Loader } from 'cari-ui-kit';

<Loader />
<Loader size="sm" />
```

---

### DatePicker

```tsx
import { DatePicker } from 'cari-ui-kit';

<DatePicker name="startDate" value={date} onChange={setDate} />
```

---

## Accessibility Hook'lari

### useFocusTrap

Modal veya dropdown gibi component'lerde focus'u sinirlar.

```tsx
import { useFocusTrap } from 'cari-ui-kit';

const { trapRef } = useFocusTrap({
  active: isOpen,
  escapeDeactivates: true,
  onEscape: () => setIsOpen(false),
});

<div ref={trapRef}>
  {/* Focus bu alan icinde kalir */}
</div>
```

### useKeyboardNavigation

Liste/menu icin ok tusu navigasyonu.

```tsx
import { useKeyboardNavigation } from 'cari-ui-kit';

const { containerRef, handleKeyDown } = useKeyboardNavigation({
  orientation: 'vertical',
  loop: true,
  itemSelector: '[role="menuitem"]',
});

<ul ref={containerRef} onKeyDown={handleKeyDown}>
  <li role="menuitem" tabIndex={0}>Oge 1</li>
  <li role="menuitem" tabIndex={0}>Oge 2</li>
</ul>
```

### useAriaAnnounce

Ekran okuyucu bildirimleri.

```tsx
import { useAriaAnnounce } from 'cari-ui-kit';

const { announce } = useAriaAnnounce({ politeness: 'polite' });

// Dinamik icerik degisikliklerinde
announce('3 yeni sonuc bulundu');
```

---

## Tam Ornek Uygulama

```tsx
import 'cari-ui-kit/dist/cari-ui-kit.css';
import {
  Button, Input, Card, Modal, Badge, Alert,
  Table, Tabs, Select, StatCard, Typography,
  ToastProvider, useToast
} from 'cari-ui-kit';
import { useState } from 'react';

function Dashboard() {
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Typography variant="h2">Dashboard</Typography>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <StatCard title="Gelir" value="₺84.200" trend="up" trendValue="+8.2%" />
        <StatCard title="Kullanici" value={342} trend="up" trendValue="+24" />
        <StatCard title="Hata" value={3} trend="down" trendValue="-2" />
      </div>

      <Alert variant="info" title="Hosgeldiniz" message="Yeni dashboard'a hosgeldiniz." />

      <Card>
        <Card.Header>
          <Typography variant="h4">Son Islemler</Typography>
          <Button label="Yeni Ekle" size="sm" color="primary" onClick={() => setModalOpen(true)} />
        </Card.Header>
        <Card.Body>
          <Table
            columns={[
              { key: 'name', header: 'Ad', sortable: true },
              { key: 'amount', header: 'Tutar' },
              { key: 'status', header: 'Durum', render: (v) => (
                <Badge variant={v === 'completed' ? 'success' : 'warning'}>{v}</Badge>
              )},
            ]}
            data={[
              { name: 'Fatura #1042', amount: '₺1.200', status: 'completed' },
              { name: 'Fatura #1043', amount: '₺850', status: 'pending' },
            ]}
            pagination
            pageSize={10}
          />
        </Card.Body>
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="sm">
        <Modal.Header title="Yeni Islem" onClose={() => setModalOpen(false)} />
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Input name="desc" placeholder="Aciklama" />
            <Input name="amount" placeholder="Tutar" type="number" />
            <Select
              name="category"
              options={[
                { value: 'income', label: 'Gelir' },
                { value: 'expense', label: 'Gider' },
              ]}
              placeholder="Kategori secin"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button label="Iptal" color="tertiary" onClick={() => setModalOpen(false)} />
          <Button label="Kaydet" color="primary" onClick={() => {
            toast.success('Kaydedildi');
            setModalOpen(false);
          }} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <div className="scope">
      <ToastProvider>
        <Dashboard />
      </ToastProvider>
    </div>
  );
}
```

---

## Design Token'lari

Tasarim sistemi shadcn v4 (Nova) ile uyumlu OKLCH renk uzayini kullanir.

| Token Grubu | Ornek | Aciklama |
|-------------|-------|----------|
| **Radius** | `--cuk-radius-lg: 10px` | Base radius, diger boyutlar hesaplamali |
| **Spacing** | `--cuk-spacing-4: 16px` | 4px grid sistemi |
| **Shadows** | `--cuk-shadow-md` | OKLCH tabanli golgeler |
| **Colors** | `--cuk-color-primary` | Semantic renk token'lari |
| **Typography** | `--cuk-font-size-sm: 0.875rem` | System font stack |

### Renk Paleti (Aurora Bloom)

- **Primary:** Vivid Violet
- **Success:** Emerald
- **Warning:** Amber
- **Danger:** Coral
- **Info:** Blue-Violet
- **Neutrals:** Mor tonlu gri skalasi
