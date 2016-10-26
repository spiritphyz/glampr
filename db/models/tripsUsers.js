module.exports = function(sequelize, Sequelize) {

  var TripsUsers = sequelize.define('trips_users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  return TripsUsers;
}
