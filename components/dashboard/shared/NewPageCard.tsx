import { ColumnFlex } from '@/components';
import { NewPageProps } from '@/models';
import { newPageItems } from '@/store';
import { DEFAULT_STYLES } from '@/styles';
import { Button, Grid, GridItem, Text } from '@chakra-ui/react';

interface Props extends NewPageProps {
  showBtn?: boolean;
  onClick?: () => void;
}

export const NewPageCard = ({ desc, title, showBtn, onClick }: Props) => {
  const renderNewPageItems = newPageItems.map((item) => (
    <ColumnFlex
      key={item.id}
      w='196px'
      minH='225px'
      border={DEFAULT_STYLES.border}
      rounded='10px'
      justify='flex-end'
      px='4'
      pb='7'
      gap='1'
    >
      <Text textStyle='title' color={DEFAULT_STYLES.lightPurple}>
        {item.title}
      </Text>

      <Text
        textStyle='desc'
        color={DEFAULT_STYLES.darkGray}
        flex='1'
        maxH='65px'
      >
        {item.desc}
      </Text>
    </ColumnFlex>
  ));

  return (
    <GridItem colSpan={2}>
      <ColumnFlex
        bg={DEFAULT_STYLES.white}
        border={DEFAULT_STYLES.border}
        rounded={16}
        minH='442px'
        pt='30px'
        pb='50px'
        px='40px'
        w='80%'
        alignItems='flex-start'
      >
        <Text
          textStyle='header'
          fontSize='1.5rem'
        >{`Welcome to Tanda ${title}`}</Text>

        <Text color={DEFAULT_STYLES.primaryColor} opacity={0.4} maxW='600px'>
          {desc}
        </Text>

        {showBtn && (
          <Button bg={DEFAULT_STYLES.primaryHeaderColor} onClick={onClick}>
            Get started
          </Button>
        )}

        <Grid
          templateColumns='repeat(3,1fr)'
          width='max-content'
          columnGap='35px'
          mt={!showBtn ? '45px' : '5'}
        >
          {renderNewPageItems}
        </Grid>
      </ColumnFlex>
    </GridItem>
  );
};
