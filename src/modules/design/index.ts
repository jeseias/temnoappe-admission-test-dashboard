import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { globalStyles } from './global-styles'

export const theme: ThemeConfig = extendTheme({
  styles: {
    global: globalStyles
  }
})
