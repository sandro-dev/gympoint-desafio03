import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
// import AnswerQuestion from '../jobs/AnswerQuestion';
import RegistrationMail from '../jobs/RegistrationMail';

class AnswerOrderController {
  async index(req, res) {
    const orders = await HelpOrder.findAll({
      where: { answer_at: null },
    });
    return res.json(orders);
  }

  async store(req, res) {
    const { helpId } = req.params;
    const { answer } = req.body;

    const help = await HelpOrder.findOne({
      where: { id: helpId },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });
    help.answer = answer;
    help.answer_at = new Date();
    help.save();

    await Queue.add(RegistrationMail.key, {
      student: 'Sandro',
      plan: 'Gold',
      start_date: '2020-01-06T12:00:00.000Z',
    });

    return res.json({
      ok: true,
      message: 'The question was successfully answered',
    });
  }
}

export default new AnswerOrderController();
