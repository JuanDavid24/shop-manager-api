// services
import productModel from '../models/product.model.js'

const getAll = async () => 
  await productModel.getAllProducts();

const getById = async (id) => 
  await productModel.getProductById(id);

const create = async (product) => 
  await productModel.saveProduct(product);

const deleteById = async (id) => 
  await productModel.deleteProduct(id);

export default { getAll, getById, create, deleteById };