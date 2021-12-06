import { ChakraProvider } from '@chakra-ui/react'
import __userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/products'
import { theme } from './design'
import { render as __render } from '@testing-library/react'

export const render = (Component: ReactElement) => {
  return __render(
    <BrowserRouter>
      <ProductProvider>
        <ChakraProvider theme={theme}>
          {Component}
        </ChakraProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export { screen } from '@testing-library/react'
export const userEvent = __userEvent
