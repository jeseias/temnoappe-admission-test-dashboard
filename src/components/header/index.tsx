import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <Flex as="header" alignItems="center" bg="white" p="2rem 5rem" borderBottom="1px solid #ddd" boxShadow="0 0 2px rgba(0,0,0, 0.2)">
      <MdDashboard size="26px" />
      <Link to="/">
        <Heading color="blue" fontSize="lg" ml="2rem">
          Dashboard
        </Heading>
      </Link>
    </Flex>
  )
}
