import React, { createContext, useContext, useMemo, useState } from 'react'

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
  const [products] = useState<Product[]>([
    {
      id: 'asdasdas',
      name: 'TV LG 55 polegadas',
      image: 'https://images-submarino.b2w.io/produtos/01/00/img/3397039/7/3397039703_1GG.jpg',
      description: 'Produto super incrivel manos'
    }
  ])

  const getById = (id: string) => products.find(product => product.id === id)

  const value = useMemo(() => ({
    products,
    getById
  }), [products])

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
