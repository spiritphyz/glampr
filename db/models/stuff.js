module.exports = function(sequelize, Sequelize) {

  var Stuff = sequelize.define('stuff', {
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
    tags: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return Stuff;
}