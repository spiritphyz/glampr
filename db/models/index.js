// This file makes all join table relationships
var Sequelize = require('sequelize');
var sequelize = new Sequelize('glampr', 'happyglampr', 'glamprabmt', {
  dialect: 'mariadb',
  host: '127.0.0.1'
});

var TripModel = require('./trips.js')(sequelize, Sequelize);
var UserModel = require('./users.js')(sequelize, Sequelize);

var TripsUsersModel = sequelize.define('trips_users', {});

UserModel.belongsToMany(TripModel, {
  through: 'trips_users',
  foreignKey: 'user_id'
});


TripModel.belongsToMany(UserModel, {
  through: 'trips_users',
  foreignKey: 'trip_id'
});

sequelize.sync({force: true})

exports.UserModel = UserModel;
exports.TripModel = TripModel;