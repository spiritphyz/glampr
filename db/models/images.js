module.exports = function(sequelize, Sequelize) {
  
  var Image = sequelize.define('image', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    url_small_size: {
      type: Sequelize.TEXT
    },
    url_big_size: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.STRING
    },
    width: {
      type: Sequelize.INTEGER
    },
    height: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    }
  });

  return Image;
}
