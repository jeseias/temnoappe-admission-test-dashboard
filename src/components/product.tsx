import React from 'react'
import { Image, Text, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ProductProps {
  id: string
  name: string
  image: string
  description: string
}

export const Product = ({ id, name, image, description }: ProductProps) => {
  return (
    <Link to={`/edit/${id}`}>
      <Grid
        gridTemplateColumns="10rem 30rem 1fr"
        alignItems="center"
        p="1rem"
        w="100%"
        fontSize="1rem"
        gap=".5rem"
        _even={{ bg: '#f2f2f2' }}
        cursor="pointer"
        transition="all ease-in-out .25s"
        _hover={{ bg: '#f1f1f1' }}
      >
        <Image src={image} />
        <Text>{name}</Text>
        <Text>{description}</Text>
      </Grid>
    </Link>
  )
}
