import User from '../models/User';

export async function userIndex(req, res) {
  const users = await User.findAll();
  return res.json(users);
}
export async function userStore(req, res) {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  return res.json(user);
}
