import User from '../models/User';

export async function userListAll(request, response) {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return response.json(users);
}

export async function userCreate(request, response) {
  const { name, email, password } = request.body;
  try {
    const user = await User.create({ name, email, password });
    delete user.dataValues.password;
    return response.status(201).json(user);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}

export async function userUpdate(request, response) {
  return response.json({ response: true });
}
