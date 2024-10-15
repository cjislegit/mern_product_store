import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const ProductsCard = ({ product }) => {
  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3s'
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w='full'
        objectFit='cover'
      />
    </Box>
  );
};

export default ProductsCard;
