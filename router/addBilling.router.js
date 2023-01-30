const express = require('express')
const { add_billing } = require('../connector/add.billing.connector')
const { delete_billing } = require('../connector/delete.billing.connector')
const { get_billing } = require('../connector/get.billing.connector')
const { update_billing } = require('../connector/update.billing.connector')
const verifiedToken = require('../middleware/verifiedToken')

const powerHack = express.Router()


powerHack.get('/billing-list',verifiedToken,  get_billing)
powerHack.post('/add-billing',verifiedToken,  add_billing)


powerHack.patch('/update-billing/:id',verifiedToken,  update_billing)
powerHack.delete('/delete-billing/:id',verifiedToken,  delete_billing)


module.exports = powerHack
