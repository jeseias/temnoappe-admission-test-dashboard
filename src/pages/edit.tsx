import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Input, Textarea, Text, Flex } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../modules/context/products'
import { GreenButton } from '../components/green-button'

const Edit: React.FC = () => {
  const { id } = useParams()
  const { getById, deleteProduct, updateProduct } = useProducts()
  const product = getById(id)

  const [values, setValues] = useState({ name: '', image: '', description: '' })

  const navigate = useNavigate()

  const remove = () => {
    deleteProduct(id)
    navigate('/')
  }

  const update = () => {
    updateProduct(id, values)
    navigate('/')
  }

  useEffect(() => {
    // if (!product) {
    //   navigate('/')
    // }
    if (product) {
      setValues({
        name: product.name,
        image: product.image,
        description: product.description
      })
    }
  }, [product])

  return (
    <Box>
      <Heading>Atualizar Produto</Heading>
      <Text fontWeight="bold">#id: {id}</Text>
      <Box minWidth="30rem" w="50%" mt="3rem">
        {product && (
          <>
            <Input
              fontSize="3xl"
              p="2rem"
              value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}
            />
            <Input
              fontSize="3xl"
              p="2rem"
              my="2rem" value={values.image} onChange={e => setValues({ ...values, image: e.target.value })}
            />
            <Textarea
              fontSize="3xl"
              p="2rem"
              value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}
             />
          </>
        )}
        <Flex justifyContent="space-between" mt="3rem">
          <GreenButton onClick={update}>Salvar</GreenButton>
          <Box>
            <Button
              bg="red"
              color="white"
              _hover={{ bg: 'darkred' }}
              onClick={remove}
            >
              Remover
            </Button>
            <Button
              bg="#f2f2f2"
              color="dark"
              _hover={{ bg: '#ccc' }}
              ml="1rem"
              onClick={() => navigate('/')}
            >
              Cancelar
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Edit
