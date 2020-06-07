import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async function auth(request, response) {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
    const { id } = user;
    const isMatch = await User.comparePasswords(password, user.password);

    if (!user || !isMatch) {
      console.log('Password not match');
      return response.status(401).json({ error: 'User / Password not valid.' });
    }
    return response.json({
      token: jwt.sign({ userId: id }, '123', { expiresIn: '1d' }),
    });
  } catch (error) {
    return response.status(500).json(error.message);
  }
}
