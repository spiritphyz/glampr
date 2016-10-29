module.exports = function(sequelize, Sequelize) {

  var Required = sequelize.define('gear', {
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
    icon_pic: {
      type: Sequelize.STRING
    },
    required: {
      type: Sequelize.INTEGER      
    },
    tags: {
      type: Sequelize.STRING
    }
  });

  return Required;
}