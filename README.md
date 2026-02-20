# cari-ui-kit

Shadcn v4 (Nova) ile uyumlu, OKLCH renk uzayinda tasarlanmis modern React UI component kutuphanesi. TypeScript, Vite ve Sass ile insa edilmistir.

[![npm version](https://img.shields.io/npm/v/cari-ui-kit.svg)](https://www.npmjs.com/package/cari-ui-kit)
[![license](https://img.shields.io/npm/l/cari-ui-kit.svg)](LICENSE)

---

## Kurulum

```bash
npm install cari-ui-kit
# veya
yarn add cari-ui-kit
```

### Peer Dependencies

```bash
npm install react react-dom classnames react-select apexcharts react-apexcharts
```

## Hizli Baslangic

```tsx
// 1. CSS import (main.tsx veya App.tsx)
import 'cari-ui-kit/dist/cari-ui-kit.css';

// 2. Component'leri kullanin
import { Button, Input, Card, ToastProvider, useToast } from 'cari-ui-kit';

function App() {
  return (
    <div className="scope">
      <ToastProvider>
        <MyPage />
      </ToastProvider>
    </div>
  );
}

function MyPage() {
  const toast = useToast();

  return (
    <Card>
      <Card.Header>
        <h3>Merhaba</h3>
      </Card.Header>
      <Card.Body>
        <Input name="email" placeholder="E-posta" />
      </Card.Body>
      <Card.Footer>
        <Button
          label="Kaydet"
          color="primary"
          onClick={() => toast.success('Kaydedildi!')}
        />
      </Card.Footer>
    </Card>
  );
}
```

> **Not:** `.scope` class'i component'lerin dogru stil almasi icin gereklidir.

## Dark Mode

```tsx
// Aktif
document.documentElement.setAttribute('data-theme', 'dark');

// Pasif
document.documentElement.removeAttribute('data-theme');
```

## Component'ler

### Form

| Component | Aciklama |
|-----------|----------|
| **Button** | 8 renk varyanti, 4 boyut (xs/sm/md/lg), loading state, icon destegi |
| **Input** | Prefix/suffix slot, hata durumu, loading state |
| **Textarea** | Cok satirli input, otomatik yeniden boyutlandirma |
| **Select** | react-select tabanli, tekli/coklu secim, arama destegi |
| **Checkbox** | Etiketli boolean input |
| **Switch** | Toggle switch, etiket destegi |
| **DatePicker** | Tarih secici |
| **SearchInput** | Arama odakli input |
| **FormGroup** | Label + input gruplama |
| **Label** | Bagimsiz etiket |

### Veri Gosterimi

| Component | Aciklama |
|-----------|----------|
| **Table** | Siralama, filtreleme, sayfalama; sunucu/istemci tarafli |
| **Card** | Compound: `Card.Header`, `Card.Body`, `Card.Footer` |
| **StatCard** | Istatistik karti — trend gostergesi, ikon |
| **Badge** | 5 varyant, dot gostergesi, kaldirilabilir |
| **Typography** | h1-h6, paragraph, small, caption |
| **Charts** | ApexCharts entegrasyonu |
| **Tooltip** | Hover aciklama |
| **Loader** | Yukleniyor gostergesi |

### Geri Bildirim

| Component | Aciklama |
|-----------|----------|
| **Toast** | Provider/hook deseni, 4 varyant, aksiyon butonu, otomatik kapatma |
| **Alert** | info/success/warning/danger, kapatilabilir |
| **Modal** | Portal tabanli, focus trap, ESC/backdrop kapatma |

### Layout

| Component | Aciklama |
|-----------|----------|
| **Grid** | CSS Grid wrapper |
| **Box** | Genel amacli container |
| **Layout** | Sayfa iskelet yapisi |

### Dekoratif

| Component | Aciklama |
|-----------|----------|
| **BrandContent** | Marka icerigi |
| **CompassAnimation** | Animasyonlu pusula |
| **Icons** | SVG ikon seti |

## Ornek Kullanimlar

### Button Varyantlari

```tsx
<Button label="Onayla" color="primary" />
<Button label="Iptal" color="tertiary" />
<Button label="Sil" color="error" />
<Button label="Yukle" color="primary" prefix={<UploadIcon />} isLoading />
<Button label="Kucuk" size="xs" color="secondary" />
```

### Tablo

```tsx
<Table
  columns={[
    { key: 'name', header: 'Ad', sortable: true },
    { key: 'role', header: 'Rol' },
    { key: 'status', header: 'Durum', render: (v) => (
      <Badge variant={v === 'active' ? 'success' : 'danger'}>{v}</Badge>
    )},
  ]}
  data={users}
  filterable
  pagination
  pageSize={10}
/>
```

### Modal

```tsx
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} size="sm">
  <Modal.Header title="Onayla" onClose={() => setOpen(false)} />
  <Modal.Body>Emin misiniz?</Modal.Body>
  <Modal.Footer>
    <Button label="Iptal" color="tertiary" onClick={() => setOpen(false)} />
    <Button label="Evet" color="primary" onClick={handleConfirm} />
  </Modal.Footer>
</Modal>
```

### Toast

```tsx
const toast = useToast();

toast.success('Basarili', { description: 'Kayit olusturuldu.' });
toast.error('Hata', { description: 'Bir sorun olustu.', duration: 8000 });
toast.warning('Uyari', {
  action: { label: 'Geri Al', onClick: handleUndo }
});
```

### StatCard

```tsx
<StatCard
  title="Toplam Gelir"
  value="$128.430"
  trend="up"
  trendValue="+12.5%"
  icon={<TrendUpIcon />}
/>
```

## Accessibility

Yerlesik erisilebilirlik hook'lari:

```tsx
import { useFocusTrap, useKeyboardNavigation, useAriaAnnounce } from 'cari-ui-kit';

// Modal/dropdown icin focus sinirlandirma
const { trapRef } = useFocusTrap({ active: isOpen, onEscape: close });

// Liste/menu ok tusu navigasyonu
const { containerRef, handleKeyDown } = useKeyboardNavigation({
  orientation: 'vertical',
  loop: true,
});

// Ekran okuyucu bildirimi
const { announce } = useAriaAnnounce();
announce('3 sonuc bulundu');
```

## Design Token'lari

Shadcn v4 uyumlu, OKLCH tabanli token sistemi:

| Kategori | Token Ornegi | Deger |
|----------|-------------|-------|
| Radius | `--cuk-radius-lg` | 10px (base) |
| Spacing | `--cuk-spacing-4` | 16px |
| Shadow | `--cuk-shadow-md` | OKLCH golge |
| Primary | `--cuk-color-primary` | Vivid Violet |
| Danger | `--cuk-color-danger` | Coral |
| Focus Ring | `--cuk-color-focus-ring` | Primary %50 opacity |

**Renk Paleti (Aurora Bloom):** Vivid Violet primary, Emerald success, Amber warning, Coral danger, Blue-Violet info, mor tonlu neutral skalasi.

## Gelistirme

```bash
git clone https://github.com/OguzhanArslan/ui-kit.git
cd ui-kit
yarn install

# Storybook
yarn storybook

# Build
yarn build

# Test
yarn test
```

## Lisans

[MIT](LICENSE)
