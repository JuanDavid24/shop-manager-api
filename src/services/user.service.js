// services
import userModel from '../models/user.model.js'

const getAll = async () =>
  await userModel.getAllUsers();


const getById = async (id) =>
  await userModel.getUserById(id);


const create = async (user) => {
  const id = await userModel.saveUser(user)
  return { id }
}

const deleteUser = async (id) =>
  await userModel.deleteUser(id);

export default { getAll, getById, create, deleteUser };