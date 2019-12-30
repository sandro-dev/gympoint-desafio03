module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'registrations',
      [
        {
          student_id: 1,
          plan_id: 2,
          start_date: '2020-01-15T10:00:00-03:00',
          end_date: '2020-02-15T10:00:00-03:00',
          price: 129,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 2,
          plan_id: 2,
          start_date: '2020-01-22T10:00:00-03:00',
          end_date: '2020-04-22T10:00:00-03:00',
          price: 109 * 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 3,
          plan_id: 3,
          start_date: '2020-01-25T10:00:00-03:00',
          end_date: '2020-07-25T10:00:00-03:00',
          price: 89 * 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
