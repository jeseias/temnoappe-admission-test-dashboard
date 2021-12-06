import React from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import { Product } from '../components/product'
import { Link } from 'react-router-dom'
import { useProducts } from '../modules/context/products'
import { GreenButton } from '../components/green-button'

const Home: React.FC = () => {
  const { products } = useProducts()

  return (
    <Box>
      <Heading>Produtos</Heading>
      <Text>Clique em um produto para edita-lo</Text>
      <Box mt="3rem" borderRadius="1rem">
        <Grid
          gridTemplateColumns="10rem 30rem 1fr"
          color="#222"
          letterSpacing="1px"
          fontSize="1rem"
          textTransform="uppercase"
          p="1rem 2rem"
          bg="#f2f2f2"
          borderBottom="1px solid #ccc"
        >
          <Text>Imagen</Text>
          <Text>Nome</Text>
          <Text>Descrição</Text>
        </Grid>
        <Grid>
          {products.map(product => (
            <Product key={uuid()} {...product} />
          ))}
        </Grid>
      </Box>
      <Link to="/new">
        <GreenButton>Novo Produto</GreenButton>
      </Link>
    </Box>
  )
}

export default Home
