// This file makes all join table relationships
var Sequelize = require('sequelize');
var sequelize = new Sequelize('glampr', 'happyglampr', 'glamprabmt', {
  dialect: 'mariadb',
  host: '127.0.0.1'
});

// Any vairable that starts with a capital letter is a model
var Trip = require('./trips.js')(sequelize, Sequelize);
var User = require('./users.js')(sequelize, Sequelize);
var Stuff = require('./stuff.js')(sequelize, Sequelize);

var TripsUsers = require('./tripsUsers.js')(sequelize, Sequelize);
var Terms = require('./terms.js')(sequelize, Sequelize);
var Images = require('./images.js')(sequelize, Sequelize);
var StuffUsers = require('./stuffUsers')(sequelize, Sequelize);

// TripsUsers join table:
User.belongsToMany(Trip, {
  through: 'trips_users',
  foreignKey: 'user_id'
});

Trip.belongsToMany(User, {
  through: 'trips_users',
  foreignKey: 'trip_id'
});

// Terms join table:
User.belongsToMany(Trip, {
  through: 'terms',
  foreignKey: 'user_id'
});

Trip.belongsToMany(User, {
  through: 'terms',
  foreignKey: 'trip_id'
});

// Images join table:
User.belongsToMany(Trip, {
  through: 'images',
  foreignKey: 'user_id'
});

Trip.belongsToMany(User, {
  through: 'images',
  foreignKey: 'trip_id'
});

User.belongsToMany(Stuff, {
  through: 'images',
  foreignKey: 'user_id'
});

Stuff.belongsToMany(User, {
  through: 'images',
  foreignKey: 'stuff_id'
});

Trip.belongsToMany(Stuff, {
  through: 'images',
  foreignKey: 'trip_id'
});

Stuff.belongsToMany(Trip, {
  through: 'images',
  foreignKey: 'stuff_id'
});

// Stuff join table:
User.belongsToMany(Trip, {
  through: 'stuff',
  foreignKey: 'user_id'
});

Trip.belongsToMany(User, {
  through: 'stuff',
  foreignKey: 'trip_id'
});

// StuffUsers join table:
User.belongsToMany(Stuff, {
  through: 'stuff_users',
  foreignKey: 'user_id'
});

Stuff.belongsToMany(User, {
  through: 'stuff_users',
  foreignKey: 'stuff_id'
});

sequelize.sync({force: true})

exports.User = User;
exports.Trip = Trip;
exports.Stuff = Stuff;

exports.TripsUsers = TripsUsers;
exports.Terms = Terms;
exports.Images = Images;
exports.StuffUsers = StuffUsers;








