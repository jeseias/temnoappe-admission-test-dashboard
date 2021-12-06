import React from 'react'
import { Image, Text, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface ProductProps {
  id: string
  name: string
  image: string
  description: string
}

export const Product = ({ id, name, image, description }: ProductProps) => {
  const navigate = useNavigate()
  return (
    <Grid
      gridTemplateColumns="10rem 30rem 1fr"
      alignItems="center"
      p="1rem"
      w="100%"
      fontSize="1rem"
      gap=".5rem"
      transition="all ease-in-out .25s"
      _even={{ bg: '#f2f2f2' }}
      _hover={{ bg: '#f2f2f2' }}
      cursor="pointer"
      onClick={() => navigate(`/edit/${id}`)}
    >
      <Image src={image} />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Grid>
  )
}
