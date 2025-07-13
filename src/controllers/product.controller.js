// controller
import productService from "../services/product.service.js";
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    if (products.length === 0)
      return res.status(200).json({ message: "No hay datos disponibles" });
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getById(id);

    if (product.length === 0)
      return res.status(404).json({ message: "No se encontró el producto" });
    res.status(200).json({ message: "Lista de productos", payload: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, color, price, inStock } = req.body;
  try {
    // parametros obligatorios
    if (!name || !price || !inStock) {
      return res
        .status(400)
        .json({ message: "No se enviaron todos los campos necesarios" });
    }
    const product = {
      name,
      price,
      inStock,
      ...(description && { description }),    
      ...(color && { color }),    
    }; // color y description se agregan solo si estan definidos

    const id = await productService.create(product);
    res.status(201).json({
      message: "El producto fue creado correctamente",
      payload: { id },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error de servidor al crear producto",
        error: error.message,
      });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productService.deleteById(id);
    res.status(200).json({ message: "Producto eliminado", payload: { id } });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export default { getProducts, getProductById, createProduct, deleteProduct };
