# Cari UI Kit

A modern, customizable React UI component library built with **TypeScript**, **Vite**, and **Sass**. Designed to provide a consistent and robust design system for your applications.

## � Installation

Install the library using your preferred package manager:

```bash
npm install cari-ui-kit
# or
yarn add cari-ui-kit
# or
pnpm add cari-ui-kit
```

## � Usage

### 1. Import Styles

Import the global CSS file at the root of your application (e.g., in `main.tsx` or `App.tsx`) to ensure proper styling:

```tsx
import 'cari-ui-kit/styles.css';
```

### 2. Import and Use Components

You can import components directly from the package:

```tsx
import { Button, Input, Typography, Select } from 'cari-ui-kit';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h1">Welcome to Cari UI</Typography>
      
      <div style={{ margin: '20px 0' }}>
        <Input 
          label="Email Address" 
          placeholder="Enter your email" 
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <Select
          label="Choose a role"
          options={[
            { value: 'admin', label: 'Admin' },
            { value: 'user', label: 'User' },
          ]}
        />
      </div>

      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Submit
      </Button>
    </div>
  );
}
```

## 🧱 Available Components

The library includes a comprehensive set of typed React components:

| Component | Description |
| :--- | :--- |
| `Button` | Interactive buttons with multiple variants. |
| `Input` | Text input fields with label support. |
| `Select` | Dropdown selection component. |
| `Checkbox` | Boolean selection input. |
| `Typography` | Text components for consistent headings and body text. |
| `Icons` | A set of SVG icons (e.g., `IconHome`, `IconUser`). |
| `Loader` | Loading spinners and indicators. |
| `FormGroup` | Wrapper for grouping form elements. |
| `Label` | Standalone label component. |
| `TextArea` | Multi-line text input. |
| `Sidebar` | Navigation sidebar component. |

## 🎨 Foundation & Tokens

You can also access the design tokens directly if you need to build custom components that match the system:

```tsx
import { colors, weight } from 'cari-ui-kit';

const myStyle = {
  color: colors.primary,
  fontWeight: weight.bold
};
```

---

## 🛠 Local Development & Contributing

If you want to contribute to the library or run it locally:

1.  **Clone the repo:**
    ```bash
    git clone <repository-url>
    cd ui-kit
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Start Storybook:**
    This is the best way to develop and test components in isolation.
    ```bash
    yarn storybook
    ```

4.  **Build the Library:**
    To generate the `dist` folder:
    ```bash
    yarn build:lib
    ```

## 📄 License

[MIT](LICENSE)
