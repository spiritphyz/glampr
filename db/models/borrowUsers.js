module.exports = function(sequelize, Sequelize) {
  
  var BorrowUsers = sequelize.define('borrows_users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });

  return BorrowUsers;
}
