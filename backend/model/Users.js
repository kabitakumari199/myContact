const Sequelize = require('sequelize')
const db = require('../database/DB.js')
module.exports = db.sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
	},
	contact_no: {
		type: Sequelize.INTEGER
	  },
	status: {
		type: Sequelize.INTEGER
	  }
  }
 )