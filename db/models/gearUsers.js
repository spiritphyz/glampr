module.exports = function(sequelize, Sequelize) {

  var RequiredUsers = sequelize.define('gear_users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return RequiredUsers;
}
