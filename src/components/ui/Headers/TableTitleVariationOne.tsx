import { createStyles, Grid, Group, Title } from '@mantine/core';
import { memo } from 'react';

interface TableTileProps {
  children: JSX.Element;
  title: string;
}

const useStyle = createStyles({
  tableTitle: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

export const TableTitleVariationOne = memo(
  ({ title, children }: TableTileProps) => {
    // console.log('TABLE TITLE');
    const { classes } = useStyle();
    return (
      <Grid className={classes.tableTitle}>
        <Grid.Col span={4}>
          <Title>{title}</Title>
        </Grid.Col>
        <Grid.Col span={4} offset={4}>
          <Group position='right'>{children}</Group>
        </Grid.Col>
      </Grid>
    );
  }
);
