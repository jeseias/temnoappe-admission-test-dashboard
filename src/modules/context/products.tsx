import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { api } from '../../services/axios'

interface Product {
  id: string
  name: string
  image: string
  description: string
}

interface AddProduct {
  name: string
  image: string
  description: string
}

interface ProductContextProps {
  products: Product[]
  getById(id: string):Product
  deleteProduct(id: string): void
  addProduct(data: AddProduct): void
  updateProduct(id: string, data: AddProduct): void
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  getById: () => ({} as Product),
  deleteProduct: (id: string) => {},
  addProduct: () => {},
  updateProduct: () => {}
})

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const getById = (id: string) => products.find(product => product.id === id)

  async function fetchProducts () {
    const result = await api.get('/products')
    setProducts(result.data)
  }

  const deleteProduct = async (id: string) => {
    try {
      await api.delete(`/products/${id}`)
      await fetchProducts()
    } catch (error) {
      console.log()
    }
  }

  const addProduct = async (data) => {
    try {
      const result = await api.post('/products', data)
      setProducts([
        ...products,
        result.data
      ])
      return result.data
    } catch (error) {
      console.log(error)
    }
  }

  const updateProduct = async (id: string, data) => {
    try {
      const result = await api.patch(`/products/${id}`, data)
      await fetchProducts()
      console.log(result)
      return result.data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const value = useMemo(() => ({
    products,
    getById,
    deleteProduct,
    addProduct,
    updateProduct
  }), [products])

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
