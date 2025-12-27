import type { Preview } from '@storybook/react-vite';

import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '../src/styles/scope.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },

  decorators: [
    (Story) => (
      <div className="scope">
        <Story />
      </div>
    ),
  ],
};

export default preview;