import {
  Container,
  Heading,
  useColorModeValue,
  VStack,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';

function CartPage() {
  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2x1'} textAlign={'center'} mb={8}>
          Smart Cart
        </Heading>
        {/* <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          rounded={'lg'}
          shadow={'md'}
        ></Box> */}
        <TableContainer bg={useColorModeValue('white', 'gray.800')}>
          <Table variant={'simple'}>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Smart Watch</Td>
                <Td>$500</Td>
                <Td>
                  <MdDelete />
                </Td>
              </Tr>
              <Tr>
                <Td>Smart Watch</Td>
                <Td>$500</Td>
                <Td>
                  <MdDelete />
                </Td>
              </Tr>
              <Tr>
                <Td>Smart Watch</Td>
                <Td>$500</Td>
                <Td>
                  <MdDelete />
                </Td>
              </Tr>
              <Tr>
                <Td>Total:</Td>
                <Td>$1500</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  );
}

export default CartPage;
