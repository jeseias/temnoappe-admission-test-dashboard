import React, { createContext, useMemo, useState, useEffect } from 'react'
import { api } from '../../../services/axios'
import { AddProduct, ProductProps, ProductContextProps } from './product-context.types'

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  getById: () => ({} as ProductProps),
  deleteProduct: (id: string) => {},
  addProduct: () => {},
  updateProduct: () => {}
})

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const getById = (id: string) => products.find<ProductProps>(product => product.id === id)

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

  const addProduct = async (data: AddProduct) => {
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

  const updateProduct = async (id: string, data: AddProduct) => {
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
