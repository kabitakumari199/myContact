const Sequelize = require('sequelize')
const db = require('../database/DB.js')
module.exports = db.sequelize.define(
  'mycontacts',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type:Sequelize.INTEGER
    },
    name: {
      type:Sequelize.STRING
    },
    contact_no: {
      type:Sequelize.STRING
    },
    email_id: {
      type:Sequelize.STRING
	},
	profile_name: {
		type:Sequelize.STRING
	  },
	contact_type: {
		type:Sequelize.STRING
	  }
  }
 )