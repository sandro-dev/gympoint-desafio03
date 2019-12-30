import * as Yup from 'yup';
import Student from '../models/Student';
import User from '../models/User';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .positive()
        .integer()
        .required(),
      weight: Yup.number()
        .round()
        .moreThan(30)
        .required(),
      height: Yup.number()
        .moreThan(1)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'validation fails on insert student' });
    }

    const { email } = req.body;

    const studentExists = await Student.findOne({ where: { email } });

    if (studentExists) {
      return res.status(400).json({ error: 'Student is already registered' });
    }

    const user = await User.findByPk(req.userId);

    if (!user.isadmin) {
      return res
        .status(401)
        .json({ error: 'User does not have permission to register a student' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number()
        .positive()
        .integer(),
      weight: Yup.number()
        .round()
        .moreThan(30),
      height: Yup.number().moreThan(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (email) {
      if (email !== student.email) {
        const StudentExists = await User.findOne({ where: { email } });

        if (StudentExists) {
          return res.status(400).json({ error: 'This email already exists.' });
        }
      }
    }

    const { id, name } = await student.update(req.body);

    return res.json({ id, name, email });
  }
}

export default new StudentController();
