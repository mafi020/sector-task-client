import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Layout } from '../Layout';

function Theme() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },
        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: '2rem' },
          },
        },
      }}
    >
      <Notifications position='top-right' zIndex={2077} />
      <Layout />
    </MantineProvider>
  );
}

export default Theme;
