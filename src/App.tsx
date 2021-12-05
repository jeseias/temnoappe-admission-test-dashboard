import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import PageWrapper from './components/page-wrapper'
import { theme } from './modules/design'
import Pages from './pages/pages'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './modules/context/products'

export default function App () {
  return (
    <ProductProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <PageWrapper>
            <Pages />
          </PageWrapper>
        </ChakraProvider>
      </BrowserRouter>
    </ProductProvider>
  )
}
