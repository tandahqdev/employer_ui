import Link from 'next/link';
import { ColumnFlex } from '@/components';
import { NewPageProps } from '@/models';
import { newPageItems } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import { NewPageCardItem } from './NewPageCardItem';

interface Props extends NewPageProps {
  path?: string;
  onClick?: () => void;
}

export const NewPageCard = ({ desc, title, path, onClick }: Props) => {
  const renderNewPageItems = newPageItems.map((item) => (
    <NewPageCardItem key={item.id} {...item} />
  ));

  return (
    <GridItem colSpan={2}>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={DEFAULT_STYLES.border}
        rounded={16}
        minH='442px'
        pt='30px'
        pb='40px'
        px='30px'
        w='80%'
      >
        <Text
          textStyle='header'
          fontSize='1.5rem'
        >{`Welcome to Tanda ${title}`}</Text>

        <Text color={DEFAULT_STYLES.primaryColor} opacity={0.4} maxW='600px'>
          {desc}
        </Text>

        {path && (
          <Link
            href={path}
            style={{ marginTop: '20px', alignSelf: 'flex-start' }}
          >
            <Button bg={DEFAULT_STYLES.primaryHeaderColor} onClick={onClick}>
              Get started
            </Button>
          </Link>
        )}

        <Grid
          templateColumns='repeat(3,1fr)'
          width='max-content'
          columnGap='35px'
          mt={!path ? '45px' : '5'}
        >
          {renderNewPageItems}
        </Grid>
      </ColumnFlex>
    </GridItem>
  );
};
