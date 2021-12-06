import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

export const GreenButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button mt="2rem" bg="green" color="white" _hover={{ bg: 'darkgreen' }} {...rest}>
      {children}
    </Button>
  )
}
