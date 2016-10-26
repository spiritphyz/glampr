module.exports = function(sequelize, Sequelize) {
  
  var EquipsUsers = sequelize.define('equips_users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });

  return EquipsUsers;
}
