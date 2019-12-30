const records = [{ email: 'admin@gympoint.com', isAdmin: true }];

module.exports = {
  up(queryInterface) {
    const promises = records.map(r =>
      queryInterface.sequelize.query(
        ` UPDATE users
          SET isAdmin = :isAdmin
          WHERE email = :email
        `,
        {
          replacements: r,
        }
      )
    );

    return Promise.all(promises);
  },
};
