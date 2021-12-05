import { Box } from '@chakra-ui/react'
import React from 'react'
import { Header } from './header'

const PageWrapper: React.FC = ({ children }) => {
  return (
    <Box minHeight="100vh" bg="#f4f4f4">
      <Header />
      <Box w="95%" m="5rem auto" bg="white" p="2rem" borderRadius="1rem" border="1px solid #ddd" boxShadow="0 0 2px rgba(0,0,0, 0.2)">
        {children}
      </Box>
    </Box>
  )
}

export default PageWrapper
