import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import HomePage from './home'
import NewPage from './new'
import EditPage from './edit'

export default function Pages () {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  )
}
