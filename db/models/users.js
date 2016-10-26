module.exports = function(sequelize, Sequelize) {
  var UserModel = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    phone_number: {
      type: Sequelize.STRING
    },
    invite_status: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });

  return UserModel;
}