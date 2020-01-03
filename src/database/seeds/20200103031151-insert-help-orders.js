module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'help-orders',
      [
        {
          student_id: 1,
          question: 'O que são exercícios anaeróbicos?',
          created_at: '2019-12-13T07:00:00-03:00',
          updated_at: '2019-12-13T07:00:00-03:00',
        },
        {
          student_id: 1,
          question: 'Consigo emagrecer caminhando?',
          created_at: '2019-12-20T07:00:00-03:00',
          updated_at: '2019-12-20T07:00:00-03:00',
        },
        {
          student_id: 2,
          question: 'Qual é a melhor forma de perder a barriga?',
          created_at: '2019-12-28T16:00:00-03:00',
          updated_at: '2019-12-28T16:00:00-03:00',
        },
        {
          student_id: 1,
          question: 'Quando devo alongar?',
          created_at: '2019-12-24T07:00:00-03:00',
          updated_at: '2019-12-24T07:00:00-03:00',
        },
        {
          student_id: 1,
          question: 'Exercícios de prancha são eficientes?',
          created_at: '2019-12-28T07:00:00-03:00',
          updated_at: '2019-12-28T07:00:00-03:00',
        },
        {
          student_id: 2,
          question: 'Posso emagrecer 3 quilos em uma semana?',
          created_at: '2019-12-29T16:00:00-03:00',
          updated_at: '2019-12-29T16:00:00-03:00',
        },
        {
          student_id: 3,
          question: 'Por que ficamos mais cansados no verão?',
          created_at: '2020-01-01T07:00:00-03:00',
          updated_at: '2020-01-01T07:00:00-03:00',
        },
      ],
      {}
    );
  },

  down: () => {},
};
