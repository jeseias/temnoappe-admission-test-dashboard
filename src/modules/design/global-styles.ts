export const globalStyles = {
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    transition: 'all ease-in-out .25s'
  },
  'html, body': {
    minWidth: '100vw',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden'
  },
  'body, input button': {
    fontFamily: 'Roboto, Open Sans, sans-serif',
    fontWeight: 400
  },
  html: {
    fontSize: '62.5%',
    '@media screen and (max-width: 75.5em)': {
      fontSize: '56.25%'
    },
    '@media screen and (max-width: 56.25em)': {
      fontSize: '50%'
    }
  },
  'body, button, input': {
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
}
