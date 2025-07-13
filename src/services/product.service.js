// services
import deleteProduct from '../models/product.model.js'

const getAll = async () => 
  await deleteProduct.getAllProducts();

const getById = async (id) => 
  await deleteProduct.getProductById(id);

const create = async (product) => 
  await deleteProduct.saveProduct(product);

const deleteById = async (id) => 
  await deleteProduct.deleteProduct(id);

export default { getAll, getById, create, deleteById };