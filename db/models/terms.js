module.exports = function(sequelize, Sequelize) {  

  var Term = sequelize.define('terms', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    category: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  });

  return Term
}