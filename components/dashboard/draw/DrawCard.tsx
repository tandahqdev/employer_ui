import { GridItem } from '@chakra-ui/react';
import React from 'react';

export const DrawCard = () => {
  return (
    <GridItem
      colSpan={{ base: 1, md: 'auto', lg: 'auto' }}
      minH='598px'
      width={{ base: 'auto', md: '374px', lg: 'auto' }}
      layerStyle='gridItem'
      gridRowStart={{ base: 1, lg: 'auto' }}
    ></GridItem>
  );
};
