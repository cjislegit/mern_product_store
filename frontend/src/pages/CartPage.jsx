import {
  Container,
  Heading,
  useColorModeValue,
  VStack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
} from '@chakra-ui/react';
import { MdDelete, MdShoppingCartCheckout } from 'react-icons/md';
import { useCartStore } from '../store/cart';

function CartPage() {
  const { cart } = useCartStore();

  let totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  console.log(totalPrice);

  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2x1'} textAlign={'center'} mb={8}>
          Smart Cart
        </Heading>
        <TableContainer
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          rounded={'lg'}
          shadow={'md'}
        >
          <Table variant={'simple'}>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((product) => (
                <Tr key={product._id}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>
                    <MdDelete />
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td>Total:</Td>
                <Td>{totalPrice}</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <IconButton
          alignSelf='flex-end'
          icon={<MdShoppingCartCheckout />}
          colorScheme='green'
          px={8}
          aria-label='Checkout Now'
        />
      </VStack>
    </Container>
  );
}

export default CartPage;
