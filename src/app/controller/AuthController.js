import User from '../models/User';

export default async function auth(request, response) {
  const { email, password } = request.body;
  const user = await User.findOne({
    where: { email },
  });
  const isMatch = await User.comparePasswords(password, user.password);
  if (isMatch) {
    console.log('Password is match');
  }
  if (!isMatch) {
    console.log('Password not match');
  }
  return response.json(password);
}
