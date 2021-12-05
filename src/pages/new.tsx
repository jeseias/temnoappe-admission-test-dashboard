import React from 'react'
import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react'

const New: React.FC = () => {
  return (
    <Box>
      <Heading>Cadastrar novo Producto</Heading>
      <Box minWidth="30rem" my="3rem" w="50%">
        <Input fontSize="3xl" p="2rem" />
        <Input fontSize="3xl" p="2rem" my="2rem"/>
        <Textarea fontSize="3xl" p="2rem" />
      </Box>
      <Button bg="green" color="white" _hover={{ bg: 'darkgreen' }}>Salvar</Button>
    </Box>
  )
}

export default New
