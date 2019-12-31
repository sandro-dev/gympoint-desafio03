import User from '../models/User';

export default async (req, res, next) => {
  const checkIsAdmin = await User.findOne({
    where: { id: req.userId, isadmin: true },
  });

  if (!checkIsAdmin) {
    return res.status(401).json({
      error: 'Sorry, but only administrators can access this content',
    });
  }

  return next();
};
