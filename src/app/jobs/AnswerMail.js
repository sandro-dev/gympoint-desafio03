import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { student, question, answer } = data;

    console.log('The Queue for answer question order was executed');

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `[RE] ${question}`,
      template: 'answer',
      context: {
        student,
        question,
        answer,
      },
    });
  }
}

export default new AnswerMail();
