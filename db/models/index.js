// This file makes all join table relationships
var Sequelize = require('sequelize');
var sequelize = new Sequelize('glampr', 'happyglampr', 'glamprabmt', {
  dialect: 'mariadb',
  host: '127.0.0.1'
});

// Any vairable that starts with a capital letter is a model
var Trip = require('./trips.js')(sequelize, Sequelize);
var User = require('./users.js')(sequelize, Sequelize);
var Term = require('./terms.js')(sequelize, Sequelize);
var Gear = require('./gear.js')(sequelize, Sequelize);
// var Borrow = require('./borrow.js')(sequelize, Sequelize);

var TripsUsers = require('./tripsUsers.js')(sequelize, Sequelize);
var GearUsers = require('./gearUsers')(sequelize, Sequelize);
// var BorrowUsers = require('./borrowUsers')(sequelize, Sequelize);

// TripsUsers join table:
User.belongsToMany(Trip, {
  through: 'trips_users',
  foreignKey: 'user_id'
});

Trip.belongsToMany(User, {
  through: 'trips_users',
  foreignKey: 'trip_id'
});

// Terms connections:
Trip.hasMany(Term, {
  foreignKey: 'trip_id'
});

Term.belongsTo(Trip, {
  foreignKey:'trip_id'
});

// BorrowUsers join table:
// User.belongsToMany(Borrow, {
//   through: 'borrow_users',
//   foreignKey: 'user_id'
// });

// Borrow.belongsToMany(User, {
//   through: 'borrow_users',
//   foreignKey: 'borrow_id'
// });

// Required to trips connection:
Gear.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Trip.hasMany(Gear, {
  foreignKey: 'trip_id'
});

// RequiredUsers join table connections:
Gear.belongsToMany(User, {
  through: 'gear_users',
  foreignKey: 'gear_id'
});

User.belongsToMany(Gear, {
  through: 'gear_users',
  foreignKey: 'user_id'
});


// sequelize.sync({force: true});
sequelize.sync();

exports.Trip = Trip;
exports.User = User;
exports.Term = Term;
exports.Gear = Gear;
// exports.Borrow = Borrow;

exports.TripsUsers = TripsUsers;
exports.GearUsers = GearUsers;
// exports.BorrowUsers = BorrowUsers;








