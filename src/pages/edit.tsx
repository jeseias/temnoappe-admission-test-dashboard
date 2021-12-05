import React from 'react'
import { Box, Button, Heading, Input, Textarea, Text, Flex } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProducts } from '../modules/context/products'
import { GreenButton } from '../components/green-button'

const Edit: React.FC = () => {
  const { id } = useParams()
  const { getById, deleteProduct } = useProducts()
  const { to } = useNavigate()
  const product = getById(id)

  const removeProduct = () => {
    deleteProduct(id)
  }

  return (
    <Box>
      <Heading>Atualizar Produto</Heading>
      <Text fontWeight="bold">#id: {id}</Text>
      <Box minWidth="30rem" w="50%" mt="3rem">
        {product && (
          <>
            <Input fontSize="3xl" p="2rem" value={product.name} />
            <Input fontSize="3xl" p="2rem" my="2rem" value={product.image}/>
            <Textarea fontSize="3xl" p="2rem" value={product.description} />
          </>
        )}
        <Flex justifyContent="space-between" mt="3rem">
          <GreenButton>Salvar</GreenButton>
          <Box>
            <Button bg="red" color="white" _hover={{ bg: 'darkred' }} onClick={removeProduct}>Remover</Button>
            <Button bg="#f2f2f2" color="dark" _hover={{ bg: '#ccc' }} ml="1rem">Cancelar</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Edit
