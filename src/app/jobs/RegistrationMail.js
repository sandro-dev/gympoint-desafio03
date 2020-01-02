import { format, addMonths, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Mail from '../../lib/Mail';
import { formatPrice } from '../../util/format';

class RegistryMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { student, plan, start_date } = data;

    console.log('The Queue was executed');

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `Bem vindo a Gympoint!`,
      template: 'registration',
      context: {
        student: student.name,
        plan_title: plan.title,
        price: formatPrice(plan.price),
        start_date: format(parseISO(start_date), "dd' de 'MMMM' de 'yyyy", {
          locale: pt,
        }),
        end_date: format(
          addMonths(parseISO(start_date), plan.duration),
          "dd' de 'MMMM' de 'yyyy",
          { locale: pt }
        ),
      },
    });
  }
}

export default new RegistryMail();
