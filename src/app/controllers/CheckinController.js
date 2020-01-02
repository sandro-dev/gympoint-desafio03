import { Op } from 'sequelize';
import { subDays } from 'date-fns';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { studentId } = req.params;

    const checkins = await Checkin.findAll({
      where: { student_id: studentId },
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });
    return res.json(checkins);
  }

  async store(req, res) {
    const { studentId } = req.params;

    const verifyCheckins = await Checkin.findAll({
      where: {
        student_id: studentId,
        created_at: {
          [Op.between]: [subDays(new Date(), 7), new Date()],
        },
      },
    });

    if (verifyCheckins.length >= 5) {
      return res.status(400).json({
        error:
          'The student is trying to cross limit of check-ins permitted in a week',
      });
    }

    const checkin = await Checkin.create({
      student_id: studentId,
    });
    return res.json(checkin);
  }
}

export default new CheckinController();
