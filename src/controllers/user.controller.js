// controller
import userService from "../services/user.service.js";
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    if (users.length === 0)
      return res.status(200).json({ message: "No hay datos disponibles" });
    res.status(200).json({ message: "Lista de usuarios", payload: users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getById(id);
    if (!user)
      return res.status(404).json({ message: "No se encontró el usuario" });
    res.status(200).json({ message: "Lista de usuarios", payload: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "No se enviaron todos los campos necesarios" });
    }
    const data = await userService.create({ name, email });
    res.status(201).json({
      message: "El usuario fue creado correctamente",
      payload: data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error de servidor al crear usuario: " + error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.deleteUser(id);
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export default { getUsers, getUserById, createUser, deleteUser };
