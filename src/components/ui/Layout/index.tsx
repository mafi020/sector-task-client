import { BrowserRouter as Router } from 'react-router-dom';
import { AppShell, Container, Grid, useMantineTheme } from '@mantine/core';

import { useState } from 'react';
import { Routes } from '../../../Routes';
import { MyHeader } from '../Headers/Header';

export const Layout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const toggleOpenClose = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Router>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        asideOffsetBreakpoint='sm'
        header={<MyHeader />}
      >
        <Container>
          <Routes />
        </Container>
      </AppShell>
    </Router>
  );
};
