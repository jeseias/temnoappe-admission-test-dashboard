import { useContext } from 'react'
import { ProductContext } from '../context/products'

export const useProducts = () => useContext(ProductContext)
