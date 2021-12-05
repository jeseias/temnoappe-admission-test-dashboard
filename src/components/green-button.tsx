import React from 'react'
import { Button } from '@chakra-ui/react'

export const GreenButton: React.FC = ({ children }) => {
  return (
    <Button mt="2rem" bg="green" color="white" _hover={{ bg: 'darkgreen' }}>
      {children}
    </Button>
  )
}
