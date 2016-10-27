module.exports = function(sequelize, Sequelize) {

  var Borrow = sequelize.define('borrows', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    sizing: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    borrow_slot: {
      type: Sequelize.INTEGER
    },
    share_status: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    }
  });

  return Borrow;
}