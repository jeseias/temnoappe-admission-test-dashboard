import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { api } from '../../services/axios'

interface Product {
  id: string
  name: string
  image: string
  description: string
}

interface ProductContextProps {
  products: Product[]
  getById: (id: string) => Product
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  getById: () => ({} as Product)
})

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const getById = (id: string) => products.find(product => product.id === id)

  const value = useMemo(() => ({
    products,
    getById
  }), [products])

  useEffect(() => {
    async function fetchProducts () {
      const result = await api.get('/products')
      setProducts(result.data)
    }

    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
