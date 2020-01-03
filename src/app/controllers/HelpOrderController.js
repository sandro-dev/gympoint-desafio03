import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const { studentId } = req.params;

    const orders = await HelpOrder.findAll({
      where: { student_id: studentId },
    });
    return res.json(orders);
  }

  async store(req, res) {
    const { studentId } = req.params;
    const { question } = req.body;

    const help = await HelpOrder.create({
      student_id: studentId,
      question,
    });
    return res.json(help);
  }
}

export default new HelpOrderController();
