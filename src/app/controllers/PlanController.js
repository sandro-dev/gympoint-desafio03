import Plan from '../models/Plan';
import User from '../models/User';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
    });

    return res.json(plans);
  }

  async store(req, res) {
    const { title, duration, price } = req.body;

    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, isadmin: true },
    });

    if (!checkIsAdmin) {
      return res.status(401).json({ error: 'Only Admins can create a plan' });
    }

    const plan = await Plan.create({
      title,
      duration,
      price,
    });

    return res.json(plan);
  }

  async update(req, res) {
    const { planId } = req.params;

    const { title, duration, price } = req.body;

    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, isadmin: true },
    });

    if (!checkIsAdmin) {
      return res.status(401).json({ error: 'Only Admins can update a plan' });
    }

    const plan = await Plan.findByPk(planId);

    plan.title = title;
    plan.duration = duration;
    plan.price = price;
    plan.save();

    return res.json(plan);
  }

  async delete(req, res) {
    const { planId } = req.params;

    const checkIsAdmin = await User.findOne({
      where: { id: req.userId, isadmin: true },
    });

    if (!checkIsAdmin) {
      return res.status(401).json({ error: 'Only Admins can delete a plan' });
    }

    const plan = await Plan.findByPk(planId);
    plan.destroy();

    return res.json({
      ok: true,
      message: `The plan ${plan.title} was successfully deleted`,
    });
  }
}

export default new PlanController();
