import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
import AnswerMail from '../jobs/AnswerMail';

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

    await Queue.add(AnswerMail.key, {
      student: help.student,
      question: help.question,
      answer: help.answer,
    });

    return res.json({
      ok: true,
      message: 'The question was successfully answered',
    });
  }
}

export default new AnswerOrderController();
