const express = require('express')
const { add_billing } = require('../connector/add.billing.connector')
const { delete_billing } = require('../connector/delete.billing.connector')
const { get_billing } = require('../connector/get.billing.connector')
const { update_billing } = require('../connector/update.billing.connector')

const powerHack = express.Router()


powerHack.get('/billing-list',  get_billing)
powerHack.post('/add-billing',  add_billing)


powerHack.patch('/update-billing/:id',  update_billing)
powerHack.delete('/delete-billing/:id',  delete_billing)


module.exports = powerHack
