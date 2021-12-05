import { ChakraProvider } from '@chakra-ui/react'
import PageWrapper from './components/page-wrapper'
import { theme } from './modules/design'
import Pages from './pages/pages'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <PageWrapper>
        <Pages /> 
      </PageWrapper>
    </ChakraProvider>
  )
}
