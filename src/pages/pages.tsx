import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import HomePage from './home'

export default function Pages () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
