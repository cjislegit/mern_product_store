import { Button, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Box minH={'100vh'}>{/* <Navbar /> */}</Box>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
