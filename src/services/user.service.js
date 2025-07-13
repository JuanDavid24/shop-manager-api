// services
import userModel from '../models/user.model.js'

const getAll = async () => {
  const users = await userModel.getAllUsers()
  return users;
};

const getById = async (id) => {
  const user = await userModel.getUserById(id)
  return user
}

const create = async (user) => {
  const id = await userModel.saveUser(user)
  return { id }
}

const deleteUser = async (id) => 
  await userModel.deleteUser(id);

export default { getAll, getById, create, deleteUser };
