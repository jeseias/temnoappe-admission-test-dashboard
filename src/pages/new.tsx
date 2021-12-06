import React from 'react'
import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../modules/hooks/use-products'

interface AddProduct {
  name: string
  image: string
  description: string
}

const New: React.FC = () => {
  const { register, handleSubmit } = useForm<AddProduct>()
  const { addProduct } = useProducts()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<AddProduct> = (data) => {
    addProduct(data)
    navigate('/')
  }
  return (
    <Box>
      <Heading>Cadastrar novo Producto</Heading>
      <Box minWidth="30rem" mt="3rem" w="50%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input fontSize="3xl" p="2rem" placeholder="Nome:" {...register('name')} />
          <Input fontSize="3xl" p="2rem" my="2rem" placeholder="Image:" {...register('image')}/>
          <Textarea fontSize="3xl" p="2rem" placeholder="Descrição:" {...register('description')}/>
          <Button bg="green" color="white" _hover={{ bg: 'darkgreen' }} mt="3rem" type="submit">Salvar</Button>
        </form>
      </Box>
    </Box>
  )
}

export default New
