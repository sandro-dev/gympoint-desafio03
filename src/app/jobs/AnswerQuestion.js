import Mail from '../../lib/Mail';

class AnswerQuestion {
  get key() {
    return 'AnswerQuestion';
  }

  async handle({ data }) {
    const { student, question, answer } = data;

    console.log('The Queue for answer question order was executed');

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `Resposta a sua pergunta`,
      template: 'registration',
      context: {
        student,
        question,
        answer,
      },
    });
  }
}

export default new AnswerQuestion();
