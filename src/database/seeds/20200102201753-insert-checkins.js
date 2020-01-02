module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'checkins',
      [
        {
          student_id: 1,
          created_at: '2019-12-13T07:00:00-03:00',
          updated_at: '2019-12-13T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-20T07:00:00-03:00',
          updated_at: '2019-12-20T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-24T07:00:00-03:00',
          updated_at: '2019-12-24T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-28T07:00:00-03:00',
          updated_at: '2019-12-28T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-29T07:00:00-03:00',
          updated_at: '2019-12-29T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-30T07:00:00-03:00',
          updated_at: '2019-12-30T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2019-12-31T07:00:00-03:00',
          updated_at: '2019-12-31T07:00:00-03:00',
        },
        {
          student_id: 1,
          created_at: '2020-01-01T07:00:00-03:00',
          updated_at: '2020-01-01T07:00:00-03:00',
        },
        {
          student_id: 2,
          created_at: '2019-12-28T16:00:00-03:00',
          updated_at: '2019-12-28T16:00:00-03:00',
        },
        {
          student_id: 2,
          created_at: '2019-12-29T16:00:00-03:00',
          updated_at: '2019-12-29T16:00:00-03:00',
        },
        {
          student_id: 2,
          created_at: '2019-12-30T16:00:00-03:00',
          updated_at: '2019-12-30T16:00:00-03:00',
        },
        {
          student_id: 2,
          created_at: '2019-12-31T16:00:00-03:00',
          updated_at: '2019-12-31T16:00:00-03:00',
        },
        {
          student_id: 2,
          created_at: '2020-01-01T16:00:00-03:00',
          updated_at: '2020-01-01T16:00:00-03:00',
        },
      ],
      {}
    );
  },

  down: () => {},
};
