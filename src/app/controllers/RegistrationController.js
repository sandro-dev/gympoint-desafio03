import { addMonths, isBefore, parseISO } from 'date-fns';
import Registration from '../models/Registration';
import Plan from '../models/Plan';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: [
        'id',
        'student_id',
        'plan_id',
        'start_date',
        'end_date',
        'price',
      ],
      order: ['id'],
    });

    return res.json(registrations);
  }

  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    /**
     * Check for past dates
     */
    const formattedDate = parseISO(start_date);

    if (isBefore(formattedDate, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const plan = await Plan.findByPk(plan_id);

    const previousRegistration = await Registration.findOne({
      where: { student_id },
    });

    if (previousRegistration) {
      return res
        .status(400)
        .json({ error: 'The student is already registered in another plan' });
    }

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date: addMonths(formattedDate, plan.duration),
      price: plan.price * plan.duration,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const { plan_id, start_date } = req.body;
    const { registrationId } = req.params;

    /**
     * Check for past dates
     */
    const formattedDate = parseISO(start_date);

    if (isBefore(formattedDate, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    /**
     * Verify actual data of the plan
     */

    const plan = await Plan.findOne({
      where: { id: plan_id },
    });

    const registration = await Registration.findOne({
      where: { id: registrationId },
      attributes: [
        'id',
        'student_id',
        'plan_id',
        'start_date',
        'end_date',
        'price',
      ],
    });

    registration.plan_id = plan_id;
    registration.start_date = start_date;
    registration.end_date = addMonths(parseISO(start_date), plan.duration);
    registration.price = plan.price * plan.duration;

    registration.save();

    return res.json(registration);
  }

  async delete(req, res) {
    const { registrationId } = req.params;

    const registration = await Registration.findByPk(registrationId);
    registration.destroy();

    return res.json({ error: 'The registration was successfully deleted' });
  }
}

export default new RegistrationController();
