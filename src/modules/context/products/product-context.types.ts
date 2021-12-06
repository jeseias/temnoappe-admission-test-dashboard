export interface ProductProps {
  id: string
  name: string
  image: string
  description: string
}

export interface AddProduct {
  name: string
  image: string
  description: string
}

export interface ProductContextProps {
  products: ProductProps[]
  getById(id: string): ProductProps
  deleteProduct(id: string): void
  addProduct(data: AddProduct): void
  updateProduct(id: string, data: AddProduct): void
}
