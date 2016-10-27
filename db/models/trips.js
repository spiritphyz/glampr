module.exports = function(sequelize, Sequelize) {

  var Trip = sequelize.define('trips', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    start_date: {
      type: Sequelize.DATE
    },
    end_date: {
      type: Sequelize.DATE
    },
    address: {
      type: Sequelize.STRING
    },
    google_maps_url: {
      type: Sequelize.TEXT
    },
    cost_per_member: {
      type: Sequelize.DECIMAL
    },
    cost_deadline: {
      type: Sequelize.DATE
    },
    tags: {
      type: Sequelize.STRING
    }
  });

  return Trip;
}





