import { Box, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
